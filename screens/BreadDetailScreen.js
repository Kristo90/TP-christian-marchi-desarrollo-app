import { StyleSheet, Text, View } from 'react-native'

import React from 'react'

export const BreadDetailScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>BreadDetailScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})