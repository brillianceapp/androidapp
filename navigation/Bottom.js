import React, { Component } from "react";
import { Image, View, Button, Text, TouchableOpacity, Alert, TextInput, Linking, BackHandler } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Earn from "./bottomtab/Earn";
import Dapps from "./bottomtab/Dapps";
import Home from "./bottomtab/Home";
import Airdrop from "./bottomtab/Airdrop";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
    this.getToken()
  }

  getToken=async ()=>{
    try {
      const token  =await AsyncStorage.getItem("token");
      if(token){
        this.setState({token:token})
      }else{
        setTimeout(()=>{
          this.props.navigation.navigate("FirstPage")
        },200)
      }
    } catch (error) {
      this.setState({token:""})
      console.log("Token error Bottom Home")
    }
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

  render() {
    return (
      <Tab.Navigator initialRouteName="Home"
                     screenOptions={({ route }) => ({
                       tabBarIcon: ({ focused, color, size }) => {
                         let iconName;
                         //console.log(route.name)
                         if (route.name === 'Dapps') {
                           iconName = focused
                             ? <Image style={{width:20,height:20,marginTop:10}} source={require("../images/dappswhite.png")} />
                             : <Image style={{width:20,height:20,marginTop:10}} source={require("../images/dapps.png")} />;
                         }else if (route.name === 'Airdrop') {
                           iconName = focused ? <Image style={{width:20,height:20,marginTop:10}} source={require("../images/airdrop-active-icon.png")} /> :
                             <Image style={{width:20,height:20,marginTop:10}} source={require("../images/airdrop-icon.png")} />;
                         } else if (route.name === 'Earn') {
                           iconName = focused ? <Image style={{width:20,height:20,marginTop:10}} source={require("../images/earnwhite.png")} /> :
                             <Image style={{width:20,height:20,marginTop:10}} source={require("../images/earn.png")} />;
                         }
                         else if (route.name === 'Home') {
                           iconName = focused ? <Image style={{width:20,height:20,marginTop:10}} source={require("../images/home-iconwhite.png")} /> :
                             <Image style={{width:22,height:22,marginTop:8}} source={require("../images/home-icon.png")} /> ;
                         }
                         return iconName;
                       },
                       headerTitleAlign:"center",
                       tabBarActiveTintColor: "#ffffff",
                       tabBarInactiveTintColor: "#023064",
                       tabBarStyle:{
                         backgroundColor:"#D0E1F1",
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
                         fontWeight:"normal"
                       },
                       tabBarActiveBackgroundColor:"#023064",
                       tabBarItemStyle: {
                         borderRadius: 50,
                         marginVertical:3,
                       }

                     })}>
        <Tab.Screen name={"Home"} component={Home}
                    options={{headerShown:true,
                      unmountOnBlur: true,
                      headerTitle: ()=>{
                        <View style={{display:"flex",flex:1,flexDirection:"column"}}>
                          <Text>Home</Text>
                        </View>
                      },
                      headerStyle: {
                        backgroundColor: '#D0E1F1',//D0E1F1
                        height: 100,
                      },
                      headerRight: () => (
                        <View  style={{flex:4,flexDirection:"row",paddingTop:15}}>
                          <TouchableOpacity onPress={()=>this.props.navigation.navigate("Notification")}
                                            style={{backgroundColor:"white",width:35,height:35,alignItems:"center",
                                              marginRight:15,borderRadius:50}}>
                            <Image style={{width:17,height:17,marginTop:8,
                            }}
                                   source={require("../images/notification-icon.png")} />
                          </TouchableOpacity>
                          <TouchableOpacity onPress={()=>this.props.navigation.navigate("Setting")}
                                            style={{backgroundColor:"white",width:35,height:35,alignItems:"center",
                                              marginRight:25,borderRadius:50}}>
                            <FontAwesome6 style={{
                              padding:9
                            }} name={'gear'} color="#014281"
                                          size={17}  />
                          </TouchableOpacity>
                        </View>
                      ),
                      headerLeft: () => (
                        <View>
                          <Text  style={{
                            marginLeft:25,height:"100%"}}>
                            <Image style={{width:90,height:35,marginTop:0}}
                                   source={require("../images/logoh.png")} />
                          </Text>
                        </View>
                      ),
                    }} />
        <Tab.Screen name={"Dapps"} component={Dapps} options={{
          headerShown:false,
          unmountOnBlur: true,
          headerStyle: {
            backgroundColor: '#F3FAFF',
          }
        }} />
        <Tab.Screen name={"Earn"} component={Earn} options={{
          headerShown:true,
          unmountOnBlur: true,
          headerTintColor: '#ffffff',
          headerStyle: {
            backgroundColor: '#002B69',
          },
          headerTitleStyle:{
            fontSize:25
          },
          headerShadowVisible: false,
        }} />

        <Tab.Screen name={"Airdrop"} component={Airdrop} options={{
          headerShown:true,
          unmountOnBlur: true,
          headerTintColor: '#ffffff',
          headerTitle: "Airdrop Page",
          headerStyle: {
            backgroundColor: '#013B94',
          },
          headerTitleStyle:{
            fontSize:23
          },
          headerShadowVisible: false,
        }} />

      </Tab.Navigator>
    );
  }
}

export default Bottom;

