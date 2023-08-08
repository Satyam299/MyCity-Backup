import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import Loading from './Loading';
import Landing from './Landing';
import Login from './Login';
import Register from './Register';
import Otpverify from './Otpverify';
import Home from '../src/Home';
import Category from '../src/Category';
import Card from '../src/Card';
import test from './Test';
import Servicelist from '../src/Servicelist';
import Profile from '../src/Profile';
import Header from '../src/Header';
import Setting from '../src/Setting';
import SignupScreen from './SignupScreen';
import Chat from '../src/Chat';


const Stack = createStackNavigator();




const Nav = () => {
  return (
    <NavigationContainer>
     <Stack.Navigator>
       <Stack.Screen name="Loading" component={Loading}  options={{headerShown: false}}/> 
       <Stack.Screen name="Landing" component={Landing}  options={{headerShown: false}}/> 
       <Stack.Screen name="Login" component={Login}  options={{headerShown: false}}/> 
       <Stack.Screen name="Register" component={Register}  options={{headerShown: false}}/> 
       <Stack.Screen name="Otpverify" component={Otpverify}  options={{headerShown: false}}/> 
       <Stack.Screen name="Home" component={Home}  options={{headerShown: false}}/> 
       <Stack.Screen name="Category" component={Category}  options={{headerShown: false}}/> 
       <Stack.Screen name="Card" component={Card}  options={{headerShown: false}}/> 
       <Stack.Screen name="test" component={test}  options={{headerShown: false}}/> 
       <Stack.Screen name="Servicelist" component={Servicelist}  options={{headerShown: false}}/> 
       <Stack.Screen name="Profile" component={Profile}  options={{headerShown: false}}/> 
       <Stack.Screen name="Header" component={Header}  options={{headerShown: false}}/> 
       <Stack.Screen name="Setting" component={Setting}  options={{headerShown: false}}/> 
       <Stack.Screen name="SignupScreen" component={SignupScreen}  options={{headerShown: false}}/> 
       <Stack.Screen name="Chat" component={Chat}  options={{headerShown: false}}/> 

     </Stack.Navigator>
    </NavigationContainer>

  )
}

export default Nav

const styles = StyleSheet.create({})