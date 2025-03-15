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
  ScrollView, StyleSheet, ToastAndroid, BackHandler,
} from "react-native";
import Video, {VideoRef} from 'react-native-video';
import AsyncStorage from "@react-native-async-storage/async-storage";
import ApiUrl from "../AppUrl/ApiUrl";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";


class CreateWallet extends Component {

  constructor() {
    super();
    this.state={
      loading:false
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

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  render() {
    return (
      <View flex={1} style={{backgroundColor:"#FFFFFF",paddingBottom:60}} >
        <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#FFFFFF" translucent = {true}/>

        <ScrollView>

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
                  df824974bb0ea84e15e808dbdd208f6f8925ea8e702be3c9720cf049593e8404
                </Text>
              </TouchableOpacity>

              <TouchableOpacity>
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

          <View style={{paddingHorizontal:40,display:"none"}}>
            <TouchableOpacity
              style={{backgroundColor:"#0078EA",width:"100%",
                height:55,borderRadius:10,marginTop:350}}>
              <Text style={{color:"white",textAlign:"center",padding:12,fontSize:20}}>Create Wallet Now</Text>
            </TouchableOpacity>
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
