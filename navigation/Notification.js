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
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
class Notification extends Component {

  constructor() {
    super();
    this.state={
      tab:"all"
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
      <View flex={15} style={{backgroundColor:"#D0E2F0",paddingTop:10}} >
        <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#D0E2F0" translucent = {true}/>

        <View flex={1} style={{paddingHorizontal:20,height:20,display:"none"}}>
           <View flex={3} style={{flexDirection:"row",
             backgroundColor:"#ffffff",borderRadius:25}}>
             <View flex={1} style={{alignItems:"center",padding:5,borderRadius:25,
               borderColor:"#012F63",borderWidth:val.tab=="all"?1:0}}>
               <TouchableOpacity onPress={this.tabC.bind(this,"all")}>
                 <Text style={{color:val.tab=="all"?"#012F63":"black",fontSize:17}}>View All</Text>
               </TouchableOpacity>
             </View>
             <View flex={1} style={{alignItems:"center",padding:5,borderRadius:25,
               borderColor:"#012F63",borderWidth:val.tab=="camp"?1:0}}>
               <TouchableOpacity onPress={this.tabC.bind(this,"camp")}>
                 <Text style={{color:val.tab=="camp"?"#012F63":"black",fontSize:17}}>Campaign</Text>
               </TouchableOpacity>
             </View>
             <View flex={1} style={{alignItems:"center",padding:5,borderRadius:25,
               borderColor:"#012F63",borderWidth:val.tab=="tran"?1:0}}>
               <TouchableOpacity onPress={this.tabC.bind(this,"tran")}>
                 <Text style={{color:val.tab=="tran"?"#012F63":"black",fontSize:17}}>Transaction</Text>
               </TouchableOpacity>
             </View>
           </View>
        </View>

        <View flex={14} style={{marginTop:10,marginBottom:70}}>

          <ScrollView>
            <TouchableOpacity>
              <View style={{height:90,borderBottomWidth:1,borderColor:"#ffffff",
                paddingHorizontal:20,flexDirection:"row",paddingVertical:15}}>
                <View>
                  <Image style={{width:60,height:60,
                    padding:0,marginRight:10}} source={require("../images/not.png")} />
                </View>
                <View>
                  <Text style={{color:"black",paddingRight:20}}>You can try doing cold reboot from Android Studio. It'll work normally then.
                    I guess it usually ...
                  </Text>
                  <Text style={{color:"black",marginTop:5}}>10/10/2025</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={{height:90,borderBottomWidth:1,borderColor:"#ffffff",
                paddingHorizontal:20,flexDirection:"row",paddingVertical:15}}>
                <View>
                  <Image style={{width:60,height:60,
                    padding:0,marginRight:10}} source={require("../images/not.png")} />
                </View>
                <View>
                  <Text style={{color:"black",paddingRight:20}}>You can try doing cold reboot from Android Studio. It'll work normally then.
                    I guess it usually ...
                  </Text>
                  <Text style={{color:"black",marginTop:5}}>10/10/2025</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={{height:90,borderBottomWidth:1,borderColor:"#ffffff",
                paddingHorizontal:20,flexDirection:"row",paddingVertical:15}}>
                <View>
                  <Image style={{width:60,height:60,
                    padding:0,marginRight:10}} source={require("../images/not.png")} />
                </View>
                <View>
                  <Text style={{color:"black",paddingRight:20}}>You can try doing cold reboot from Android Studio. It'll work normally then.
                    I guess it usually ...
                  </Text>
                  <Text style={{color:"black",marginTop:5}}>10/10/2025</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={{height:90,borderBottomWidth:1,borderColor:"#ffffff",
                paddingHorizontal:20,flexDirection:"row",paddingVertical:15}}>
                <View>
                  <Image style={{width:60,height:60,
                    padding:0,marginRight:10}} source={require("../images/not.png")} />
                </View>
                <View>
                  <Text style={{color:"black",paddingRight:20}}>You can try doing cold reboot from Android Studio. It'll work normally then.
                    I guess it usually ...
                  </Text>
                  <Text style={{color:"black",marginTop:5}}>10/10/2025</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={{height:90,borderBottomWidth:1,borderColor:"#ffffff",
                paddingHorizontal:20,flexDirection:"row",paddingVertical:15}}>
                <View>
                  <Image style={{width:60,height:60,
                    padding:0,marginRight:10}} source={require("../images/not.png")} />
                </View>
                <View>
                  <Text style={{color:"black",paddingRight:20}}>You can try doing cold reboot from Android Studio. It'll work normally then.
                    I guess it usually ...
                  </Text>
                  <Text style={{color:"black",marginTop:5}}>10/10/2025</Text>
                </View>
              </View>
            </TouchableOpacity>
            <View style={{height:90,borderBottomWidth:1,borderColor:"#ffffff",
              paddingHorizontal:20,flexDirection:"row",paddingVertical:15}}>
              <View>
                <Image style={{width:60,height:60,
                  padding:0,marginRight:10}} source={require("../images/not.png")} />
              </View>
              <View>
                <Text style={{color:"black",paddingRight:20}}>You can try doing cold reboot from Android Studio. It'll work normally then.
                  I guess it usually ...
                </Text>
                <Text style={{color:"black",marginTop:5}}>10/10/2025</Text>
              </View>
            </View>
            <View style={{height:90,borderBottomWidth:1,borderColor:"#ffffff",
              paddingHorizontal:20,flexDirection:"row",paddingVertical:15}}>
              <View>
                <Image style={{width:60,height:60,
                  padding:0,marginRight:10}} source={require("../images/not.png")} />
              </View>
              <View>
                <Text style={{color:"black",paddingRight:20}}>You can try doing cold reboot from Android Studio. It'll work normally then.
                  I guess it usually ...
                </Text>
                <Text style={{color:"black",marginTop:5}}>10/10/2025</Text>
              </View>
            </View>
            <View style={{height:90,borderBottomWidth:1,borderColor:"#ffffff",
              paddingHorizontal:20,flexDirection:"row",paddingVertical:15}}>
              <View>
                <Image style={{width:60,height:60,
                  padding:0,marginRight:10}} source={require("../images/not.png")} />
              </View>
              <View>
                <Text style={{color:"black",paddingRight:20}}>You can try doing cold reboot from Android Studio. It'll work normally then.
                  I guess it usually ...
                </Text>
                <Text style={{color:"black",marginTop:5}}>10/10/2025</Text>
              </View>
            </View>
            <View style={{height:90,borderBottomWidth:1,borderColor:"#ffffff",
              paddingHorizontal:20,flexDirection:"row",paddingVertical:15}}>
              <View>
                <Image style={{width:60,height:60,
                  padding:0,marginRight:10}} source={require("../images/not.png")} />
              </View>
              <View>
                <Text style={{color:"black",paddingRight:20}}>You can try doing cold reboot from Android Studio. It'll work normally then.
                  I guess it usually ...
                </Text>
                <Text style={{color:"black",marginTop:5}}>10/10/2025</Text>
              </View>
            </View>
            <View style={{height:90,borderBottomWidth:1,borderColor:"#ffffff",
              paddingHorizontal:20,flexDirection:"row",paddingVertical:15}}>
              <View>
                <Image style={{width:60,height:60,
                  padding:0,marginRight:10}} source={require("../images/not.png")} />
              </View>
              <View>
                <Text style={{color:"black",paddingRight:20}}>You can try doing cold reboot from Android Studio. It'll work normally then.
                  I guess it usually ...
                </Text>
                <Text style={{color:"black",marginTop:5}}>10/10/2025</Text>
              </View>
            </View>
            <View style={{height:90,borderBottomWidth:1,borderColor:"#ffffff",
              paddingHorizontal:20,flexDirection:"row",paddingVertical:15}}>
              <View>
                <Image style={{width:60,height:60,
                  padding:0,marginRight:10}} source={require("../images/not.png")} />
              </View>
              <View>
                <Text style={{color:"black",paddingRight:20}}>You can try doing cold reboot from Android Studio. It'll work normally then.
                  I guess it usually ...
                </Text>
                <Text style={{color:"black",marginTop:5}}>10/10/2025</Text>
              </View>
            </View>
            <View style={{height:90,borderBottomWidth:1,borderColor:"#ffffff",
              paddingHorizontal:20,flexDirection:"row",paddingVertical:15}}>
              <View>
                <Image style={{width:60,height:60,
                  padding:0,marginRight:10}} source={require("../images/not.png")} />
              </View>
              <View>
                <Text style={{color:"black",paddingRight:20}}>You can try doing cold reboot from Android Studio. It'll work normally then.
                  I guess it usually ...
                </Text>
                <Text style={{color:"black",marginTop:5}}>10/10/2025</Text>
              </View>
            </View>
            <View style={{height:90,borderBottomWidth:1,borderColor:"#ffffff",
              paddingHorizontal:20,flexDirection:"row",paddingVertical:15}}>
              <View>
                <Image style={{width:60,height:60,
                  padding:0,marginRight:10}} source={require("../images/not.png")} />
              </View>
              <View>
                <Text style={{color:"black",paddingRight:20}}>You can try doing cold reboot from Android Studio. It'll work normally then.
                  I guess it usually ...
                </Text>
                <Text style={{color:"black",marginTop:5}}>10/10/2025</Text>
              </View>
            </View>
            <View style={{height:90,borderBottomWidth:1,borderColor:"#ffffff",
              paddingHorizontal:20,flexDirection:"row",paddingVertical:15}}>
              <View>
                <Image style={{width:60,height:60,
                  padding:0,marginRight:10}} source={require("../images/not.png")} />
              </View>
              <View>
                <Text style={{color:"black",paddingRight:20}}>You can try doing cold reboot from Android Studio. It'll work normally then.
                  I guess it usually ...
                </Text>
                <Text style={{color:"black",marginTop:5}}>10/10/2025</Text>
              </View>
            </View>
          </ScrollView>

        </View>



      </View>
        );
  }
};

export default Notification;
