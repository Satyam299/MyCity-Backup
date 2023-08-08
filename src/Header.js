import { StyleSheet, Text, View ,TouchableOpacity , Image} from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Header = (props) => {

  const profile = (userId) => { 
    props.navigation.navigate('Profile',{userId : userId});
  }
  return (
    <View style={styles.header}>
        <View style={styles.headtext}>
           <Text style={styles.cityname}>Narmadapram , M P</Text>
            <Text style={styles.address}>Durga Bihar Colony</Text>
        </View>

            <TouchableOpacity
              activeOpacity={0.9}
              onPress={profile}
             >
               <Image
             source={require('../assets/pro.png')}
             style={styles.proimage}
              />
           </TouchableOpacity>
        </View>

  )
}

export default Header

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#1E1E2A',
         top: hp('2%'),
        height: hp('7%'),
        width: wp('100%'),
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection:'row',
        paddingLeft: hp('3%'),
        paddingRight:hp('3%'),
    },
    cityname: {
        fontFamily: 'Fredoka-SemiBold',
         color: '#ffffff',
         fontSize: 17,   
   },
   address: {
    fontFamily: 'Fredoka-Light',
    color: '#ffffff',
    fontSize: 13,
    left: hp('1%'),
  },
  proimage: {
    width: wp('12.5%'),
    height: hp('6%'),
    //  left: hp('34%'),
    //  top: hp('-5%'),
   },
})