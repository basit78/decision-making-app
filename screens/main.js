import React, { useState} from 'react';
import { View, Text, TextInput, StyleSheet, Pressable,Alert } from 'react-native';
import { auth, signInWithEmailAndPassword } from '../config/firebase';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Facebook from 'expo-facebook';


export default function Main({navigation}) {
  
  const [email, setemail] = useState('');
  const [pass, setpass] = useState('');
  const signin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, pass)

    }
    catch (err) {
      console.log(err.message)
    }
  }

  
  const facebook = async ()=>{
    try {
      await Facebook.initializeAsync({
          appId: '427988548698835',
      });
      const {
          type,
          token,
          expirationDate,
          permissions,
          declinedPermissions,
      } = await Facebook.logInWithReadPermissionsAsync({
          permissions: ['public_profile'],
      });

      if (type === 'success') {
          const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
          Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
          await navigation.navigate('Dish');


      } else {
          // type === 'cancel'
      }


  } catch (e) {
      console.log(e, 'error occurred.');
  }
  }


  return (
    <View>
      <Text style={{textAlign: "center",fontSize:40,fontWeight:"bold"}}>Decision Making App</Text>
      <Text style={styles.head}>Login</Text>
      <TextInput placeholder=" Enter Email" style={styles.input}
        onChangeText={(email) => { setemail(email) }}
      />
      <TextInput placeholder=" Enter Password" style={styles.input}
        secureTextEntry={true}
        onChangeText={(pass) => { setpass(pass) }}
      />
      <Pressable style={styles.button}
      onPress={signin}
      >
        <Text style={styles.text}><Icon name="sign-in" style={{ color: "white", fontSize: 25, marginRight: 5 }} />  Sign In</Text>
      </Pressable>
      <Pressable
       onPress={() => navigation.navigate('Register')}
       >
      <Text style={{ fontWeight: "bold", textAlign: "center" ,marginTop:10}}>Don't have an account ?Register here</Text></Pressable>


      <Pressable style={styles.buttonf}
      onPress={facebook}
      >

        <Text style={styles.textf}><Icon name="facebook" style={{ color: "white", fontSize: 25, marginRight: 5 }} /> Sign In With Facebook</Text>
      </Pressable>


      <Pressable style={styles.buttong}
      // onPress={hh}
      >
        <Text style={styles.textg}><Icon name="google" style={{ color: "white", fontSize: 25, marginRight: 5 }} /> Sign In With Google</Text>
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
    textAlign: "center"
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    width: 90,
    borderRadius: 15,
    backgroundColor: 'black',
    marginLeft: "35%",
    marginTop: 15

  },
  text: {
    fontSize: 15,
    color: 'white',
  },
  buttonf: {
    alignItems: 'center',
    paddingVertical: 12,
    width: 200,
    borderRadius: 15,
    backgroundColor: '#3B5998',
    marginTop: 15,
    marginLeft: "22%"

  },
  textf: {
    fontSize: 15,
    color: 'white',
  },
  buttong: {
    marginLeft: "22%",
    alignItems: 'center',
    paddingVertical: 12,
    width: 200,
    borderRadius: 15,
    backgroundColor: '#DB4437',
    marginTop: 15

  },
  textg: {
    fontSize: 15,
    color: 'white',
  },


});