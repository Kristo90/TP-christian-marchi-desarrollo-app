import { StyleSheet, Text, View } from "react-native";

import CartNavigator from '../cart/index';
import { Ionicons } from '@expo/vector-icons/Ionicons';
import React from "react";
import ShopNavigator from '../ShopNavigator';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const BottomTabs = createBottomTabNavigator();

const TabNavigator = () => (
    <BottomTabs.Navigator 
        screenOptions={{
            headerShow:false,
            tabBarShowLabel: false,
            tabBarStyle: styles.tabBar,
        }}
        initialRouteName="Shop" 
    >
        <BottomTabs.Screen
            name='ShopTab'
            component={ShopNavigator}
            options={{
                tabBarIcon: ({ focused }) => (
                    <View style={styles.item}>
                        <Ionicons name="md-home" size={24} color={ focused ? 'blue' : 'black' } />
                        <Text>Tienda</Text>
                    </View>
                )
            }}
        />
        <BottomTabs.Screen
            name='CartTab'
            component={CartNavigator}
            options={{
                tabBarIcon: ({ focused }) => (
                    <View style={styles.item}>
                        <Ionicons name="md-cart" size={24} color={ focused ? 'blue' : 'black'} />
                        <Text>Carrito</Text>
                    </View>
                )
            }}
        />
    </BottomTabs.Navigator>
)

const styles = StyleSheet.create({
    tabBar: {
        shadowColor: '#7f5df0',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.25,
        shadowRadius: 0.25,
        elevation: 5,
        position: 'absolute',
        bottom: 25,
        left: 20,
        right: 20,
        borderRadius: 15,
        height: 90,
    },
    item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})