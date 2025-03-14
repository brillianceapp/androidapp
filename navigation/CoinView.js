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
  ScrollView, BackHandler,
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";

class CoinView extends Component {
  constructor() {
    super();
    this.state={
      name:"",
    }
  }

  componentDidMount() {
    console.log(this.props.route.params.name)
    this.setState({name:this.props.route.params.name})
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  handleBackButton = () => {
    this.props.navigation.goBack()
    return true;
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  render() {
    return (
      <ScrollView>
        <View flex={10} style={{backgroundColor:"#D0E1F1",paddingBottom:60}} >
          <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#D0E1F1" translucent = {true}/>

          <View  style={{padding:20}}>
            <View style={{backgroundColor:"#338DE0",height:200,borderRadius:15,alignItems:"center",
              paddingVertical:30}}>
              <View style={{flexDirection:"row",alignItems:"center",marginBottom:5}}>
                <Image style={{height:45,width:45,borderRadius:50,marginTop:2}}
                       source={{uri:"https://img.bitgetimg.com/multiLang/coin_img/2edf1ef8b333c40979976d1a49bc234c.png"}}/>
                <View style={{marginLeft:7}}>
                  <Text style={{color:"#ffffff",fontSize:15,borderBottomWidth:2,borderColor:"#ffffff"}}>Coin</Text>
                  <Text style={{color:"#ffffff",fontSize:16}}>Bitcoin</Text>
                </View>
              </View>
              <Text style={{color:"white",fontSize:25,marginVertical:10}}>0.0025 BTC</Text>
              <Text style={{color:"white",fontSize:20,marginVertical:10}}>$1456</Text>
            </View>
          </View>

          <View style={{height:100}}>
            <View flex={4} style={{flexDirection:"row",paddingVertical:20,marginHorizontal:40}}>
              <View flex={1} style={{alignItems:"center"}}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate("SendCoin", {
                  name:"BTC"
                })} style={{backgroundColor:"#226BAF",padding:15,borderRadius:15}}>
                  <Image style={{width:30,height:30,marginTop:0,
                  }}
                         source={require("../images/Send-icon.png")} />
                </TouchableOpacity>
                <Text style={{color:"#226BAF",fontSize:16}}>Send</Text>
              </View>
              <View flex={1} style={{alignItems:"center"}}>
                <TouchableOpacity
                  onPress={()=>this.props.navigation.navigate("ReceiveCoin", {
                    name:"BTC"
                  })}
                  style={{backgroundColor:"#226BAF",padding:15,borderRadius:15}}>
                  <Image style={{width:30,height:30,marginTop:0,
                  }}
                         source={require("../images/receive-icon.png")} />
                </TouchableOpacity>
                <Text style={{color:"#226BAF",fontSize:16}}>Receive</Text>
              </View>
              <View flex={1} style={{alignItems:"center"}}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate("Bottom")} style={{backgroundColor:"#226BAF",padding:15,borderRadius:15}}>
                  <Image style={{width:30,height:30,marginTop:0,
                  }}
                         source={require("../images/earnwhite.png")} />
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
          </View>

          <View flex={1} style={{backgroundColor:"#ffffff",marginTop:30,height:"auto",
            borderTopRightRadius:25,borderTopLeftRadius:25,padding:20}}>
            <Text style={{fontSize:20,color:"#000000"}}>Transaction</Text>

            <View flex={2} style={{flexDirection:"row",paddingVertical:10,
              borderBottomWidth:2,borderColor:"#000000",paddingRight:10}}>
              <View flex={1} style={{flexDirection:"row"}}>
                <Image style={{width:50,height:50,marginTop:0,
                }}
                       source={require("../images/sendt.png")} />
                <View style={{flexDirection:"column"}}>
                  <Text style={{color:"#000000",fontSize:18,fontWeight:"bold"}}>0xGfmtw730akjg</Text>
                  <Text style={{color:"#000000",fontSize:16}}>Sent</Text>
                </View>
              </View>
              <View flex={1} style={{alignItems:"flex-end"}}>
                <Text style={{color:"#000000",fontSize:18,fontWeight:"bold"}}>+$100</Text>
                <Text style={{color:"#000000",fontSize:16}}>8:40 PM</Text>
              </View>
            </View>

            <View flex={2} style={{flexDirection:"row",paddingVertical:10,
              borderBottomWidth:2,borderColor:"#000000",paddingRight:10}}>
              <View flex={1} style={{flexDirection:"row"}}>
                <Image style={{width:50,height:50,marginTop:0,
                }}
                       source={require("../images/rect.png")} />
                <View style={{flexDirection:"column"}}>
                  <Text style={{color:"#000000",fontSize:18,fontWeight:"bold"}}>0xGfmtw730akjg</Text>
                  <Text style={{color:"#000000",fontSize:16}}>Receive</Text>
                </View>
              </View>
              <View flex={1} style={{alignItems:"flex-end"}}>
                <Text style={{color:"red",fontSize:18,fontWeight:"bold"}}>-$100</Text>
                <Text style={{color:"#000000",fontSize:16}}>8:40 PM</Text>
              </View>
            </View>

            <View flex={2} style={{flexDirection:"row",paddingVertical:10,
              borderBottomWidth:2,borderColor:"#000000",paddingRight:10}}>
              <View flex={1} style={{flexDirection:"row"}}>
                <Image style={{width:50,height:50,marginTop:0,
                }}
                       source={require("../images/sendt.png")} />
                <View style={{flexDirection:"column"}}>
                  <Text style={{color:"#000000",fontSize:18,fontWeight:"bold"}}>0xGfmtw730akjg</Text>
                  <Text style={{color:"#000000",fontSize:16}}>Sent</Text>
                </View>
              </View>
              <View flex={1} style={{alignItems:"flex-end"}}>
                <Text style={{color:"#000000",fontSize:18,fontWeight:"bold"}}>+$100</Text>
                <Text style={{color:"#000000",fontSize:16}}>8:40 PM</Text>
              </View>
            </View>

            <View flex={2} style={{flexDirection:"row",paddingVertical:10,
              borderBottomWidth:2,borderColor:"#000000",paddingRight:10}}>
              <View flex={1} style={{flexDirection:"row"}}>
                <Image style={{width:50,height:50,marginTop:0,
                }}
                       source={require("../images/rect.png")} />
                <View style={{flexDirection:"column"}}>
                  <Text style={{color:"#000000",fontSize:18,fontWeight:"bold"}}>0xGfmtw730akjg</Text>
                  <Text style={{color:"#000000",fontSize:16}}>Receive</Text>
                </View>
              </View>
              <View flex={1} style={{alignItems:"flex-end"}}>
                <Text style={{color:"red",fontSize:18,fontWeight:"bold"}}>-$100</Text>
                <Text style={{color:"#000000",fontSize:16}}>8:40 PM</Text>
              </View>
            </View>
            <View flex={2} style={{flexDirection:"row",paddingVertical:10,
              borderBottomWidth:2,borderColor:"#000000",paddingRight:10}}>
              <View flex={1} style={{flexDirection:"row"}}>
                <Image style={{width:50,height:50,marginTop:0,
                }}
                       source={require("../images/sendt.png")} />
                <View style={{flexDirection:"column"}}>
                  <Text style={{color:"#000000",fontSize:18,fontWeight:"bold"}}>0xGfmtw730akjg</Text>
                  <Text style={{color:"#000000",fontSize:16}}>Sent</Text>
                </View>
              </View>
              <View flex={1} style={{alignItems:"flex-end"}}>
                <Text style={{color:"#000000",fontSize:18,fontWeight:"bold"}}>+$100</Text>
                <Text style={{color:"#000000",fontSize:16}}>8:40 PM</Text>
              </View>
            </View>

            <View flex={2} style={{flexDirection:"row",paddingVertical:10,
              borderBottomWidth:2,borderColor:"#000000",paddingRight:10}}>
              <View flex={1} style={{flexDirection:"row"}}>
                <Image style={{width:50,height:50,marginTop:0,
                }}
                       source={require("../images/rect.png")} />
                <View style={{flexDirection:"column"}}>
                  <Text style={{color:"#000000",fontSize:18,fontWeight:"bold"}}>0xGfmtw730akjg</Text>
                  <Text style={{color:"#000000",fontSize:16}}>Receive</Text>
                </View>
              </View>
              <View flex={1} style={{alignItems:"flex-end"}}>
                <Text style={{color:"red",fontSize:18,fontWeight:"bold"}}>-$100</Text>
                <Text style={{color:"#000000",fontSize:16}}>8:40 PM</Text>
              </View>
            </View>


          </View>



        </View>
      </ScrollView>
    );
  }
}

export default CoinView;
