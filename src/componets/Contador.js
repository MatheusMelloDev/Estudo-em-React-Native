import { Text, Button, View, StyleSheet } from "react-native"

export const Contador = ({ count, setCount }) => {
    

    

    return(
        <View>
            <Text style={styles.count}>{count}</Text>
            <Button 
                title="INCREMENTAR"
                onPress={() => setCount(count+1)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    count: {
        fontSize: 200,
        textAlign: "center",
        
    
        
    }
})