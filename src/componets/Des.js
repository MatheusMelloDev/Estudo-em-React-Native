import { View, StyleSheet } from 'react-native'


export const Des = () => {
    return (
        <View style={styles.container}>
            <View style={styles.box1}>
                <View style={styles.int1}></View>
                <View style={styles.int12}></View>
                <View style={styles.int13}></View>
            </View>

            <View style={styles.box2}>

                <View style={styles.int2}></View>
                <View style={styles.int22}></View>

            </View>

            <View style={styles.box3}>


            </View>

            <View style={styles.box4}>

                <View style={styles.int12}></View>
                <View style={styles.int12}></View>
                <View style={styles.int12}></View>
                <View style={styles.int12}></View>
                <View style={styles.int12}></View>
                <View style={styles.int12}></View>

            </View>
            <View style={styles.box5}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
    },

    box1: {

        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 15,
        flex: 1.5,

    },
    int1: {
        width: '100%',
        height: 20,
        backgroundColor: '#2A9D8F',

    },
    int12: {
        width: '26%',
        height: 70,
        backgroundColor: 'orange',
    },
    int13: {
        width: '37%',
        height: 40,
        backgroundColor: 'orange',
    },
    box2: {
        flexDirection: 'row',




    },

    int2: {
        width: '50%',
        height: 70,
        backgroundColor: '#8338EC',
    },
    int22: {
        width: '50%',
        height: 70,
        backgroundColor: '#3A86FF',
    },

    box3: {
        flexDirection: 'row',
        width: '100%',
        height: 20,
        backgroundColor: '#2A9D8F'

    },

    box4: {
        flex: 2,
        flexDirection: 'row',
        flexWrap: 'wrap',

        justifyContent: 'space-between',
        padding: 10,
        paddingTop: 50,

    },
    box5: {

        width: '100%',
        height: 50,
        backgroundColor: '#023e8a',
    }



})