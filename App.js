import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { firestore, collection, addDoc, serverTimestamp, query, onSnapshot ,MESSAGES } from './firebase/Config';
import { useState, useEffect } from 'react';
import { convertFirebaseTimeStampToJS } from './helpers/Functions';
import Constants from 'expo-constants';



export default function App() {
  const [messages,setMessages] = useState([])
  // const [newMessage, setNewMessage] = useState('')



  // const save = async() => {
  //   const docRef = await addDoc(collection(firestore,MESSAGES),{
  //     text: newMessage,
  //     created: serverTimestamp()
  //   }).catch(error => console.log(error))

  //   setNewMessage('')
  //   console.log('Message saved!')
  // }

  useEffect(() => {
    const q = query(collection(firestore, MESSAGES));
  
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const tempMessages = [];
  
      querySnapshot.forEach((doc) => {
        const messageObject = {
          id: doc.id,
          text: doc.data().text,
          created: convertFirebaseTimeStampToJS(doc.data().created),
        };
        tempMessages.push(messageObject);
      });
      setMessages(tempMessages);
    });
  
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    console.log('Messages are:', messages);
  }, [messages]); // Only re-run the effect if messages changes

  return (
    <SafeAreaView style={styles.container}>

      {/* <TextInput placeholder='Send message...' value={newMessage} onChangeText={text => setNewMessage(text)}></TextInput>
      <Button title='Send' type='button' onPress={save}></Button> */}

      <ScrollView>
        <Text style={styles.message}>TEST MESSAGE UI</Text>
      
        {messages.map((message) => (
            <View style={styles.message} key={message.id}>
              <Text style={styles.messageInfo}>{message.created}</Text>
              <Text>{message.text}</Text>
            </View>
            
        ))
        }

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',

    width: 500,
  },
  message: {
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    flex: 1,

    backgroundColor: '#f5f5f5',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    flexGrow: 1,
    // marginLeft: 10,
    // marginRight: 10,
    width: '100%'
  },
  messageInfo: {
    fontSize: 12
  }
});
