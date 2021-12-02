import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { auth, createUserWithEmailAndPassword } from '../config/firebase';

export default function Register() {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [pass, setpass] = useState('');
  const register = async () => {
    // var obj={
    //   name,
    //   email,
    //   pass
    // }
    try {
      await createUserWithEmailAndPassword(auth, email, pass)

    }
    catch(err){
    console.log(err.message)
    }



  }


  return (
    <View>
      <Text style={styles.head}>Register</Text>
      <TextInput placeholder=" Enter Name" style={styles.input} onChangeText={(name) => { setname(name) }} />
      <TextInput placeholder=" Enter Email" style={styles.input} onChangeText={(email) => { setemail(email) }} />
      <TextInput placeholder=" Enter Password" style={styles.input} secureTextEntry={true} onChangeText={(pass) => { setpass(pass) }}/>
      <Pressable style={styles.button} onPress={register}>
        <Text style={styles.text}><Icon name="sign-in" style={{ color: "white", fontSize: 25, marginRight: 5 }} /> Register</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginLeft: "22%",
    marginTop: 10,
    width: 200,
    height: 50,
    padding: 5,
    borderWidth:2,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  head: {
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    marginTop: 10
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    width: 120,
    borderRadius: 15,
    backgroundColor: 'black',
    marginLeft: "33%",
    marginTop: 15

  },
  text: {
    fontSize: 15,
    color: 'white',
  },

});