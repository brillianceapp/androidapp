import React from 'react';
import { View, Text, Image, ScrollView, TextInput, StatusBar, TouchableOpacity, Linking,LogBox  } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import { decode } from "base-64";
global.atob = decode;
global.Buffer = require('buffer').Buffer;
//ALTER TABLE user AUTO_INCREMENT=1000000;
//gradlew clean
//gradlew assembleRelease
// aab realease npx react-native build-android --mode=release
//https://github.com/facebook/react-native/issues/28510
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
import "./ignoreWarnings"
LogBox.ignoreAllLogs();
//https://github.com/zerofeewallet/android
//26 dec 2024 start date

import Bottom from "./navigation/Bottom";
import FirstPage from "./navigation/FirstPage";
import ImportWallet from "./navigation/ImportWallet";
import CreateWallet from "./navigation/CreateWallet";
import SendCoin from "./navigation/SendCoin";
import ReceiveCoin from "./navigation/ReceiveCoin";
import Backup from "./navigation/Backup";
import About from "./navigation/About";


const Stack = createNativeStackNavigator()
const auth = 1
const App = ({navigation}) => {
  console.log(navigation)
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"FirstPage"}
                       screenOptions={{
                         headerTitleAlign:"center",
                         headerStyle: {
                           backgroundColor: 'white',
                         },
                         headerTintColor: 'black',
                         headerTitleStyle: {
                           fontWeight: 'normal',
                         },
                         navigationBarColor: '#FFFFFF'
                       }}>
        <Stack.Screen name="Bottom" component={Bottom} options={{unmountOnBlur: true,headerShown:false}} />
        <Stack.Screen name="FirstPage" component={FirstPage} options={{unmountOnBlur: true,headerShown:false}} />
        <Stack.Screen name="CreateWallet" component={CreateWallet} options={{unmountOnBlur: true,
          headerTitle:"Create Wallet",
          headerTintColor: '#0078EA',
          headerShown:true,
          headerShadowVisible: false,
        }} />


        <Stack.Screen name="About" component={About} options={{
          headerShown:true,
          headerBackVisible:true,
          headerStyle: { backgroundColor: '#D0E1F1'},
          headerTintColor: '#000000',
          headerTitleStyle:{
            fontSize:22
          },
          headerShadowVisible: false,
        }} />



        <Stack.Screen name="ImportWallet" component={ImportWallet}
                      options={{
                        headerShown:true,
                        headerBackVisible:true,
                        headerStyle: {
                          backgroundColor: '#FFFFFF'
                        },
                        headerTitle:"Import Wallet",
                        headerTintColor: '#0078EA',
                        headerTitleStyle:{
                          fontSize:22
                        },
                        headerShadowVisible: false,
                      }} />





        <Stack.Screen name="SendCoin" component={SendCoin}
                      options={({route,navigation})=>(
                        {
                          headerShown:true,
                          headerBackVisible:true,
                          headerStyle: {
                            backgroundColor: '#D0E1F1'
                          },
                          headerTitle: "Send ",
                          headerTintColor: '#000000',
                          headerTitleStyle:{
                            fontSize:25
                          },
                          headerShadowVisible: false,
                        }
                      )} />



        <Stack.Screen name="ReceiveCoin" component={ReceiveCoin}
                      options={({route,navigation})=>(
                        {
                          headerShown:true,
                          headerBackVisible:true,
                          headerStyle: {
                            backgroundColor: '#FFFFFF',
                          },
                          headerTitle: "Receive Brilliance ",
                          headerTintColor: '#0078EA',
                          headerTitleStyle:{
                            fontSize:20
                          },
                          headerShadowVisible: false,
                        }
                      )} />


        <Stack.Screen name="Backup" component={Backup}
                      options={({route,navigation})=>(
                        {
                          headerShown:true,
                          headerBackVisible:true,
                          headerStyle: {
                            backgroundColor: '#D0E1F1'
                          },
                          headerTitle: "Back Up ",
                          headerTintColor: '#000000',
                          headerTitleStyle:{
                            fontSize:25
                          },
                          headerShadowVisible: false,
                        }
                      )} />




        {/*<Stack.Screen name="Referral" component={Referral}
          options={{
          headerShown:true,
          headerBackVisible:true,
          headerStyle: {
          backgroundColor: '#F6FCFF'
        },
          headerTitle:"Invite Friends",
          headerTintColor: '#008CFF',
          headerTitleStyle:{
          fontSize:18
        },
          headerShadowVisible: false,
        }} />
        */}

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

