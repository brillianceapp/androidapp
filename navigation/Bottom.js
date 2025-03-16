import React, { Component } from "react";
import { Image, View, Button, Text, TouchableOpacity, Alert, TextInput, Linking, BackHandler } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Home from "./bottomtab/Home";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Setting from "./bottomtab/Setting";
import History from "./bottomtab/History";

const Tab = createBottomTabNavigator()



class Bottom extends Component {

  constructor() {
    super();
    this.state={
      token:""
    }
  }

  componentDidMount() {
    //console.log(this.props.route.name)
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      console.log("refreshed....")
    });
  }


  handleBackButton = () => {
    //this.props.navigation.goBack(null);
    console.log("Back Handler Click Home Page "+this.props.route.name)
    BackHandler.exitApp()
    return false;
  }
  componentWillUnmount() {
    this._unsubscribe();
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  handleSubmit=(val)=>{
    this.props.navigation.navigate("Wallet")
  }

  render() {
    return (
      <Tab.Navigator initialRouteName="Wallet"
                     screenOptions={({ route }) => ({
                       tabBarIcon: ({ focused, color, size }) => {
                         let iconName;
                         //console.log(route.name)
                         if (route.name === 'Setting') {
                           iconName = focused ? <FontAwesome5  name={'cog'} style={{marginTop:5}} color="#ffffff"
                                                               size={20}  /> :
                             <FontAwesome5  name={'cog'} color="#000000"
                                            size={20}  />;
                         } else if (route.name === 'History') {
                           iconName = focused ? <FontAwesome5  name={'receipt'} style={{marginTop:5}} color="#ffffff"
                                                               size={20}  /> :
                             <FontAwesome5  name={'receipt'} color="#000000"
                                            size={20}  />;
                         }
                         else if (route.name === 'Wallet') {
                           iconName = focused ?<FontAwesome5  name={'wallet'} style={{marginTop:5}} color="#ffffff"
                                                                                        size={20}  /> :
                             <FontAwesome5  name={'wallet'} color="#000000"
                                            size={20}  /> ;
                         }
                         return iconName;
                       },
                       headerTitleAlign:"center",
                       tabBarActiveTintColor: "#ffffff",
                       tabBarInactiveTintColor: "#000000",
                       tabBarStyle:{
                         backgroundColor:"#FFFFFF",
                         height:110,
                         borderTopWidth: 0,
                         elevation: 0,
                         paddingHorizontal:20,
                         alignItems:"center",
                         position:"absolute"
                       },
                       tabBarLabelStyle: {
                         fontSize: 14,
                         paddingBottom:8,
                         fontWeight:"normal",
                        // display:"none"
                       },
                       tabBarActiveBackgroundColor:"#0078EA",
                       tabBarItemStyle: {
                         borderRadius: 50,
                         marginVertical:3
                       },

                     })}>
        <Tab.Screen name={"History"} component={History} options={{
          headerShown:true,
          unmountOnBlur: true,
          headerTintColor: '#0078EA',
          headerStyle: {
            backgroundColor: '#FFFFFF',
          },
          headerTitleStyle:{
            fontSize:20
          },
          headerShadowVisible: false,
          headerLeft: () => (
            <View  style={{flex:4,flexDirection:"row",paddingTop:15,marginLeft:20}}>
              <TouchableOpacity onPress={this.handleSubmit.bind(this,1)}
                                style={{backgroundColor:"white",width:35,height:35,alignItems:"center",
                                  marginRight:25,borderRadius:50}}>
                <FontAwesome5 style={{
                  padding:9
                }} name={'arrow-left'} color="#0078EA"
                              size={20}  />
              </TouchableOpacity>
            </View>
          ),
        }} />

        <Tab.Screen name={"Wallet"} component={Home}
                    options={{headerShown:true,
                      unmountOnBlur: true,
                      headerTitle: "MAIN WALLET",
                      headerStyle: {
                        backgroundColor: '#ffffff',
                      },
                      headerTitleStyle:{
                        fontSize:18
                      },
                      headerTintColor: '#0078EA',
                      headerShadowVisible: false,
                      headerRight: () => (
                        <View  style={{flex:4,flexDirection:"row",paddingTop:15}}>
                          <TouchableOpacity
                            style={{backgroundColor:"white",width:35,height:35,alignItems:"center",
                              marginRight:25,borderRadius:50}}>
                            <Text  style={{
                              height:"100%",marginTop:0}}>
                              <Image style={{width:25,height:25,}}
                                     source={require("../images/notification.png")} />
                            </Text>
                          </TouchableOpacity>
                        </View>
                      ),
                      headerLeft: () => (
                        <View>
                          <TouchableOpacity onPress={()=>this.props.navigation.navigate("SendCoin")}>
                            <Text  style={{
                              marginLeft:25,height:"100%",marginTop:10}}>
                              <Image style={{width:25,height:25,}}
                                     source={require("../images/bluescaner.png")} />
                            </Text>
                          </TouchableOpacity>
                        </View>
                      ),
                    }} />

        <Tab.Screen name={"Setting"} component={Setting} options={{
          headerShown:true,
          unmountOnBlur: true,
          headerTintColor: '#0078EA',
          headerStyle: {
            backgroundColor: '#FFFFFF',
          },
          headerTitleStyle:{
            fontSize:20
          },
          headerShadowVisible: false,
          headerLeft: () => (
            <View  style={{flex:4,flexDirection:"row",paddingTop:15,marginLeft:20}}>
              <TouchableOpacity onPress={this.handleSubmit.bind(this,1)}
                style={{backgroundColor:"white",width:35,height:35,alignItems:"center",
                  marginRight:25,borderRadius:50}}>
                <FontAwesome5 style={{
                  padding:9
                }} name={'arrow-left'} color="#0078EA"
                              size={20}  />
              </TouchableOpacity>
            </View>
          ),
        }} />

      </Tab.Navigator>
    );
  }
}

export default Bottom;

