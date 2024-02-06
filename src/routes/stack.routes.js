import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home';
import TabRoutes from './tabs.routes';
import ProductDeails from '../screens/products/details';
import Order from '../screens/order';
import Clients from '../screens/clients';
import FinalizaOrder from '../screens/order/finalize';

const Stack = createStackNavigator();

export default function StackRouter() {
    return (
        <Stack.Navigator screenOptions={{ 
            headerShown: false,
            gestureEnabled: true,
            gestureResponseDistance: 200,
            gestureDirection: 'horizontal'
            
            }}>
            <Stack.Screen name="router-tabs" component={TabRoutes} />
            <Stack.Screen name="product-detail" component={ProductDeails} />
            <Stack.Screen name="order" component={Order} />
            <Stack.Screen name="finish-order" component={FinalizaOrder} />
            <Stack.Screen 
            options={{
                presentation: 'modal'
            }}
            name="clients" 
            component={Clients} />
        </Stack.Navigator>
    );
}