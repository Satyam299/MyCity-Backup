import { StyleSheet, Text, Alert ,View ,TouchableOpacity , Image , TextInput} from 'react-native'
import React , { useState }  from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const login = () => {
    apicall();
  }

  const apicall = () => {
    if (!username.trim() || !password.trim()) {
      Alert.alert('Error', 'Please enter both username/email and password.');
      return;
    }
    console.log("call");
    fetch('http://creat8.in/mycity/api/login.php', {
      method: 'POST',
      headers: {
        "Content-type": "application/json;"
      },
      body: JSON.stringify({
        email: username,
        password: password
      }),
    })
    .then(response => response.json())
    .then(json => {
      let result = json.status;
      let userId = json.userId;
      // console.log("login");
      Alert.alert(result +" " +userId);
      if (result === 'true') {
        // Login successful, show a success alert or navigate to the home screen
        Alert.alert('Success', 'Welcome To MyCity.');
        props.navigation.navigate('Home', {userId: userId} );
      } else {
        // Login failed, show an error alert
        Alert.alert('Error', 'Email or password incorrect.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      Alert.alert('Error', 'An error occurred during login.');
    });
  }
  return (
    <View style={styles.container}>
         <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => navigation.navigate('Landing')}
             >
         <Text style={styles.backtext}>Back</Text>
         </TouchableOpacity>
         <View style={styles.logoTitle}>
          <Text style={styles.heading}>My City</Text>
        </View>
        
        <View style={styles.getstarted}>
          <Text style={[styles.para1]}>Welcome Back!</Text>

          <TextInput style={[styles.text1]}
              onChangeText={setUsername}
              value={username}
              placeholder="User id / Email"
              autoCapitalize='none'
              textAlign="center"
              placeholderTextColor="rgba(255, 255, 255, 0.39)" 
               />

           <TextInput style={[styles.text1]}
              onChangeText={setPassword}
              value={password}
              placeholder="Password"
              autoCapitalize='none'
              textAlign="center"
              placeholderTextColor="rgba(255, 255, 255, 0.39)" />

              <TouchableOpacity
              activeOpacity={0.9}
             >
            <Text style={styles.para3}>Forget password</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.9}
              style={styles.btn}
              onPress={login}
             >
              <Text style={styles.para3} >Login</Text>
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

export default Login

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#1E1E2A',
        display: 'flex',
        justifyContent: 'flex-start',
      },
      backtext: {
        top: hp('2%'),
        left: hp('2%'),
        width: wp('11%'),
        letterSpacing: 1,
        height: hp('7%'),
        fontFamily: 'Fredoka-SemiBold',
        color: '#ffffff',
        fontSize: 16,
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
        top: hp('5%'),
      },
      getstarted: {
        backgroundColor: '#0099FF',
        height: hp('38%'),
        width: wp('96%'),
        top: hp('12%'),
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
        top: hp('20%'),
        
      },
      image: {
        width: '100%',
        height: '100%',
      },
})