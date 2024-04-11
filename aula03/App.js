import { StyleSheet, Text, View, ScrollView } from 'react-native';
import ItemLista from './src/components/ItemLista';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
      <ItemLista item="Produto 0221" />
      <ItemLista item="Produto 02"/>
      <ItemLista item="Produto 03"/>
      <ItemLista item="Produto 0221" />
      <ItemLista item="Produto 02"/>
      <ItemLista item="Produto 03"/>
      <ItemLista item="Produto 0221" />
      <ItemLista item="Produto 02"/>
      <ItemLista item="Produto 03"/>
      <ItemLista item="Produto 0221" />
      <ItemLista item="Produto 02"/>
      <ItemLista item="Produto 03"/>
      <ItemLista item="Produto 0221" />
      <ItemLista item="Produto 02"/>
      <ItemLista item="Produto 03"/>
      <ItemLista item="Produto 0221" />
      <ItemLista item="Produto 02"/>
      <ItemLista item="Produto 03"/>
      <ItemLista item="Produto 0221" />
      <ItemLista item="Produto 02"/>
      <ItemLista item="Produto 03"/>
      <ItemLista item="Produto 0221" />
      <ItemLista item="Produto 02"/>
      <ItemLista item="Produto 03"/>
      <ItemLista item="Produto 0221" />
      <ItemLista item="Produto 02"/>
      <ItemLista item="Produto 0221" />
      <ItemLista item="Produto 02"/>
      <ItemLista item="Produto 03"/>
      <ItemLista item="Produto 0221" />
      <ItemLista item="Produto 02"/>
      <ItemLista item="Produto 03"/>
      <ItemLista item="Produto 0221" />
      <ItemLista item="Produto 02"/>
      <ItemLista item="Produto 03"/>
      <ItemLista item="Produto 0221" />
      <ItemLista item="Produto 02"/>
      <ItemLista item="Produto 03"/>
      <ItemLista item="Produto 0221" />
      <ItemLista item="Produto 02"/>
      <ItemLista item="Produto 03"/>
      <ItemLista item="Produto 0221" />
      <ItemLista item="Produto 02"/>
      <ItemLista item="Produto 03"/>
      <ItemLista item="Produto 0221" />
      <ItemLista item="Produto 02"/>
      <ItemLista item="Produto 03"/>
      <ItemLista item="Produto 0221" />
      <ItemLista item="Produto 02"/>
      <ItemLista item="Produto 03"/>
      <ItemLista item="Produto 0221" />
      <ItemLista item="Produto 02"/>
      <ItemLista item="ULTIMO PRODUTO"/>
      </ScrollView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
