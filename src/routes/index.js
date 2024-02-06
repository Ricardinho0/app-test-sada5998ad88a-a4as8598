import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home';
import { FontAwesome5 } from '@expo/vector-icons';
import { Theme } from '../theme';
import ProductsScreen from '../screens/products';
import StackRouter from './stack.routes';
import useAuth from '../context/auth';
import LoginScreen from '../screens/auth/login';
import { createStackNavigator } from '@react-navigation/stack';


export default function Routes() {
    const { isAuthenticated } = useAuth();
    console.log(isAuthenticated)
    if (isAuthenticated) {
        return (
            <NavigationContainer>
                <StackRouter />
            </NavigationContainer>
        );
    }

    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="login" component={LoginScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );

}