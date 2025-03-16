import React, { Component } from "react";
import {
  ActivityIndicator,
  BackHandler,
  Linking,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import WebView from "react-native-webview";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: true };
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

  render() {
    return (
      <View flex={1} style={{backgroundColor:"#FFFFFF",paddingBottom:60,paddingHorizontal:20,paddingTop:20}} >
        <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#FFFFFF" translucent = {true}/>

        <View style={{backgroundColor:"#FFFFFF"}} flex={1} >


          <Text style={{color:"black",marginBottom:20,fontSize:18}}>
            This is Brilliance Coin Decentralized Wallet,
            Your key your access,
            Secure, Efficient, Reliable
            Decentralized Web3
            Wallet,

          </Text>

          <Text style={{color:"black",fontSize:16}}>

            This Wallet represents a new era of crypto management.
            Built for Ethereum, Binance Smart Chain, Avalanche, and more, Brilliance
            Wallet empowers you to securely store, send, receive,
            and earn assets across multiple blockchain networks—all in one place.
          </Text>

        </View>

      </View>
    );
  }
}

export default About;