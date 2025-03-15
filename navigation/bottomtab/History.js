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


class History extends Component {
  constructor() {
    super();
    this.state={
      tab:"Ongoing",
    }
  }

  tabC=(val)=>{
    this.setState({tab:val})
  }

  render() {
    var val = this.state
    return (
      <View flex={1} style={{flexDirection:"column",justifyContent:"center",backgroundColor:"#FFFFFF"}} >
        <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#FFFFFF" translucent = {true}/>
        <ScrollView style={{backgroundColor:"#FFFFFF"}}>
          <View flex={10} style={{backgroundColor:"#FFFFFF",paddingBottom:60,marginBottom:70}} >

            <View flex={1} style={{backgroundColor:"#ffffff",marginTop:30,height:"auto",
              borderTopRightRadius:25,borderTopLeftRadius:25,padding:20,minHeight:600}}>

              <View  style={{flexDirection:"row",paddingVertical:10,
                borderBottomWidth:0,borderColor:"#000000",paddingRight:10}}>
                <View flex={1} style={{flexDirection:"row"}}>
                  <Image style={{width:40,height:40,marginTop:10
                  }}
                         source={require("../../images/sendt.png")} />
                  <View style={{flexDirection:"column"}}>
                    <Text style={{color:"#000000",fontSize:16,fontWeight:"bold"}}>0xGfmtw730akjg</Text>
                    <Text style={{color:"#000000",fontSize:16}}>Sent</Text>
                  </View>
                </View>
                <View flex={1} style={{alignItems:"flex-end"}}>
                  <Text style={{color:"green",fontSize:18,fontWeight:"bold"}}>+0.0056 BTC</Text>
                  <Text style={{color:"#000000",fontSize:16}}>8:40 PM</Text>
                </View>
              </View>

              <View  style={{flexDirection:"row",paddingVertical:10,
                borderBottomWidth:0,borderColor:"#000000",paddingRight:10}}>
                <View flex={1} style={{flexDirection:"row"}}>
                  <Image style={{width:40,height:40,marginTop:10,
                  }}
                         source={require("../../images/rect.png")} />
                  <View style={{flexDirection:"column"}}>
                    <Text style={{color:"#000000",fontSize:16,fontWeight:"bold"}}>0xGfmtw730akjg</Text>
                    <Text style={{color:"#000000",fontSize:16}}>Receive</Text>
                  </View>
                </View>
                <View flex={1} style={{alignItems:"flex-end"}}>
                  <Text style={{color:"red",fontSize:18,fontWeight:"bold"}}>-0.0154 BTC</Text>
                  <Text style={{color:"#000000",fontSize:16}}>8:40 PM</Text>
                </View>
              </View>

              <View  style={{flexDirection:"row",paddingVertical:10,
                borderBottomWidth:0,borderColor:"#000000",paddingRight:10}}>
                <View flex={1} style={{flexDirection:"row"}}>
                  <Image style={{width:40,height:40,marginTop:10
                  }}
                         source={require("../../images/sendt.png")} />
                  <View style={{flexDirection:"column"}}>
                    <Text style={{color:"#000000",fontSize:16,fontWeight:"bold"}}>0xGfmtw730akjg</Text>
                    <Text style={{color:"#000000",fontSize:16}}>Sent</Text>
                  </View>
                </View>
                <View flex={1} style={{alignItems:"flex-end"}}>
                  <Text style={{color:"green",fontSize:18,fontWeight:"bold"}}>+0.0056 BTC</Text>
                  <Text style={{color:"#000000",fontSize:16}}>8:40 PM</Text>
                </View>
              </View>

              <View  style={{flexDirection:"row",paddingVertical:10,
                borderBottomWidth:0,borderColor:"#000000",paddingRight:10}}>
                <View flex={1} style={{flexDirection:"row"}}>
                  <Image style={{width:40,height:40,marginTop:10,
                  }}
                         source={require("../../images/rect.png")} />
                  <View style={{flexDirection:"column"}}>
                    <Text style={{color:"#000000",fontSize:16,fontWeight:"bold"}}>0xGfmtw730akjg</Text>
                    <Text style={{color:"#000000",fontSize:16}}>Receive</Text>
                  </View>
                </View>
                <View flex={1} style={{alignItems:"flex-end"}}>
                  <Text style={{color:"red",fontSize:18,fontWeight:"bold"}}>-0.0154 BTC</Text>
                  <Text style={{color:"#000000",fontSize:16}}>8:40 PM</Text>
                </View>
              </View>
              <View  style={{flexDirection:"row",paddingVertical:10,
                borderBottomWidth:0,borderColor:"#000000",paddingRight:10}}>
                <View flex={1} style={{flexDirection:"row"}}>
                  <Image style={{width:40,height:40,marginTop:10
                  }}
                         source={require("../../images/sendt.png")} />
                  <View style={{flexDirection:"column"}}>
                    <Text style={{color:"#000000",fontSize:16,fontWeight:"bold"}}>0xGfmtw730akjg</Text>
                    <Text style={{color:"#000000",fontSize:16}}>Sent</Text>
                  </View>
                </View>
                <View flex={1} style={{alignItems:"flex-end"}}>
                  <Text style={{color:"green",fontSize:18,fontWeight:"bold"}}>+0.0056 BTC</Text>
                  <Text style={{color:"#000000",fontSize:16}}>8:40 PM</Text>
                </View>
              </View>

              <View  style={{flexDirection:"row",paddingVertical:10,
                borderBottomWidth:0,borderColor:"#000000",paddingRight:10}}>
                <View flex={1} style={{flexDirection:"row"}}>
                  <Image style={{width:40,height:40,marginTop:10,
                  }}
                         source={require("../../images/rect.png")} />
                  <View style={{flexDirection:"column"}}>
                    <Text style={{color:"#000000",fontSize:16,fontWeight:"bold"}}>0xGfmtw730akjg</Text>
                    <Text style={{color:"#000000",fontSize:16}}>Receive</Text>
                  </View>
                </View>
                <View flex={1} style={{alignItems:"flex-end"}}>
                  <Text style={{color:"red",fontSize:18,fontWeight:"bold"}}>-0.0154 BTC</Text>
                  <Text style={{color:"#000000",fontSize:16}}>8:40 PM</Text>
                </View>
              </View>

              <View  style={{flexDirection:"row",paddingVertical:10,
                borderBottomWidth:0,borderColor:"#000000",paddingRight:10}}>
                <View flex={1} style={{flexDirection:"row"}}>
                  <Image style={{width:40,height:40,marginTop:10
                  }}
                         source={require("../../images/sendt.png")} />
                  <View style={{flexDirection:"column"}}>
                    <Text style={{color:"#000000",fontSize:16,fontWeight:"bold"}}>0xGfmtw730akjg</Text>
                    <Text style={{color:"#000000",fontSize:16}}>Sent</Text>
                  </View>
                </View>
                <View flex={1} style={{alignItems:"flex-end"}}>
                  <Text style={{color:"green",fontSize:18,fontWeight:"bold"}}>+0.0056 BTC</Text>
                  <Text style={{color:"#000000",fontSize:16}}>8:40 PM</Text>
                </View>
              </View>

              <View  style={{flexDirection:"row",paddingVertical:10,
                borderBottomWidth:0,borderColor:"#000000",paddingRight:10}}>
                <View flex={1} style={{flexDirection:"row"}}>
                  <Image style={{width:40,height:40,marginTop:10,
                  }}
                         source={require("../../images/rect.png")} />
                  <View style={{flexDirection:"column"}}>
                    <Text style={{color:"#000000",fontSize:16,fontWeight:"bold"}}>0xGfmtw730akjg</Text>
                    <Text style={{color:"#000000",fontSize:16}}>Receive</Text>
                  </View>
                </View>
                <View flex={1} style={{alignItems:"flex-end"}}>
                  <Text style={{color:"red",fontSize:18,fontWeight:"bold"}}>-0.0154 BTC</Text>
                  <Text style={{color:"#000000",fontSize:16}}>8:40 PM</Text>
                </View>
              </View>

              <View  style={{flexDirection:"row",paddingVertical:10,
                borderBottomWidth:0,borderColor:"#000000",paddingRight:10}}>
                <View flex={1} style={{flexDirection:"row"}}>
                  <Image style={{width:40,height:40,marginTop:10
                  }}
                         source={require("../../images/sendt.png")} />
                  <View style={{flexDirection:"column"}}>
                    <Text style={{color:"#000000",fontSize:16,fontWeight:"bold"}}>0xGfmtw730akjg</Text>
                    <Text style={{color:"#000000",fontSize:16}}>Sent</Text>
                  </View>
                </View>
                <View flex={1} style={{alignItems:"flex-end"}}>
                  <Text style={{color:"green",fontSize:18,fontWeight:"bold"}}>+0.0056 BTC</Text>
                  <Text style={{color:"#000000",fontSize:16}}>8:40 PM</Text>
                </View>
              </View>

              <View  style={{flexDirection:"row",paddingVertical:10,
                borderBottomWidth:0,borderColor:"#000000",paddingRight:10}}>
                <View flex={1} style={{flexDirection:"row"}}>
                  <Image style={{width:40,height:40,marginTop:10,
                  }}
                         source={require("../../images/rect.png")} />
                  <View style={{flexDirection:"column"}}>
                    <Text style={{color:"#000000",fontSize:16,fontWeight:"bold"}}>0xGfmtw730akjg</Text>
                    <Text style={{color:"#000000",fontSize:16}}>Receive</Text>
                  </View>
                </View>
                <View flex={1} style={{alignItems:"flex-end"}}>
                  <Text style={{color:"red",fontSize:18,fontWeight:"bold"}}>-0.0154 BTC</Text>
                  <Text style={{color:"#000000",fontSize:16}}>8:40 PM</Text>
                </View>
              </View>


            </View>

          </View>

        </ScrollView>
      </View>
    );
  }
}

export default History;
