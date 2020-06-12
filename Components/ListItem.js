import React from 'react';
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native';


const ListItem = props => {

    const { item } = props;
    console.log(item.image);

    return (
        <View style={styles.container}>

            <View style={styles.imageContainer}>

                <Image
                    style={styles.image}
                    source={{ uri: item.image }}

                />

            </View>

            <View style={styles.descriptionContainer}>
                <View style={{ flexDirection: 'column' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text>{item.name}</Text>
                        {item.isPopular ?
                            <Image style={{ width: 16, height: 16, marginLeft: 8 }} source={require('../images/fire.png')} /> : <Text></Text>
                        }
                    </View>
                    <Text>{item.location}</Text>
                </View>

                <View style={{flexDirection : 'row'}}>
                <Image style={{ width: 16, height: 16, marginRight: 8 , marginTop : 3}} source={require('../images/heart.png')} />
                    <Text>{item.likes}</Text>
                </View>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        margin: 4,
    },

    imageContainer: {
    },
    descriptionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#ECEFF1',
        padding: 6,
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
    },
    image: {
        height: Dimensions.get('window').width / 1.5,

    }
});

export default ListItem;


/*

<View style={[
            styles.container, {
                backgroundColor: props.item.isDone ? 'red' : 'green',
            }
        ]}>

            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                <View style={styles.dot} />
                <Text>{props.item.todo}</Text>

            </View>




            {
                props.item.isDone ? <Text>Completed!</Text> : <Text>unCompleted!</Text>
            }



        </View>

*/