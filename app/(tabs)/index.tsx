import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, ScrollView, View } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { useState } from 'react';

export default function HomeScreen() {
  const [newTask, setNewTask] = useState('');

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <View style={styles.container}>
        <Text style={styles.title}>Adicione uma nova tarefa</Text>
        <View style={styles.inputContainer}>
          {/* a fução setNewTask será chamada sempre que o valor do input for alterado */}
          <TextInput style={styles.input} placeholder='Qual será a nova tarefa?' onChangeText={(text) => setNewTask(text)} value={newTask} placeholderTextColor={'#b5b5b5'} />
          <TouchableOpacity style={styles.button} activeOpacity={0.7}>
            <Text style={styles.buttonText}>Adicionar</Text>
          </TouchableOpacity>
        </View>

        <ScrollView>
          <View style={styles.task}>
            <Text style={[styles.textTask,  styles.completed]}>Estudar React</Text>
            <TouchableOpacity style={{"paddingRight": 10}}>
              <Text>Concluir</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>Excluir</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer:{
    flexDirection: 'row',
    marginBottom: 20,
    paddingTop: 20,
  },
  button:{
    backgroundColor: '#007bff',
    padding: 10,
    justifyContent: 'center',
    borderRadius: 5,
    marginLeft: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 12,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  task: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    shadowColor: '#fff',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textTask:{
    flex: 1,
    fontSize: 14,
  },
  completed:{
    textDecorationLine: 'line-through',
    color: '#999',
  }
});
