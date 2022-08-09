import { BREADS } from '../data/breads';
import BreadItem from '../components/BreadItem';
import { FlatList } from 'react-native';
import React from 'react';

export default function CategoryBreadScreen({ navigation, route }) {
    const breads = BREADS.filter(bread => bread.category === route.params.categoryID);

    const handleSelected = (item) => {
        navigation.navigate('Detail', {
            productID: item.id,
            name: item.name,
        });
    }

    const rederItemBread = ({ item }) => (
        <BreadItem item={item} onSelected={handleSelected} />
    )

    return(
        <FlatList
            data={breads}
            keyExtractor={item => item.id}
            renderItem={rederItemBread}
        />
    );
}