import NavigateBack from "@/components/shared/navigate-back"
import SafeAreaWrapper from "@/components/shared/safe-area-wrapper"
import Task from "@/components/tasks/task"
import { fetcher } from "@/services/config"
import { Box, Text } from "utils/theme"
import React from "react"
import { FlatList } from "react-native"
import useSWR from "swr"
import Loader from "@/components/shared/Loader"

const TodayScreen = () => {
    const {
        data: tasks,
        isLoading: isLoadingTasks,
        mutate: mutateTasks,
    } = useSWR<ITask[]>(`tasks/today`, fetcher)
    console.log(tasks?.length);
    
    if (isLoadingTasks || !tasks) {
        return <Loader />
    }

    return (
        <SafeAreaWrapper>
            <Box flex={1} mx="4">
                <Box width={40}>
                    <NavigateBack/>
                </Box>
                <Box height={16} />
                <Box flexDirection="row">
                    <Text variant="textXl" fontWeight="700" ml="3">
                        Today
                    </Text>
                </Box>
                <Box height={16} />

                <FlatList
                    data={tasks}
                    renderItem={({ item, index }) => {
                        return <Task task={item} mutateTasks={mutateTasks} />
                    }}
                    ItemSeparatorComponent={() => <Box height={14} />}
                    keyExtractor={(item) => item._id}
                />
            </Box>
        </SafeAreaWrapper>
    )
}

export default TodayScreen