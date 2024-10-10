import { useState } from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import Memory from '../class_memory/Memory'

const AddMemoryScreen = () => {

    const [memory] = useState(new Memory())
    const [title, setTitle] = useState("")
    const [date] = useState(new Date())
    const [place, setPlace] = useState("")
    const [description, setDescription] = useState("")
    const [uri, setUri] = useState("")
    
    const addMemory = () => {
        memory.title = title
        memory.date = date
        memory.place = place
        memory.description = description
        memory.uri = uri
    }

    return(
        <View>
            <Text>wTaa</Text>
        </View>
    )
}

export default AddMemoryScreen