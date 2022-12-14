import { COLORS } from '../../constants/colors'
import { Platform } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import react from "react";


const Stack = createNativeStackNavigator();

const CartNavigator = () => (
    <Stack.Navigator
        initialRouteName='Cart'
        screenOptions={{
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? COLORS.primary : '',
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : COLORS.primary,
            headerTitleStyle: {
                fontWeight: 'bold',
            }
        }}
    >
        <Stack.Screen
            name='cart'
            component={CartScreen}
            options={{ title: 'Carrito '}}
        />
    </Stack.Navigator>
);

export default CartNavigator;
