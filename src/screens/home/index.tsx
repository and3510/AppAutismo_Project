import {Text, View, TextInput, TouchableOpacity } from 'react-native';

import { style } from './styles';

export default function Home() {

    function handleParticipantAdd() {
      console.log("Voce clicou no botão de Adicionar")
    }

    return (
      <View style={style.container}>
        <Text style={style.texto}>
          Titulo do Aplicativo
        </Text>
        <Text style={style.descricao}>
          Username:
        </Text>
        <View style={style.form}>
        <TextInput style=
          {style.input}
          placeholder="Nome do Jogador"
          placeholderTextColor="#6b6b6b"
         />

        <TouchableOpacity style={style.button} onPress={handleParticipantAdd} >
          <Text style={style.buttontext}>
          +
          </Text>
          
        </TouchableOpacity>
        </View>

        <Text style={style.descricao}> 
          Idade:
        </Text>
        <View style={style.form}>
         <TextInput style={style.input2} 
         placeholder="Idade do Jogador"
         placeholderTextColor="#6b6b6b"
         keyboardType='numeric'
         />

        <TouchableOpacity style={style.button} onPress={handleParticipantAdd} >
          <Text style={style.buttontext}>
          +
          </Text>
          
        </TouchableOpacity>
          
         </View>

      </View>
    ); 
  }