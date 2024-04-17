import { StyleSheet, View } from 'react-native'

export const Exe1 = () => {
    return(
        <View style={styles.container}>
            <View style={styles.exe1}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    exe1: {
        width: '30%',
        height: '100%',
        backgroundColor: 'green',
    }
})