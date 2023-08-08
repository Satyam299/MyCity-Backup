import {  StyleSheet, Text, View, Image, TouchableOpacity,} from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Landing = ({navigation}) => {
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
        <View style={styles.getstarted}>
    
          <Text style={[styles.para1]}>Welcome To My City</Text>
          <Text style={[styles.para2]}>
            Find All the Resources in your city{'\n'} Discover more from your
            Neighbourhood
          </Text>
          <View style={styles.button}>
            <TouchableOpacity
              activeOpacity={0.9}
              style={styles.btn}
              onPress={() => navigation.navigate('Home')}
              // onPress={() => navigation.navigate('mail')}
             >
              <Text style={styles.para3}>Get Started</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => navigation.navigate('Login')}
             >
              <Text style={styles.para3}>Login</Text>
            </TouchableOpacity>
          </View>
    
        </View>
        
  </View>
   
  )
}

export default Landing

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#1E1E2A',
    display: 'flex',
    justifyContent: 'flex-start',
  },
  logo: {
    top: hp('0.2%'),
    left: hp('0.2%'),
    width: wp('11%'),
    height: hp('7%'),
  },
  heading: {
    fontSize: 37,
    fontFamily: 'Blanka-Regular',
    height: hp('4.6%'),
    color: '#FFFFFF',
    letterSpacing: 2,
  },
  logoContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },

  logoTitle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    top: hp('10%'),
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('100%'), 
    height: hp('26%'),
    top: hp('25%'),
    
  },
  image: {
    width: '100%',
    height: '100%',
  },
  getstarted: {
    backgroundColor: '#0099FF',
    height: hp('33%'),
    width: wp('96%'),
    top: hp('25%'),
    left: hp('1%'),
    borderTopLeftRadius: 110,
        borderTopRightRadius: 7,    // Top-right corner radius
        borderBottomLeftRadius: 7,   // Bottom-left corner radius
        borderBottomRightRadius: 110, 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: hp('6%'),
    gap: hp('2%'),
  },
  para:{
    borderTopLeftRadius: 110,
        borderTopRightRadius: 7,    // Top-right corner radius
        borderBottomLeftRadius: 7,   // Bottom-left corner radius
        borderBottomRightRadius: 110, 
    position:'relative',
 },
 para11:{
    position:'absolute',
 },
  para1: {
    fontFamily: 'Fredoka-SemiBold',
    color: '#ffffff',
    fontSize: 26,
    marginBottom: 8,
    textAlign: 'center',
  },
  para2: {
    fontFamily: 'Fredoka-SemiBold',
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 13,
  },
  para3: {
    fontFamily: 'Fredoka-SemiBold',
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 18,
  },
  button: {
    display: 'flex',
    gap: 15,
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
})