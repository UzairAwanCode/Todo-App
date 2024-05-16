import { format, isToday } from "date-fns"
import { useState } from "react"
import { FlatList, Pressable, TextInput } from "react-native"
import useSWR, { useSWRConfig } from "swr"
import { Box, Text } from "utils/theme"
import Loader from "../shared/Loader"
import axiosInstance, { fetcher } from "@/services/config"
import { Calendar } from "react-native-calendars"
import useSWRMutation from "swr/dist/mutation"

type TaskActionsProps = {
    categoryId: string
}

export const todayISODate = new Date("2024-05-15").toISOString()
export const today = new Date()
const createTaskRequest = async (url: string, { arg }: { arg: ITaskRequest }) => {
    try {
        await axiosInstance.post(url, { ...arg })
    } catch (error) {
        console.log("Error in createTaskRequest");
        throw error
    }
}


const TaskActions = ({ categoryId }: TaskActionsProps) => {

    const [newTask, setNewTask] = useState<ITaskRequest>({
        categoryId: categoryId,
        date: todayISODate,
        isCompleted: false,
        name: ""
    })
    const [isSelectingCategory, setIsSelectingCategory] = useState<boolean>(false)
    const [isSelectingDate, setIsSelectingDate] = useState<boolean>(false)
    const { data: categories, isLoading } = useSWR<ICategory[]>("categories", fetcher)
    const { data, trigger } = useSWRMutation("tasks/create", createTaskRequest)
    const { mutate } = useSWRConfig()
    if (isLoading || !categories) {
        return <Loader />
    }
    const selectedCategory = categories?.find((_category) => _category._id === newTask.categoryId)
    const onCreateTask = async () => {
        try {
            if (newTask.name.length.toString().trim().length > 0) {
                await trigger({ ...newTask })
                setNewTask({
                    categoryId: newTask.categoryId,
                    isCompleted: false,
                    date: todayISODate,
                    name: ""
                })
                await mutate({ ...newTask })
            }
        } catch (error) {
            console.log("Error in onCreateTask");
            throw error
        }
    }

    return (
        <Box>
            <Box bg="lightGray" px="4" py="3.5" borderRadius="rounded-5xl" flexDirection="row" position="relative">
                <TextInput
                    placeholder="Create New Task"
                    style={{
                        paddingVertical: 8,
                        paddingHorizontal: 8,
                        fontSize: 16,
                        width: "50%"
                    }}
                    maxLength={36}
                    textAlignVertical="center"
                    value={newTask.name}
                    onChangeText={(text) => {
                        setNewTask((prev) => {
                            return {
                                ...prev,
                                name: text
                            }
                        })
                    }}
                    onSubmitEditing={onCreateTask}
                />
                <Box flexDirection="row" alignItems="center">
                    <Pressable onPress={() => { setIsSelectingDate((prev) => !prev) }}>
                        <Box flexDirection="row" alignItems="center" bg="white" p="2" borderRadius="rounded-xl">
                            <Text>
                                {isToday(new Date(newTask.date)) ? "Today" : format(new Date(newTask.date), "MMM dd")}
                            </Text>
                        </Box>
                    </Pressable>
                    <Box width={12} />
                    <Pressable onPress={() => { setIsSelectingCategory((prev) => !prev) }}>
                        <Box flexDirection="row" alignItems="center" bg="white" p="2" borderRadius="rounded-xl">
                            <Box mr="1" width={12} height={12} borderRadius="rounded" borderWidth={2} style={{ borderColor: selectedCategory?.color.code }}>
                            </Box>
                            <Text style={{ color: selectedCategory?.color.code }}>{selectedCategory?.name}</Text>
                        </Box>
                    </Pressable>
                </Box>
                {
                    isSelectingCategory && (
                        <Box position="absolute" right={40} bottom={-120}>
                            <FlatList
                                data={categories}
                                renderItem={({ item, index }) => {
                                    return (
                                        <Pressable onPress={() => {
                                            setNewTask((prev) => {
                                                return {
                                                    ...prev,
                                                    categoryId: item._id
                                                }
                                            })
                                            setIsSelectingCategory(false)
                                        }}>
                                            <Box
                                                bg="gray250"
                                                p="2"
                                                borderTopStartRadius={index === 0 ? "rounded-3xl" : "none"}
                                                borderTopEndRadius={index === 0 ? "rounded-3xl" : "none"}
                                                borderBottomStartRadius={categories?.length - 1 === index ? "rounded-2xl" : "none"}
                                                borderBottomEndRadius={categories?.length - 1 === index ? "rounded-2xl" : "none"}
                                            >
                                                <Box flexDirection="row">
                                                    <Text>{item.icon.symbol}</Text>
                                                    <Text ml="2" fontWeight={newTask.categoryId === item._id ? "700" : "400"}>{item.name}</Text>
                                                </Box>
                                            </Box>
                                        </Pressable>
                                    )
                                }}
                            />
                        </Box>
                    )
                }

            </Box>
            {
                isSelectingDate && <Calendar
                    minDate={format(today, "y-MM-dd")}
                    onDayPress={(day) => {
                        setIsSelectingDate(false)
                        const selectedDate = new Date(day.dateString).toISOString()
                        setNewTask((prev) => {
                            return {
                                ...prev,
                                date: selectedDate
                            }
                        })
                    }}
                />
            }
        </Box>
    )
}

export default TaskActions