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
  ScrollView,
  Switch, BackHandler,
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

class Manage extends Component {
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
      <View flex={10} style={{backgroundColor:"#D0E1F1",paddingBottom:60}} >
        <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#D0E1F1" translucent = {true}/>
        <View style={{flexDirection:"row",paddingHorizontal:20,marginTop:30,marginBottom:20}}>
          <View flex={2} style={{flexDirection:"row"}}>
            <View flex={1} style={{paddingRight:10,width:"100%",height:30,borderColor:"white",paddingVertical:5,paddingHorizontal:10,
              borderWidth:1,borderRadius:25,flexDirection:"row",backgroundColor:"white"}}>
              <FontAwesome5 name="search" color="#023064" style={{marginRight:5}} size={16}/>
              <TextInput   style={{height:28,width:"90%",backgroundColor:"transparent",
                color:"black",marginTop:-5,borderRadius:10,fontSize:16,padding:0,
                paddingBottom:5,paddingLeft:10}} placeholder=""/>
            </View>
            <View flex={1} style={{width:"100%",height:35,paddingLeft:10}}>
              <TouchableOpacity style={{backgroundColor:"white",borderColor:"white",borderWidth:1,borderRadius:25,height:35}}>
                <Text style={{fontSize:17,textAlign:"center",color:"black",padding:5}}>
                  All Networks <FontAwesome5 name="caret-down" color="#023064" style={{marginRight:5}} size={16}/>
                </Text>
              </TouchableOpacity>
            </View>

          </View >
        </View>

        <ScrollView>
          <View flex={2} style={{flexDirection:"row",paddingHorizontal:30,marginBottom:10}}>
            <View flex={1}>
              <View flex={2} style={{flexDirection:"row"}}>
                <View flex={1}>
                  <Image style={{height:40,width:40,borderRadius:50,marginTop:2}}
                         source={{uri:"https://img.bitgetimg.com/multiLang/coin_img/2edf1ef8b333c40979976d1a49bc234c.png"}}/>
                </View>
                <View flex={1} style={{marginLeft:-60}}>
                  <Text style={{color:"black",fontSize:18}}>BTC
                    <Text style={{fontSize:14,color:"green",marginLeft:5}}>+10%</Text>
                  </Text>
                  <Text style={{color:"black",fontSize:16}}>10000.00$</Text>
                </View>
              </View>
            </View>
            <View flex={1} style={{alignItems:"flex-end"}}>
              <Switch style={{marginTop:15}}
                trackColor={{false: '#767577', true: '#f8f7f7'}}
                thumbColor={true ? '#0a45ba' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                //onValueChange={toggleSwitch}
                value={true}
              />
            </View>
          </View>

          <View flex={2} style={{flexDirection:"row",paddingHorizontal:30,marginBottom:10}}>
            <View flex={1}>
              <View flex={2} style={{flexDirection:"row"}}>
                <View flex={1}>
                  <Image style={{height:40,width:40,borderRadius:50,marginTop:2}}
                         source={{uri:"https://img.bitgetimg.com/multiLang/coin_img/f6eba5dbcb1e8ce5ed7b053985f314b1.png"}}/>
                </View>
                <View flex={1} style={{marginLeft:-60}}>
                  <Text style={{color:"black",fontSize:18}}>ETH
                    <Text style={{fontSize:14,color:"green",marginLeft:5}}>+10%</Text>
                  </Text>
                  <Text style={{color:"black",fontSize:16}}>3392.00$</Text>
                </View>
              </View>
            </View>
            <View flex={1} style={{alignItems:"flex-end"}}>
              <Switch style={{marginTop:15}}
                trackColor={{false: '#767577', true: '#f8f7f7'}}
                thumbColor={false ? '#0a45ba' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                //onValueChange={toggleSwitch}
                value={false}
              />
            </View>
          </View>

          <View flex={2} style={{flexDirection:"row",paddingHorizontal:30,marginBottom:10}}>
            <View flex={1}>
              <View flex={2} style={{flexDirection:"row"}}>
                <View flex={1}>
                  <Image style={{height:40,width:40,borderRadius:50,marginTop:2}}
                         source={{uri:"https://img.bitgetimg.com/multiLang/coin_img/1c1b05492d876ab7e3fa96ea2036ceb2.png"}}/>
                </View>
                <View flex={1} style={{marginLeft:-60}}>
                  <Text style={{color:"black",fontSize:18}}>SOL
                    <Text style={{fontSize:14,color:"green",marginLeft:5}}>+10%</Text>
                  </Text>
                  <Text style={{color:"black",fontSize:16}}>195.00$</Text>
                </View>
              </View>
            </View>
            <View flex={1} style={{alignItems:"flex-end"}}>
              <Switch style={{marginTop:15}}
                trackColor={{false: '#767577', true: '#f8f7f7'}}
                thumbColor={true ? '#0a45ba' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                //onValueChange={toggleSwitch}
                value={true}
              />
            </View>
          </View>


        </ScrollView>

      </View>
    );
  }
}

export default Manage;
