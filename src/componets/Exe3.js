import { View, StyleSheet } from 'react-native'


export const Exe3 = () => {
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
        alignItems: 'center',
        justifyContent: "space-between"
    },
    box: {
        width: 150,
        height: 150,
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