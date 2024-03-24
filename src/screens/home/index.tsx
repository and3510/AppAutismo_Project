import {Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';

import { style } from './styles';
import Participantes from '../../components/participantes';

export default function Home() {

    const participantes = ['Gustavo', 'Vini', 'Diego', 'Anderson', 'Vinicius', 'Daniel', 'Joao'];

    function handleParticipantAdd() {
      console.log("Voce clicou no botão de Adicionar");
    }

    function handleParticipantRemove(name: string) {
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
          onRemove={() => handleParticipantRemove("gustavo")}
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