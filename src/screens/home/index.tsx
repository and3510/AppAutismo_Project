import {Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';

import { style } from './styles';
import Participantes from '../../components/participantes';

export default function Home() {

    const participantes = ['Gustavo', 'Vini', 'Diego', 'Anderson', 'Vinicius', 'Daniel', 'Joao'];

    function handleParticipantAdd() {
      if(participantes.includes("Gustavo")) {
        return Alert.alert(" Participante ja existe")
      }
    }

    function handleParticipantRemove(name: string) {
      Alert.alert("Remover",`remover participante ${name}?`, [
        {
          text: 'Sim',
          onPress: () => Alert.alert("Deletado")

        },
        {
          text: 'Não',
          style: 'cancel'
        }
      ])
      console.log(`Voce clicou em remove o aluno ${name}`);
    }

    return (
      <View style={style.container}>
        <Text style={style.texto}>
          Cadastro
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

        <FlatList
        data={participantes}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participantes
          key={item}
          name={item}
          onRemove={() => handleParticipantRemove(item)}
          />
        )
      
      }
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={() => (
        <Text style={style.listEmptyText}>
            Ninguém Aqui
        </Text>
      )}
        

        
        />
        

      </View>
    ); 
  }