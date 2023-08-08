import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './Header'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Test from '../navigation/Test';


const Chat = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Header />
      <View style={styles.chatlayout}>

          <View style={styles.chatscreen}>
            <Text style={styles.texts}>hello</Text>
            </View>
        </View>
        <Test navigation={navigation}/>
    </View>
  )
}

export default Chat

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#1E1E2A',
        height:hp('100%'),
        width:'100%',
        
    },
    chatlayout:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        paddingTop : hp('7%'),
        
    },
    chatscreen:{
      width:wp('90%'),
      height:hp('70%'),
      backgroundColor: '#323248',
      borderRadius: 20,
    },
    texts:{
        color:'white',
    }
})
