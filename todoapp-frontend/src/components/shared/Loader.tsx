import { Box } from "utils/theme"
import SafeAreaWrapper from "./safe-area-wrapper"
import { ActivityIndicator } from "react-native"

const Loader = ()=>{
    return(
        <SafeAreaWrapper>
            <Box>
                <ActivityIndicator/>
            </Box>
        </SafeAreaWrapper>
    )
}

export default Loader