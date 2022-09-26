import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from './screens/Home'
import Details from './screens/Details'
import Scheduling from './screens/Scheduling'
import SchedulingDetails from './screens/SchedulingDetails'
import SchedulingSucess from './screens/SchedulingSucess'

const Stack = createNativeStackNavigator();

export function Routes() {
    return (
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
            <Stack.Screen name='Details' component={Details} options={{ headerShown: false }} />
            <Stack.Screen name='Scheduling' component={Scheduling} options={{ headerShown: false }} />
            <Stack.Screen name='SchedulingDetails' component={SchedulingDetails} options={{ headerShown: false }} />
            <Stack.Screen name='SchedulingSucess' component={SchedulingSucess} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default function App() {
    return (
        <NavigationContainer >
            <Routes />
        </NavigationContainer>
    )


}