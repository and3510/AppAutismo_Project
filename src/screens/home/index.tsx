// Importar Componentes
import {Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';

// Importar Componentes da Pasta 
import { style } from './styles';
import Participantes from '../../components/participantes';

export default function Home() {

  // Lista de Usuários
  const participantes = ['Gustavo', 'Vini', 'Diego', 'Anderson', 'Vinicius', 'Daniel', 'Joao'];

  // Função Adicionar o Nome do Usuário
  function handleParticipantAdd() {
    if(participantes.includes("Gustavo")) {
        return Alert.alert(" Participante ja existe")
    }
  }

  // Função Remover o Nome do Usuário
  function handleParticipantRemove(name: string) {
    Alert.alert("Remover",`remover participante ${name}?`,[
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
    // Container do Aplicativo
    <View style={style.container}>
      {/* Titulo da Página  */}
      <Text style={style.texto}>
        Cadastro
      </Text>
      {/* Categoria do Nome do Usuário */}
      <Text style={style.descricao}>
        Username:
      </Text>

      {/* Placeholder e Botão para Adicionar o nome do Usuário  */}
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


      {/* Categoria do Idade do Usuário */}
      <Text style={style.descricao}> 
        Idade:
      </Text>

      {/* Placeholder e Botão para Adicionar a idade do Usuário  */}
      <View style={style.form}>
        <TextInput style={style.input} 
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

      {/* Listar os Usuários */}
      <FlatList
        data={participantes}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participantes
          key={item}
          name={item}
          onRemove={() => handleParticipantRemove(item)}
          />
        )}
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