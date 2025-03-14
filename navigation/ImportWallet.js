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
  ScrollView, BackHandler, ToastAndroid, ActivityIndicator,
} from "react-native";
import ApiUrl from "../AppUrl/ApiUrl";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
      this.Toast("Key is required")
    }
    if(val.key!==""){
      this.setState({loading:true})
      var formdata = new FormData()
      formdata.append("uid",val.key)
      await fetch(ApiUrl.baseurl+"login",{
        method: 'post',
        headers: { 'Content-Type':'multipart/form-data'},
        body:formdata
      })
        .then(response => response.json())
        .then(res => {
          this.setState({loading:false})
          console.log(res)
          if(res.success){
            this.Toast(res.success)
            this.setToken(res.token)
            setTimeout(()=>{
              this.props.navigation.navigate("Bottom")
            },200)
          }
          if(res.error){
            this.Toast(res.error)
          }
        })
        .catch(err => {
          console.log(err)
          this.setState({loading:false})
        })
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

  render() {
    return (
      <View flex={10} style={{backgroundColor:"#D0E1F1",paddingBottom:60}} >
        <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#D0E1F1" translucent = {true}/>

        <View flex={5} style={{paddingHorizontal:30,paddingTop:70}}>
          <Text style={{color:"#000000",fontSize:20,borderBottomWidth:2,
            borderColor:"#3188D7",marginBottom:30,paddingBottom:10,
            width:150,fontWeight:"bold"
          }}>RECOVERY KEY</Text>
          <TextInput value={this.state.key} onChangeText={this.key}
                     style={{height:180,width:"100%",backgroundColor:"white",
            color:"black",marginTop:5,borderRadius:10,fontSize:16,
            paddingLeft:10,borderWidth:2,borderColor:"#3188D7"}}
                      placeholderTextColor="#000"
                      placeholder="Paste your wallet key"/>
        </View>
        <View flex={4} style={{flexDirection:"flex-end",alignItems:"flex-end"}}>
          <TouchableOpacity style={{backgroundColor:"#022F64",width:80,padding:5,
            borderRadius:25,marginRight:50,marginTop:-30,display:"none"}}>
            <Text style={{color:"#ffffff",textAlign:"center"}}>Paste</Text>
          </TouchableOpacity>
        </View>

        <View flex={1} style={{alignItems:"center",padding:30}}>

          <TouchableOpacity disabled={this.state.loading}
                            onPress={this.onSubmit} style={{backgroundColor:"#3188D7",width:"100%",height:60,borderRadius:10}}>
            <Text style={{color:"white",textAlign:"center",padding:15,fontSize:20}}>
              {this.state.loading==false?"Import":
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
