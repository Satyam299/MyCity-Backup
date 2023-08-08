import { StyleSheet,Image, Text, View ,TextInput } from 'react-native'
import React, {useState} from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const Profile = ({navigation}) => {
  const [name, Name] = useState('Satyam Yadav');
  const [email, Email] = useState('sy573885@email.com');
  const [mobile, Mobile] = useState('+91-9329923347');

  const [password, setPassword] = useState('');
  return (
    <View  style={styles.container}>
       <Text  style={styles.cattext} >- Profile -</Text>
       <View  style={styles.content}>
       <Image
            source={require('../assets/pro.png')}
            style={styles.proimage}
          />
        <Text  style={styles.font}>Choose Profile</Text>
        <Text  style={styles.font}>Remove Profile</Text>    
          <View  style={styles.fields}>
            <Text  style={styles.label}>Name - </Text>
            <TextInput style={[styles.text1]}
              onChangeText={Name}
              value={name}
              placeholder="User id / Email"
              autoCapitalize='none'
              placeholderTextColor="rgba(255, 255, 255, 0.39)" 
               />
            <Text  style={styles.label}>Email -</Text>
            <TextInput style={[styles.text1]}
               onChangeText={Email}
               value={email}
               placeholder="User id / Email"
               autoCapitalize='none'
               placeholderTextColor="rgba(255, 255, 255, 0.39)" 
            />
            <Text  style={styles.label}>Mobile -</Text>
            <TextInput style={[styles.text1]}
               onChangeText={Mobile}
               value={mobile}
               placeholder="User id / Email"
               autoCapitalize='none'
               placeholderTextColor="rgba(255, 255, 255, 0.39)" 
            />
            <Text  style={styles.btn}>Save Changes</Text>
          </View>
          <View  style={styles.fields}>
            <Text  style={styles.label2}>Old Password - </Text>
            <TextInput style={[styles.text2]}
              onChangeText={Name}
              value={name}
              placeholder="User id / Email"
              autoCapitalize='none'
              placeholderTextColor="rgba(255, 255, 255, 0.39)" 
               />
            <Text  style={styles.label2}>New Password -</Text>
            <TextInput style={[styles.text2]}
               onChangeText={Email}
               value={email}
               placeholder="User id / Email"
               autoCapitalize='none'
               placeholderTextColor="rgba(255, 255, 255, 0.39)" 
            />
            <Text  style={styles.passbtn}>Change Password</Text>
          </View>
       </View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        height: hp('75%'),
        width: wp('90%'),
        top: hp('2%'),
        display:'flex',
        alignItems:'center',
        margin: hp('2.5%'),
        padding: hp('2.5%'),
        borderRadius: 8,
        gap:4,
      },
      proimage:{
        borderRadius: 50,
        height: hp('13%'),
        width: wp('25.6%'),
        marginBottom:hp('1%'),
      },
      fields:{
        display:'flex',
        flexDirection:"column",
        marginTop:hp('2%'),
      },
      text1: {
        fontSize:11,
        height: hp('4%'),
        width: wp('60%'),
        margin: 2,
        borderRadius: 9,
        padding: 9,
        color: "white",
        backgroundColor: 'rgba(72, 72, 91, 0.50)',
        left: hp('3%'),
      },
      btn:{
        top: hp('2.5%'),
        left: hp('18%'),
        backgroundColor:'#1E1E2A',
        width: wp('29%'),
        color: "white",
        borderRadius: 21,
        textAlign: 'center',
        padding: 9,
        fontFamily: 'Fredoka-Light',
        fontSize:11,
      },
      label:{
        fontFamily: 'Fredoka-SemiBold',
        color: '#ffffff',
        textAlign: 'left',
        fontSize:12,
        left: hp('-4%'),
        top: hp('3%'),
      },
      text2: {
        fontSize:11,
        height: hp('4%'),
        width: wp('40%'),
        margin: 2,
        borderRadius: 9,
        padding: 9,
        color: "white",
        backgroundColor: 'rgba(72, 72, 91, 0.50)',
        left: hp('4%'),
      },
      label2:{
        fontFamily: 'Fredoka-SemiBold',
        color: '#ffffff',
        textAlign: 'left',
        fontSize:11,
        left: hp('-7%'),
        top: hp('3%'),
      },
      passbtn:{
        top: hp('2.4%'),
        left: hp('13%'),
        backgroundColor:'#1E1E2A',
        width: wp('29%'),
        color: "white",
        borderRadius: 21,
        textAlign: 'center',
        padding: 9,
        fontFamily: 'Fredoka-Light',
        fontSize:11,
      },
})