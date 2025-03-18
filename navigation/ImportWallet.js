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
  StatusBar,Clipboard,
  ScrollView, BackHandler, ToastAndroid, ActivityIndicator,
} from "react-native";
import ApiUrl from "../AppUrl/ApiUrl";
import AsyncStorage from "@react-native-async-storage/async-storage";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import { ethers } from "ethers";

class ImportWallet extends Component {
  constructor() {
    super();
    this.state={
      key:"",loading:false
    }
  }
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }
  handleBackButton = () => {
    this.props.navigation.goBack()
    return true;
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }
  key=(val)=>{
    this.setState({key:val})
  }

  onSubmit=async ()=>{
    var val = this.state
    if(val.key==""){
      this.Toast("Private Key is required")
    }
    if(val.key!==""){
      this.setState({loading:true})

      try{
        let wallet = new ethers.Wallet(val.key);
        var address = wallet.address
        console.log(address)
        this.setToken(val.key)
        setTimeout(()=>{
          this.setState({loading:false})
          ToastAndroid.show("Successfully imported account",
            ToastAndroid.SHORT,
            ToastAndroid.TOP,
            ToastAndroid.CENTER
          );
          this.props.navigation.navigate("Bottom")
        },500)
      }catch (e) {
        ToastAndroid.show("Invalid Private Key",
          ToastAndroid.SHORT,
          ToastAndroid.TOP,
          ToastAndroid.CENTER
        );
        this.setState({loading:false})
      }
    }
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

  pasteKey=async ()=>{
    const text = await Clipboard.getString()
    console.log(text)
    this.setState({key:text})
  }

  render() {
    return (
      <View flex={10} style={{backgroundColor:"#FFFFFF",paddingBottom:60}} >
        <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#FFFFFF" translucent = {true}/>

        <View flex={9} style={{paddingHorizontal:0}}>
          <View style={{padding:20,alignItems:"center"}}>

          </View>
          <View style={{paddingHorizontal:40,marginTop:50}}>
            <Text style={{color:"black",fontSize:18,marginBottom:20}}>
              Private Key
            </Text>

            <TextInput onChangeText={this.key}
                       value={this.state.key}
                       style={{borderColor:"#0078EA",borderWidth:2,
              borderRadius:15,height:150,backgroundColor:"#E8F1FF",padding:20,
              color:"black",fontSize:16}} secureTextEntry={false} placeholder={"Paste your private key"}>

            </TextInput>

            <View style={{alignItems:"flex-end"}}>
              <TouchableOpacity onPress={this.pasteKey} style={{backgroundColor:"#0078EA",color:"white",
                alignItems:"center",padding:5,borderRadius:15,width:70,
                marginTop:-40,marginRight:10}}>
                <Text style={{color:"white"}}>Paste</Text>
              </TouchableOpacity>
            </View>



          </View>

        </View>

        <View flex={1} style={{alignItems:"center",padding:30}}>

          <TouchableOpacity disabled={this.state.loading}
                            onPress={this.onSubmit} style={{backgroundColor:"#0078EA",width:"100%",
            height:55,borderRadius:10}}>
            <Text style={{color:"white",textAlign:"center",padding:12,fontSize:18}}>
              {this.state.loading==false?"Import Now":
                <ActivityIndicator size="large" color="#ffffff" />
              }
            </Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}

export default ImportWallet;
