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
  ScrollView, StyleSheet, ToastAndroid,
} from "react-native";
import Video, {VideoRef} from 'react-native-video';
import AsyncStorage from "@react-native-async-storage/async-storage";
import ApiUrl from "../AppUrl/ApiUrl";

const background = require('../images/genaratevidemp4.mp4');

class CreateWallet extends Component {

  constructor() {
    super();
    this.state={
      loading:false
    }
  }

 async componentDidMount() {
    try {
      const token  =await AsyncStorage.getItem("token");
      if(token){
        this.setState({token:token})
        setTimeout(()=>{
          this.props.navigation.navigate("Bottom")
        },500)
      }
    } catch (error) {
      this.setState({token:""})
    }
    this.submitData()
  }

  submitData=async ()=>{
    this.setState({loading:true})
    var formdata = new FormData()
    await fetch(ApiUrl.baseurl+"createwallet",{
      method: 'post',
      headers: { 'Content-Type':'multipart/form-data'},
      //body:formdata
    })
      .then(response => response.json())
      .then(res => {
        this.setState({loading:false})
        //console.log(res)
        if(res.success){
          this.Toast("Wallet Created and "+res.success)
          this.setToken(res.token)
          setTimeout(()=>{
            this.props.navigation.navigate("Bottom")
          },3000)
        }
        if(res.error){
          this.Toast(res.error)
        }
        this.setState({loading:false})
      })
      .catch(err => {
        console.log(err)
        //this.submitData()
      })
  }

  setToken=async (val)=>{
    try {
      await AsyncStorage.setItem("token",val);
      console.log("Token set successfully ")
    } catch (error) {
      console.log("Token Set storage error ")
    }
  }

  Toast=(val)=>{
    ToastAndroid.show(val,
      ToastAndroid.SHORT,
      ToastAndroid.TOP,
      ToastAndroid.CENTER
    );
  }

  render() {
    return (
      <View flex={1} style={{backgroundColor:"#D2E1F2",paddingBottom:60}} >
        <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#D2E1F2" translucent = {true}/>

        <ScrollView>
          <View style={{padding:35}}>
            <Video
              // Can be a URL or a local file.
              source={background}
              repeat={true}
              style={styles.backgroundVideo}
            />
            <Text style={{color:"black",fontSize:19,marginTop:80}}>
              We are creating your wallet
            </Text>
            {this.state.loading==false?
              <Text style={{color:"black",fontSize:25,marginBottom:0,marginTop:25}}>
                Your wallet is now <Text style={{color:"#063267"}}>Ready</Text>
              </Text>:""
            }
          </View>
        </ScrollView>

      </View>
    );
  }
}
var styles = StyleSheet.create({
  backgroundVideo: {
    height:300,
    width:"100%",
    marginTop:80
  },
});

export default CreateWallet;
