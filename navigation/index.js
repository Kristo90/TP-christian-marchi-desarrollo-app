import { Text, View } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import TabNavigator from './tab/TabNavigator'

const MainNavigation = () => {
    return (
        <NavigationContainer>
            <TabNavigator />
        </NavigationContainer>
    )
}

export default MainNavigation