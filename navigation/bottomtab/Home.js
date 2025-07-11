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
  TextInput, Clipboard,
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import React, { Component } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { ethers } from "ethers";

class Home extends Component {
  constructor() {
    super();
    this.state={
      token:"",loading:true,
      refreshing: false,
      setRefreshing:false,
      address:"",bal:"0",price:"0.0",
    }
    this.interval=null
  }

  componentDidMount() {
    this.getToken()
    this.getBal()
    this.getPrice()
   // const genRanHex = size => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');
   // var privateKey1 = genRanHex(64)
   // console.log(privateKey1," Key1")
   // let wallet = new ethers.Wallet(privateKey1);
   // var address = wallet.address
    //console.log(address,"Address")

     fetch("https://api.brillianceglobal.ltd/coin",{
      method: 'get',
      headers: { 'Content-Type':'multipart/form-data'}
    })
      .then(response => response.json())
      .then(res => {
        console.log(res[0]["price"],"Price")
        if(res[0]["price"]){
          this.setPrice(res[0]["price"])
          this.setState({price:res[0]["price"]})
        }

      })
      .catch(err => {
        console.log(err)
        this.setState({loading:false})
      })

  }

  getPrice=async ()=>{
    try {
      const price  =await AsyncStorage.getItem("price");
      if(price){
        this.setState({price:price})
      }
    } catch (error) {
      console.log("error storage Home")
    }
  }

  setPrice=async (val)=>{
    try {
      await AsyncStorage.setItem("price",val);
      console.log("Price set successfully ")
    } catch (error) {
      console.log("Price Set storage error ")
    }
  }


  getToken=async ()=>{
    try {
      const token  =await AsyncStorage.getItem("token");
      if(token){
        this.setState({token:token})
        let wallet = new ethers.Wallet(token);
        var address = wallet.address
        this.setState({address:address})
        setTimeout(()=>{
          this.balance()
        },500)
        this.interval= setInterval(()=>{
          this.balance()
        },10000)
      }else {
        this.props.navigation.navigate("FirstPage")
      }
    } catch (error) {
      console.log("error storage Home")
    }

  }

  balance=async()=>{
    console.log("Bal")
    const provider =await new ethers.providers.JsonRpcProvider('https://rpc.binccoin.com/', { name: 'brilliance', chainId: 1020 })
    let wallet =await new ethers.Wallet(this.state.token);
    var address =await wallet.address
    const ethbalance = await provider.getBalance(address);
    this.setState({bal:ethers.utils.formatEther(ethbalance)})
    console.log("Bal : ",ethers.utils.formatEther(ethbalance))
    await this.setBal(ethers.utils.formatEther(ethbalance))
  }

  getBal=async ()=>{
    try {
      const bal  =await AsyncStorage.getItem("bal");
      if(bal){
        this.setState({bal:bal})
      }
    } catch (error) {
      console.log("error storage Home")
    }
  }

  setBal=async (val)=>{
    try {
      await AsyncStorage.setItem("bal",val);
      console.log("Bal set successfully ")
    } catch (error) {
      console.log("Bal Set storage error ")
    }
  }

  copyToClipboard = () => {
    Clipboard.setString(this.state.address);
    ToastAndroid.show(this.state.address,
      ToastAndroid.SHORT,
      ToastAndroid.TOP,
      ToastAndroid.CENTER
    );
  };

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
    var address2 = val.address.substring(0,6)+"......"+val.address.substring(val.address.length -5)
    var balance = parseFloat(this.state.bal)
    var price = parseFloat(val.price)
    var usd = balance*price
    return (
      <ScrollView refreshControl={
        <RefreshControl refreshing={this.state.refreshing} onRefresh={this.onRefresh} />} flex={1}
                  style={{backgroundColor:"#FFFFFF"}} >
        <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#FFFFFF" translucent = {true}/>

        <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
          <Text style={{textAlign:"center",marginRight:10,color:"black",fontSize:17}}>
            {val.address?address2:""}</Text>
          {val.address?
            <TouchableOpacity onPress={this.copyToClipboard}>
            <Image style={{width:20,height:20}}
                   source={require("../../images/blackcopy.png")} />
          </TouchableOpacity>
            :""}

        </View>

        <Text style={{textAlign:"center",marginRight:10,
          color:"black",fontSize:16,marginTop:40,marginBottom:30}}>
          TOTAL BALANCE</Text>

        <Text style={{textAlign:"center",marginRight:10,
          color:"#0078EA",fontSize:25,marginBottom:40,fontWeight:"bold"}}>
          ${usd.toFixed(usd>1?2:4)}</Text>


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
                <Text style={{color:"black",fontWeight:"bold",fontSize:16}}>{
                  balance.toFixed(balance>1?2:5)
                }</Text>
                <Text style={{color:"black",textAlign:"right"}}>${usd.toFixed(usd>1?2:4)} </Text>
              </View>
            </View>
          </View>

        </View>


      </ScrollView>
    );
  }
}

export default Home;
