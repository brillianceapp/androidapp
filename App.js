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
import Settings from "./navigation/Settings";
import Notification from "./navigation/Notification";
import FirstPage from "./navigation/FirstPage";
import ImportWallet from "./navigation/ImportWallet";
import Support from "./navigation/Support";
import SendList from "./navigation/SendList";
import ReceiveList from "./navigation/ReceiveList";
import CreateWallet from "./navigation/CreateWallet";
import Manage from "./navigation/Manage";
import AddCrypto from "./navigation/AddCrypto";
import CoinView from "./navigation/CoinView";
import SendCoin from "./navigation/SendCoin";
import ReceiveCoin from "./navigation/ReceiveCoin";
import Backup from "./navigation/Backup";
import Reward from "./navigation/Reward";
import Refer from "./navigation/Refer";
import AirdropWallet from "./navigation/AirdropWallet";
import Deposit from "./navigation/Deposit";
import Withdrew from "./navigation/Withdrew";
import Stake from "./navigation/Stake";
import Swap from "./navigation/Swap";
import AllHistory from "./navigation/AllHistory";
import History from "./navigation/History";
import Welcome from "./navigation/Welcome";
import Password from "./navigation/Password";
import About from "./navigation/About";
import Terms from "./navigation/Terms";


const Stack = createNativeStackNavigator()
const auth = 1
const App = ({navigation}) => {
  console.log(navigation)
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Welcome"}
                       screenOptions={{
                         headerTitleAlign:"center",
                         headerStyle: {
                           backgroundColor: 'white',
                         },
                         headerTintColor: 'black',
                         headerTitleStyle: {
                           fontWeight: 'normal',
                         },
                         navigationBarColor: '#D0E1F1'
                       }}>
        <Stack.Screen name="Bottom" component={Bottom} options={{unmountOnBlur: true,headerShown:false}} />
        <Stack.Screen name="Welcome" component={Welcome} options={{unmountOnBlur: true,headerShown:false}} />
        <Stack.Screen name="FirstPage" component={FirstPage} options={{unmountOnBlur: true,headerShown:false}} />
        <Stack.Screen name="CreateWallet" component={CreateWallet} options={{unmountOnBlur: true,headerShown:false}} />

        <Stack.Screen name="Password" component={Password} options={{
          headerShown:true,
          headerBackVisible:true,
          headerStyle: { backgroundColor: '#D0E1F1'},
          headerTintColor: '#000000',
          headerTitleStyle:{
            fontSize:22
          },
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

        <Stack.Screen name="Terms" component={Terms} options={{
          headerShown:true,
          headerBackVisible:true,
          headerStyle: { backgroundColor: '#D0E1F1'},
          headerTintColor: '#000000',
          headerTitle:"Terms & Condition ",
          headerTitleStyle:{
            fontSize:22
          },
          headerShadowVisible: false,
        }} />

        <Stack.Screen name="Setting" component={Settings} options={{
          headerShown:true,
          headerBackVisible:true,
          headerStyle: { backgroundColor: '#D0E1F1'},
          headerTintColor: '#000000',
          headerTitleStyle:{
            fontSize:22
          },
          headerShadowVisible: false,
        }} />

        <Stack.Screen name="Notification" component={Notification} options={{
          headerShown:true,
          headerBackVisible:true,
          headerStyle: { backgroundColor: '#D0E2F0'},
          headerTintColor: '#000000',
          headerTitleStyle:{
            fontSize:22
          },
          headerShadowVisible: false,
        }} />

        <Stack.Screen name="Support" component={Support} options={{
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
                          backgroundColor: '#D0E1F1'
                        },
                        headerTitle:"Import Wallet",
                        headerTintColor: '#000000',
                        headerTitleStyle:{
                          fontSize:22
                        },
                        headerShadowVisible: false,
                      }} />
        <Stack.Screen name="SendList" component={SendList}
                      options={{
                        headerShown:true,
                        headerBackVisible:true,
                        headerStyle: {
                          backgroundColor: '#D0E1F1'
                        },
                        headerTitle:"Send",
                        headerTintColor: '#000000',
                        headerTitleStyle:{
                          fontSize:22
                        },
                        headerShadowVisible: false,
                      }} />

        <Stack.Screen name="ReceiveList" component={ReceiveList}
                      options={{
                        headerShown:true,
                        headerBackVisible:true,
                        headerStyle: {
                          backgroundColor: '#D0E1F1'
                        },
                        headerTitle:"Receive",
                        headerTintColor: '#000000',
                        headerTitleStyle:{
                          fontSize:22
                        },
                        headerShadowVisible: false,
                      }} />

        <Stack.Screen name="AddCrypto" component={AddCrypto}
                      options={{
                        headerShown:true,
                        headerBackVisible:true,
                        headerStyle: {
                          backgroundColor: '#D0E1F1'
                        },
                        headerTitle:"Token",
                        headerTintColor: '#000000',
                        headerTitleStyle:{
                          fontSize:25
                        },
                        headerShadowVisible: false,
                      }} />

        <Stack.Screen name="Manage" component={Manage}
                      options={({navigation})=>(
                        {
                          headerShown:true,
                          headerBackVisible:true,
                          headerStyle: {
                            backgroundColor: '#D0E1F1'
                          },
                          headerTitle:"Manage Crypto",
                          headerTintColor: '#000000',
                          headerTitleStyle:{
                            fontSize:22
                          },
                          headerShadowVisible: false,
                          headerRight: () => (
                            <View>
                              <TouchableOpacity onPress={()=>navigation.navigate("AddCrypto")}>
                                <FontAwesome6 style={{padding:10}} name={'plus'} color="#000000" size={25}  />
                              </TouchableOpacity>
                            </View>
                          )
                        }

                      )} />


        <Stack.Screen name="CoinView" component={CoinView}
                      options={({route,navigation})=>(
                        {
                          headerShown:true,
                          headerBackVisible:true,
                          headerStyle: {
                            backgroundColor: '#D0E1F1'
                          },
                          headerTitle:route.params.name,
                          headerTintColor: '#000000',
                          headerTitleStyle:{
                            fontSize:25
                          },
                          headerShadowVisible: false,
                        }
                      )} />
        <Stack.Screen name="SendCoin" component={SendCoin}
                      options={({route,navigation})=>(
                        {
                          headerShown:true,
                          headerBackVisible:true,
                          headerStyle: {
                            backgroundColor: '#D0E1F1'
                          },
                          headerTitle: "Send "+route.params.name,
                          headerTintColor: '#000000',
                          headerTitleStyle:{
                            fontSize:25
                          },
                          headerShadowVisible: false,
                        }
                      )} />

        <Stack.Screen name="AllHistory" component={AllHistory}
                      options={({route,navigation})=>(
                        {
                          headerShown:true,
                          headerBackVisible:true,
                          headerStyle: {
                            backgroundColor: '#D0E1F1'
                          },
                          headerTitle: "History ",
                          headerTintColor: '#000000',
                          headerTitleStyle:{
                            fontSize:25
                          },
                          headerShadowVisible: false,
                        }
                      )} />

        <Stack.Screen name="History" component={History}
                      options={({route,navigation})=>(
                        {
                          headerShown:true,
                          headerBackVisible:true,
                          headerStyle: {
                            backgroundColor: '#D0E1F1'
                          },
                          headerTitle: "My History ",
                          headerTintColor: '#000000',
                          headerTitleStyle:{
                            fontSize:25
                          },
                          headerShadowVisible: false,
                        }
                      )} />

        <Stack.Screen name="Withdrew" component={Withdrew}
                      options={({route,navigation})=>(
                        {
                          headerShown:true,
                          headerBackVisible:true,
                          headerStyle: {
                            backgroundColor: '#D0E1F1'
                          },
                          headerTitle: "Withdrew "+route.params.name,
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
                            backgroundColor: '#D0E1F1'
                          },
                          headerTitle: "Receive "+route.params.name,
                          headerTintColor: '#000000',
                          headerTitleStyle:{
                            fontSize:25
                          },
                          headerShadowVisible: false,
                        }
                      )} />

        <Stack.Screen name="Deposit" component={Deposit}
                      options={({route,navigation})=>(
                        {
                          headerShown:true,
                          headerBackVisible:true,
                          headerStyle: {
                            backgroundColor: '#D0E1F1'
                          },
                          headerTitle: "Deposit "+route.params.name,
                          headerTintColor: '#000000',
                          headerTitleStyle:{
                            fontSize:25
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

        <Stack.Screen name="Reward" component={Reward}
                      options={({route,navigation})=>(
                        {
                          headerShown:true,
                          headerBackVisible:true,
                          headerStyle: {
                            backgroundColor: '#013686'
                          },
                          headerTitle: route.params.name+" Reward",
                          headerTintColor: '#ffffff',
                          headerTitleStyle:{
                            fontSize:25
                          },
                          headerShadowVisible: false,
                        }
                      )} />
        <Stack.Screen name="Refer" component={Refer}
                      options={({route,navigation})=>(
                        {
                          headerShown:true,
                          headerBackVisible:true,
                          headerStyle: {
                            backgroundColor: '#013686'
                          },
                          headerTintColor: '#ffffff',
                          headerTitleStyle:{
                            fontSize:25
                          },
                          headerShadowVisible: false,
                        }
                      )} />

        <Stack.Screen name="AirdropWallet" component={AirdropWallet}
                      options={({route,navigation})=>(
                        {
                          headerShown:true,
                          headerBackVisible:true,
                          headerStyle: {
                            backgroundColor: '#013686'
                          },
                          headerTitle: " Airdrop",
                          headerTintColor: '#ffffff',
                          headerTitleStyle:{
                            fontSize:25
                          },
                          headerShadowVisible: false,
                          headerRight: () => (
                            <View >
                              <TouchableOpacity onPress={()=>navigation.navigate("History")}
                                                style={{alignItems:"center",
                                                  marginRight:0}}>
                                <FontAwesome6 style={{
                                  padding:10
                                }} name={'book'} color="#ffffff"
                                              size={15}  />
                              </TouchableOpacity>
                            </View>
                          )
                        }
                      )} />

        <Stack.Screen name="Stake" component={Stake}
                      options={({route,navigation})=>(
                        {
                          headerShown:true,
                          headerBackVisible:true,
                          headerStyle: {
                            backgroundColor: '#013686'
                          },
                          headerTitle: "Stake",
                          headerTintColor: '#ffffff',
                          headerTitleStyle:{
                            fontSize:25
                          },
                          headerShadowVisible: false,
                        }
                      )} />

        <Stack.Screen name="Swap" component={Swap}
                      options={({route,navigation})=>(
                        {
                          headerShown:true,
                          headerBackVisible:true,
                          headerStyle: {
                            backgroundColor: '#013686'
                          },
                          headerTitle: "Swap",
                          headerTintColor: '#ffffff',
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

