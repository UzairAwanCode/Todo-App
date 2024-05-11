import { Ionicons } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import { useTheme } from "@shopify/restyle"
import { Pressable } from "react-native"
import { Box, Text, Theme } from "utils/theme"

const NavigateBack = ()=>{
    const navigation = useNavigation()
    const theme = useTheme<Theme>()
    const navigateBack = ()=>{
        navigation.goBack()
    }
    return(
        <Pressable onPress={navigateBack}>
            <Box bg="gray100" p="2" borderRadius="rounded-7xl">
                <Ionicons name="chevron-back" size={24} color={theme.colors.gray9}/>
            </Box>
        </Pressable>
    )
}

export default NavigateBack