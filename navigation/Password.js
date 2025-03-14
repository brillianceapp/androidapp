import React, { Component } from "react";
import { BackHandler, StatusBar, Text, TextInput, TouchableOpacity, View } from "react-native";

class Password extends Component {
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
      <View flex={10} style={{backgroundColor:"#D0E1F1",paddingBottom:60}} >
        <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#D0E1F1" translucent = {true}/>


        <View flex={7}>
          <View  style={{padding:20}}>
            <View style={{height:100,borderRadius:15,alignItems:"center",
              paddingVertical:20}}>
              <Text style={{color:"black",fontSize:22,marginVertical:0}}>Set Your Password</Text>
            </View>
          </View>

          <View style={{paddingHorizontal:20,marginTop:60}}>
            <Text style={{color:"black",fontSize:17,marginTop:0,marginBottom:5}}>Password</Text>
            <TextInput   style={{height:50,width:"100%",backgroundColor:"transparent",
              color:"black",borderRadius:8,fontSize:16,padding:5,
              paddingBottom:5,paddingLeft:10,borderColor:"#063267",borderWidth:2,marginBottom:10}} placeholder=""/>

            <Text style={{color:"black",fontSize:17,marginTop:0,marginBottom:5}}>Confirm Password</Text>
            <TextInput   style={{height:50,width:"100%",backgroundColor:"transparent",
              color:"black",borderRadius:8,fontSize:16,padding:5,
              paddingBottom:5,paddingLeft:10,borderColor:"#063267",borderWidth:2,marginBottom:30}} placeholder=""/>

          </View>
        </View>

        <View flex={3} style={{paddingHorizontal:20,marginBottom:75}}>
          <TouchableOpacity style={{marginTop:70,backgroundColor:"#0D6EFD",width:"100%",height:60,borderRadius:10}}>
            <Text style={{color:"white",textAlign:"center",padding:15,fontSize:20}}>Set Up</Text>
          </TouchableOpacity>
        </View>



      </View>
    );
  }
}

export default Password;