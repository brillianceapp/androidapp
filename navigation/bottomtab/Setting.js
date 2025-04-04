import {
  View,
  Text,
  StatusBar,
  Image,
  ScrollView,
  TextInput,
  SafeAreaView,
  Button,
  TouchableOpacity, Dimensions, ToastAndroid,
  Linking
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import React, { Component } from "react";
import Carousel from "react-native-snap-carousel";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import AsyncStorage from "@react-native-async-storage/async-storage";

class Setting extends Component {

  logOut=async ()=>{
    try {
      await AsyncStorage.removeItem("token");
      await ToastAndroid.show("Successfully Logout",
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
        ToastAndroid.CENTER
      );
      setTimeout(()=>{
        this.props.navigation.navigate("FirstPage")
      },1000)
    } catch (error) {
      this.logOut()
      console.log("error storage side menu")
    }

      try {
        await AsyncStorage.removeItem("bal");
      } catch (error) {
      }

  }


  render() {

    return (
      <View flex={1} style={{flexDirection:"column",justifyContent:"center",backgroundColor:"#FFFFFF"}} >
        <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#FFFFFF" translucent = {true}/>

        <ScrollView style={{paddingHorizontal:0,marginBottom:100}}>
          <View style={{paddingHorizontal:20,marginTop:50}}>

            <View style={{backgroundColor:"#E5EAFF",height:50,marginBottom:20,
              borderRadius:25,paddingHorizontal:15,flexDirection:"row"}}>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate("About")}
                                style={{flexDirection:"row",width:"100%"}}>
                <Image style={{width:25,height:25,marginTop:10}}
                       source={require("../../images/globalblue.png")} />
                <Text style={{color:"#0078EA",fontSize:18,padding:10}}>About US</Text>
              </TouchableOpacity>
            </View>


            <View style={{backgroundColor:"#E5EAFF",height:50,marginBottom:20,
              borderRadius:25,paddingHorizontal:15,flexDirection:"row"}}>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate("Backup")}
                                style={{flexDirection:"row",width:"100%"}}>
                <Image style={{width:25,height:25,marginTop:10}}
                       source={require("../../images/bluekey.png")} />
                <Text style={{color:"#0078EA",fontSize:18,padding:10}}>Backup Wallet</Text>
              </TouchableOpacity>
            </View>

            <Text style={{fontSize:18,color:"#000000",marginTop:20,marginBottom:20}}>Follow us on</Text>

            <View style={{backgroundColor:"#tranparent",height:50,marginBottom:5,
              borderRadius:25,paddingHorizontal:15,flexDirection:"row"}}>
              <TouchableOpacity onPress={()=>Linking.openURL("https://t.me/brilliancecoin")}
                style={{flexDirection:"row",width:"100%"}}>
                <FontAwesome6 style={{
                  padding:12
                }} name={'telegram'} color="#0078EA" size={25}  />
                <Text style={{color:"#000000",fontSize:18,padding:10,paddingLeft:20}}>Telegram Channel</Text>
              </TouchableOpacity>
            </View>

            <View style={{backgroundColor:"#tranparent",height:50,marginBottom:5,
              borderRadius:25,paddingHorizontal:15,flexDirection:"row"}}>
              <TouchableOpacity onPress={()=>Linking.openURL("https://t.me/brilliancecoingroup")}
                                style={{flexDirection:"row",width:"100%"}}>
                <FontAwesome6 style={{
                  padding:12
                }} name={'telegram'} color="#0078EA" size={25}  />
                <Text style={{color:"#000000",fontSize:18,padding:10,paddingLeft:20}}>Telegram Group</Text>
              </TouchableOpacity>
            </View>

            <View style={{backgroundColor:"#tranparent",height:50,marginBottom:5,
              borderRadius:25,paddingHorizontal:15,flexDirection:"row"}}>
              <TouchableOpacity onPress={()=>Linking.openURL("https://x.com/brilliance090")}
                style={{flexDirection:"row",width:"100%"}}>
                <FontAwesome6 style={{
                  padding:12
                }} name={'x-twitter'} color="#014281" size={25}  />
                <Text style={{color:"#000000",fontSize:18,padding:10,paddingLeft:20}}>Twitter</Text>
              </TouchableOpacity>
            </View>


            <View style={{height:150,padding:20,paddingHorizontal:0,marginBottom:50,marginTop:40}}>
              <TouchableOpacity onPress={this.logOut} style={{height:50,borderRadius:25,marginTop:0,
                borderColor:"red",borderWidth:1,alignItems:"center",padding:8}}>
                <Text style={{fontSize:20,color:"red"}}>Log Out</Text>
              </TouchableOpacity>
            </View>


          </View>

        </ScrollView>

      </View>
    );
  }
}

export default Setting;
