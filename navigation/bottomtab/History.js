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
