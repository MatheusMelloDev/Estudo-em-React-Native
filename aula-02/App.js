//Área onde são importados dos os componentes utilizados
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

//Componetente funcional (Uma função que começa com a letra maiúscula e retorna um elemento visual - JSX)
//Componentes precisam ser exportados para poderem ser utilizados pela aplicação
export default function App() {
  //Área para variáveis, estados e funções
  //Aqui é feita toda a lógica da aplicação

  //Dentro do return temos uma sintaxe chamada JSX!
  //Pode Retornar Apenas 1 elemento pai, como uma <View></View> ou um fragmente <></>
  //Dentro do elemento pai podem ter quantos elementos se queira
  return (
    <View style={styles.container}>
      {/* A maioria dos componentes possuem o atributo style, onde é possível passar objetos de estilização*/}
      <Text>Hello World!!!</Text>
      {/* Para comentar dentro do JSX, é necessário envolver o bloco de comentário com chaves (bigodes) {} */}
      <StatusBar style="auto" />
    </View>
  );
}

//Para criar objetos de estilização de forma parecida com CSS, utiliza-se o Stylesheet do react-native
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
