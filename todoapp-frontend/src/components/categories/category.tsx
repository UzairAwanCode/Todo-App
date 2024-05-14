import { CategoriesNavigationType } from "@/navigation/types"
import { Entypo } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import { Pressable } from "react-native"
import { Box, Text } from "utils/theme"

type CategoryProps = {
    category: ICategory
}

const Category = ({ category }: CategoryProps) => {
    const navigation = useNavigation<CategoriesNavigationType>()
    const navigateToCreateCategory = () => {
        navigation.navigate("CreateCategory", { category: category })
    }


    const navigateToCategoryScreen = ()=>{
        navigation.navigate("Category", {id: category._id})
    }
    return (
        <Pressable onPress={navigateToCategoryScreen}>
            <Box bg="lightGray" p="4" borderRadius="rounded-5xl">
                <Box flexDirection="row" justifyContent="space-between" alignItems="center">
                    <Box flexDirection="row">
                        <Text variant="textBase" fontWeight="600" mr="3">{category.icon.symbol}</Text>
                        <Text variant="textBase" fontWeight="600">{category.name}</Text>
                    </Box>
                    <Pressable onPress={navigateToCreateCategory}>
                        <Entypo name="dots-three-vertical" size={16} />
                    </Pressable>
                </Box>
            </Box>
        </Pressable>
    )
}

export default Category