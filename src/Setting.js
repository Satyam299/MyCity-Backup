import { StyleSheet, Text, View ,TouchableOpacity } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Test from '../navigation/Test';


const Setting = ({navigation}) => {
  return (
    <View style={styles.container}>
       <Text  style={styles.cattext} >- Settings -</Text>
        <View  style={styles.content}>
          <Text  style={styles.heading} >General Settings -</Text>
          <Text  onPress={() => navigation.navigate('Profile')} style={styles.sub} >Account Setting -</Text>
          <Text onPress={() => navigation.navigate('')}  style={styles.sub} >Favourite Setting -</Text>
          <Text onPress={() => navigation.navigate('')} style={styles.sub} >Order History -</Text>
          <Text onPress={() => navigation.navigate('')} style={styles.sub} >Change Location -</Text>
          <Text onPress={() => navigation.navigate('')} style={styles.sub} >Rate Us</Text>   

        <Text  style={styles.heading} >General Settings -</Text>
          <Text onPress={() => navigation.navigate('')} style={styles.sub} >Privacy Policy -</Text>
          <Text onPress={() => navigation.navigate('')} style={styles.sub} >Terms & Conditions -</Text>
          <Text onPress={() => navigation.navigate('')} style={styles.sub} >Help & Support -</Text>
          <Text onPress={() => navigation.navigate('')} style={styles.sub} >Share this App-</Text>
          <Text onPress={() => navigation.navigate('')} style={styles.sub} >Log Out</Text>           
        
      </View>
      <Test navigation={navigation}/>
    </View>
  )
}

export default Setting

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap:22,
        width: '100%',
        height: '100%',
        backgroundColor: '#1E1E2A',
        display: 'flex',
        justifyContent: 'flex-start',
      },
      font:{
        fontFamily: 'Fredoka-Light',
        color: '#ffffff',
        textAlign: 'center',
        fontSize:12,
      },
      cattext:{
        backgroundColor: '#323248',
        fontFamily: 'Fredoka-SemiBold',
        color: '#ffffff',
        top: hp('3%'),
        borderRadius: 7,
        padding: 9,
         margin: 8,
         textAlign: 'center', 
      },
      content:{
        backgroundColor: '#323248',
        height: hp('70%'),
        width: wp('90%'),
        top: hp('2%'),
        display:'flex',
        alignItems:'center',
        margin: hp('2.5%'),
        padding: hp('2.5%'),
        borderRadius: 8,
        gap:4,
      },
      heading:{
        fontFamily: 'Fredoka-SemiBold',
        color:'rgba(255, 255, 255, 0.40)',
        fontSize:12,
        textAlign: 'center', 
        top: hp('-1.5%'),
        borderBottomWidth: 1,
        padding: hp('1.1%'),
        borderBottomColor:'rgba(255, 255, 255, 0.40)',
        width:wp('80%')
      },
      sub:{
        top: hp('1%'),
        left: hp('3%'),
        color:'white',
        margin:7,
        fontSize:12,
        fontFamily: 'Fredoka-SemiBold',
        textAlign: 'left', 
        width:wp('80%')
      },
})