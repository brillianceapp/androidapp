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

class Swap extends Component {
  constructor() {
    super();
    this.state={
      checkbox:true
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

          <Text style={{color:"#ffffff",fontSize:17,textAlign:"center"}}>Swap sol or zeros  and recieve airdrop </Text>
          <Text style={{color:"#ffffff",fontSize:17,textAlign:"center",marginBottom:20}}>point while swapping </Text>


          <>
            <View style={{backgroundColor:"#ffffff",height:470,borderRadius:10,padding:20}}>

              <View style={{flexDirection:"row"}}>
                <View style={{width:"50%"}}>
                  <Text style={{color:"#000000",fontSize:18}}>You pay</Text>
                </View>
                <View style={{width:"50%",alignItems:"flex-end",marginTop:0}}>
                  <Text style={{color:"#000000",fontSize:15}}>Balance 0.6282</Text>
                </View>
              </View>

              <View style={{height:60,borderColor:"#013483",borderWidth:2,
                borderRadius:10,marginTop:10,padding:15,flexDirection:"row"}}>
                <View style={{width:"70%"}}>
                  <TextInput keyboardType={"numeric"} style={{height:28,width:"85%",backgroundColor:"transparent",
                    color:"black",marginTop:-3,borderRadius:10,fontSize:16,padding:0,paddingLeft:20}}
                             placeholder="enter amount "/>
                </View>
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
              </View>

              <View style={{width:"100%",marginVertical:10,flexDirection:"row"}}>
                <View style={{width:"50%",alignItems:"flex-end"}}>
                  <TouchableOpacity>
                    <FontAwesome6
                      name={'right-left'}
                      style={{marginLeft:5,marginTop:2,textAlign:"center",
                        backgroundColor:"#014E90",borderRadius:50,padding:10,marginRight:-20}} color="#ffffff"
                      size={20}  />
                  </TouchableOpacity>
                </View>
                <View style={{width:"50%",alignItems:"flex-end"}}>
                  <TouchableOpacity style={{alignItems:"flex-end"}}>
                    <Text style={{color:"#013483",fontSize:17,fontWeight:"bold",textAlign:"right"}}>Max</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={{height:60,borderColor:"#013483",borderWidth:2,
                borderRadius:10,marginTop:10,padding:15,flexDirection:"row"}}>
                <View style={{width:"70%"}}>
                  <TextInput keyboardType={"numeric"} style={{height:28,width:"85%",backgroundColor:"transparent",
                    color:"black",marginTop:-3,borderRadius:10,fontSize:16,padding:0,paddingLeft:20}}
                             placeholder="enter amount "/>
                </View>
                <View style={{width:"30%",flexDirection:"row"}}>
                  <TouchableOpacity style={{flexDirection:"row"}}>
                    <Image style={{height:25,width:25,borderRadius:50,marginTop:0}}
                           source={{uri:"https://img.bitgetimg.com/multiLang/coin_img/1c1b05492d876ab7e3fa96ea2036ceb2.png"}}/>

                    <Text style={{color:"#013483",fontSize:17,fontWeight:"bold",marginLeft:5}}>ZEROS</Text>
                    <FontAwesome6
                      name={'caret-down'} style={{marginLeft:5,marginTop:2}} color="#004E91"
                      size={20}  />
                  </TouchableOpacity>
                </View>
              </View>

              <Text style={{color:"black",fontSize:17,fontWeight:'bold',marginTop:20}}>Swap Details</Text>

              <View style={{flexDirection:'row',marginVertical:10}}>
                <View style={{width:"50%"}}>
                  <Text style={{color:"black",fontSize:17}}>Exchange rate</Text>
                </View>
                <View style={{width:"50%",alignItems:"flex-end"}}>
                  <Text style={{color:"#013483",fontSize:17}}>
                    1 SOL = 50 ZEROS
                  </Text>
                </View>
              </View>

              <View style={{flexDirection:"row",marginTop:10}}>
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
                <Text style={{color:"white",textAlign:"center",padding:10,fontSize:20}}>Swap</Text>
              </TouchableOpacity>

            </View>


            <Text style={{marginTop:30,color:"#ffffff",fontSize:15}}>Swapping Policy</Text>

            <Text style={{marginTop:20,color:"#ffffff",fontSize:14,paddingLeft:10}}>1. Minimum Swappning Amount: The minimum amount </Text>
            <Text style={{marginTop:2,color:"#ffffff",fontSize:14,paddingLeft:30}}>required to start swapping is $1</Text>

            <Text style={{marginTop:5,color:"#ffffff",fontSize:14,paddingLeft:10}}>
              2. Rewards Calculation</Text>
            <Text style={{marginTop:2,color:"#ffffff",fontSize:14,paddingLeft:30}}>
              . Earn 50 points for every $1 staked in Sol swapping
            </Text>
            <Text style={{marginTop:2,color:"#ffffff",fontSize:14,paddingLeft:30}}>
              .  Earn 60 points for every $1 swapping in Zero Points
            </Text>
            <Text style={{marginTop:2,color:"#ffffff",fontSize:14,paddingLeft:40}}>
              staking
            </Text>

            <Text style={{marginTop:5,color:"#ffffff",fontSize:14,paddingLeft:10}}>
              3.  Reward Distribution: Points will be credited to your  </Text>
            <Text style={{marginTop:2,color:"#ffffff",fontSize:14,paddingLeft:30}}>
              account immediately upon successful swapping</Text>

            <Text style={{marginTop:5,color:"#ffffff",fontSize:14,paddingLeft:10}}>
              4. Lock-In Period: Staked funds are subject to a lock-in   </Text>
            <Text style={{marginTop:2,color:"#ffffff",fontSize:14,paddingLeft:30}}>
              period as per the staking terms mentioned during
              the transaction </Text>

            <Text style={{marginTop:5,color:"#ffffff",fontSize:14,paddingLeft:10}}>
              5. Withdrawal Policy: Withdrawal of swapping funds may  </Text>
            <Text style={{marginTop:2,color:"#ffffff",fontSize:14,paddingLeft:30}}>
              be subject to a cooldown period and applicable
              fees. </Text>

            <Text style={{marginTop:5,color:"#ffffff",fontSize:14,paddingLeft:10}}>
              6.  Changes to Policy: swapping rewards and policies are  </Text>
            <Text style={{marginTop:2,color:"#ffffff",fontSize:14,paddingLeft:30}}>
              subject to change based on market conditions and
              platform updates.</Text>

            <Text style={{color:"#ffffff",fontSize:15,marginTop:5}}>
              By participating in staking, users agree to abide by
              these terms and conditions. For detailed information,
              please refer to our swapping <Text style={{color:"#000000"}}>Terms & Conditions .</Text>
            </Text>
          </>


          <View style={{marginBottom:50}}></View>
        </ScrollView>

      </View>
    );
  }
}

export default Swap;
