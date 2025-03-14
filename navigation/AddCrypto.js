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
  ScrollView, StyleSheet, BackHandler,
} from "react-native";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";

class AddCrypto extends Component {
  constructor() {
    super();
    this.state={
      tab:"token",
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
      <View flex={15} style={{backgroundColor:"#D0E1F1",paddingBottom:100}} >
        <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#D0E1F1" translucent = {true}/>
         <View flex={1} style={{paddingHorizontal:50,paddingTop:30}}>
           <View flex={2} style={{flexDirection:"row"}}>
             <View flex={1}  style={{backgroundColor:val.tab=="token"?"white":"transparent",borderRadius:25,padding:5}}>
               <TouchableOpacity onPress={this.tabC.bind(this,"token")}>
                 <Text style={{color:"#063267",fontSize:20,textAlign:"center"}}>Token</Text>
               </TouchableOpacity>
             </View>
             <View flex={1}  style={{backgroundColor:val.tab=="network"?"white":"transparent",borderRadius:25,padding:5}}>
               <TouchableOpacity onPress={this.tabC.bind(this,"network")}>
                 <Text style={{color:"#063267",fontSize:20,textAlign:"center"}}>Network</Text>
               </TouchableOpacity>
             </View>
           </View>
         </View>

        <View flex={14} style={{paddingHorizontal:20}}>
          <ScrollView>
            {
              val.tab=="token"?<>
                <Text style={{color:"black",fontSize:20,marginTop:40,marginBottom:5}}>Network</Text>
                <View style={{borderColor:"#063267",borderWidth:2,borderRadius:8,padding:13,marginBottom:30}}>
                  <Text style={{color:"#000000",fontSize:20}}>Bitcoin</Text>
                </View>

                <Text style={{color:"black",fontSize:20,marginTop:0,marginBottom:5}}>Contract Address</Text>
                <TextInput   style={{height:50,width:"100%",backgroundColor:"transparent",
                  color:"black",borderRadius:8,fontSize:16,padding:5,
                  paddingBottom:5,paddingLeft:10,borderColor:"#063267",borderWidth:2,marginBottom:30}} placeholder=""/>

                <Text style={{color:"black",fontSize:20,marginTop:0,marginBottom:5}}>Name</Text>
                <TextInput   style={{height:50,width:"100%",backgroundColor:"transparent",
                  color:"black",borderRadius:8,fontSize:16,padding:5,
                  paddingBottom:5,paddingLeft:10,borderColor:"#063267",borderWidth:2,marginBottom:30}} placeholder=""/>

                <Text style={{color:"black",fontSize:20,marginTop:0,marginBottom:5}}>Symbol</Text>
                <TextInput   style={{height:50,width:"100%",backgroundColor:"transparent",
                  color:"black",borderRadius:8,fontSize:16,padding:5,
                  paddingBottom:5,paddingLeft:10,borderColor:"#063267",borderWidth:2,marginBottom:30}} placeholder=""/>

                <Text style={{color:"black",fontSize:20,marginTop:0,marginBottom:5}}>Decimals</Text>
                <TextInput   style={{height:50,width:"100%",backgroundColor:"transparent",
                  color:"black",borderRadius:8,fontSize:16,padding:5,
                  paddingBottom:5,paddingLeft:10,borderColor:"#063267",borderWidth:2,marginBottom:30}} placeholder=""/>
                <TouchableOpacity style={{marginTop:70,backgroundColor:"#3188D7",width:"100%",height:60,borderRadius:10}}>
                  <Text style={{color:"white",textAlign:"center",padding:15,fontSize:20}}>Import</Text>
                </TouchableOpacity>
              </>:""
            }

            {
              val.tab=="network"?<>
                <Text style={{color:"black",fontSize:20,marginTop:40,marginBottom:5}}>Network</Text>
                <View style={{borderColor:"#063267",borderWidth:2,borderRadius:8,padding:13,marginBottom:30}}>
                  <Text style={{color:"#000000",fontSize:20}}>Ethereum Base</Text>
                </View>

                <Text style={{color:"black",fontSize:20,marginTop:0,marginBottom:5}}>Name</Text>
                <TextInput   style={{height:50,width:"100%",backgroundColor:"transparent",
                  color:"black",borderRadius:8,fontSize:16,padding:5,
                  paddingBottom:5,paddingLeft:10,borderColor:"#063267",borderWidth:2,marginBottom:30}} placeholder=""/>

                <Text style={{color:"black",fontSize:20,marginTop:0,marginBottom:5}}>Symbol</Text>
                <TextInput   style={{height:50,width:"100%",backgroundColor:"transparent",
                  color:"black",borderRadius:8,fontSize:16,padding:5,
                  paddingBottom:5,paddingLeft:10,borderColor:"#063267",borderWidth:2,marginBottom:30}} placeholder=""/>

                <Text style={{color:"black",fontSize:20,marginTop:0,marginBottom:5}}>RPC URL</Text>
                <TextInput   style={{height:50,width:"100%",backgroundColor:"transparent",
                  color:"black",borderRadius:8,fontSize:16,padding:5,
                  paddingBottom:5,paddingLeft:10,borderColor:"#063267",borderWidth:2,marginBottom:30}} placeholder=""/>

                <Text style={{color:"black",fontSize:20,marginTop:0,marginBottom:5}}>Explorer (Optional)</Text>
                <TextInput   style={{height:50,width:"100%",backgroundColor:"transparent",
                  color:"black",borderRadius:8,fontSize:16,padding:5,
                  paddingBottom:5,paddingLeft:10,borderColor:"#063267",borderWidth:2,marginBottom:30}} placeholder=""/>


                <TouchableOpacity style={{marginTop:70,backgroundColor:"#3188D7",width:"100%",height:60,borderRadius:10}}>
                  <Text style={{color:"white",textAlign:"center",padding:15,fontSize:20}}>Import</Text>
                </TouchableOpacity>
              </>:""
            }

          </ScrollView>
        </View>


      </View>
    );
  }
}

export default AddCrypto;
