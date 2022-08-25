import { StyleSheet, Text, View } from 'react-native'

import React from 'react'

const BreadDetailScreen = ( { route }) => {
    const bread = route.params.bread;
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{bread.name}</Text>
            <Text>{bread.description}</Text>
            <Text>$ {bread.price}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 20,
        fontFamily: 'OpenSansBold',
        marginBottom: 10,
    },
});

export default BreadDetailScreen;