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
  ScrollView,
  Clipboard,
  ToastAndroid, BackHandler,
} from "react-native";
import React, { Component } from "react";
import QRCode from 'react-native-qrcode-image';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ethers } from "ethers";

class Backup extends Component {
  constructor() {
    super();
    this.state={
      name:"",
      address:"",token:""
    }
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    this.getToken()
  }
  getToken=async ()=>{
    try {
      const token  =await AsyncStorage.getItem("token");
      if(token){
        this.setState({token:token})
        let wallet = new ethers.Wallet(token);
        var address = wallet.address
        this.setState({address:address})
      }else {
        this.props.navigation.navigate("FirstPage")
      }
    } catch (error) {
      console.log("error storage ")
    }

  }
  handleBackButton = () => {
    this.props.navigation.goBack()
    return true;
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }


  copyToClipboard = () => {
    Clipboard.setString(this.state.token);
    ToastAndroid.show(this.state.token,
      ToastAndroid.SHORT,
      ToastAndroid.TOP,
      ToastAndroid.CENTER
    );
  };

  render() {
    return (
      <View flex={10} style={{backgroundColor:"#FFFFFF",paddingBottom:60}} >
        <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#FFFFFF" translucent = {true}/>


        <ScrollView>
          <View style={{padding:20,alignItems:"center"}}>
            <Text style={{color:"black",fontSize:22,marginTop:30,fontWeight:"bold"}}>
              Secret Your Private Key
            </Text>
            <Text style={{color:"red",fontSize:16,marginBottom:60,marginTop:25,textAlign:"center",paddingHorizontal:15}}>
              If you loss your private key you will loss your fund access
            </Text>

          </View>
          <View style={{paddingHorizontal:40}}>
            <Text style={{color:"black",fontSize:18,marginBottom:20}}>
              Private Key
            </Text>

            <TouchableOpacity>
              <Text style={{borderColor:"#0078EA",borderWidth:2,
                borderRadius:15,height:150,backgroundColor:"#E8F1FF",padding:25,
                color:"black",fontSize:20}}>
                {this.state.token}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={this.copyToClipboard}>
              <Text style={{color:"#0078EA",fontSize:18,marginTop:60,
                textAlign:"center"}}>
                Copy to Clipboard <FontAwesome6 style={{
                padding:9
              }} name={'copy'} color="#0078EA"
                                                size={18}  />
              </Text>
            </TouchableOpacity>


          </View>
        </ScrollView>


      </View>
    );
  }
}

export default Backup;
