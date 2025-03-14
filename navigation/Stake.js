import {
  View,
  Text,
  StatusBar,
  Image,
  ScrollView,
  TextInput,
  SafeAreaView,
  Button, Alert,
  TouchableOpacity, Dimensions, Modal, BackHandler,
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import React, { Component } from "react";
import Carousel from "react-native-snap-carousel";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import CheckBox from "react-native-check-box";

class Stake extends Component {
  constructor() {
    super();
    this.state={
      tab:"stake",checkbox:true
    }
  }
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

  tab=(val)=>{
    this.setState({tab:val})
  }
  checkbox=()=>{
    if (this.state.checkbox==false){
      this.setState({checkbox:true})
    }else{
      this.setState({checkbox:false})
    }
  }

  render() {
    var val = this.state
    return (
      <View flex={1} style={{flexDirection:"column",justifyContent:"center",backgroundColor:"#003585"}} >
        <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#003585" translucent = {true}/>

        <ScrollView style={{padding:25,marginBottom:40}}>

          <Text style={{color:"#ffffff",fontSize:17,textAlign:"center"}}>Stake sol or zeros point and recieve </Text>
          <Text style={{color:"#ffffff",fontSize:17,textAlign:"center"}}>zeros while staking </Text>
          <View style={{backgroundColor:"#ffffff",height:40,marginTop:30,
            borderRadius:25,padding:3,flexDirection:"row",marginBottom:10}}>
            <View style={{alignItems:"center",width:"50%"}}>
              <TouchableOpacity onPress={this.tab.bind(this,"stake")} style={{backgroundColor:val.tab=="stake"?"#003585":"transparent",
                width:"100%",height:"100%",borderRadius:25}}>
                <Text style={{textAlign:"center",color:val.tab=="stake"?"white":"#000000",fontSize:17,paddingVertical:4}}>stake</Text>
              </TouchableOpacity>
            </View>
            <View style={{alignItems:"center",width:"50%"}}>
              <TouchableOpacity onPress={this.tab.bind(this,"ustake")} style={{backgroundColor:val.tab=="ustake"?"#003585":"transparent",
                width:"100%",height:"100%",borderRadius:25}}>
                <Text style={{textAlign:"center",color:val.tab=="ustake"?"#ffffff":"#000000",fontSize:17,paddingVertical:4}}>your staked</Text>
              </TouchableOpacity>
            </View>
          </View>

          {val.tab=="stake"?
          <>
            <View style={{backgroundColor:"#ffffff",height:470,borderRadius:10,padding:20}}>

              <View style={{flexDirection:"row"}}>
                <View style={{width:"50%"}}>
                  <Text style={{color:"#000000",fontSize:18}}>Stake amount</Text>
                </View>
                <View style={{width:"50%",alignItems:"flex-end",marginTop:-5}}>
                  <Text style={{color:"#000000",fontSize:15}}>Balance</Text>
                  <Text style={{color:"#000000",fontSize:15}}>0.6282</Text>
                </View>
              </View>

              <View style={{height:40,borderColor:"#013483",borderWidth:2,
                borderRadius:25,marginTop:10,padding:5,flexDirection:"row"}}>
                <View style={{width:"30%",flexDirection:"row"}}>
                  <TouchableOpacity style={{flexDirection:"row"}}>
                    <Image style={{height:25,width:25,borderRadius:50,marginTop:0}}
                           source={{uri:"https://img.bitgetimg.com/multiLang/coin_img/1c1b05492d876ab7e3fa96ea2036ceb2.png"}}/>

                    <Text style={{color:"#013483",fontSize:17,fontWeight:"bold",marginLeft:5}}>SOL</Text>
                    <FontAwesome6
                      name={'caret-down'} style={{marginLeft:5,marginTop:2}} color="#004E91"
                      size={20}  />
                  </TouchableOpacity>
                </View>
                <View style={{width:"55%"}}>
                  <TextInput keyboardType={"numeric"} style={{height:28,width:"85%",backgroundColor:"transparent",
                    color:"black",marginTop:-3,borderRadius:10,fontSize:16,padding:0,paddingLeft:2}} placeholder="amount "/>
                </View>
                <View style={{width:"15%"}}>
                  <TouchableOpacity>
                    <Text style={{color:"#013483",fontSize:17,fontWeight:"bold"}}>Max</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={{height:40,borderColor:"#013483",borderWidth:2,
                borderRadius:25,marginTop:20,padding:5,flexDirection:"row"}}>
                <View style={{width:"50%",flexDirection:"row"}}>
                  <Text style={{color:"#013483",fontSize:15,fontWeight:"bold",marginLeft:5}}>Duration</Text>
                </View>
                <View style={{width:"50%",alignItems:"flex-end",paddingRight:20}}>
                  <TouchableOpacity style={{flexDirection:"row"}}>
                    <Text style={{color:"#013483",fontSize:17,fontWeight:"bold",marginLeft:5}}>1 day</Text>
                    <FontAwesome6
                      name={'caret-down'} style={{marginLeft:5,marginTop:2}} color="#004E91"
                      size={20}  />
                  </TouchableOpacity>
                </View>
              </View>

              <Text style={{color:"black",fontSize:17,fontWeight:'bold',marginTop:20}}>Stake Details</Text>

              <View style={{flexDirection:'row',marginTop:10}}>
                <View style={{width:"50%"}}>
                  <Text style={{color:"black",fontSize:17}}>Duration</Text>
                </View>
                <View style={{width:"50%",alignItems:"flex-end"}}>
                  <Text style={{color:"#013483",fontSize:17}}>1 day</Text>
                </View>
              </View>
              <View style={{flexDirection:'row',marginVertical:5}}>
                <View style={{width:"50%"}}>
                  <Text style={{color:"black",fontSize:17}}>Stake Amount</Text>
                </View>
                <View style={{width:"50%",alignItems:"flex-end"}}>
                  <Text style={{color:"#013483",fontSize:17}}>100 SOL</Text>
                </View>
              </View>
              <View style={{flexDirection:'row',marginVertical:2}}>
                <View style={{width:"50%"}}>
                  <Text style={{color:"black",fontSize:17}}>Profit Total</Text>
                </View>
                <View style={{width:"50%",alignItems:"flex-end"}}>
                  <Text style={{color:"#013483",fontSize:17}}>
                    500 Point
                  </Text>
                </View>
              </View>
              <View style={{flexDirection:'row',marginVertical:2}}>
                <View style={{width:"50%"}}>
                  <Text style={{color:"black",fontSize:17}}>Interest Rate</Text>
                </View>
                <View style={{width:"50%",alignItems:"flex-end"}}>
                  <Text style={{color:"#013483",fontSize:17}}>
                    50 Point Perday
                  </Text>
                </View>
              </View>

              <View style={{flexDirection:"row",marginTop:20}}>
                <CheckBox
                  value={val.checkbox}
                  onValueChange={this.checkbox}
                  onClick={this.checkbox}
                  isChecked={this.state.checkbox}
                  style={{color:"#013483"}}
                />
                <Text style={{color:'#000000',fontSize:13,marginTop:2,marginLeft:2}}> I do accept the <Text style={{color:"#013483"}}>Terms And Condition</Text> of your site.</Text>
              </View>

              <TouchableOpacity style={{marginTop:20,backgroundColor:"#013483",width:"100%",height:50,borderRadius:10}}>
                <Text style={{color:"white",textAlign:"center",padding:10,fontSize:20}}>Stake</Text>
              </TouchableOpacity>

            </View>


            <Text style={{marginTop:30,color:"#ffffff",fontSize:15}}>Staking Policy</Text>

            <Text style={{marginTop:20,color:"#ffffff",fontSize:14,paddingLeft:10}}>1. Minimum Staking Amount: The minimum amount </Text>
            <Text style={{marginTop:2,color:"#ffffff",fontSize:14,paddingLeft:30}}>required to start staking is $1</Text>

            <Text style={{marginTop:5,color:"#ffffff",fontSize:14,paddingLeft:10}}>
              2. Rewards Calculation</Text>
            <Text style={{marginTop:2,color:"#ffffff",fontSize:14,paddingLeft:30}}>
              . Earn 50 points for every $1 staked in Sol staking
            </Text>
            <Text style={{marginTop:2,color:"#ffffff",fontSize:14,paddingLeft:30}}>
              .  Earn 60 points for every $1 staked in Zero Points
            </Text>
            <Text style={{marginTop:2,color:"#ffffff",fontSize:14,paddingLeft:40}}>
              staking
            </Text>

            <Text style={{marginTop:5,color:"#ffffff",fontSize:14,paddingLeft:10}}>
              3.  Reward Distribution: Points will be credited to your  </Text>
            <Text style={{marginTop:2,color:"#ffffff",fontSize:14,paddingLeft:30}}>
              account immediately upon successful staking</Text>

            <Text style={{marginTop:5,color:"#ffffff",fontSize:14,paddingLeft:10}}>
              4. Lock-In Period: Staked funds are subject to a lock-in   </Text>
            <Text style={{marginTop:2,color:"#ffffff",fontSize:14,paddingLeft:30}}>
              period as per the staking terms mentioned during
              the transaction </Text>

            <Text style={{marginTop:5,color:"#ffffff",fontSize:14,paddingLeft:10}}>
              5. Withdrawal Policy: Withdrawal of staked funds may  </Text>
            <Text style={{marginTop:2,color:"#ffffff",fontSize:14,paddingLeft:30}}>
              be subject to a cooldown period and applicable
              fees. </Text>

            <Text style={{marginTop:5,color:"#ffffff",fontSize:14,paddingLeft:10}}>
              6.  Changes to Policy: Staking rewards and policies are  </Text>
            <Text style={{marginTop:2,color:"#ffffff",fontSize:14,paddingLeft:30}}>
              subject to change based on market conditions and
              platform updates.</Text>

            <Text style={{color:"#ffffff",fontSize:15,marginTop:5}}>
              By participating in staking, users agree to abide by
              these terms and conditions. For detailed information,
              please refer to our Staking <Text style={{color:"#000000"}}>Terms & Conditions .</Text>
            </Text>
          </>:""}

          {val.tab=="ustake"?<>

            <View style={{paddingVertical:20,flexDirection:"row",borderBottomWidth:1,borderColor:"#014F93"}}>
              <View style={{width:"50%"}}>
                <Text style={{color:"white",fontSize:18}}>your staking</Text>
              </View>
              <View style={{width:"50%",alignItems:"flex-end"}}>
                <TouchableOpacity onPress={this.tab.bind(this,"stake")} style={{marginTop:0,backgroundColor:"#014F93",width:"50%",height:40,borderRadius:25}}>
                  <Text style={{color:"white",textAlign:"center",padding:8,fontSize:14}}>New Stake</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={{height:150,borderBottomWidth:2,borderColor:"#014F93",flexDirection:"row",paddingVertical:10}}>
              <View style={{width:"50%"}}>
                <Text style={{color:"white",fontSize:18}}>100  <Image style={{height:25,width:25,borderRadius:50,marginTop:0}}
                                                                                         source={{uri:"https://img.bitgetimg.com/multiLang/coin_img/1c1b05492d876ab7e3fa96ea2036ceb2.png"}}/>
                </Text>
                <Text style={{color:"white",fontSize:16,paddingVertical:5}}>Duration  </Text>
                <Text style={{color:"white",fontSize:16,paddingVertical:5}}>Profit  </Text>
                <Text style={{color:"white",fontSize:16,paddingVertical:5}}>Status  </Text>
              </View>
              <View style={{width:"50%",alignItems:"flex-end"}}>
                <Text style={{color:"white",fontSize:16,paddingVertical:5}}>1 july 2025  </Text>
                <Text style={{color:"white",fontSize:16,paddingVertical:5}}>15 days </Text>
                <Text style={{color:"white",fontSize:16,paddingVertical:5}}>100 Point </Text>
                <TouchableOpacity  style={{marginTop:0,backgroundColor:"#014F93",width:"50%",height:35,borderRadius:20}}>
                  <Text style={{color:"white",textAlign:"center",padding:7,fontSize:14}}>Onging</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={{height:150,borderBottomWidth:2,borderColor:"#014F93",flexDirection:"row",paddingVertical:10}}>
              <View style={{width:"50%"}}>
                <Text style={{color:"white",fontSize:18}}>100  <Image style={{height:25,width:25,borderRadius:50,marginTop:0}}
                                                                      source={{uri:"https://img.bitgetimg.com/multiLang/coin_img/1c1b05492d876ab7e3fa96ea2036ceb2.png"}}/>
                </Text>
                <Text style={{color:"white",fontSize:16,paddingVertical:5}}>Duration  </Text>
                <Text style={{color:"white",fontSize:16,paddingVertical:5}}>Profit  </Text>
                <Text style={{color:"white",fontSize:16,paddingVertical:5}}>Status  </Text>
              </View>
              <View style={{width:"50%",alignItems:"flex-end"}}>
                <Text style={{color:"white",fontSize:16,paddingVertical:5}}>1 july 2025  </Text>
                <Text style={{color:"white",fontSize:16,paddingVertical:5}}>15 days </Text>
                <Text style={{color:"white",fontSize:16,paddingVertical:5}}>100 Point </Text>
                <TouchableOpacity  style={{marginTop:0,backgroundColor:"#2a2424",width:"50%",height:35,borderRadius:20}}>
                  <Text style={{color:"white",textAlign:"center",padding:7,fontSize:14}}>Completed</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={{height:150,borderBottomWidth:2,borderColor:"#014F93",flexDirection:"row",paddingVertical:10}}>
              <View style={{width:"50%"}}>
                <Text style={{color:"white",fontSize:18}}>100  <Image style={{height:25,width:25,borderRadius:50,marginTop:0}}
                                                                      source={{uri:"https://img.bitgetimg.com/multiLang/coin_img/1c1b05492d876ab7e3fa96ea2036ceb2.png"}}/>
                </Text>
                <Text style={{color:"white",fontSize:16,paddingVertical:5}}>Duration  </Text>
                <Text style={{color:"white",fontSize:16,paddingVertical:5}}>Profit  </Text>
                <Text style={{color:"white",fontSize:16,paddingVertical:5}}>Status  </Text>
              </View>
              <View style={{width:"50%",alignItems:"flex-end"}}>
                <Text style={{color:"white",fontSize:16,paddingVertical:5}}>1 july 2025  </Text>
                <Text style={{color:"white",fontSize:16,paddingVertical:5}}>15 days </Text>
                <Text style={{color:"white",fontSize:16,paddingVertical:5}}>100 Point </Text>
                <TouchableOpacity  style={{marginTop:0,backgroundColor:"#2a2424",width:"50%",height:35,borderRadius:20}}>
                  <Text style={{color:"white",textAlign:"center",padding:7,fontSize:14}}>Completed</Text>
                </TouchableOpacity>
              </View>
            </View>

          </>:""}

          <View style={{marginBottom:50}}></View>
        </ScrollView>

      </View>
        );
  }
};

export default Stake;
