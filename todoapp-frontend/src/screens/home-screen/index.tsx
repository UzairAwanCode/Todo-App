import SafeAreaWrapper from "@/components/shared/safe-area-wrapper"
import { fetcher } from "@/services/config"
import useSWR from "swr"
import { Box, Text } from "utils/theme"

const HomeScreen = () => {
    const {data, isLoading} = useSWR("categories", fetcher) 
    console.log(`data`, JSON.stringify(data, null, 2));
    
    return (
        <SafeAreaWrapper>
            <Box>
                <Text>Home screen</Text>
            </Box>
        </SafeAreaWrapper>
    )
}

export default HomeScreen