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
      data:[],coin:[],token:"",loading:true,
      refreshing: false,
      setRefreshing:false,blog:[],infounseen:[],info:[],dwallet:[],name:"",
      hide:"no",backup:false,
    }
    this.interval=null
  }

  async componentDidMount() {
    try {
      const token  =await AsyncStorage.getItem("token");
      if(token){
        this.setState({token:token})
        var formdata = new FormData()
        formdata.append("token",token)
        await fetch(ApiUrl.baseurl+"auth/deposit",{
          method: 'post',
          headers: { 'Content-Type':'multipart/form-data'},
          body:formdata
        })
          .then(response => response.json())
          .then(res => {
            console.log(res)
            this.interval= setInterval(()=>{
              this.balance()
            },30000)
          })
          .catch(err => {
            console.log(err)
          })
      }
    } catch (error) {
       //
    }

    try{
      var coin =await JSON.parse(AsyncStorage.getItem("coin"))
      if(coin){
        this.setState({coin:coin,loading:false})
        setTimeout(()=>{
          this.setWalletToCoin()
        },100)
      }
    }catch (err){
      //
    }

    try{
      var dwallet = JSON.parse(AsyncStorage.getItem("dwallet"))
      if(dwallet){
        this.setState({dwallet:dwallet})
      }
    }catch (err){}

    try{
      var hide = AsyncStorage.getItem("hide")
      if(hide){
        this.setState({hide:hide})
      }
    }catch (err){}

    try{
      var backup = AsyncStorage.getItem("backup")
      if(backup){
        this.setState({backup:backup})
      }
    }catch (err){}


    try{
      var blog = JSON.parse(AsyncStorage.getItem("blog"))
      if(blog){
        this.setState({blog:blog})
      }
    }catch (err){}

    try {
      var infounseen = JSON.parse(AsyncStorage.getItem("infounseen"))
      if(infounseen){
        this.setState({infounseen:infounseen})
      }
    }catch (err){}

    try {
      var info = JSON.parse(AsyncStorage.getItem("info"))
      if(info){
        this.setState({info:info})
      }
    }catch (err){}

    await fetch(ApiUrl.baseurl+"all-info",{
      method: 'post',
      headers: { 'Content-Type':'multipart/form-data'}
    })
      .then(response => response.json())
      .then(res => {
        //console.log(res)
        this.setState({infounseen:res})
        try{
          console.log("Info Set Success")
          AsyncStorage.setItem("infounseen",JSON.stringify(res))
        }catch (err){}
      })
      .catch(err => {
        console.log(err)
      })
    await fetch(ApiUrl.baseurl+"all-coin",{
      method: 'post',
      headers: { 'Content-Type':'multipart/form-data'}
    })
      .then(response => response.json())
      .then(res => {
        //console.log(res)
        this.setState({coin:res,loading:false})
        setTimeout(()=>{
          this.setWalletToCoin()
        },100)
        try{
          console.log("Coin Set Success")
          AsyncStorage.setItem("coin",JSON.stringify(res))
        }catch (err){}
      })
      .catch(err => {
        console.log(err)
      })

    await fetch(ApiUrl.baseurl+"all-blog",{
      method: 'post',
      headers: { 'Content-Type':'multipart/form-data'}
    })
      .then(response => response.json())
      .then(res => {
        //console.log(res)
        this.setState({blog:res})
        try{
          console.log("blog Set Success")
          AsyncStorage.setItem("blog",JSON.stringify(res))
        }catch (err){}
      })
      .catch(err => {
        console.log(err)
      })

    await fetch(ApiUrl.baseurl+"coin-price",{
      method: 'post',
      headers: { 'Content-Type':'multipart/form-data'}
    })
      .then(response => response.json())
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })

    setTimeout(()=>{
      this.saveWallet()
    },1000)

  }

  setWalletToCoin=()=>{
    this.state.coin.filter((res)=>{
      const {dwallet,coin} = this.state
      const data= [{
        coin_name:res.coin_name,coin_symbol:res.coin_symbol,coin_decimal:res.coin_decimal,
        coin_type:res.coin_type,contract:res.contract,explorer:res.explorer,logo:res.logo,
        platform:res.platform,id:res.id,price:res.price,day_change:res.day_change,
        status:res.status,bal:"0"
      }]

      var check = dwallet.find((item)=>{
        return res.id == item.id
      })
      if(check==null || check==undefined){
        this.setState({dwallet:[...dwallet,...data]})
      }
      if(check){
        dwallet.forEach(item=>{
          if(res.id==item.id){
            item.price=res.price;
            item.day_change=res.day_change;
            console.log(item.coin_name)
          }
        })
        setTimeout(()=>{
          this.setState({dwallet:dwallet})
        },500)
        console.log("Updated find value")
      }

    })

    //console.log(this.state.dwallet)
    setTimeout(()=>{
      this.saveWallet()
    },1000)
  }

  balance=async ()=>{
    var {dwallet} = this.state
    if(dwallet){
      await dwallet.forEach(res=>{
        cryptoBalanceCheck(res.coin_symbol,res.platform, res.coin_type,res.contract,res.coin_decimal,res.rpc,res.chain)
          .then(rs=>{
            console.log(rs)
            res.bal=rs.balance;
          })
          .catch(err=>{
            console.log(err)
          })
      })

      await  this.setState({dwallet:dwallet})
      //await this.saveWallet()
      await setTimeout(async ()=>{
        await AsyncStorage.setItem("dwallet",JSON.stringify(this.state.dwallet))
        await console.log("Wallet Saved with new Balance  ",dwallet)
      },100)

    }
  }


  saveWallet=async ()=>{
    try{
     await AsyncStorage.setItem("dwallet",JSON.stringify(this.state.dwallet))
      console.log("Wallet Saved Localstorage ")
    }catch (err){}
  }

  name=(val)=>{
    this.setState({name:val})
  }

  hide=async ()=>{
    if(this.state.hide=="no"){
      this.setState({hide:"yes"})
      try{
        await AsyncStorage.setItem("hide","yes")
      }catch (err){}
    }else{
      this.setState({hide:"no"})
      try{
        await AsyncStorage.setItem("hide","no")
      }catch (err){}
    }
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

  _renderItem = ({item, index}) => {
    return (
      <View flex={1}>
        <TouchableOpacity>
          <View>
            <Image style={{width:"91%",height:100,borderWidth:1,
              borderRadius:10}} source={{
              uri: ApiUrl.imagesBannar+item.img//"https://img.bitgetimg.com/multiLang/web/66abae51e11753a3ac6d84dcdc9dbca6.jpeg",
            }}/>
          </View>
        </TouchableOpacity>

      </View>
    );
  }

  render() {
    var val = this.state
    var data=val.blog.filter((val)=>{
      if(val.type=="Home" || val.type=="both"){
        return val
      }
    })

    var infocount =val.infounseen.length- val.info.length
    console.log(infocount,"info Count")
    var usd=0
    var dwall = val.dwallet.sort(function(a, b){return b.bal-a.bal});
    var wallet = dwall.filter((v)=>{
      if(v.status=="1"){
        if(this.state.name==""){
          return v
        }else if(v.coin_symbol.toLowerCase().includes(this.state.name.toLowerCase())){
          return v
        }
      }
    }).map(res=>{
      //console.log(res.logo)
      var value =(parseFloat(res.bal)*parseFloat(res.price))
      usd+=value
      var bal=parseFloat(res.bal)
      var ch = parseFloat(res.day_change)
      return(
        <TouchableOpacity onPress={()=>this.props.navigation.navigate("CoinView", {
          name:res.id
        })}>
          <View flex={2} style={{flexDirection:"row",paddingHorizontal:30,marginBottom:10}}>
            <View flex={1}>
              <View flex={2} style={{flexDirection:"row"}}>
                <View flex={1}>
                  <Image style={{height:40,width:40,borderRadius:50,marginTop:2}}
                         source={{uri:ApiUrl.baseurl+"static/images/"+res.logo}}/>
                </View>
                <View flex={1} style={{marginLeft:-50}}>
                  <Text style={{color:"black",fontSize:18}}>{res.coin_symbol}
                    <Text style={{fontSize:14,color:ch>0?"green":ch<0?"red":"black",marginLeft:5}}>{ch>0?"+":ch<0?"-":""}{ch}%</Text>
                  </Text>
                  <Text style={{color:"black",fontSize:16}}>{parseFloat(res.price).toFixed(2)}$</Text>
                </View>
              </View>
            </View>
            <View flex={1} style={{alignItems:"flex-end"}}>
              <Text style={{color:"black",fontSize:16}}>{val.hide=="yes"?"****":bal.toFixed(bal>0?bal<1?8:4:0)}</Text>
              <Text style={{color:"black",fontSize:16}}>{val.hide=="yes"?"****":(parseFloat(res.bal)*parseFloat(res.price)).toFixed(2)}$</Text>
            </View>
          </View>
        </TouchableOpacity>

      )
    })

    return (
      <ScrollView refreshControl={
        <RefreshControl refreshing={this.state.refreshing} onRefresh={this.onRefresh} />} flex={1} style={{backgroundColor:"#D0E1F1"}} >
        <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#D0E1F1" translucent = {true}/>

        <View style={{backgroundColor:"#226BAF",padding:15,
          marginHorizontal:20,borderRadius:15,marginTop:15}}>

          <View flex={2} style={{flexDirection:"row"}}>
             <View flex={1} style={{flexDirection:"row"}}>
               <TouchableOpacity style={{flexDirection:"row"}}>
                 <Text style={{marginRight:10,color:"white",fontSize:18}}>Main Wallet</Text>
                 <FontAwesome5 name={'caret-down'} style={{marginTop:5,display:"none"}} color="#ffffff"
                               size={20}  />
               </TouchableOpacity>
               <TouchableOpacity onPress={()=>this.props.navigation.navigate("Backup")}
                                 style={{backgroundColor:"#ffffff",paddingHorizontal:10,
                 paddingVertical:2.5,borderRadius:15,marginLeft:10,marginTop:-5,height:28}}>
                 <Text style={{color:"#000000",fontSize:15}}>! Backup</Text>
               </TouchableOpacity>
             </View>
             <View flex={1} style={{alignItems:"flex-end"}}>
               <TouchableOpacity onPress={this.hide}>
                 <FontAwesome5 name={'eye'} color="#ffffff"
                               size={20}  />
               </TouchableOpacity>
             </View>
           </View>

          <View flex={2} style={{flexDirection:"row",marginTop:5}}>
            <View flex={1} style={{flexDirection:"row"}}>
              <Text style={{marginRight:10,color:"white",fontSize:12}}>Total Balance :</Text>
            </View>

          </View>
          <View flex={2} style={{flexDirection:"row"}}>
            <View flex={1} style={{flexDirection:"row"}}>
              <TouchableOpacity style={{flexDirection:"row"}}>
                <Text style={{marginRight:10,color:"white",fontSize:22}}>
                  $ {val.hide=="yes"?"****":usd.toFixed(2)}</Text>
                <FontAwesome6
                  name={'rotate'} style={{marginTop:10,display:"none"}} color="#ffffff"
                              size={15}  />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View flex={4} style={{flexDirection:"row",paddingVertical:20,marginHorizontal:30}}>
          <View flex={1} style={{alignItems:"center"}}>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate("SendList")} style={{backgroundColor:"#226BAF",padding:15,borderRadius:15}}>
              <Image style={{width:30,height:30,marginTop:0,
              }}
                     source={require("../../images/Send-icon.png")} />
            </TouchableOpacity>
            <Text style={{color:"#226BAF",fontSize:16}}>Send</Text>
          </View>
          <View flex={1} style={{alignItems:"center"}}>
            <TouchableOpacity
              onPress={()=>this.props.navigation.navigate("ReceiveList")}
              style={{backgroundColor:"#226BAF",padding:15,borderRadius:15}}>
              <Image style={{width:30,height:30,marginTop:0,
              }}
                     source={require("../../images/receive-icon.png")} />
            </TouchableOpacity>
            <Text style={{color:"#226BAF",fontSize:16}}>Receive</Text>
          </View>
          <View flex={1} style={{alignItems:"center"}}>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate("Bottom")} style={{backgroundColor:"#226BAF",padding:15,borderRadius:15}}>
              <Image style={{width:30,height:30,marginTop:0,
              }}
                     source={require("../../images/earnwhite.png")} />
            </TouchableOpacity>
            <Text style={{color:"#226BAF",fontSize:16}}>Earn</Text>
          </View>
          <View flex={1} style={{alignItems:"center"}}>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate("AllHistory")} style={{backgroundColor:"#226BAF",padding:15,borderRadius:15}}>
              <FontAwesome6
                name={'clock-rotate-left'} style={{marginTop:0}} color="#ffffff"
                size={30}  />
            </TouchableOpacity>
            <Text style={{color:"#226BAF",fontSize:16}}>History</Text>
          </View>
        </View>

        <View flex={1} style={{marginTop:10,paddingHorizontal:20,
          width:"100%",height:100,alignItems:"center"}}>
          <View style={{width:"100%",height:"100%"}}>
            <Carousel
              data={data}
              renderItem={this._renderItem}
              sliderWidth={Dimensions.get('window').width}
              itemWidth={Dimensions.get('window').width}
              autoplay={true}
              firstItem={0}
              loop={true}
              autoplayDelay={3000}
            />
          </View>
        </View>

        <View flex={1} style={{alignItems:"flex-end",paddingHorizontal:30,marginTop:18,marginBottom:10}}>
          <View style={{width:"100%",height:30,borderColor:"white",paddingVertical:5,paddingHorizontal:10,
            borderWidth:1,borderRadius:25,flexDirection:"row",backgroundColor:"white"}}>
            <FontAwesome5 name="search" color="#023064" style={{marginRight:5}} size={16}/>
            <TextInput  value={""} style={{height:28,width:"85%",backgroundColor:"transparent",
              color:"black",marginTop:-5,borderRadius:10,fontSize:16,padding:0,
              paddingBottom:5,paddingLeft:10}} placeholder="search"/>
          </View>
        </View >

        <View flex={2} style={{flexDirection:"row",paddingHorizontal:30,marginTop:10,marginBottom:20}}>
          <View flex={1} style={{backgroundColor:"white",alignItems:"center",padding:10,borderRadius:25}}>
            <Text style={{color:"#023064",fontSize:17}}>Crypto Wallet</Text>
          </View>
          <View flex={1} style={{alignItems:"center",padding:10}}>

          </View>
        </View>

        {this.state.loading==true?<ActivityIndicator size="large" color="red"
                                                     style={{marginTop:20}}/>:""}
        {wallet}

        <View>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate("Manage")}>
            <Text style={{fontSize:18,textAlign:"center",color:"#063267",marginVertical:5,marginBottom:10}}>
              Manage Crypto
            </Text>
          </TouchableOpacity>
        </View>


        <View style={{marginBottom:105}}></View>

      </ScrollView>
    );
  }
}

export default Home;
