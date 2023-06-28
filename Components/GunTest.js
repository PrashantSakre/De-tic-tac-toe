import { useEffect, useState } from 'react';
import { REACT_APP_GUN_PEER } from '@env';
import Gun from 'gun/gun';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const gun = new Gun(REACT_APP_GUN_PEER); // Gun relay

export default function GunTest() {
  const hello = gun.get('hello');
  const [text, setText] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    hello.on((data, key) => {
      const name = data.name;
      setName(name);
    })
  }, []);

  return (
    <View style={styles.container}>
      <Text>Hello {name}</Text>
      <TextInput
        style={styles.input}
        value={text}
        placeholder="What is you name?"
        onChangeText={(text) => setText(text)}
      />
      <Button
        style={styles.Button}
        title="update"
        onPress={() => {
          hello.put({name: text})
          setText('')
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    margin: 10
  },
});
