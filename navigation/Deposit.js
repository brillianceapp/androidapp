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

class Deposit extends Component {

  constructor() {
    super();
    this.state={
      name:"",
      address:"0xtisimnacfyiwmqia"
    }
  }

  componentDidMount() {
    console.log(this.props.route.params.name)
    this.setState({name:this.props.route.params.name})
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
            <Text style={{color:"#000000",fontSize:14}}>
              Send Only {this.state.name} Token in  Network To This Address,
            </Text>
            <Text style={{color:"#000000",fontSize:16,textAlign:"center"}}>or You Might lose your funds</Text>

            <View style={{padding:20,borderColor:"#338DE0",alignItems:"center",
              borderWidth:2,borderRadius:25,height:200,width:200,marginTop:50}}>
              <QRCode
                value={this.state.address}
                size={150}
                bgColor='#FFFFFF'
                fgColor='#000000'/>
            </View>

            <View style={{flexDirection:"row",marginTop:60}}>
              <Image style={{height:40,width:40,borderRadius:50,marginTop:2}}
                     source={{uri:"https://img.bitgetimg.com/multiLang/coin_img/2edf1ef8b333c40979976d1a49bc234c.png"}}/>
              <Text style={{color:"#000000",fontSize:25,marginLeft:10,fontWeight:"bold"}}>Bitcoin ({this.state.name})</Text>
            </View>
            <Text style={{fontSize:18,color:"#000000"}}>{this.state.address}</Text>

            <View flex={2} style={{flexDirection:"row",marginTop:40,paddingHorizontal:20}}>
              <View flex={1} style={{alignItems:"center"}}>
                <TouchableOpacity onPress={this.copyToClipboard}
                                  style={{flexDirection:"row",borderWidth:2,
                  borderColor:"#012F63",alignItems:"center",borderRadius:25,paddingVertical:10,paddingHorizontal:30}}>
                  <Text style={{color:"#012F63",fontSize:18,marginRight:10}}>Copy </Text>
                  <FontAwesome6
                    name={'copy'} style={{marginTop:0}} color="#012F63"
                    size={18}  />
                </TouchableOpacity>
              </View>
              <View flex={1} style={{alignItems:"center"}}>
                <TouchableOpacity onPress={this.copyToClipboard}
                  style={{flexDirection:"row",borderWidth:2,
                  borderColor:"#012F63",alignItems:"center",borderRadius:25,paddingVertical:10,paddingHorizontal:30}}>
                  <Text style={{color:"#012F63",fontSize:18,marginRight:10}}>Share </Text>
                  <FontAwesome6
                    name={'share-nodes'} style={{marginTop:0}} color="#012F63"
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

export default Deposit;
