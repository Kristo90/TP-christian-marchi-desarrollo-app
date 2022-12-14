import { FlatList, TouchableOpacity } from "react-native";

import React from "react";

const CartScreen = () => {
    const items = CART;
    const total = 12000;

    const handlerConfirmCart = () => console.log('Confirmar carrito')
    const handlerDeleteitem = () => console.log('Eliminar demasiado')

    const renderItem = (data) = (
        <CartItem item={data.item} onDelete={handlerDeleteitem} />
    );

    return (
        <View style={styles.container}>
            <View style={styles.list}>
                <FlatList
                    data={items}
                    keyExtractor={item => item.id}
                    renderItem={renderItem}
                />

            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.confirm} onPress={handlerConfirmCart}>
                    <Text>Confirmar</Text>
                    <View style={styles.total}>
                        <Text style={styles.text}>Total</Text>
                        <Text style={styles.text}>${total}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        backgroundColor: '#fff',
        paddingBotton: 120, 
    },
    list: {
        flex: 1,
    },
    footer: {
        padding: 12,
        borderTopColor: '#ccc',
        borderTopWidth: 1,
    },
    confirm: {
        backgroundColor: '#ccc',
        borderRadius: 10,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyConntent: 'space-between',
    },
    total: {
        flexDirection: 'row',
    },
    text: {
        fontSize: 18,
        fontFamily: 'OpenSansBold',
        padding: 8,
    },
});