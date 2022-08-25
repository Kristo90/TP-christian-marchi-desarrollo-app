import { StyleSheet, Text, Touchable0pacity, View } from 'react-native';

import { COLORS } from '../constants/colors';
import { Ionicons } from "@expo/vector-icons";
import React from "react";

const CartItem = ({ item, onDelete }) => {
    return (
        <View style={styles.item}>
            <View>
                <Text style={styles.header}>{item.name}</Text>
            </View>
            <View style={styles.detail}>
                <View>
                    <Text>Cantidad: {item.name}</Text>
                    <Text>{item.price}</Text>
                </View>
                <Touchable0pacity onPress={() => onDelete(item.id)}>
                    <Ionicons name='trash' size={24} color={COLORS.accent} />
                </Touchable0pacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        padding: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    header: {
        fontSize: 18,
        fontFamily: 'OpenSansBold',
    },
    detail: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text: {
        fontSize: 16,
        fontFamily: 'OpenSans',
    },
});