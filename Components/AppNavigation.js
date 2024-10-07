import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './HomePage'
import WelcomePage from './WelcomePage'
import LoginPage from './LoginPage';
import useAuth from '../hooks/useAuth';
import SignUpPage from './SignUpPage';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
    const {user} = useAuth()
    if(user){
        return(
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Home'>
                    <Stack.Screen name="Home" options={{headerShown: false}} component={HomePage}/>
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
    else{
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Welcome'>
                    <Stack.Screen name="Login" options={{headerShown: false}} component={LoginPage}/>
                    <Stack.Screen name="Welcome" options={{headerShown: false}} component={WelcomePage}/>
                    <Stack.Screen name="SignUp" options={{headerShown: false}} component={SignUpPage}/>

                </Stack.Navigator>
            </NavigationContainer>
        )
    }

}