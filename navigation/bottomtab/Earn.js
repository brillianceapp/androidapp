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


class Earn extends Component {
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
      <View flex={1} style={{flexDirection:"column",justifyContent:"center",backgroundColor:"#002B69"}} >
        <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#002B69" translucent = {true}/>
        <ScrollView style={{paddingHorizontal:20,marginBottom:110}}>
          <View>
            <View  style={{flexDirection:"row",marginTop:20}}>
              <View  style={{width:"70%"}}>
                <Text style={{color:"#ffffff",fontSize:23}}>The rewards for each</Text>
                <Text style={{color:"#ffffff",fontSize:23}}>airdrop will be</Text>
                <Text style={{color:"#ffffff",fontSize:23}}>distributed to the</Text>
                <Text style={{color:"#ffffff",fontSize:23}}>airdrop wallet.</Text>
              </View>
              <View style={{width:"30%"}}>
                <Image style={{height:110,width:110,marginLeft:-20,marginTop:30}}
                       source={require("../../images/airdrop-active-icon.png")} />
              </View>
            </View>

            <View flex={1} style={{paddingTop:50,marginBottom:10}}>
              <View flex={2} style={{flexDirection:"row"}}>
                <View flex={1}  style={{borderRadius:25,padding:5}}>
                  <TouchableOpacity onPress={this.tabC.bind(this,"Ongoing")}>
                    <Text style={{color:"#ffffff",fontSize:20,
                      borderBottomWidth:val.tab=="Ongoing"?2:0,borderColor:"#ffffff",paddingBottom:10,width:90}}>Ongoing</Text>
                  </TouchableOpacity>
                </View>
                <View flex={1}  style={{borderRadius:25,padding:5}}>
                  <TouchableOpacity onPress={this.tabC.bind(this,"Ended")}>
                    <Text style={{color:"#ffffff",fontSize:20,
                      borderBottomWidth:val.tab=="Ended"?2:0,borderColor:"#ffffff",
                      paddingBottom:10,width:70,marginLeft:-50}}>Ended</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={{backgroundColor:"#68B6F8",height:150,width:"100%",borderRadius:15,
              flexDirection:"row",marginBottom:15,padding:20}}>
              <View style={{width:"70%"}}>
                 <Text style={{color:"#002B69",fontSize:22,fontWeight:"bold"}}>USDT Airdrop</Text>
                <Text style={{color:"#000000",fontSize:16,marginVertical:10}}>USDT Airdrop is a task base crypto  </Text>
                <Text style={{color:"#ffffff",fontSize:16}}>1000$ USDT Pool</Text>
              </View>
              <View style={{width:"30%",alignItems:"flex-end"}}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate("Reward", {
                  name:"USDT"
                })} style={{marginTop:20,backgroundColor:"#012F63",width:"100%",height:40,borderRadius:25}}>
                  <Text style={{color:"white",textAlign:"center",padding:7.5,fontSize:15,paddingHorizontal:15}}>Join now</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={{backgroundColor:"#68B6F8",height:150,width:"100%",borderRadius:15,
              flexDirection:"row",marginBottom:15,padding:20}}>
              <View style={{width:"70%"}}>
                <Text style={{color:"#002B69",fontSize:22,fontWeight:"bold"}}>USDT Airdrop</Text>
                <Text style={{color:"#000000",fontSize:16,marginVertical:10}}>USDT Airdrop is a task base crypto  </Text>
                <Text style={{color:"#ffffff",fontSize:16}}>1000$ USDT Pool</Text>
              </View>
              <View style={{width:"30%",alignItems:"flex-end"}}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate("Reward", {
                  name:"USDT"
                })} style={{marginTop:20,backgroundColor:"#012F63",width:"100%",height:40,borderRadius:25}}>
                  <Text style={{color:"white",textAlign:"center",padding:7.5,fontSize:15,paddingHorizontal:15}}>Join now</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={{backgroundColor:"#68B6F8",height:150,width:"100%",borderRadius:15,
              flexDirection:"row",marginBottom:15,padding:20}}>
              <View style={{width:"70%"}}>
                <Text style={{color:"#002B69",fontSize:22,fontWeight:"bold"}}>USDT Airdrop</Text>
                <Text style={{color:"#000000",fontSize:16,marginVertical:10}}>USDT Airdrop is a task base crypto  </Text>
                <Text style={{color:"#ffffff",fontSize:16}}>1000$ USDT Pool</Text>
              </View>
              <View style={{width:"30%",alignItems:"flex-end"}}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate("Reward", {
                  name:"USDT"
                })} style={{marginTop:20,backgroundColor:"#012F63",width:"100%",height:40,borderRadius:25}}>
                  <Text style={{color:"white",textAlign:"center",padding:7.5,fontSize:15,paddingHorizontal:15}}>Join now</Text>
                </TouchableOpacity>
              </View>
            </View>

          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Earn;
