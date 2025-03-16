import {
  View,
  RefreshControl,
  Text,
  TouchableOpacity,
  StatusBar,
  Image,
  ScrollView,
  ToastAndroid,
  ActivityIndicator,
  Dimensions,
  TextInput,
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import React, { Component } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import ApiUrl from "../../AppUrl/ApiUrl";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import cryptoBalanceCheck from "../../cryptoBalanceCheck";

class Home extends Component {
  constructor() {
    super();
    this.state={
      token:"",loading:true,
      refreshing: false,
      setRefreshing:false
    }
    this.interval=null
  }


  comingSoon = () => {
    ToastAndroid.show("Coming soon...",
      ToastAndroid.SHORT,
      ToastAndroid.TOP,
      ToastAndroid.CENTER
    );
  };

  onRefresh = () => {
    this.setState({setRefreshing:true});
  }
  componentWillUnmount () {
    console.log("Home page")
    try{
      clearInterval(this.interval)
      this.interval=null
      console.log("clear interval Home D wallet")
    }catch(err){
      console.log(err)
    }
  }


  render() {
    var val = this.state

    return (
      <ScrollView refreshControl={
        <RefreshControl refreshing={this.state.refreshing} onRefresh={this.onRefresh} />} flex={1}
                  style={{backgroundColor:"#FFFFFF"}} >
        <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#FFFFFF" translucent = {true}/>

        <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
          <Text style={{textAlign:"center",marginRight:10,color:"black",fontSize:17}}>0x0199......42156</Text>
          <TouchableOpacity>
            <Image style={{width:20,height:20}}
                   source={require("../../images/blackcopy.png")} />
          </TouchableOpacity>
        </View>

        <Text style={{textAlign:"center",marginRight:10,
          color:"black",fontSize:16,marginTop:40,marginBottom:30}}>
          TOTAL BALANCE</Text>

        <Text style={{textAlign:"center",marginRight:10,
          color:"#0078EA",fontSize:25,marginBottom:40,fontWeight:"bold"}}>
          $653.95</Text>


        <View flex={3} style={{paddingHorizontal:35,flexDirection:"row"}}>
           <View flex={1} style={{alignItems:"flex-start"}}>
             <TouchableOpacity onPress={()=>this.props.navigation.navigate("SendCoin")} style={{alignItems:"center"}}>
               <View style={{backgroundColor:"#0078EA",
                 borderRadius:50,padding:8}}>
                 <Image style={{width:50,height:50}}
                        source={require("../../images/whitesend.png")} />
               </View>
               <Text style={{color:"black",fontSize:18}}>SEND</Text>
             </TouchableOpacity>
           </View>
          <View flex={1} style={{alignItems:"center"}}>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate("ReceiveCoin")} style={{alignItems:"center"}}>
              <View style={{backgroundColor:"#0078EA",
                borderRadius:50,padding:8}}>
                <Image style={{width:50,height:50}}
                       source={require("../../images/whitereceive.png")} />
              </View>
              <Text style={{color:"black",fontSize:18}}>RECEIVE</Text>
            </TouchableOpacity>
          </View>
          <View flex={1} style={{alignItems:"flex-end"}}>
            <TouchableOpacity style={{alignItems:"center"}}>
              <View style={{backgroundColor:"#0078EA",
                borderRadius:50,padding:18}}>
                <Image style={{width:30,height:30}}
                       source={require("../../images/swapwhite.png")} />
              </View>
              <Text style={{color:"black",fontSize:18}}>SWAP</Text>
            </TouchableOpacity>
          </View>

        </View>

        <View  style={{paddingHorizontal:25}}>
          <Text style={{backgroundColor:"#0078EA",borderRadius:25,
          padding:10,color:"white",textAlign:"center",fontSize:18,
          marginTop:30,width:110,marginBottom:50}}>Crypto</Text>

          <View style={{flexDirection:"row",borderWidth:1,borderRadius:10,backgroundColor:"#E8F1FF",
            borderColor:"#0078EA",paddingHorizontal:10,paddingVertical:20}}>
             <View style={{width:"50%",flexDirection:"row"}}>
               <Image style={{width:35,height:35,marginTop:5}}
                      source={require("../../images/Logo-main.png")} />
               <View style={{marginLeft:8}}>
                 <Text style={{color:"black",fontWeight:"bold",fontSize:16}}>BINC</Text>
                 <Text style={{color:"black"}}>Brilliance </Text>
               </View>
             </View>
            <View style={{width:"50%",flexDirection:"flex-end",alignItems:"flex-end"}}>
              <View>
                <Text style={{color:"black",fontWeight:"bold",fontSize:16}}>0.54</Text>
                <Text style={{color:"black"}}>$546 </Text>
              </View>
            </View>
          </View>

        </View>


      </ScrollView>
    );
  }
}

export default Home;
