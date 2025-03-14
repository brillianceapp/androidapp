import React, { Component } from "react";
import { BackHandler, Image, ScrollView, StatusBar, Text, View } from "react-native";

class AllHistory extends Component {
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

  render() {
    return (
      <ScrollView style={{backgroundColor:"#D0E1F1"}}>
        <View flex={10} style={{backgroundColor:"#D0E1F1",paddingBottom:60}} >
          <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#D0E1F1" translucent = {true}/>

          <View flex={1} style={{backgroundColor:"#ffffff",marginTop:30,height:"auto",
            borderTopRightRadius:25,borderTopLeftRadius:25,padding:20,minHeight:600}}>
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

export default AllHistory;