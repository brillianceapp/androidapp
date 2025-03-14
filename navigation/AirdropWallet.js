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

class AirdropWallet extends Component {
  constructor() {
    super();
    this.state={
      depositlist:false,
      withdrewlist:false,
      coinshow:false,name:"",price:"",logo:"",bal:""
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

  depositlist=()=>{
    if(this.state.depositlist==false){
      this.setState({depositlist:true})
    }else {
      this.setState({depositlist:false})
    }
  }
  withdrewlist=()=>{
    if(this.state.withdrewlist==false){
      this.setState({withdrewlist:true})
    }else {
      this.setState({withdrewlist:false})
    }
  }
  coinshow=(name,logo,price,bal)=>{
    if(this.state.coinshow==false){
      this.setState({coinshow:true,name:name,logo:logo,price:price,bal:bal})
    }else {
      this.setState({coinshow:false,name:name,logo:logo,price:price,bal:bal})
    }
  }

  render() {
    return (
      <View flex={1} style={{flexDirection:"column",justifyContent:"center",backgroundColor:"#003585"}} >
        <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#003585" translucent = {true}/>

        <ScrollView style={{marginBottom:80}}>

          <View style={{alignItems:"center"}}>
             <Text style={{color:"#ffffff",fontSize:18,marginTop:20,marginBottom:10}}>Airdrop Wallet</Text>
            <Text style={{color:"#ffffff",fontSize:15,marginBottom:10}}>Total Balance :</Text>
            <Text style={{color:"#ffffff",fontSize:25,marginBottom:20}}>$3266.092</Text>
          </View>

          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.depositlist}
            onRequestClose={this.depositlist}>
            <View flex={10}  style={{paddingHorizontal:20,borderTopRightRadius:25}}>
              <View style={{alignItems:"flex-end",marginTop:30,marginBottom:20}}>
                <TouchableOpacity onPress={this.depositlist}
                                  style={{marginTop:0,backgroundColor:"#ffffff",width:50,height:35,
                                    borderRadius:5}}>
                    <Image style={{height:20,width:20,borderRadius:50,marginTop:0,textAlign:"right"}}
                           source={require("../images/close-button.png")}/>
                </TouchableOpacity>
              </View>


              <TouchableOpacity onPress={()=>this.props.navigation.navigate("Deposit", {
                name:"BTC"
              })} style={{height:55}} >
                <View flex={2} style={{flexDirection:"row",paddingHorizontal:0,marginBottom:10}}>
                  <View flex={1}>
                    <View flex={2} style={{flexDirection:"row"}}>
                      <View flex={1}>
                        <Image style={{height:40,width:40,borderRadius:50,marginTop:2}}
                               source={{uri:"https://img.bitgetimg.com/multiLang/coin_img/2edf1ef8b333c40979976d1a49bc234c.png"}}/>
                      </View>
                      <View flex={1} style={{marginLeft:-60}}>
                        <Text style={{color:"#000000",fontSize:18}}>BTC
                          <Text style={{fontSize:14,color:"green",marginLeft:5}}> +10%</Text>
                        </Text>
                        <Text style={{color:"#000000",fontSize:16}}>10000.00$</Text>
                      </View>
                    </View>
                  </View>
                  <View flex={1} style={{alignItems:"flex-end"}}>
                    <Text style={{color:"#000000",fontSize:16}}>0.001</Text>
                    <Text style={{color:"#000000",fontSize:16}}>10000.00$</Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={()=>this.props.navigation.navigate("Deposit", {
                name:"ETH"
              })} style={{height:55}} >
                <View flex={2} style={{flexDirection:"row",paddingHorizontal:0,marginBottom:10}}>
                  <View flex={1}>
                    <View flex={2} style={{flexDirection:"row"}}>
                      <View flex={1}>
                        <Image style={{height:40,width:40,borderRadius:50,marginTop:2}}
                               source={{uri:"https://img.bitgetimg.com/multiLang/coin_img/f6eba5dbcb1e8ce5ed7b053985f314b1.png"}}/>
                      </View>
                      <View flex={1} style={{marginLeft:-60}}>
                        <Text style={{color:"#000000",fontSize:18}}>ETH
                          <Text style={{fontSize:14,color:"green",marginLeft:5}}> +10%</Text>
                        </Text>
                        <Text style={{color:"#000000",fontSize:16}}>1800.00$</Text>
                      </View>
                    </View>
                  </View>
                  <View flex={1} style={{alignItems:"flex-end"}}>
                    <Text style={{color:"#000000",fontSize:16}}>0.001</Text>
                    <Text style={{color:"#000000",fontSize:16}}>700.00$</Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={()=>this.props.navigation.navigate("Deposit", {
                name:"SOL"
              })} style={{height:55}} >
                <View flex={2} style={{flexDirection:"row",paddingHorizontal:0,marginBottom:10}}>
                  <View flex={1}>
                    <View flex={2} style={{flexDirection:"row"}}>
                      <View flex={1}>
                        <Image style={{height:40,width:40,borderRadius:50,marginTop:2}}
                               source={{uri:"https://img.bitgetimg.com/multiLang/coin_img/1c1b05492d876ab7e3fa96ea2036ceb2.png"}}/>
                      </View>
                      <View flex={1} style={{marginLeft:-60}}>
                        <Text style={{color:"#000000",fontSize:18}}>SOL
                          <Text style={{fontSize:14,color:"green",marginLeft:5}}> +10%</Text>
                        </Text>
                        <Text style={{color:"#000000",fontSize:16}}>200.00$</Text>
                      </View>
                    </View>
                  </View>
                  <View flex={1} style={{alignItems:"flex-end"}}>
                    <Text style={{color:"#000000",fontSize:16}}>0.001</Text>
                    <Text style={{color:"#000000",fontSize:16}}>100.00$</Text>
                  </View>
                </View>
              </TouchableOpacity>


            </View>
          </Modal>

          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.withdrewlist}
            onRequestClose={this.withdrewlist}>
            <View flex={10}  style={{paddingHorizontal:20}}>
              <View style={{alignItems:"flex-end",marginTop:30,marginBottom:20}}>
                <TouchableOpacity onPress={this.withdrewlist}
                                  style={{marginTop:0,backgroundColor:"#ffffff",width:50,height:35,
                                    borderRadius:5}}>
                  <Image style={{height:20,width:20,borderRadius:50,marginTop:2,textAlign:"right"}}
                         source={require("../images/close-button.png")}/>
                </TouchableOpacity>
              </View>


              <TouchableOpacity onPress={()=>this.props.navigation.navigate("Withdrew", {
                name:"BTC"
              })} style={{height:55}} >
                <View flex={2} style={{flexDirection:"row",paddingHorizontal:0,marginBottom:10}}>
                  <View flex={1}>
                    <View flex={2} style={{flexDirection:"row"}}>
                      <View flex={1}>
                        <Image style={{height:40,width:40,borderRadius:50,marginTop:2}}
                               source={{uri:"https://img.bitgetimg.com/multiLang/coin_img/2edf1ef8b333c40979976d1a49bc234c.png"}}/>
                      </View>
                      <View flex={1} style={{marginLeft:-60}}>
                        <Text style={{color:"#000000",fontSize:18}}>BTC
                          <Text style={{fontSize:14,color:"green",marginLeft:5}}> +10%</Text>
                        </Text>
                        <Text style={{color:"#000000",fontSize:16}}>10000.00$</Text>
                      </View>
                    </View>
                  </View>
                  <View flex={1} style={{alignItems:"flex-end"}}>
                    <Text style={{color:"#000000",fontSize:16}}>0.001</Text>
                    <Text style={{color:"#000000",fontSize:16}}>10000.00$</Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={()=>this.props.navigation.navigate("Withdrew", {
                name:"ETH"
              })} style={{height:55}} >
                <View flex={2} style={{flexDirection:"row",paddingHorizontal:0,marginBottom:10}}>
                  <View flex={1}>
                    <View flex={2} style={{flexDirection:"row"}}>
                      <View flex={1}>
                        <Image style={{height:40,width:40,borderRadius:50,marginTop:2}}
                               source={{uri:"https://img.bitgetimg.com/multiLang/coin_img/f6eba5dbcb1e8ce5ed7b053985f314b1.png"}}/>
                      </View>
                      <View flex={1} style={{marginLeft:-60}}>
                        <Text style={{color:"#000000",fontSize:18}}>ETH
                          <Text style={{fontSize:14,color:"green",marginLeft:5}}> +10%</Text>
                        </Text>
                        <Text style={{color:"#000000",fontSize:16}}>1800.00$</Text>
                      </View>
                    </View>
                  </View>
                  <View flex={1} style={{alignItems:"flex-end"}}>
                    <Text style={{color:"#000000",fontSize:16}}>0.001</Text>
                    <Text style={{color:"#000000",fontSize:16}}>700.00$</Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={()=>this.props.navigation.navigate("Withdrew", {
                name:"SOL"
              })} style={{height:55}} >
                <View flex={2} style={{flexDirection:"row",paddingHorizontal:0,marginBottom:10}}>
                  <View flex={1}>
                    <View flex={2} style={{flexDirection:"row"}}>
                      <View flex={1}>
                        <Image style={{height:40,width:40,borderRadius:50,marginTop:2}}
                               source={{uri:"https://img.bitgetimg.com/multiLang/coin_img/1c1b05492d876ab7e3fa96ea2036ceb2.png"}}/>
                      </View>
                      <View flex={1} style={{marginLeft:-60}}>
                        <Text style={{color:"#000000",fontSize:18}}>SOL
                          <Text style={{fontSize:14,color:"green",marginLeft:5}}> +10%</Text>
                        </Text>
                        <Text style={{color:"#000000",fontSize:16}}>200.00$</Text>
                      </View>
                    </View>
                  </View>
                  <View flex={1} style={{alignItems:"flex-end"}}>
                    <Text style={{color:"#000000",fontSize:16}}>0.001</Text>
                    <Text style={{color:"#000000",fontSize:16}}>100.00$</Text>
                  </View>
                </View>
              </TouchableOpacity>


            </View>
          </Modal>

          <View style={{flexDirection:"row",paddingHorizontal:20,marginTop:30}}>
            <View>
              <TouchableOpacity onPress={this.depositlist}  style={{marginTop:0,backgroundColor:"#ffffff",width:130,height:35,
                borderRadius:25,marginRight:30}}>
                <Text style={{color:"#000000",textAlign:"center",
                  padding:6.5,fontSize:14,paddingHorizontal:15,fontWeight:"bold"}}>
                  Deposit <FontAwesome6
                  name={'plus'}  color="#000000"
                  size={18}  /></Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity onPress={this.withdrewlist} style={{marginTop:0,backgroundColor:"#ffffff",width:130,height:35,
                borderRadius:25}}>
                <Text style={{color:"#000000",textAlign:"center",
                  padding:6.5,fontSize:14,paddingHorizontal:15,fontWeight:"bold"}}>Withdrew <FontAwesome6
                  name={'minus'}  color="#000000"
                  size={18}  /></Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{flexDirection:"row",paddingHorizontal:20,
            borderBottomWidth:2,borderColor:"#0447BF",marginTop:40,paddingBottom:10,marginBottom:20}}>
            <View style={{width:"50%"}}>
              <Text style={{color:"#ffffff",fontSize:18}}>Assets</Text>
            </View>
            <View style={{width:"50%",alignItems:"flex-end"}}>
              <Text style={{color:"#ffffff",fontSize:18}}>View All </Text>
            </View>
          </View>

          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.coinshow}
            onRequestClose={this.coinshow.bind(this,"","","","")}>
            <View flex={10}  style={{paddingHorizontal:20}}>
              <View style={{alignItems:"flex-end",marginTop:30,marginBottom:20}}>
                <TouchableOpacity onPress={this.coinshow.bind(this,"","","","")}
                                  style={{marginTop:0,backgroundColor:"#ffffff",width:50,height:35,
                  borderRadius:5}}>
                  <Image style={{height:20,width:20,borderRadius:50,marginTop:2,textAlign:"right"}}
                         source={require("../images/close-button.png")}/>
                </TouchableOpacity>
              </View>

              <View style={{flexDirection:"row",paddingHorizontal:20,marginTop:30}}>
                <View>
                  <TouchableOpacity onPress={()=>this.props.navigation.navigate("Deposit", {
                    name:this.state.name
                  })}  style={{marginTop:0,backgroundColor:"#0447BF",width:140,height:45,
                    borderRadius:25,marginRight:30}}>
                    <Text style={{color:"#ffffff",textAlign:"center",
                      padding:10,fontSize:16,paddingHorizontal:15,fontWeight:"bold"}}>
                      Deposit {this.state.name}
                    </Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity onPress={()=>this.props.navigation.navigate("Withdrew", {
                    name:this.state.name
                  })}   style={{marginTop:0,backgroundColor:"#0447BF",width:140,height:45,
                    borderRadius:25}}>
                    <Text style={{color:"#ffffff",textAlign:"center",
                      padding:10,fontSize:16,paddingHorizontal:15,fontWeight:"bold"}}>
                      Withdrew {this.state.name}</Text>
                  </TouchableOpacity>
                </View>
              </View>

            </View>
          </Modal>

          <TouchableOpacity  onPress={this.coinshow.bind(this,"BTC","https://img.bitgetimg.com/multiLang/coin_img/2edf1ef8b333c40979976d1a49bc234c.png",
            100002,"0.01")}>
            <View flex={2} style={{flexDirection:"row",paddingHorizontal:20,marginBottom:10}}>
              <View flex={1}>
                <View flex={2} style={{flexDirection:"row"}}>
                  <View flex={1}>
                    <Image style={{height:40,width:40,borderRadius:50,marginTop:2}}
                           source={{uri:"https://img.bitgetimg.com/multiLang/coin_img/2edf1ef8b333c40979976d1a49bc234c.png"}}/>
                  </View>
                  <View flex={1} style={{marginLeft:-60}}>
                    <Text style={{color:"#ffffff",fontSize:18}}>BTC
                      <Text style={{fontSize:14,color:"green",marginLeft:5}}> +10%</Text>
                    </Text>
                    <Text style={{color:"#ffffff",fontSize:16}}>10000.00$</Text>
                  </View>
                </View>
              </View>
              <View flex={1} style={{alignItems:"flex-end"}}>
                <Text style={{color:"#ffffff",fontSize:16}}>0.001</Text>
                <Text style={{color:"#ffffff",fontSize:16}}>10000.00$</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.coinshow.bind(this,"ETH","https://img.bitgetimg.com/multiLang/coin_img/2edf1ef8b333c40979976d1a49bc234c.png",
            100002,"0.01")}>
            <View flex={2} style={{flexDirection:"row",paddingHorizontal:20,marginBottom:10}}>
              <View flex={1}>
                <View flex={2} style={{flexDirection:"row"}}>
                  <View flex={1}>
                    <Image style={{height:40,width:40,borderRadius:50,marginTop:2}}
                           source={{uri:"https://img.bitgetimg.com/multiLang/coin_img/f6eba5dbcb1e8ce5ed7b053985f314b1.png"}}/>
                  </View>
                  <View flex={1} style={{marginLeft:-60}}>
                    <Text style={{color:"#ffffff",fontSize:18}}>ETH
                      <Text style={{fontSize:14,color:"green",marginLeft:5}}> +40%</Text>
                    </Text>
                    <Text style={{color:"#ffffff",fontSize:16}}>870.00$</Text>
                  </View>
                </View>
              </View>
              <View flex={1} style={{alignItems:"flex-end"}}>
                <Text style={{color:"#ffffff",fontSize:16}}>0.001</Text>
                <Text style={{color:"#ffffff",fontSize:16}}>1300.00$</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.coinshow.bind(this,"SOL","https://img.bitgetimg.com/multiLang/coin_img/2edf1ef8b333c40979976d1a49bc234c.png",
            100002,"0.01")}>
            <View flex={2} style={{flexDirection:"row",paddingHorizontal:20,marginBottom:10}}>
              <View flex={1}>
                <View flex={2} style={{flexDirection:"row"}}>
                  <View flex={1}>
                    <Image style={{height:40,width:40,borderRadius:50,marginTop:2}}
                           source={{uri:"https://img.bitgetimg.com/multiLang/coin_img/1c1b05492d876ab7e3fa96ea2036ceb2.png"}}/>
                  </View>
                  <View flex={1} style={{marginLeft:-60}}>
                    <Text style={{color:"#ffffff",fontSize:18}}>SOL
                      <Text style={{fontSize:14,color:"green",marginLeft:5}}> +50%</Text>
                    </Text>
                    <Text style={{color:"#ffffff",fontSize:16}}>876.00$</Text>
                  </View>
                </View>
              </View>
              <View flex={1} style={{alignItems:"flex-end"}}>
                <Text style={{color:"#ffffff",fontSize:16}}>0.001</Text>
                <Text style={{color:"#ffffff",fontSize:16}}>214.00$</Text>
              </View>
            </View>
          </TouchableOpacity>




        </ScrollView>

      </View>
        );
  }
};

export default AirdropWallet;
