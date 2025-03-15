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
      <View flex={1} style={{backgroundColor:"#FFFFFF",paddingBottom:60}} >
        <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#FFFFFF" translucent = {true}/>

        <ScrollView>
          <View style={{alignItems:"center",padding:20}}>
            <Image source={require("../images/Logo-main.png")} style={{height:200,width:200,marginTop:50}} />

            <Text style={{textAlign:"center",color:"#0074E9",fontSize:30,marginTop:80,marginBottom:20}}>
              Brilliance Wallet </Text>
            <Text style={{textAlign:"center",color:"#0074E9",fontSize:18,marginBottom:80}}>
              Make any type of payment using Brilliance Wallet
            </Text>

            <TouchableOpacity onPress={()=>this.props.navigation.navigate("CreateWallet")}
                              style={{backgroundColor:"#0078EA",width:"100%",height:55,borderRadius:10}}>
              <Text style={{color:"white",textAlign:"center",padding:12,fontSize:20}}>Create Wallet</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>this.props.navigation.navigate("ImportWallet")}
              style={{borderColor:"black",borderWidth:1,width:"100%",height:55,borderRadius:10,marginVertical:20}}>
              <Text style={{color:"#0078EA",textAlign:"center",padding:12,fontSize:20}}>I already have a wallet</Text>
            </TouchableOpacity>

          </View>


        </ScrollView>

      </View>
    );
  }
};

export default FirstPage;
