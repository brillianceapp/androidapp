import {
  View,
  Text,
  StatusBar,
  Image,
  ScrollView,
  TextInput,
  SafeAreaView,
  Button,
  TouchableOpacity, Dimensions, BackHandler,
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import React, { Component } from "react";
import Carousel from "react-native-snap-carousel";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";

class Refer extends Component {
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
      <ScrollView>
        <View flex={10} style={{backgroundColor:"#013686",paddingBottom:100}} >
          <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#013686" translucent = {true}/>

          <View flex={5} style={{backgroundColor:"#013686",paddingHorizontal:30}}>
            <Text style={{color:"#ffffff",fontSize:17,marginTop:30,textAlign:"center"}}>Get 20 points instantly +7%{"\n"}
              Commission on Every Referral!
            </Text>
            <Text style={{color:"#ffffff",fontSize:17,marginTop:30}}>
              How to start:
            </Text>
            <Text style={{color:"#ffffff",fontSize:17,marginTop:5,paddingLeft:10}}>
              1. Submit your friend's refer code .
            </Text>
            <Text style={{color:"#ffffff",fontSize:17,marginTop:5,paddingLeft:10}}>
              2. Share your unique referral code
            </Text>
            <Text style={{color:"#ffffff",fontSize:17,marginTop:5,paddingLeft:30}}>with friend's.</Text>
            <Text style={{color:"#ffffff",fontSize:17,marginTop:5,paddingLeft:10}}>
              3. Watch your rewards grow as they
            </Text>
            <Text style={{color:"#ffffff",fontSize:17,marginTop:5,paddingLeft:30}}>join!</Text>
            <Text style={{color:"#ffffff",fontSize:17,marginTop:5}}>
              Don't miss out on this easy way to earn!
            </Text>
          </View>
          <View flex={5} style={{backgroundColor:"#73BCFA",
            borderTopLeftRadius:25,borderTopRightRadius:25,marginTop:50,
            marginBottom:-100}}>
            <ScrollView>
              <View style={{paddingHorizontal:50,paddingVertical:20}}>
                <Text style={{color:"#000000",fontSize:19,fontWeight:"bold"}}>
                  Your refer code
                </Text>

                <View  style={{flexDirection:"row"}}>
                  <View style={{width:"50%"}}>
                    <Text style={{color:"#013B94",fontSize:18,backgroundColor:"#ffffff",
                      marginTop:20,textAlign:"center",padding:5,borderRadius:25}}>
                      Shanjit066
                    </Text>
                  </View>
                  <View style={{width:"50%",alignItems:"flex-end"}}>
                    <TouchableOpacity style={{marginTop:20,backgroundColor:"#012F63",width:100,height:35,
                      borderRadius:25,flexDirection:"row"}}>
                      <Text style={{color:"white",textAlign:"center",padding:7,fontSize:14,paddingHorizontal:15}}>
                        Copy</Text>
                      <FontAwesome6
                        name={'copy'} style={{marginTop:10}} color="#ffffff"
                        size={16}  />
                    </TouchableOpacity>
                  </View>
                </View>
                <Text style={{color:"#000000",fontSize:19,fontWeight:"bold",marginTop:20}}>
                  Submit friend's refer code
                </Text>
                <TextInput   style={{height:50,width:"100%",backgroundColor:"#ffffff",
                  color:"black",borderRadius:8,fontSize:16,padding:5,
                  paddingBottom:5,paddingLeft:10,marginBottom:40,marginTop:10}} placeholder=""/>
                <TouchableOpacity style={{backgroundColor:"#003E9B",width:"100%",height:50,marginBottom:100,borderRadius:10}}>
                  <Text style={{color:"white",textAlign:"center",padding:10,fontSize:20}}>Submit</Text>
                </TouchableOpacity>
              </View>


            </ScrollView>
          </View>

        </View>
      </ScrollView>
    );
  }
};

export default Refer;
