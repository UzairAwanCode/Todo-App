import Button from "@/components/shared/button"
import NavigateBack from "@/components/shared/navigate-back"
import SafeAreaWrapper from "@/components/shared/safe-area-wrapper"
import { CategoriesStackParamList } from "@/navigation/types"
import axiosInstance, { BASE_URL } from "@/services/config"
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native"
import { useState } from "react"
import { Pressable, TextInput } from "react-native"
import { useSWRConfig } from "swr"
import useSWRMutation from "swr/mutation"
import { getColors, getIcons } from "utils/helpers"
import { Box, Text } from "utils/theme"

const COLORS = getColors()
const ICONS = getIcons()
const DEFAULT_COLOR = COLORS[0]
const DEFAULT_ICON = ICONS[0]
const createCategoryRequest = async(url: string, {arg}: {arg: ICategoryRequest})=>{
    try {
        await axiosInstance.post(url, {...arg})
    } catch (error) {
        console.log('Error in createCategoryRequest', error);
    }
}

type CreateCategoryRouteType = RouteProp<CategoriesStackParamList, "CreateCategory">

const CreateCategoryScreen = () => {
    const {trigger, isMutating} = useSWRMutation("categories/create",createCategoryRequest)
    const {mutate} = useSWRConfig()
    const navigation = useNavigation()
    const route = useRoute<CreateCategoryRouteType>()

    const [newCategory, setNewCategory] = useState<Omit<ICategory, "_id" | "user"| "isEditable">>({
        name: "",
        color: DEFAULT_COLOR,
        icon: DEFAULT_ICON,
    })

    const updateColor = (color: IColor) => {
        setNewCategory(perv => {
            return {
                ...perv,
                color
            }
        })
    }

    const updateIcons = (icon: IIcon) => {
        setNewCategory(perv => {
            return {
                ...perv,
                icon
            }
        })
    }

    const createNewCategory = async()=>{
        try {
            trigger({...newCategory})
            await mutate(BASE_URL, "categories")
            navigation.goBack()
        } catch (error) {
            
        }
    }
    
    return (
        <SafeAreaWrapper>
            <Box flex={1} mx="4">
                <Box height={16} />
                <Box flexDirection="row" justifyContent="space-between" alignItems="center">
                    <NavigateBack />
                </Box>

                <Box height={16} />
                <Box bg="gray250" borderRadius="rounded-2xl">
                    <TextInput
                        style={{ fontSize: 20, padding: 16, lineHeight: 26 }}
                        maxLength={36}
                        placeholder="Create new list"
                        onChangeText={(text) => setNewCategory(perv => {
                            return {
                                ...perv,
                                name: text,
                            }
                        })}
                    />
                </Box>

                <Box height={24} />
                <Box bg="gray250" p="4" borderRadius="rounded-2xl">
                    <Box bg="white" width={80} p="2" mb="4" borderRadius="rounded-2xl" alignItems="center">
                        <Text fontWeight="600" variant="textBase" color={newCategory.color.name as any}>Colors</Text>
                    </Box>
                    <Box flexDirection="row" justifyContent="space-evenly">
                        {
                            COLORS.map((_color) => {
                                return (
                                    <Pressable key={_color.id} onPress={() => updateColor(_color)}>
                                        <Box
                                            style={{ backgroundColor: _color.code }}
                                            width={24}
                                            height={24}
                                            borderRadius="rounded-2xl"
                                        >
                                        </Box>
                                    </Pressable>
                                )
                            })
                        }
                    </Box>
                </Box>

                <Box height={24} />
                <Box bg="gray250" p="4" borderRadius="rounded-2xl">
                    <Box bg="white" width={60} p="2" mb="4" borderRadius="rounded-2xl" alignItems="center">
                        <Text fontWeight="600" variant="textBase" color={newCategory.color.name as any}>{newCategory.icon.symbol}</Text>
                    </Box>
                    <Box flexDirection="row" justifyContent="space-evenly">
                        {
                            ICONS.map((icon) => {
                                return (
                                    <Pressable key={icon.id} onPress={() => updateIcons(icon)}>
                                        <Box
                                            width={24}
                                            height={24}
                                            borderRadius="rounded-2xl"
                                        >
                                            <Text>{icon.symbol}</Text>
                                        </Box>
                                    </Pressable>
                                )
                            })
                        }
                    </Box>
                </Box>

                <Box position="absolute" bottom={30} left={0} right={0}>
                    <Button label="Create New Category" onPress={createNewCategory}/>
                </Box>
            </Box>
        </SafeAreaWrapper>
    )
}

export default CreateCategoryScreen