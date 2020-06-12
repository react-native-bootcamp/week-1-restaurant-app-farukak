import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    FlatList,
} from 'react-native';

import data from '../data.json';
import ListItem from './ListItem';



const List = () => {
    return (
        <View>
            <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={data}
                renderItem={({item}) => <ListItem item={item} />}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1
    }

});

export default List;
