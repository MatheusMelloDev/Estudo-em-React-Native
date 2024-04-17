import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { Exe1 } from './src/componets/Exe1';
import { Exe2 } from './src/componets/Exe2';
import { Exe3 } from './src/componets/Exe3';
import { Exe4 } from './src/componets/Exe4';
import { Exe5 } from './src/componets/Exe5';
import { Des } from './src/componets/Des';
import { Contador } from './src/componets/Contador';
export default function App() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  return (
    <View style={styles.container}>
      {/* <Exe1 /> */}
      {/* <Exe2 /> */}
      {/* <Exe3 /> */}
      {/* <Exe4 /> */}
      {/* <Exe5 /> */}
      {/* <Des /> */}
      <Contador count={count1} setCount={setCount1} />
      <Contador count={count2} setCount={setCount2} />


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  flex:1,
  backgroundColor:'white'
  
  }
});
