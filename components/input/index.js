import React from 'react';
import { SafeAreaView, StyleSheet, TextInput, Text, Button, TouchableHighlight, Pressable } from "react-native";


const UselessTextInput = () => {

  const [n, number] = React.useState(null);
  const [r, resposta] = React.useState(null);


const fibMath = (n) => {
  if(n < 0)
  {
    resposta("Digite um número maior que 0");
    console.log(r);
  }
  const golden_ratio = (1 + Math.sqrt(5)) / 2;
  resposta(Math.floor(((Math.pow(golden_ratio, n)) - Math.pow((1 - golden_ratio), n)) / Math.sqrt(5)));
}
  

  return (
    <SafeAreaView>
      <Text style = {styles.titulo}>
        Calcule Fibonacci
      </Text>
      <TextInput
        style={styles.input}
        onChangeText = {(n) => {number(n)}}
        value={Number(n)}
        placeholder="Digite um número"
        keyboardType="numeric"
      />
      
      <Text style = {styles.resposta}
        
      >Resposta: {r}</Text>

      <Pressable
        onPress={() => fibMath(n)}
        style={styles.button}
        accessibilityLabel='Clique aqui para calcular o fibonacci'>
        <Text style={styles.text}>CALCULAR</Text>
      </Pressable>
    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: 'black',
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
    titulo:{
      fontSize:24,
      
    },
    resposta:{
      fontSize:18,
      borderRadius: 20,
      backgroundColor: 'black',
      padding: 10,
      margin: 10,
      color: 'white',
      alignContent: 'center',

    }
  
});

export default UselessTextInput;