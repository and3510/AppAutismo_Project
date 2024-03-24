import {Text, View, TouchableOpacity} from 'react-native';

import { style } from './styles';

type Props = {
    name: String;
    onRemove: () => void;
}

export default function Participantes({name, onRemove}: Props) { 
    return(
    <View style={style.container}>
        <Text style={style.name}>
            {name}
        </Text>


        <TouchableOpacity style={style.button} onPress={onRemove}>
          <Text style={style.buttontext}>
          -
          </Text>
          
        </TouchableOpacity>
    </View>


    )
}