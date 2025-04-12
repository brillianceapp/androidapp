import React,{Component} from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  ScrollView,
  TextInput,
  SafeAreaView,
  Button,
  TouchableOpacity, ActivityIndicator, Linking,
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import sendt from "../../images/sendt.png"
import rectt from "../../images/rect.png"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ethers } from "ethers";
import moment from "moment";


class History extends Component {
  constructor() {
    super();
    this.state={
      loading:true,data:[],address:"",token:""
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
        let wallet = new ethers.Wallet(token);
        var address = wallet.address
        this.setState({address:address})
        setTimeout(()=>{
          this.trx()
        },200)
      }else {
        this.props.navigation.navigate("FirstPage")
      }
    } catch (error) {
      console.log("error storage trx")
    }
  }

  trx=async ()=>{
    console.log("trx data")
    await fetch("https://scan.brillianceglobal.ltd/api/account/trx/"+this.state.address,{
      method: 'post',
      headers: { 'Content-Type':'multipart/form-data'}
    })
      .then(response => response.json())
      .then(res => {
        if(res.trx){
          this.setState({data:res.trx,loading:false})
        }
        //console.log(res.trx)
      })
      .catch(err => {
        console.log(err)
        this.setState({loading:false})
      })
  }


  render() {
    var val = this.state

    var dval = this.state.data.map(res=>{
      //console.log(res)
      var time = res.timeStamp*1000
      var ttype=""
      if(res.from.toLowerCase()==this.state.address.toLowerCase()){
        ttype="Sent"
      }
      if(res.to.toLowerCase()==this.state.address.toLowerCase()){
        ttype="Received"
      }
      var balance = ethers.utils.formatEther(res.value);
      var img = ttype=="Sent"?require("../../images/sendt.png"):require("../../images/rect.png")
      return(
        <TouchableOpacity  onPress={()=>Linking.openURL("https://scan.brillianceglobal.ltd/tx/"+res.hash)}>
          <View  style={{flexDirection:"row",paddingVertical:10,
            borderBottomWidth:0,borderColor:"#000000",paddingRight:10}}>
            <View flex={1} style={{flexDirection:"row"}}>
              <View style={{backgroundColor:"#E5EAFF",borderRadius:50,
                padding:2,width:32,height:32,marginRight:10,marginTop:7}}>
                <Image style={{width:28,height:28,marginTop:0
                }}
                       source={img} />
              </View>
              <View style={{flexDirection:"column"}}>
                <Text style={{color:"#000000",fontSize:16,fontWeight:"bold"}}>{ttype}</Text>
                <Text style={{color:"#000000",fontSize:15}}>{res.hash.substring(0,15)}..</Text>
              </View>
            </View>
            <View flex={1} style={{alignItems:"flex-end"}}>
              <Text style={{color:ttype=="Sent"?"red":"green",fontSize:16}}>{ttype=="Sent"?"-":"+"}{parseFloat(balance).toFixed(6)} BINC</Text>
              <Text style={{color:"#000000",fontSize:16}}>{moment(time).format('L')}</Text>
            </View>
          </View>
        </TouchableOpacity>
      )
    })

    return (
      <View flex={1} style={{flexDirection:"column",justifyContent:"center",backgroundColor:"#FFFFFF"}} >
        <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#FFFFFF" translucent = {true}/>
        <ScrollView style={{backgroundColor:"#FFFFFF"}}>
          <View flex={10} style={{backgroundColor:"#FFFFFF",paddingBottom:60,marginBottom:70}} >

            <View flex={1} style={{backgroundColor:"#ffffff",marginTop:10,height:"auto",
              borderTopRightRadius:25,borderTopLeftRadius:25,padding:20,minHeight:600}}>

              {val.data.length==0 && val.loading==false?
                <Text style={{textAlign:"center",color:"black",fontSize:17,marginTop:100}}>Transactions not available</Text>
                :""}

              {dval}

              {
                this.state.loading==true?
                  <ActivityIndicator size="large" color="#00ff00" />
                  :""
              }

            </View>

          </View>

        </ScrollView>
      </View>
    );
  }
}

export default History;
