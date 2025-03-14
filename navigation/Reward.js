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
  TouchableOpacity, BackHandler,
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";

class Reward extends Component {
  constructor() {
    super();
    this.state={
      tab:"Ongoing",
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

  tabC=(val)=>{
    this.setState({tab:val})
  }

  render() {
    var val = this.state
    return (
      <View flex={1} style={{flexDirection:"column",justifyContent:"center",backgroundColor:"#013686"}} >
        <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#013686" translucent = {true}/>
        <ScrollView style={{marginBottom:90}}>
          <View style={{paddingHorizontal:20}}>
            <View  style={{marginTop:20,alignItems:"center"}}>
              <View style={{alignItems:"center"}}>
                <Text style={{color:"#ffffff",fontSize:17}}>2025-3-12 7PM to 2025-3-21 7PM</Text>
                <Text style={{color:"#ffffff",fontSize:19,marginTop:30,marginBottom:10}}>Complete Task to win 1000$ USDT</Text>
                <Text style={{color:"#ffffff",fontSize:19}}>reward pool</Text>
              </View>
            </View>

            <View style={{flexDirection:"row"}}>
              <View style={{flexDirection:"row",marginTop:60,width:"50%"}}>
                <Text style={{color:"#ffffff",fontSize:19}}> Reward 1000$</Text>
                <Image style={{height:20,width:20,borderRadius:50,marginTop:2,marginLeft:10,display:"none"}}
                       source={{uri:"https://img.bitgetimg.com/multiLang/coin_img/2edf1ef8b333c40979976d1a49bc234c.png"}}/>
              </View>
              <View style={{alignItems:"flex-end",width:"50%"}}>
                <Image style={{height:150,width:150,marginTop:0,display:"none"}}
                       source={{uri:"https://img.bitgetimg.com/multiLang/coin_img/2edf1ef8b333c40979976d1a49bc234c.png"}}/>
              </View>
            </View>

            <View flex={1} style={{marginTop:20,marginBottom:30}}>
              <View flex={2} style={{flexDirection:"row"}}>
                <View flex={1}  style={{borderRadius:25,padding:5}}>
                  <TouchableOpacity onPress={this.tabC.bind(this,"Ongoing")}>
                    <Text style={{color:"#ffffff",fontSize:22,
                      borderBottomWidth:2,borderColor:"#ffffff",paddingBottom:10,width:70}}>Task</Text>
                  </TouchableOpacity>
                </View>
                <View flex={1}  style={{borderRadius:25,padding:5}}>
                      <Text style={{textAlign:"right",color:"#ffffff",fontSize:14}}>
                        <FontAwesome6
                          name={'users'}  color="#ffffff"
                          size={20}  /> 12k Members</Text>
                </View>
              </View>
            </View>

          </View>

          <View flex={2} style={{flexDirection:"row",paddingHorizontal:20,
            height:80,paddingVertical:10,borderBottomWidth:1,borderColor:"#021b3e",borderTopWidth:1}}>
            <View flex={1}>
              <Text style={{color:"white",fontSize:19}}>
                Follow on Twitter
              </Text>
              <Text style={{color:"white",fontSize:19}}>
                @telegram
              </Text>
            </View>
            <View flex={1} style={{alignItems:"flex-end"}}>
              <TouchableOpacity  style={{marginTop:20,backgroundColor:"#013E9B",width:"50%",height:35,borderRadius:0}}>
                <Text style={{color:"white",textAlign:"center",padding:7.5,fontSize:15,paddingHorizontal:15}}>Join now</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View flex={2} style={{flexDirection:"row",paddingHorizontal:20,
            height:80,paddingVertical:10,borderBottomWidth:1,borderColor:"#021b3e"}}>
            <View flex={1}>
              <Text style={{color:"white",fontSize:19}}>
                Like and Retweet
              </Text>
              <Text style={{color:"white",fontSize:19}}>
                @telegram
              </Text>
            </View>
            <View flex={1} style={{alignItems:"flex-end"}}>
              <TouchableOpacity  style={{marginTop:20,backgroundColor:"#013E9B",width:"50%",height:35,borderRadius:0}}>
                <Text style={{color:"white",textAlign:"center",padding:7.5,fontSize:15,paddingHorizontal:15}}>Join now</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View flex={2} style={{flexDirection:"row",paddingHorizontal:20,
            height:89,paddingVertical:10,borderBottomWidth:1,borderColor:"#021b3e"}}>
            <View flex={1}>
              <Text style={{color:"white",fontSize:18}}>
                Follow on Telegram Channel
              </Text>
              <Text style={{color:"white",fontSize:18}}>
                @telegram
              </Text>
            </View>
            <View flex={1} style={{alignItems:"flex-end"}}>
              <TouchableOpacity  style={{marginTop:20,backgroundColor:"#013E9B",width:"50%",height:35,borderRadius:0}}>
                <Text style={{color:"white",textAlign:"center",padding:7.5,fontSize:15,paddingHorizontal:15}}>Join now</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View flex={2} style={{flexDirection:"row",paddingHorizontal:20,
            height:80,paddingVertical:10,borderBottomWidth:1,borderColor:"#021b3e"}}>
            <View flex={1}>
              <Text style={{color:"white",fontSize:19}}>
                Join Telegram Group
              </Text>
              <Text style={{color:"white",fontSize:19}}>
                @telegram
              </Text>
            </View>
            <View flex={1} style={{alignItems:"flex-end"}}>
              <TouchableOpacity  style={{marginTop:20,backgroundColor:"#013E9B",width:"50%",height:35,borderRadius:0}}>
                <Text style={{color:"white",textAlign:"center",padding:7.5,fontSize:15,paddingHorizontal:15}}>Join now</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View flex={2} style={{flexDirection:"row",paddingHorizontal:20,
            height:80,paddingVertical:10,borderBottomWidth:1,borderColor:"#021b3e"}}>
            <View flex={1}>
              <Text style={{color:"white",fontSize:19}}>
                Subscribe Youtube
              </Text>
              <Text style={{color:"white",fontSize:19}}>
                @telegram
              </Text>
            </View>
            <View flex={1} style={{alignItems:"flex-end"}}>
              <TouchableOpacity  style={{marginTop:20,backgroundColor:"#013E9B",width:"50%",height:35,borderRadius:0}}>
                <Text style={{color:"white",textAlign:"center",padding:7.5,fontSize:15,paddingHorizontal:15}}>Join now</Text>
              </TouchableOpacity>
            </View>
          </View>

        </ScrollView>
      </View>
    );
  }
}

export default Reward;
