import { useState } from "react"
import { TextInput } from "react-native"
import { Box, Text } from "utils/theme"

type TaskActionsProps = {
    categoryId : string
}

const todayISODate = new Date().toISOString()

const TaskActions = ({categoryId} : TaskActionsProps)=>{

    const [newTask, setNewTask] = useState<ITaskRequest>({
        categoryId: categoryId,
        date: todayISODate,
        isCompleted: false,
        name: ""
    })
    
    return(
        <Box bg="lightGray" px="4" py="3.5" borderRadius="rounded-5xl">
            <TextInput
                placeholder="Create New Task"
                style={{
                    paddingVertical: 8,
                    paddingHorizontal: 8,
                    fontSize:16,
                    width: "50%"
                }}
                maxLength={36}
                textAlignVertical="center"
                value={newTask.name}
                onChangeText={(text)=>{
                    setNewTask((prev)=>{
                        return{
                            ...prev,
                            name: text
                        }
                    })
                }}
            />
        </Box>
    )
}

export default TaskActions