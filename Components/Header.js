import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Dimensions
} from 'react-native';



const Header = (props) => {
    const {title} = props;
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({

    header: {
        width: '100%',
        backgroundColor: '#ECEFF1',
        padding : 8,
        alignItems: 'center',
        justifyContent: 'center',

    },
    headerTitle: {
        color: 'black',
        fontSize: 32,

    },


});

export default Header;
