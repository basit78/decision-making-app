import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Alert ,Share} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Dish() {
  const [choice1, setchoice1] = useState('');
  const [choice2, setchoice2] = useState('');
  const [choice3, setchoice3] = useState('');
  const [allchoices,setallchoices]=useState();
  const [decide,setdecide]=useState('');

  const register = async () => {
    var obj = [choice1, choice2, choice3]
    var math = Math.floor(Math.random() * (3));
    setallchoices(obj)
    setdecide(allchoices[math]);

    Alert.alert(`You decided ${decide}`)


  }

    const onShare = async () => {
      try {
        const result = await Share.share({
          message: `You have three choices '${allchoices[0]+"'" +" "+  "'" +allchoices[1]+"'" +" "+  "'" +allchoices[2]}'. App decide ${decide}`,
        });
        if (result.action === Share.sharedAction) {
          if (result.activityType) {
          } else {
          }
        } else if (result.action === Share.dismissedAction) {
        }
      } catch (error) {
        alert(error.message);
      }
    };


  return (
    <View>
      <Text style={styles.head}>Decision</Text>
      <TextInput placeholder="Choice 1" style={styles.input} onChangeText={(choice1) => { setchoice1(choice1) }} />
      <TextInput placeholder="Choice 2" style={styles.input} onChangeText={(choice2) => { setchoice2(choice2) }} />
      <TextInput placeholder="Choice 3" style={styles.input} onChangeText={(choice3) => { setchoice3(choice3) }} />
      <Pressable style={styles.button} onPress={register}>
        <Text style={styles.text}><Icon name="spinner" style={{ color: "white", fontSize: 25, marginRight: 5 }} /> Decide</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={onShare}>
        <Text style={styles.text}><Icon name="share" style={{ color: "white", fontSize: 25, marginRight: 5}} /> Share</Text>
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
    borderWidth: 2,
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