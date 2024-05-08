import Button from "@/components/shared/button"
import Input from "@/components/shared/input"
import SafeAreaWrapper from "@/components/shared/safe-area-wrapper"
import { AuthScreenNavigationType } from "@/navigation/types"
import { useNavigation } from "@react-navigation/native"
import { Pressable } from "react-native"
import { Box, Text } from "utils/theme"

const SignUpScreen = () => {
    const navigation = useNavigation<AuthScreenNavigationType<"SignUp">>()
    const navigateToSignInScreen = () => {
        navigation.navigate("SignIn")
    }
    return (
        <SafeAreaWrapper>
            <Box flex={1} px="5.5" mt={"13"}>
                <Text variant="textXl" fontWeight="700">Welcome to Todo App!</Text>
                <Text variant="textXl" fontWeight="700" mb="6">Your journey starts here</Text>

                <Input label="Name"/>
                <Box mb="6"/>
                <Input label="Email"/>
                <Box mb="6"/>
                <Input label="Password"/>
                <Box mt="5.5"/>
                <Pressable onPress={navigateToSignInScreen}>
                    <Text color="primary" textAlign="right">Log in?</Text>
                </Pressable>
                <Box mb="5.5"/>
                <Button label="Register" onPress={navigateToSignInScreen} uppercase />
            </Box>
        </SafeAreaWrapper>
    )
}

export default SignUpScreen