import {
  View,
  Text,
  StatusBar,
  Image,
  ScrollView,
  TextInput,
  SafeAreaView,
  Button,
  TouchableOpacity, Dimensions,
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import React, { Component } from "react";
import Carousel from "react-native-snap-carousel";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";

class Setting extends Component {

  _renderItem = ({item, index}) => {
    return (
      <View flex={1}>
        <TouchableOpacity>
          <View>
            <Image style={{width:"90.5%",height:130,borderWidth:1,
              borderRadius:15}} source={require("../../images/slide.png")}/>
          </View>
        </TouchableOpacity>

      </View>
    );
  }

  render() {
    const data = [
      {
        title: "Aenean leo",
        body: "Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada placerat nisl. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
        img: "https://img.bitgetimg.com/multiLang/web/66abae51e11753a3ac6d84dcdc9dbca6.jpeg",
      },
      {
        title: "In turpis",
        body: "Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ",
        img: "https://img.bitgetimg.com/multiLang/web/55c7d6a38da97cd4c6bf32fec4837cb6.png",
      }
    ];
    return (
      <View flex={1} style={{flexDirection:"column",justifyContent:"center",backgroundColor:"#FFFFFF"}} >
        <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#FFFFFF" translucent = {true}/>

        <ScrollView style={{paddingHorizontal:0,marginBottom:100}}>
          <View style={{paddingHorizontal:20,marginTop:50}}>

            <View style={{backgroundColor:"#E5EAFF",height:50,marginBottom:20,
              borderRadius:25,paddingHorizontal:15,flexDirection:"row"}}>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate("About")}
                                style={{flexDirection:"row",width:"100%"}}>
                <FontAwesome6 style={{
                  padding:12
                }} name={'circle-question'} color="#0078EA" size={25}  />
                <Text style={{color:"#0078EA",fontSize:18,padding:10}}>About US</Text>
              </TouchableOpacity>
            </View>


            <View style={{backgroundColor:"#E5EAFF",height:50,marginBottom:20,
              borderRadius:25,paddingHorizontal:15,flexDirection:"row"}}>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate("Backup")}
                                style={{flexDirection:"row",width:"100%"}}>
                <FontAwesome6 style={{
                  padding:12
                }} name={'key'} color="#0078EA" size={25}  />
                <Text style={{color:"#0078EA",fontSize:18,padding:10}}>Backup Wallet</Text>
              </TouchableOpacity>
            </View>

            <Text style={{fontSize:20,color:"#000000",marginTop:20,marginBottom:20}}>Follow us on</Text>

            <View style={{backgroundColor:"#tranparent",height:50,marginBottom:20,
              borderRadius:25,paddingHorizontal:15,flexDirection:"row"}}>
              <TouchableOpacity style={{flexDirection:"row",width:"100%"}}>
                <FontAwesome6 style={{
                  padding:12
                }} name={'telegram'} color="#014281" size={25}  />
                <Text style={{color:"#000000",fontSize:18,padding:10,paddingLeft:20}}>Telegram</Text>
              </TouchableOpacity>
            </View>

            <View style={{backgroundColor:"#tranparent",height:50,marginBottom:20,
              borderRadius:25,paddingHorizontal:15,flexDirection:"row"}}>
              <TouchableOpacity style={{flexDirection:"row",width:"100%"}}>
                <FontAwesome6 style={{
                  padding:12
                }} name={'x-twitter'} color="#014281" size={25}  />
                <Text style={{color:"#000000",fontSize:18,padding:10,paddingLeft:20}}>Twitter</Text>
              </TouchableOpacity>
            </View>


            <View style={{height:150,padding:20,paddingHorizontal:0,marginBottom:100,marginTop:60}}>
              <TouchableOpacity onPress={this.logOut} style={{height:50,borderRadius:25,marginTop:0,
                borderColor:"red",borderWidth:2,alignItems:"center",padding:8}}>
                <Text style={{fontSize:20,color:"red",fontWeight:"bold"}}>Log Out</Text>
              </TouchableOpacity>
            </View>


          </View>

        </ScrollView>

      </View>
    );
  }
}

export default Setting;
