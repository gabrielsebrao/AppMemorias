
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screen_home/HomeScreen'
import AddMemoryScreen from './screen_add_memory/AddMemoryScreen'

const Stack = createNativeStackNavigator()

function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />    
        <Stack.Screen name="AddMemoryScreen" component={AddMemoryScreen} />    
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App