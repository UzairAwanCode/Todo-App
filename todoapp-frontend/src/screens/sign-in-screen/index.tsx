import SafeAreaWrapper from "@/components/shared/safe-area-wrapper"
import { AuthScreenNavigationType } from "@/navigation/types"
import { useNavigation } from "@react-navigation/native"
import { Button } from "react-native"
import { Box, Text } from "utils/theme"

const SignInScreen = () => {
    const navigation = useNavigation<AuthScreenNavigationType<"SignIn">>()
    const navigateToSignInScreen = () => {
        navigation.navigate("SignUp")
    }
    return (
        <SafeAreaWrapper>
            <Box>
                <Text>Sign in screen</Text>
                <Button title="Navigate to sign up" onPress={navigateToSignInScreen} />
            </Box>
        </SafeAreaWrapper>
    )
}

export default SignInScreen