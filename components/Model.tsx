import { StyleSheet, Text, View, Button, Modal } from 'react-native'
import React, {useState} from 'react'
import SignUp from './SignUp';

const Model = () => {
    const [IsModelVisible, setModelVisible] = useState(false)
    const toggelModel=()=>{
        setModelVisible(!IsModelVisible)

    };
  return (
    <View style={styles.container}>
      <Text style={styles.content2}>OR</Text>
      <Button title="Sign Up" onPress={toggelModel}></Button>
      <View style={styles.content}>
        <Modal visible={IsModelVisible} animationType="fade">
        <Text style={styles.content1}>This is the sample model view. </Text>
        <SignUp />
        <Button title="Cancel" onPress={toggelModel}></Button>
        </Modal>
      </View>
    </View>
  )
}

export default Model

const styles = StyleSheet.create({

    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },

    content:{
    },

    content1: {
    },

    content2:{
    }
})