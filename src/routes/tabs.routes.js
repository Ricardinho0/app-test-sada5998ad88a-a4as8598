import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home';
import { Feather, FontAwesome6, MaterialCommunityIcons } from '@expo/vector-icons';
import { Theme } from '../theme';
import ProductsScreen from '../screens/products';
import BarcodeScreen from '../screens/barcode';
import SalesScreen from '../screens/sales';
import SettingsScreen from '../screens/settings';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
    return (
            <Tab.Navigator screenOptions={{ headerShown: false }}>
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => <Feather name="home" color={color} size={size}/>,
                        title: 'Inicio',
                        tabBarActiveTintColor: Theme.primary,
                        headerTintColor: Theme.grey[500]
                    }}
                />
                <Tab.Screen
                    name="Products"
                    component={ProductsScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => <Feather name="search" color={color} size={size}/>,
                        title: 'Buscar produtos',
                        tabBarActiveTintColor: Theme.primary,
                        headerTintColor: Theme.grey[500]
                    }}
                />
                <Tab.Screen
                    name="barcode"
                    component={BarcodeScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => <FontAwesome6 name="barcode" color={color} size={size}/>,
                        title: 'Ver preço',
                        tabBarActiveTintColor: Theme.primary,
                        headerTintColor: Theme.grey[500]
                    }}
                />
                <Tab.Screen
                    name="sales"
                    component={SalesScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="file-sync-outline" color={color} size={size}/>,
                        title: 'Gerenciar vendas',
                        tabBarActiveTintColor: Theme.primary,
                        headerTintColor: Theme.grey[500]
                    }}
                />
                <Tab.Screen
                    name="settings"
                    component={SettingsScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => <Feather name="settings" color={color} size={size}/>,
                        title: 'Preferências',
                        tabBarActiveTintColor: Theme.primary,
                        headerTintColor: Theme.grey[500]
                    }}
                />
            </Tab.Navigator>
    );
}