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
  TouchableOpacity,
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import sendt from "../../images/sendt.png"
import rectt from "../../images/rect.png"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ethers } from "ethers";


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
    await fetch("https://api.bscscan.com/api?module=account&action=txlist&address="+this.state.address+"&startblock=0&endblock=9999999999&page=1&offset=100&sort=desc&apikey=E7I26FJ1SQ4HWDETKZ5ZC71M65D4B8Y3HS",{
      method: 'get',
      headers: { 'Content-Type':'multipart/form-data'}
    })
      .then(response => response.json())
      .then(res => {
        this.setState({data:res.result,loading:false})
        //console.log(res.result)
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
      if(res.from==this.state.address.toLowerCase()){
        ttype="Sent"
      }
      if(res.to==this.state.address.toLowerCase()){
        ttype="Received"
      }
      var balance = ethers.utils.formatEther(res.value);
      return(
        <div className="transaction-item receive">
          <div className="transaction-info">

            <div className={ttype=="Sent"?"transaction-icon send":"transaction-icon receive"}>
              <img src={ttype=="Sent"?receive:deposit} alt="" width="20px"/>
            </div>
            <div className="transaction-details">
              <div className="address">{res.hash.substring(0,20)}..</div>
              <div className="type">{ttype}</div>
            </div>
          </div>
          <div className={ttype=="Sent"?"transaction-amount negative":"transaction-amount positive"}>
            <div className="amount">{ttype=="Sent"?"-":"+"}{parseFloat(balance).toFixed(6)} {this.state.name}</div>
            <div className="time">{moment(time).format('L')}</div>
          </div>
        </div>
      )
    })

    return (
      <View flex={1} style={{flexDirection:"column",justifyContent:"center",backgroundColor:"#FFFFFF"}} >
        <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#FFFFFF" translucent = {true}/>
        <ScrollView style={{backgroundColor:"#FFFFFF"}}>
          <View flex={10} style={{backgroundColor:"#FFFFFF",paddingBottom:60,marginBottom:70}} >

            <View flex={1} style={{backgroundColor:"#ffffff",marginTop:10,height:"auto",
              borderTopRightRadius:25,borderTopLeftRadius:25,padding:20,minHeight:600}}>

              <TouchableOpacity>
                <View  style={{flexDirection:"row",paddingVertical:10,
                  borderBottomWidth:0,borderColor:"#000000",paddingRight:10}}>
                  <View flex={1} style={{flexDirection:"row"}}>
                    <View style={{backgroundColor:"#E5EAFF",borderRadius:50,
                      padding:2,width:32,height:32,marginRight:10,marginTop:7}}>
                      <Image style={{width:28,height:28,marginTop:0
                      }}
                             source={require("../../images/sendt.png")} />
                    </View>
                    <View style={{flexDirection:"column"}}>
                      <Text style={{color:"#000000",fontSize:16,fontWeight:"bold"}}>Sent</Text>
                      <Text style={{color:"#000000",fontSize:15}}>0xGfmtw730akjg</Text>
                    </View>
                  </View>
                  <View flex={1} style={{alignItems:"flex-end"}}>
                    <Text style={{color:"green",fontSize:16}}>+0.0056 BTC</Text>
                    <Text style={{color:"#000000",fontSize:16}}>8:40 PM</Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity>
                <View  style={{flexDirection:"row",paddingVertical:10,
                  borderBottomWidth:0,borderColor:"#000000",paddingRight:10}}>
                  <View flex={1} style={{flexDirection:"row"}}>
                    <View style={{backgroundColor:"#E5EAFF",borderRadius:50,
                      padding:2,width:32,height:32,marginRight:10,marginTop:7}}>
                      <Image style={{width:28,height:28,marginTop:0
                      }}
                             source={require("../../images/rect.png")} />
                    </View>
                    <View style={{flexDirection:"column"}}>
                      <Text style={{color:"#000000",fontSize:16,fontWeight:"bold"}}>Receive</Text>
                      <Text style={{color:"#000000",fontSize:15}}>0xGfmtw730akjg</Text>
                    </View>
                  </View>
                  <View flex={1} style={{alignItems:"flex-end"}}>
                    <Text style={{color:"red",fontSize:16}}>-0.0154 BTC</Text>
                    <Text style={{color:"#000000",fontSize:16}}>8:40 PM</Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity>
                <View  style={{flexDirection:"row",paddingVertical:10,
                  borderBottomWidth:0,borderColor:"#000000",paddingRight:10}}>
                  <View flex={1} style={{flexDirection:"row"}}>
                    <View style={{backgroundColor:"#E5EAFF",borderRadius:50,
                      padding:2,width:32,height:32,marginRight:10,marginTop:7}}>
                      <Image style={{width:28,height:28,marginTop:0
                      }}
                             source={require("../../images/sendt.png")} />
                    </View>
                    <View style={{flexDirection:"column"}}>
                      <Text style={{color:"#000000",fontSize:16,fontWeight:"bold"}}>Sent</Text>
                      <Text style={{color:"#000000",fontSize:15}}>0xGfmtw730akjg</Text>
                    </View>
                  </View>
                  <View flex={1} style={{alignItems:"flex-end"}}>
                    <Text style={{color:"green",fontSize:16}}>+0.0056 BTC</Text>
                    <Text style={{color:"#000000",fontSize:16}}>8:40 PM</Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity>
                <View  style={{flexDirection:"row",paddingVertical:10,
                  borderBottomWidth:0,borderColor:"#000000",paddingRight:10}}>
                  <View flex={1} style={{flexDirection:"row"}}>
                    <View style={{backgroundColor:"#E5EAFF",borderRadius:50,
                      padding:2,width:32,height:32,marginRight:10,marginTop:7}}>
                      <Image style={{width:28,height:28,marginTop:0
                      }}
                             source={require("../../images/rect.png")} />
                    </View>
                    <View style={{flexDirection:"column"}}>
                      <Text style={{color:"#000000",fontSize:16,fontWeight:"bold"}}>Receive</Text>
                      <Text style={{color:"#000000",fontSize:15}}>0xGfmtw730akjg</Text>
                    </View>
                  </View>
                  <View flex={1} style={{alignItems:"flex-end"}}>
                    <Text style={{color:"red",fontSize:16}}>-0.0154 BTC</Text>
                    <Text style={{color:"#000000",fontSize:16}}>8:40 PM</Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity>
                <View  style={{flexDirection:"row",paddingVertical:10,
                  borderBottomWidth:0,borderColor:"#000000",paddingRight:10}}>
                  <View flex={1} style={{flexDirection:"row"}}>
                    <View style={{backgroundColor:"#E5EAFF",borderRadius:50,
                      padding:2,width:32,height:32,marginRight:10,marginTop:7}}>
                      <Image style={{width:28,height:28,marginTop:0
                      }}
                             source={require("../../images/sendt.png")} />
                    </View>
                    <View style={{flexDirection:"column"}}>
                      <Text style={{color:"#000000",fontSize:16,fontWeight:"bold"}}>Sent</Text>
                      <Text style={{color:"#000000",fontSize:15}}>0xGfmtw730akjg</Text>
                    </View>
                  </View>
                  <View flex={1} style={{alignItems:"flex-end"}}>
                    <Text style={{color:"green",fontSize:16}}>+0.0056 BTC</Text>
                    <Text style={{color:"#000000",fontSize:16}}>8:40 PM</Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity>
                <View  style={{flexDirection:"row",paddingVertical:10,
                  borderBottomWidth:0,borderColor:"#000000",paddingRight:10}}>
                  <View flex={1} style={{flexDirection:"row"}}>
                    <View style={{backgroundColor:"#E5EAFF",borderRadius:50,
                      padding:2,width:32,height:32,marginRight:10,marginTop:7}}>
                      <Image style={{width:28,height:28,marginTop:0
                      }}
                             source={require("../../images/rect.png")} />
                    </View>
                    <View style={{flexDirection:"column"}}>
                      <Text style={{color:"#000000",fontSize:16,fontWeight:"bold"}}>Receive</Text>
                      <Text style={{color:"#000000",fontSize:15}}>0xGfmtw730akjg</Text>
                    </View>
                  </View>
                  <View flex={1} style={{alignItems:"flex-end"}}>
                    <Text style={{color:"red",fontSize:16}}>-0.0154 BTC</Text>
                    <Text style={{color:"#000000",fontSize:16}}>8:40 PM</Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity>
                <View  style={{flexDirection:"row",paddingVertical:10,
                  borderBottomWidth:0,borderColor:"#000000",paddingRight:10}}>
                  <View flex={1} style={{flexDirection:"row"}}>
                    <View style={{backgroundColor:"#E5EAFF",borderRadius:50,
                      padding:2,width:32,height:32,marginRight:10,marginTop:7}}>
                      <Image style={{width:28,height:28,marginTop:0
                      }}
                             source={require("../../images/sendt.png")} />
                    </View>
                    <View style={{flexDirection:"column"}}>
                      <Text style={{color:"#000000",fontSize:16,fontWeight:"bold"}}>Sent</Text>
                      <Text style={{color:"#000000",fontSize:15}}>0xGfmtw730akjg</Text>
                    </View>
                  </View>
                  <View flex={1} style={{alignItems:"flex-end"}}>
                    <Text style={{color:"green",fontSize:16}}>+0.0056 BTC</Text>
                    <Text style={{color:"#000000",fontSize:16}}>8:40 PM</Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity>
                <View  style={{flexDirection:"row",paddingVertical:10,
                  borderBottomWidth:0,borderColor:"#000000",paddingRight:10}}>
                  <View flex={1} style={{flexDirection:"row"}}>
                    <View style={{backgroundColor:"#E5EAFF",borderRadius:50,
                      padding:2,width:32,height:32,marginRight:10,marginTop:7}}>
                      <Image style={{width:28,height:28,marginTop:0
                      }}
                             source={require("../../images/rect.png")} />
                    </View>
                    <View style={{flexDirection:"column"}}>
                      <Text style={{color:"#000000",fontSize:16,fontWeight:"bold"}}>Receive</Text>
                      <Text style={{color:"#000000",fontSize:15}}>0xGfmtw730akjg</Text>
                    </View>
                  </View>
                  <View flex={1} style={{alignItems:"flex-end"}}>
                    <Text style={{color:"red",fontSize:16}}>-0.0154 BTC</Text>
                    <Text style={{color:"#000000",fontSize:16}}>8:40 PM</Text>
                  </View>
                </View>
              </TouchableOpacity>


            </View>

          </View>

        </ScrollView>
      </View>
    );
  }
}

export default History;
