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
  ScrollView, BackHandler, Modal, ToastAndroid, Clipboard,
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
      name:"",modal:false,address:"",bal:"0",price:"0.0",amount:"",gasfee:"0",
      raddress:"",loading:false
    }
    this.interval=null
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    this.getToken()
    this.getBal()
    this.getPrice()

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
      })

  }

  getPrice=async ()=>{
    try {
      const price  =await AsyncStorage.getItem("price");
      if(price){
        console.log(price,"price get")
        this.setState({price:price})
      }
    } catch (error) {
      console.log("error storage send")
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
    const provider =await new ethers.providers.JsonRpcProvider('https://rpc.brillianceglobal.ltd/', { name: 'brilliance', chainId: 1020 })
    let wallet =await new ethers.Wallet(this.state.token);
    var address =await wallet.address
    const ethbalance = await provider.getBalance(address);
    await this.setState({bal:ethers.utils.formatEther(ethbalance)})
    console.log("Bal Send : ",ethers.utils.formatEther(ethbalance))
    const feeData = await provider.getFeeData();
    let gasPrice =await feeData.gasPrice;
    console.log(gasPrice,"gas price")
    const gasPriceInEth =await (21000*parseFloat(ethers.utils.formatUnits(gasPrice, 'ether')));
    console.log(gasPriceInEth,"gas price eth")
    await this.setState({gasfee:(gasPriceInEth+0.00000005).toFixed(8)})
    await this.setBal(ethers.utils.formatEther(ethbalance))
  }

  getBal=async ()=>{
    try {
      const bal  =await AsyncStorage.getItem("bal");
      if(bal){
        this.setState({bal:bal})
      }
    } catch (error) {
      console.log("error storage Send Coin Bal")
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
    var val = this.state
    var value = parseFloat(val.amount)-parseFloat(val.gasfee)
    if(this.state.modal==false){
      if(val.amount==""){
        this.Toast("Amount is required")
      }
      if(val.raddress==""){
        this.Toast("Address is required")
      }
      if(parseFloat(val.bal)<value){
        this.Toast("Balance not enough")
      }
      if(val.amount!=="" && val.raddress!=="" && parseFloat(val.bal)>=value ){
        this.setState({modal:true})
      }
    }else {
      this.setState({modal:false})
    }
  }

  Toast=(val)=>{
    ToastAndroid.show(val,
      ToastAndroid.SHORT,
      ToastAndroid.TOP,
      ToastAndroid.CENTER
    );
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

  pasteKey=async ()=>{
    const text = await Clipboard.getString()
    console.log(text)
    this.setState({raddress:text})
  }

  signTrx=async ()=>{
    this.setState({loading:true})
    const provider = new ethers.providers.JsonRpcProvider('https://rpc.brillianceglobal.ltd/', { name: 'brilliance', chainId: 1020 })
    let wallet = new ethers.Wallet(this.state.token,provider);
    var address = wallet.address
    const tx = {
      from: address,//wallet.address,
      to: this.state.raddress,
      value: ethers.utils.parseUnits(this.state.amount, 'ether').toHexString(),
      gasLimit: ethers.utils.hexlify(21000),
    }
    wallet.sendTransaction(tx)
      .then((ttx) => {
        this.Toast("Transaction has been broadcast to node")
        this.setState({modal:false,loading:false})
        this.setState({ amount:"", raddress:"" })
        ttx.wait()
          .then(res=>{
            setTimeout(()=>{
              this.props.navigation.navigate("Bottom")
            },2000)
            this.Toast("Transaction Send Successful trx id : "+res.transactionHash)
            console.log(res)
            console.log("trx hash "+res.transactionHash)
          })
          .catch(error=>{
            //console.log(error.message)
            this.Toast(error.message)
            this.setState({modal:false,loading:false})
          })
      })
      .catch(error=>{
        console.log(error.message)
        this.Toast(error.message)
        this.setState({modal:false,loading:false})
      })

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

                  {
                    val.raddress==""?
                      <View style={{alignItems:"flex-end"}}>
                        <TouchableOpacity onPress={this.pasteKey} style={{backgroundColor:"#0078EA",color:"white",
                          alignItems:"center",padding:2.5,borderRadius:15,width:60,
                          marginTop:-45,marginRight:0}}>
                          <Text style={{color:"white"}}>Paste</Text>
                        </TouchableOpacity>
                      </View>:""
                  }

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
                {parseFloat(val.amount).toFixed(8)} BINC
              </Text>
              <Text style={{fontSize:35,color:"#0078EA",fontWeight:"bold",
                marginTop:0,textAlign:"center",marginBottom:50}}>
                ${(parseFloat(val.amount)*price).toFixed(2)}
              </Text>

              <View style={{color:"#000000",flexDirection:"row",
                borderBottomWidth:0,borderColor:"#0078EA",paddingBottom:15}}>
                <Text style={{fontSize:17,textAlign:"left",width:"30%",color:"black"}}>
                  From:
                </Text>
                <View style={{alignItems:"flex-end",width:"70%"}}>
                  <Text style={{color:"black"}}>
                    {val.address.substring(0,10)+"......"+val.address.substring(val.address.length -10)}
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
                    {val.raddress.substring(0,10)+"......"+val.raddress.substring(val.address.length -10)}
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
                    {parseFloat(val.gasfee).toFixed(8)} BINC
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
                    {parseFloat(val.amount).toFixed(8)} BINC
                  </Text>
                </View>
              </View>

              <Text style={{color:"red",textAlign:"center",paddingHorizontal:30,marginTop:30}}>
                note : if your address don't correct you can lose your fund
              </Text>

              <TouchableOpacity onPress={this.signTrx}
                style={{backgroundColor:"#0078EA",width:"100%",
                  height:55,borderRadius:10,marginTop:50}}>
                <Text style={{color:"white",textAlign:"center",padding:12,fontSize:18}}>
                  {val.loading==true?"Sending...":"Confirm"}
                </Text>
              </TouchableOpacity>

            </ScrollView>

          </View>
        </Modal>



      </View>
    );
  }
}

export default SendCoin;
