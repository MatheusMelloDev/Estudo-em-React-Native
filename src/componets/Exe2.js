import { StyleSheet, View } from 'react-native'

export const Exe2 = () => {
    return(
        <View style={styles.container}>
            <View style={styles.exe1}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    exe1: {
        width: '100%',
        height: '20%',
        backgroundColor: 'green',
    }
})