import { View, Text, Pressable } from 'react-native'

const HomeScreen = ({navigation}) => {
    return(
        <View>
            <Pressable style={null} onPress={() => navigation.navigate('AddMemoryScreen')}>
                <Text>AddMemoryScreen</Text>
            </Pressable>
        </View>
    )
}

export default HomeScreen