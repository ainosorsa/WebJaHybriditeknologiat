import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [age, setAge] = useState(0)
  const [lower, setLower] = useState(0)
  const [upper, setUpper] = useState(0)

  const calculate = (newAge) => {
    setAge(newAge)
    setLower((220 - newAge) * 0.65)
    setUpper((220 - newAge) * 0.85)
  }

  return (
    <View style={styles.container}>
      <Text>Age</Text>
      <TextInput 
      placeholder='Enter Age' 
      keyboardType='decimal-pad'
      value={age}
      onChangeText={calculate}
      />
      <Text>Hr limits</Text>
      <Text>{lower.toFixed(0)}-{upper.toFixed(0)}</Text>
      <StatusBar style='auto'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50,
    marginLeft: 10,
    marginRight: 10,
  },

});
