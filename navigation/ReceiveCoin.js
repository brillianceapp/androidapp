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

class ReceiveCoin extends Component {

  constructor() {
    super();
    this.state={
      name:"",
      address:"0x01993ba5A122ebE4cEa42f345A1cCa6232642156"
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
      <View flex={10} style={{backgroundColor:"#FFFFFF",paddingBottom:60}} >
        <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#FFFFFF" translucent = {true}/>


        <ScrollView>
          <View style={{paddingHorizontal:30,marginTop:50}}>
            <TouchableOpacity>
              <View style={{color:"#000000",flexDirection:"row",
                borderBottomWidth:1,borderColor:"#0078EA",paddingBottom:5}}>
                <Text style={{fontSize:17,textAlign:"left",width:"50%",color:"black"}}>
                  Brilliance
                </Text>
                <View style={{alignItems:"flex-end",width:"50%"}}>
                  <Image style={{width:30,height:30}}
                         source={require("../images/downarrow.png")} />
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{paddingHorizontal:20,alignItems:"center",marginTop:20,marginBottom:70}}>
            <View style={{padding:0,borderColor:"#FFFFFF",alignItems:"center",
              borderWidth:2,borderRadius:25,height:200,width:200,marginTop:40}}>
              <QRCode
                value={this.state.address}
                size={200}
                bgColor='#FFFFFF'
                fgColor='#000000'/>
            </View>


            <View style={{paddingHorizontal:10,marginTop:80}}>
              <TouchableOpacity>
                <View style={{color:"#000000",flexDirection:"row",paddingHorizontal:10,
                  borderBottomWidth:1,borderColor:"#000000",paddingBottom:5}}>
                  <Text style={{fontSize:17,textAlign:"left",width:"80%",color:"black"}}>
                    {this.state.address}
                  </Text>
                  <View style={{alignItems:"flex-end",width:"20%"}}>
                    <TouchableOpacity onPress={this.copyToClipboard}>
                      <FontAwesome6
                        name={'copy'} style={{marginTop:10}} color="#012F63"
                        size={18}  />
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
            </View>


            <TouchableOpacity onPress={()=>this.props.navigation.navigate("Bottom")}
                              style={{backgroundColor:"#0078EA",width:"100%",
                                height:55,borderRadius:10,marginTop:70}}>
              <Text style={{color:"white",textAlign:"center",padding:12,fontSize:18}}>Continue</Text>
            </TouchableOpacity>

          </View>
        </ScrollView>


      </View>
    );
  }
}

export default ReceiveCoin;
