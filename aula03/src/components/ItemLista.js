import { View, Text } from 'react-native'

// export const Lista = (props) => {
//     return(
//         <View>
//             <Text>{props.item}</Text>
//         </View>
//     )
// }

export default function ItemLista(props){

    console.log("Props: ", props.item)

    return(
        <View>
            <Text>{props.item}</Text>
        </View>
    )
}
