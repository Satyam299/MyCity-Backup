import { StyleSheet, Image , Text, View } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import React, { useEffect }  from 'react'
// import {Logo} from '../assets';



const Loading = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
         navigation.navigate('Landing')
        }, 2000);
     })
  return (
    <View style={styles.container}>
       <View style={styles.logoContainer}>
       <Image
        source={require('../assets/mycity-logo-1.png')}
        style={styles.logo}
      />
      </View>
    <View style={styles.logoTitle}>
      <Text style={styles.heading}>My City</Text>
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

export default Loading

const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      backgroundColor: '#1E1E2A',
      display: 'flex',
      // justifyContent: 'space-evenly',
      alignItems: 'center',
    },
    heading: {
      fontSize: 40,
      fontFamily: 'Blanka-Regular',
      height: hp('29%'),
      color: '#FFFFFF',
      letterSpacing: 2,
    },
    imageContainer: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'baseline',
      width: '100%',
      height: '65%',
      top:hp('6%'),
    },
    image: {
      width: '100%',
      height: '100%',
    },
    logoContainer: {
      borderStyle: 'solid',
    borderColor: '#fff',
    borderWidth: 4,
    height: hp('14%'),
    width: wp('30%'),
    borderRadius: hp('3%'),
      top:hp('23%'),
      left:hp('0%'),
    },
    logo: {
      width: wp('25%'),
      height: hp('12%'),
    },
    logoTitle: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      top:hp('30%'),
    },})