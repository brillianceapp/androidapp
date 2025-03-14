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

class Backup extends Component {
  constructor() {
    super();
    this.state={
      name:"",
      address:"0xtisimnacfyiwmqia"
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

  Toast=(val)=>{
    ToastAndroid.show(val,
      ToastAndroid.SHORT,
      ToastAndroid.TOP,
      ToastAndroid.CENTER
    );
  }
  copyToClipboard = () => {
    Clipboard.setString(this.state.address);
    ToastAndroid.show(this.state.address,
      ToastAndroid.SHORT,
      ToastAndroid.TOP,
      ToastAndroid.CENTER
    );
  };

  render() {
    return (
      <View flex={10} style={{backgroundColor:"#D0E1F1",paddingBottom:60}} >
        <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#D0E1F1" translucent = {true}/>


        <ScrollView>
          <View style={{paddingHorizontal:20,alignItems:"center",marginTop:20,marginBottom:70}}>
            <Text style={{color:"#000000",fontSize:16,textAlign:"center"}}>
              Backup your Wallet Key , Don't share your wallet Key,
            </Text>
            <Text style={{color:"red",fontSize:16,textAlign:"center"}}>if You share you will lose your funds</Text>

            <View style={{padding:20,borderColor:"#338DE0",alignItems:"center",
              borderWidth:2,borderRadius:25,height:200,width:200,marginTop:50}}>
              <QRCode
                value={this.state.address}
                size={150}
                bgColor='#FFFFFF'
                fgColor='#000000'/>
            </View>


            <Text style={{fontSize:18,color:"#000000",marginTop:20}}>{this.state.address}</Text>

            <View flex={2} style={{flexDirection:"row",marginTop:40,paddingHorizontal:20}}>
              <View flex={2} style={{alignItems:"center"}}>
                <TouchableOpacity onPress={this.copyToClipboard}
                                  style={{flexDirection:"row",borderWidth:2,width:"100%",
                                    borderColor:"#012F63",alignItems:"center",
                                    borderRadius:25,paddingVertical:10,
                                    paddingHorizontal:30,justifyContent:"center"}}>
                  <Text style={{color:"#012F63",fontSize:18,marginRight:10,textAlign:"center"}}>Copy </Text>
                  <FontAwesome6
                    name={'copy'} style={{marginTop:0}} color="#012F63"
                    size={18}  />
                </TouchableOpacity>
              </View>
            </View>

          </View>
        </ScrollView>


      </View>
    );
  }
}

export default Backup;
