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
  ScrollView,BackHandler
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

class FirstPage extends Component {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    console.log(this.props.route.name)
    this.getToken()
  }

  getToken=async ()=>{
    try {
      const token  =await AsyncStorage.getItem("token");
      if(token){
        this.setState({token:token})
        setTimeout(()=>{
          this.props.navigation.navigate("Bottom")
        },100)
      }else{
        setTimeout(()=>{
          this.props.navigation.navigate("FirstPage")
        },100)
      }
    } catch (error) {
      this.setState({token:""})
      console.log("Token error First Page")
    }
  }

  handleBackButton = () => {
    console.log("Back Handler Click Home Page "+this.props.route.name)
    BackHandler.exitApp()
    return false;
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  render() {
    return (
      <View flex={1} style={{backgroundColor:"#D0E1F1",paddingBottom:60}} >
        <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#3B9CFA" translucent = {true}/>

        <ScrollView>
          <Image source={require("../images/first.jpg")} style={{height:500,width:"100%"}} />
          <View style={{alignItems:"center",padding:50}}>
            <Text style={{textAlign:"center",color:"black",fontSize:18,marginBottom:30}}>The Most Secure, Safe & Trustworthy Decentralized Web3 Wallet </Text>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate("CreateWallet")}
                              style={{backgroundColor:"#3188D7",width:"100%",height:60,borderRadius:10}}>
              <Text style={{color:"white",textAlign:"center",padding:15,fontSize:20}}>Create Wallet</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate("ImportWallet")}
              style={{borderColor:"black",borderWidth:1,width:"100%",height:60,borderRadius:10,marginVertical:30}}>
              <Text style={{color:"#063267",textAlign:"center",padding:15,fontSize:20}}>Import Wallet</Text>
            </TouchableOpacity>
            <Text style={{textAlign:"center",color:"black",fontSize:16,marginBottom:0}}>
              By Continuing, You Agree to Zeros Wallet's Privacy Policy And <Text style={{color:"#063267"}}>Terms Of Service</Text>
            </Text>
            <Text style={{textAlign:"center",color:"black",fontSize:16,marginBottom:0}}>
              By Continuing, You Agree to Zeros Wallet's Privacy Policy And <Text style={{color:"#063267"}}>Terms Of Service</Text>
            </Text>

          </View>


        </ScrollView>

      </View>
    );
  }
};

export default FirstPage;
