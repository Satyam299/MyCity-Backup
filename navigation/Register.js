import { StyleSheet, Text, View ,TouchableOpacity , Image , TextInput} from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Register = ({navigation}) => {
  const signin = () => {
    navigation.navigate('Otpverify');
  }; 
  const [text, onChangeText] = React.useState('');
const [number, onChangeNumber] = React.useState('');
//   const register = () => {
//     navigation.navigate('Register');
//   };
  return (
    <View style={styles.container}>
    <View style={styles.logoTitle}>
     <Text style={styles.heading}>My City</Text>
   </View>
   
   <View style={styles.getstarted}>
     <Text style={[styles.para1]}>Sign In</Text>

     <TextInput style={[styles.text1]}
         onChangeText={onChangeText}
         value={text}
         placeholder="Full Name"
         autoCapitalize='none'
         textAlign="center"
         placeholderTextColor="rgba(255, 255, 255, 0.39)" 
          />
          <TextInput style={[styles.text1]}
         onChangeText={onChangeText}
         value={text}
         placeholder="Email"
         autoCapitalize='none'
         textAlign="center"
         placeholderTextColor="rgba(255, 255, 255, 0.39)" />

         <TextInput style={[styles.text1]}
         onChangeText={onChangeText}
         value={text}
         placeholder="WhatApp No."
         autoCapitalize='none'
         textAlign="center"
         placeholderTextColor="rgba(255, 255, 255, 0.39)" />

         <TextInput style={[styles.text1]}
         onChangeText={onChangeText}
         value={text}
         placeholder="Password"
         autoCapitalize='none'
         textAlign="center"
         placeholderTextColor="rgba(255, 255, 255, 0.39)" />

      <TextInput style={[styles.text1]}
         onChangeText={onChangeText}
         value={text}
         placeholder="Re-Password"
         autoCapitalize='none'
         textAlign="center"
         placeholderTextColor="rgba(255, 255, 255, 0.39)" />

         <TouchableOpacity
         activeOpacity={0.9}
        >
       </TouchableOpacity>
       <TouchableOpacity
         activeOpacity={0.9}
         style={styles.btn}
         
         onPress={signin}
        >
         <Text style={styles.para3}>Sign In</Text>
       </TouchableOpacity>
     </View>
     <View style={styles.imageContainer}>
     <Image
       source={require('../assets/Closed-Stores-pana.png')}
       style={styles.image}
     />
   </View>
</View>
  )
}

export default Register

const styles = StyleSheet.create({
  container: {
      width: '100%',
      height: '100%',
      backgroundColor: '#1E1E2A',
      display: 'flex',
      justifyContent: 'flex-start',
    },
    heading: {
      fontSize: 37,
      fontFamily: 'Blanka-Regular',
     height: hp('4.6%'),

      color: '#FFFFFF',
      letterSpacing: 2,
    },
    logoTitle: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      top: hp('4%'),
    },
    getstarted: {
      backgroundColor: '#0099FF',
      height: hp('59%'),
      width: wp('96%'),
      top: hp('7%'),
      left: hp('1%'),
      borderTopLeftRadius: 110,
      borderTopRightRadius: 7,    // Top-right corner radius
      borderBottomLeftRadius: 7,   // Bottom-left corner radius
      borderBottomRightRadius: 110, 
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingTop: hp('2%'),
      gap: hp('2%'),
    },
    para1: {
      fontFamily: 'Fredoka-SemiBold',
      color: '#ffffff',
      fontSize: 20,
      // marginBottom: 1,
      textAlign: 'center',
    },
    text1: {
      height: hp('6%'),
      width: wp('60%'),
      margin: 2,
      borderWidth: 1,
      borderRadius: 9,
      padding: 10,
      textAlignVertical: 'center',
      color: "white",
      backgroundColor: '#1E1E2A',
    },
    btn: {
      width: 160,
      height: 45,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 50,
      backgroundColor: '#1E1E2A',
    },
    para3: {
      fontFamily: 'Fredoka-SemiBold',
      color: '#ffffff',
      textAlign: 'center',
      fontSize: 18,
    },
    imageContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: wp('100%'), 
      height: hp('26%'),
      top: hp('8%'),
      
    },
    image: {
      width: '100%',
      height: '100%',
    },})