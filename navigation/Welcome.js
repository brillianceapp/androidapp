import React, { Component } from "react";
import {
  Image,
  View,
  Button,
  Text,
  TouchableOpacity,
  Alert,
  TextInput,
  Linking,
  StatusBar,StyleSheet,
  ScrollView, ActivityIndicator,
} from "react-native";
import loadingVideo from "../images/loading.mp4"
import Video from "react-native-video";
import AsyncStorage from "@react-native-async-storage/async-storage";

class Welcome extends Component {
  constructor() {
    super();
    this.state={
      name:"",
      token:""
    }
  }

  componentDidMount() {
    this.getToken()
  }

  getToken=async ()=>{
    try {
      const token  =await AsyncStorage.getItem("token");
      if(token){
        this.setState({token:token})
        console.log(token)
        setTimeout(()=>{
          this.props.navigation.navigate("Bottom")
        },1000)
      }else{
        setTimeout(()=>{
          this.props.navigation.navigate("FirstPage")
          //this.props.navigation.navigate("Bottom")
        },1000)
      }
    } catch (error) {
      this.setState({token:""})
      console.log("Token error Welcome")
    }
  }


  render() {
    return (
      <View flex={10} style={{backgroundColor:"#A3E0FA",paddingBottom:60}} >
        <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#A3E0FA" translucent = {true}/>
        <Video
          // Can be a URL or a local file.
          source={loadingVideo}
          repeat={true}
          style={styles.backgroundVideo}
        />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  backgroundVideo: {
    height:"100%",
    width:"100%"
  },
});

export default Welcome;