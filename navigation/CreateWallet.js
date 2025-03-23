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
  ScrollView, StyleSheet, ToastAndroid, BackHandler, Clipboard, ActivityIndicator,
} from "react-native";
import Video, {VideoRef} from 'react-native-video';
import AsyncStorage from "@react-native-async-storage/async-storage";
import ApiUrl from "../AppUrl/ApiUrl";
// Import the crypto getRandomValues shim (**BEFORE** the shims)

import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import {ethers} from "ethers";
import 'react-native-get-random-values';


class CreateWallet extends Component {

  constructor() {
    super();
    this.state={
      loading:false,key:""
    }
  }

 async componentDidMount() {
   BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);

  }

  Toast=(val)=>{
    ToastAndroid.show(val,
      ToastAndroid.SHORT,
      ToastAndroid.TOP,
      ToastAndroid.CENTER
    );
  }
  handleBackButton = () => {
    this.props.navigation.goBack()
    return true;
  }

  createWallet=async ()=>{
    await this.setState({loading:true})
    const genRanHex = size => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');
    var key = genRanHex(64)
    let wallet = new ethers.Wallet(key);
    console.log(key, "Key")
    var address = wallet.address
    console.log(address,"Address")

    setTimeout(()=>{
      this.setState({key:key,loading:false})
      this.setToken(key)
    },2000)

    /*
   var d = ethers.Wallet.createRandom().privateKey
    var key = d.substring(2)
    this.setState({key:key})
    console.log(key)
    this.setState({key:key})
    if(d){
      this.setState({key:key,loading:false})
      this.setToken(key)
    }
    */


  }

  setToken=async (val)=>{
    try {
      await AsyncStorage.setItem("token",val);
      console.log("Token set successfully ")
      setTimeout(()=>{
        this.props.navigation.navigate("Bottom")
      },5000)
    } catch (error) {
      console.log("Token Set storage error ")
    }
  }

  copyToClipboard = () => {
    Clipboard.setString(this.state.key);
    ToastAndroid.show(this.state.key,
      ToastAndroid.SHORT,
      ToastAndroid.TOP,
      ToastAndroid.CENTER
    );
  };

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  render() {
    return (
      <View flex={1} style={{backgroundColor:"#FFFFFF",paddingBottom:60}} >
        <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#FFFFFF" translucent = {true}/>

        <ScrollView>

          {this.state.key?
            <>

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
                    {this.state.key}
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

                <TouchableOpacity onPress={()=>this.props.navigation.navigate("Bottom")}
                                  style={{backgroundColor:"#0078EA",width:"100%",
                                    height:55,borderRadius:10,marginTop:20}}>
                  <Text style={{color:"white",textAlign:"center",padding:12,fontSize:20}}>Go to Wallet</Text>
                </TouchableOpacity>

              </View>

            </>

            :
            <View style={{paddingHorizontal:40}}>

              <Text style={{color:"red",fontSize:15,marginTop:100,display:"none"}}>Note : New Private Key generate will take 30 Second to 60 Second . Please Wait
                After Clicking Create Wallet Now
              </Text>

              <TouchableOpacity onPress={this.createWallet} disabled={this.state.loading}
                style={{backgroundColor:"#0078EA",width:"100%",
                  height:55,borderRadius:10,marginTop:250}}>
                <Text style={{color:"white",textAlign:"center",padding:12,fontSize:20}}>
                  {this.state.loading==true?<ActivityIndicator size="large" color="#ffffff" />
                    :"Create Wallet Now"
                  }
                </Text>
              </TouchableOpacity>
            </View>
          }


        </ScrollView>

      </View>
    );
  }
}


export default CreateWallet;
