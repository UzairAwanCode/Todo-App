import axiosInstance from "@/services/config"
import { Ionicons } from "@expo/vector-icons"
import { Pressable } from "react-native"
import useSWRMutation from "swr/dist/mutation"
import { Box, Text } from "utils/theme"

type TaskProps = {
    task: ITask
}

interface ITaskStatusRequest{
    id: string,
    isCompleted: boolean
}

const toogleTaskStatusRequest = async(url:string, {arg}: {arg:ITaskStatusRequest})=>{
    try {
        await axiosInstance.put(url + '/' + arg.id, {...arg})
    } catch (error) {
        console.log("Error in toogleTaskStatusRequest");
        throw error
    }
}
const Task = ({ task }: TaskProps) => {
    const {trigger} = useSWRMutation("tasks/update", toogleTaskStatusRequest)
    const toogleTaskStatus = async()=>{
        try {
            const _updateTask = {
                id: task._id,
                isCompleted: !task.isCompleted
            }
            await trigger(_updateTask)
        } catch (error) {
            
        }
    }
    return (
        <Pressable onPress={()=>{toogleTaskStatus}}>
            <Box>
                <Box p="4" bg="lightGray" borderRadius="rounded-5xl" flexDirection="row">
                    <Box height={26} width={26} bg={task.isCompleted ? "gray9":"gray300"} borderRadius="rounded-xl" alignItems="center" justifyContent="center">
                        <Ionicons name="checkmark" size={20} color="white" />
                    </Box>
                    <Text ml="3" variant="textXl">{task.name}</Text>
                </Box>
                <Box></Box>
            </Box>
        </Pressable>
    )
}

export default Task