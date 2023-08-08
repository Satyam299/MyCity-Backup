import { StyleSheet, Text, View ,TouchableOpacity , Image , TextInput} from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Otpverify = ({navigation}) => {
    
    const [text, onChangeText] = React.useState('');
    const [number, onChangeNumber] = React.useState('');
        const home = () => {
          navigation.navigate('Home');
}
  return (
    <View style={styles.container}>

    <View style={styles.logoTitle}>
     <Text style={styles.heading}>My City</Text>
   </View>
   
   <View style={styles.getstarted}>
     <Text style={[styles.para1]}>Enter OTP</Text>

     <TextInput style={[styles.text1]}
         onChangeText={onChangeText}
         value={text}
         placeholder="Enter OTP"
         autoCapitalize='none'
         textAlign="center"
         placeholderTextColor="rgba(255, 255, 255, 0.39)" 
          />

       <TouchableOpacity
         activeOpacity={0.9}
         style={styles.btn}
         
         onPress={home}
        >
         <Text style={styles.para3}>Submit</Text>
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

export default Otpverify

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
        // height: 100,
        color: '#FFFFFF',
        letterSpacing: 2,
      },
      logoTitle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        top: hp('10%'),
      },
      getstarted: {
        backgroundColor: '#0099FF',
        height: hp('38%'),
        width: wp('96%'),
        top: hp('20%'),
        left: hp('1%'),
        borderTopLeftRadius: 110,
        borderTopRightRadius: 7,    // Top-right corner radius
        borderBottomLeftRadius: 7,   // Bottom-left corner radius
        borderBottomRightRadius: 110, 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: hp('5%'),
        gap: hp('6%'),
      },
      para1: {
        fontFamily: 'Fredoka-SemiBold',
        color: '#ffffff',
        fontSize: 20,
        marginBottom: 3,
        textAlign: 'center',
      },
      text1: {
        height: hp('6%'),
        width: wp('50%'),
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
        top: hp('28%'),
        
      },
      image: {
        width: '100%',
        height: '100%',
      },})