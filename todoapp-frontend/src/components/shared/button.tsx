import { Pressable } from "react-native"
import { Box, Text } from "utils/theme"

type ButtonProps = {
    label: string,
    onPress: ()=> void,
    onLongPress?: ()=> void,
    disabled?: boolean,
    uppercase?: boolean,
}

const Button = ({label, onPress, onLongPress, disabled, uppercase}:ButtonProps) => {
    return (
       <Pressable onPress={onPress} onLongPress={onLongPress} disabled={disabled}>
        <Box bg={disabled ? "gray800": "primary"} py="3.5" borderRadius="rounded-7xl">
            <Text variant="textXs" color="white" textAlign="center" fontWeight="700" textTransform={uppercase? "uppercase" : "none"}>{label}</Text>
        </Box>
       </Pressable>
    )
}

export default Button