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

class Withdrew extends Component {
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
      <View flex={10} style={{backgroundColor:"#D0E1F1",paddingBottom:60}} >
        <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#D0E1F1" translucent = {true}/>


        <View flex={9}>
          <View  style={{padding:20}}>
            <View style={{backgroundColor:"#338DE0",height:100,borderRadius:15,alignItems:"center",
              paddingVertical:20}}>
              <Text style={{color:"white",fontSize:22,marginVertical:0}}>Total Balance</Text>
              <Text style={{color:"white",fontSize:20,marginTop:5}}>0.00654 {this.state.name}</Text>
            </View>
          </View>

          <View style={{paddingHorizontal:20,marginTop:60}}>
            <Text style={{color:"black",fontSize:17,marginTop:0,marginBottom:5}}>Enter Your Address Here</Text>
            <TextInput   style={{height:50,width:"100%",backgroundColor:"transparent",
              color:"black",borderRadius:8,fontSize:16,padding:5,
              paddingBottom:5,paddingLeft:10,borderColor:"#063267",borderWidth:2,marginBottom:10}} placeholder=""/>

            <Text style={{color:"black",fontSize:17,marginTop:0,marginBottom:5}}>Enter Your Amout Here</Text>
            <TextInput   style={{height:50,width:"100%",backgroundColor:"transparent",
              color:"black",borderRadius:8,fontSize:16,padding:5,
              paddingBottom:5,paddingLeft:10,borderColor:"#063267",borderWidth:2,marginBottom:30}} placeholder=""/>

          </View>
        </View>

        <View flex={1} style={{paddingHorizontal:20,marginBottom:75}}>
          <TouchableOpacity style={{marginTop:70,backgroundColor:"#3188D7",width:"100%",height:60,borderRadius:10}}>
            <Text style={{color:"white",textAlign:"center",padding:15,fontSize:20}}>Withdrew</Text>
          </TouchableOpacity>
        </View>



      </View>
    );
  }
}

export default Withdrew;
