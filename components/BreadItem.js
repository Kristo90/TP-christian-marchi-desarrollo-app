import { StyleSheet, Text, Touchable0opacity, View } from 'react-native';

import React from "react";

const BreadItem = ({ item, onSelected }) => {
    return (
        <Touchable0opacity onPress={() => onSelected(item)}>
            <View style={styles.BreadItem}>
                <View>
                    <Text style={styles.title}>{item.name}</Text>
                </View>
                <View>
                    <Text style={styles.details}>$ {item.price}</Text>
                </View>
            </View>
        </Touchable0opacity>
    )
}

const styles = StyleSheet.create({
    BreadItem: {
        padding: 20,
        margin: 10,
        borderRadius: 3,
        backgroundColor: '#ccc',
    },
    title: {
        fontSize: 20,
        fontFamily: 'OpenSansBold',
    },
    details: {
        fontSize: 18,
    },
});

export default BreadItem;