import React,{Component} from 'react';
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
  ScrollView, BackHandler,Modal
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import QRCode from "react-native-qrcode-image";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ethers } from "ethers";

class SendCoin extends Component {
  constructor() {
    super();
    this.state={
      name:"",modal:false,address:"",bal:"0",price:"600",amount:"",gasfee:"0",
      raddress:""
    }
    this.interval=null
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
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
          this.balance()
        },200)
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
    const provider = new ethers.providers.JsonRpcProvider('https://bsc-dataseed.binance.org/', { name: 'binance', chainId: 56 })
    let wallet = new ethers.Wallet(this.state.token);
    var address = wallet.address
    const ethbalance = await provider.getBalance(address);
    this.setState({bal:ethers.utils.formatEther(ethbalance)})
    console.log("Bal Send : ",ethers.utils.formatEther(ethbalance))
    const feeData = await provider.getFeeData();
    let gasPrice = feeData.gasPrice;
    const gasPriceInEth = (21000*parseFloat(ethers.utils.formatUnits(feeData.maxFeePerGas, 'ether')));
    this.setState({gasfee:(gasPriceInEth+0.00000005).toFixed(8)})
  }

  handleBackButton = () => {
    this.props.navigation.goBack()
    return true;
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    try{
      clearInterval(this.interval)
      this.interval=null
      console.log("clear interval Send Coin")
    }catch(err){
      console.log(err)
    }
  }

  modal=()=>{
    if(this.state.modal==false){
      this.setState({modal:true})
    }else {
      this.setState({modal:false})
    }
  }

  amount=(val)=>{
    this.setState({amount:val})
  }
  raddress=(val)=>{
    this.setState({raddress:val})
  }
  max=(val)=>{
    var v = parseFloat(this.state.bal)-parseFloat(this.state.gasfee)
    this.setState({amount:v.toFixed(8)})
  }

  render() {
    var val = this.state
    var balance = parseFloat(this.state.bal)
    var price = parseFloat(val.price)
    var usd = balance*price

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



            <View style={{paddingHorizontal:10,marginTop:50}}>
              <View style={{color:"#000000",flexDirection:"row",paddingHorizontal:10,
                borderBottomWidth:0,borderColor:"#000000",paddingBottom:5,marginBottom:40}}>
                <Text style={{fontSize:17,textAlign:"left",width:"20%",color:"black"}}>
                </Text>
                <View style={{alignItems:"flex-end",width:"80%"}}>
                  <Text style={{fontSize:14,textAlign:"right",color:"black"}}>
                    Available: {balance.toFixed(balance>1?2:5)} BINC
                  </Text>
                </View>
              </View>
              <Text style={{fontSize:19,textAlign:"left",
                width:"50%",color:"#0078EA",marginBottom:5}}>
                Enter Amount
              </Text>
              <TextInput onChangeText={this.amount}
                         value={val.amount}
                         keyboardType={"numeric"}
                         style={{borderBottomWidth:1,borderColor:"#0078EA"}}
                         placeholder={"Enter amount"}/>

              <View style={{color:"#000000",flexDirection:"row",marginHorizontal:0,
               marginTop:8}}>
                {
                  val.amount?
                    <Text style={{fontSize:14,textAlign:"left",width:"50%",color:"black"}}>
                      ${(parseFloat(val.amount)*price).toFixed(2)} USDT
                    </Text>:
                    <Text style={{fontSize:14,textAlign:"left",width:"50%",color:"black"}}>

                    </Text>
                }
                <View style={{alignItems:"flex-end",width:"50%"}}>
                  <Text onPress={this.max} style={{fontSize:14,color:"#0078EA"}}>
                    Max
                  </Text>
                </View>
              </View>

              <Text style={{fontSize:19,textAlign:"left",
                width:"50%",color:"#0078EA",marginBottom:5,marginTop:40}}>
                Enter Address
              </Text>
              <TextInput onChangeText={this.raddress}
                         value={val.raddress}
                         style={{borderBottomWidth:1,borderColor:"#0078EA"}}
                         placeholder={"Enter address"}/>

              <View style={{color:"#000000",flexDirection:"row",marginHorizontal:0,
                marginTop:15}}>
                <Text style={{fontSize:14,textAlign:"left",width:"80%",color:"black"}}>
                  Gas fee {val.gasfee} BINC
                </Text>
                <View style={{alignItems:"flex-end",width:"20%"}}>
                </View>
              </View>


            </View>




            <TouchableOpacity onPress={this.modal}
                              style={{backgroundColor:"#0078EA",width:"100%",
                                height:55,borderRadius:10,marginTop:70}}>
              <Text style={{color:"white",textAlign:"center",padding:12,fontSize:18}}>Continue</Text>
            </TouchableOpacity>

          </View>
        </ScrollView>


        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modal}
          onRequestClose={this.modal}>
          <View flex={10}  style={{paddingHorizontal:20,borderTopRightRadius:25}}>

            <ScrollView>
              <View style={{alignItems:"flex-end",marginTop:30,marginBottom:20}}>
                <View style={{color:"#000000",flexDirection:"row",marginHorizontal:0,
                  marginTop:15}}>
                  <View style={{fontSize:14,textAlign:"left",width:"50%",color:"black"}}>
                    <TouchableOpacity onPress={this.modal}>
                      <Image style={{width:30,height:30}}
                             source={require("../images/rightarrow.png")} />
                    </TouchableOpacity>
                  </View>
                  <View style={{alignItems:"flex-start",width:"50%"}}>
                    <Text style={{color:"#0078EA",fontSize:20,marginLeft:-40}}>Send BINC</Text>
                  </View>
                </View>
              </View>

              <Text style={{fontSize:18,color:"black",fontWeight:'bold',
                marginTop:40,textAlign:"center",marginBottom:40}}>
                Transaction Confirmation
              </Text>
              <Text style={{fontSize:15,color:"black",
                marginTop:0,textAlign:"center",marginBottom:10}}>
                0.577 BINC
              </Text>
              <Text style={{fontSize:35,color:"#0078EA",fontWeight:"bold",
                marginTop:0,textAlign:"center",marginBottom:50}}>
                $654.98
              </Text>

              <View style={{color:"#000000",flexDirection:"row",
                borderBottomWidth:0,borderColor:"#0078EA",paddingBottom:15}}>
                <Text style={{fontSize:17,textAlign:"left",width:"30%",color:"black"}}>
                  From:
                </Text>
                <View style={{alignItems:"flex-end",width:"70%"}}>
                  <Text style={{color:"black"}}>
                    0.0xfmmftR578mVcf0935bBm
                  </Text>
                </View>
              </View>
              <View style={{color:"#000000",flexDirection:"row",
                borderBottomWidth:0,borderColor:"#0078EA",paddingBottom:15}}>
                <Text style={{fontSize:17,textAlign:"left",width:"30%",color:"black"}}>
                  To:
                </Text>
                <View style={{alignItems:"flex-end",width:"70%"}}>
                  <Text style={{color:"black"}}>
                    0.0xfmmftR578mVcf0935bBm
                  </Text>
                </View>
              </View>
              <View style={{color:"#000000",flexDirection:"row",
                borderBottomWidth:0,borderColor:"#0078EA",paddingBottom:15}}>
                <Text style={{fontSize:17,textAlign:"left",width:"40%",color:"black"}}>
                  Network fees
                </Text>
                <View style={{alignItems:"flex-end",width:"60%"}}>
                  <Text style={{color:"black"}}>
                    0.54 BINC
                  </Text>
                </View>
              </View>

              <View style={{color:"#000000",flexDirection:"row",
                borderBottomWidth:0,borderColor:"#0078EA",paddingBottom:15}}>
                <Text style={{fontSize:17,textAlign:"left",width:"30%",color:"black"}}>
                  Total
                </Text>
                <View style={{alignItems:"flex-end",width:"70%"}}>
                  <Text style={{color:"black"}}>
                    0.54 BINC
                  </Text>
                </View>
              </View>

              <Text style={{color:"red",textAlign:"center",paddingHorizontal:30,marginTop:30}}>
                note : if your address don't correct you can lose your fund
              </Text>

              <TouchableOpacity
                style={{backgroundColor:"#0078EA",width:"100%",
                  height:55,borderRadius:10,marginTop:50}}>
                <Text style={{color:"white",textAlign:"center",padding:12,fontSize:18}}>Confirm</Text>
              </TouchableOpacity>

            </ScrollView>

          </View>
        </Modal>



      </View>
    );
  }
}

export default SendCoin;
