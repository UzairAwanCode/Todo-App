import Loader from "@/components/shared/Loader"
import NavigateBack from "@/components/shared/navigate-back"
import SafeAreaWrapper from "@/components/shared/safe-area-wrapper"
import Task from "@/components/tasks/task"
import TaskActions from "@/components/tasks/task-actions"
import { CategoriesStackParamList } from "@/navigation/types"
import { fetcher } from "@/services/config"
import { RouteProp, useRoute } from "@react-navigation/native"
import { FlatList } from "react-native"
import useSWR from "swr"
import { Box, Text } from "utils/theme"

type CategoryScreenRouteProp = RouteProp<CategoriesStackParamList, "Category">
const CategoryScreen = () => {
    const route = useRoute<CategoryScreenRouteProp>()
    const { id } = route.params

    const { data: category, isLoading: isLoadingCategory } = useSWR<ICategory>(
        `categories/${id}`,
        fetcher
    )

    const { data: tasks, isLoading: isLoadingTasks, mutate: mutateTasks, } = useSWR<ITask[]>(`tasks/tasks-by-categories/${id}`, fetcher, { refreshInterval: 1000 })

    if (isLoadingTasks || isLoadingCategory || !category || !tasks) {
        return <Loader />
    }

    return (
        <SafeAreaWrapper>
            <Box flex={1} mx="4">
                <Box width={40}>
                    <NavigateBack />
                </Box>

                <Box height={16} />
    
                <Box flexDirection="row">
                    <Text variant="textXl" fontWeight="700">{category.name}</Text>
                    <Text variant="textXl" fontWeight="700" ml="3" style={{ color: category.color.code }}>{category.icon.symbol}</Text>
                </Box>

                <Box height={16} />

                <TaskActions categoryId={id} />

                <Box height={16} />
                
                <FlatList
                    data={tasks}
                    renderItem={({ item, index }) => {
                        return <Task task={item} mutateTasks={mutateTasks}/>
                    }}
                    ItemSeparatorComponent={() => <Box height={14} />}
                />
            </Box>
        </SafeAreaWrapper>
    )
}

export default CategoryScreen