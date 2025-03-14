import React,{Component} from 'react';
import {
  Image,
  View,
  Button,
  Text,
  TouchableOpacity,
  Alert,
  TextInput,
  Linking,
  StatusBar,
  BackHandler, ScrollView, ToastAndroid,
} from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import AsyncStorage from "@react-native-async-storage/async-storage";

class Settings extends Component {

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  logOut=async ()=>{
    try {
      await AsyncStorage.removeItem("token");
      await ToastAndroid.show("Successfully Logout",
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
        ToastAndroid.CENTER
      );
    } catch (error) {
      console.log("error storage side menu")
    }
    await this.props.navigation.navigate("FirstPage")
  }

  handleBackButton = () => {
    this.props.navigation.goBack()
    return true;
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  render() {
    return (
      <ScrollView>
        <View flex={1} style={{backgroundColor:"#D0E1F1"}} >
          <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#D0E1F1" translucent = {true}/>
          <View style={{paddingHorizontal:20}}>

            <Text style={{fontSize:20,color:"#000000",marginTop:30,marginBottom:20}}>General</Text>

            <View style={{backgroundColor:"#ffffff",height:50,marginBottom:20,
              borderRadius:25,paddingHorizontal:15,flexDirection:"row"}}>
              <TouchableOpacity style={{flexDirection:"row",width:"100%"}}
                                onPress={()=>this.props.navigation.navigate("Support")}
              >
                <FontAwesome6 style={{
                  padding:12
                }} name={'headset'} color="#014281" size={25}  />
                <Text style={{color:"#014281",fontSize:18,padding:10}}>Support</Text>
              </TouchableOpacity>
            </View>

            <View style={{backgroundColor:"#ffffff",height:50,marginBottom:20,
              borderRadius:25,paddingHorizontal:15,flexDirection:"row"}}>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate("About")}
                                style={{flexDirection:"row",width:"100%"}}>
                <FontAwesome6 style={{
                  padding:12
                }} name={'circle-question'} color="#014281" size={25}  />
                <Text style={{color:"#014281",fontSize:18,padding:10}}>About US</Text>
              </TouchableOpacity>
            </View>

            <View style={{backgroundColor:"#ffffff",height:50,marginBottom:20,
              borderRadius:25,paddingHorizontal:15,flexDirection:"row"}}>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate("Terms")}
                                style={{flexDirection:"row",width:"100%"}}>
                <FontAwesome6 style={{
                  padding:12
                }} name={'circle-question'} color="#014281" size={25}  />
                <Text style={{color:"#014281",fontSize:18,padding:10}}>Terms & Condition</Text>
              </TouchableOpacity>
            </View>

            <View style={{backgroundColor:"#ffffff",height:50,marginBottom:20,
              borderRadius:25,paddingHorizontal:15,flexDirection:"row"}}>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate("Password")}
                                style={{flexDirection:"row",width:"100%"}}>
                <FontAwesome6 style={{
                  padding:12
                }} name={'key'} color="#014281" size={25}  />
                <Text style={{color:"#014281",fontSize:18,padding:10}}>Security</Text>
              </TouchableOpacity>
            </View>

            <View style={{backgroundColor:"#ffffff",height:50,marginBottom:20,
              borderRadius:25,paddingHorizontal:15,flexDirection:"row"}}>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate("Backup")}
                                style={{flexDirection:"row",width:"100%"}}>
                <FontAwesome6 style={{
                  padding:12
                }} name={'database'} color="#014281" size={25}  />
                <Text style={{color:"#014281",fontSize:18,padding:10}}>Backup Wallet</Text>
              </TouchableOpacity>
            </View>

            <Text style={{fontSize:20,color:"#000000",marginTop:20,marginBottom:20}}>Our Channels</Text>

            <View style={{backgroundColor:"#90C9FF",height:50,marginBottom:20,
              borderRadius:25,paddingHorizontal:15,flexDirection:"row"}}>
              <TouchableOpacity style={{flexDirection:"row",width:"100%"}}>
                <FontAwesome6 style={{
                  padding:12
                }} name={'telegram'} color="#014281" size={25}  />
                <Text style={{color:"#000000",fontSize:18,padding:10,paddingLeft:20}}>Telegram</Text>
              </TouchableOpacity>
            </View>

            <View style={{backgroundColor:"#90C9FF",height:50,marginBottom:20,
              borderRadius:25,paddingHorizontal:15,flexDirection:"row"}}>
              <TouchableOpacity style={{flexDirection:"row",width:"100%"}}>
                <FontAwesome6 style={{
                  padding:12
                }} name={'x-twitter'} color="#014281" size={25}  />
                <Text style={{color:"#000000",fontSize:18,padding:10,paddingLeft:20}}>Twitter</Text>
              </TouchableOpacity>
            </View>

            <View style={{backgroundColor:"#90C9FF",height:50,marginBottom:20,
              borderRadius:25,paddingHorizontal:15,flexDirection:"row"}}>
              <TouchableOpacity style={{flexDirection:"row",width:"100%"}}>
                <FontAwesome6 style={{
                  padding:12
                }} name={'youtube'} color="#014281" size={25}  />
                <Text style={{color:"#000000",fontSize:18,padding:10,paddingLeft:20}}>Youtube</Text>
              </TouchableOpacity>
            </View>

            <View style={{height:150,padding:20,paddingHorizontal:50,marginBottom:100}}>
              <TouchableOpacity onPress={this.logOut} style={{height:50,width:"80",borderRadius:25,marginTop:0,
                borderColor:"#022F64",borderWidth:2,alignItems:"center",padding:8}}>
                <Text style={{fontSize:20,color:"#022F64",fontWeight:"bold"}}>Log Out</Text>
              </TouchableOpacity>
            </View>


          </View>
        </View>
      </ScrollView>
    );
  }
}

export default Settings;
