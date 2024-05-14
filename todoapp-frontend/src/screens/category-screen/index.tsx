import Loader from "@/components/shared/Loader"
import NavigateBack from "@/components/shared/navigate-back"
import SafeAreaWrapper from "@/components/shared/safe-area-wrapper"
import TaskActions from "@/components/tasks/task-actions"
import { CategoriesStackParamList } from "@/navigation/types"
import { fetcher } from "@/services/config"
import { RouteProp, useRoute } from "@react-navigation/native"
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

    const { data, isLoading: isLoadingTasks } = useSWR(`tasks/tasks-by-categories/${id}`, fetcher)

    if (isLoadingTasks || isLoadingCategory || !category) {
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
                    <Text variant="textXl" fontWeight="700" ml="3" style={{color:category.color.code}}>{category.icon.symbol}</Text>
                </Box>
                <Box height={16} />
                <TaskActions categoryId={id}/>
            </Box>
        </SafeAreaWrapper>
    )
}

export default CategoryScreen