import { View, StyleSheet } from 'react-native'


export const Exe4 = () => {
    return(
        <View style={styles.container}>
            <View style={[styles.box, styles.box1]}/>
            <View style={[styles.box, styles.box2]}/>
            <View style={[styles.box, styles.box3]}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center'
    },
    box: {
        width: 100,
        height: 100,
    },
    box1: {
        backgroundColor: 'green'

    },
    box2: {
        backgroundColor: 'orange'

    },
    box3: {
        backgroundColor: 'red'

    },
    
})