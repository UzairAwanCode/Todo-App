import SafeAreaWrapper from "@/components/shared/safe-area-wrapper"
import { AuthScreenNavigationType } from "@/navigation/types"
import { useNavigation } from "@react-navigation/native"
import { Button } from "react-native"
import { Box, Text } from "utils/theme"

const WelcomeScreen = () => {
    const navigation = useNavigation<AuthScreenNavigationType<"Welcome">>()

    const navigateToSignInScreen = () => {
        navigation.navigate("SignIn")

    }

    const navigateToSignUpScreen = () => {
        navigation.navigate("SignUp")
    }

    return (
        <SafeAreaWrapper>
            <Box>
                <Text>Welcome Screen</Text>
                <Button title="SignIn" onPress={navigateToSignInScreen} />
                <Button title="SignUp" onPress={navigateToSignUpScreen} />
            </Box>
        </SafeAreaWrapper>
    )
}

export default WelcomeScreen