import SafeAreaWrapper from "@/components/shared/safe-area-wrapper"
import { AuthScreenNavigationType } from "@/navigation/types"
import { useNavigation } from "@react-navigation/native"
import { Button } from "react-native"
import { Box, Text } from "utils/theme"

const SignUpScreen = () => {
    const navigation = useNavigation<AuthScreenNavigationType<"SignUp">>()
    const navigateToSignUpScreen = () => {
        navigation.navigate("SignIn")
    }
    return (
        <SafeAreaWrapper>
            <Box>
                <Text>Sign in screen</Text>
                <Button title="Navigate to sign in" onPress={navigateToSignUpScreen} />
            </Box>
        </SafeAreaWrapper>
    )
}

export default SignUpScreen