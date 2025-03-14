import {
  View,
  Text,
  StatusBar,
  Image,
  ScrollView,
  TextInput,
  SafeAreaView,
  Button,
  TouchableOpacity, Dimensions,
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import React, { Component } from "react";
import Carousel from "react-native-snap-carousel";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";

class Airdrop extends Component {

  _renderItem = ({item, index}) => {
    return (
      <View flex={1}>
        <TouchableOpacity>
          <View>
            <Image style={{width:"90.5%",height:130,borderWidth:1,
              borderRadius:15}} source={require("../../images/slide.png")}/>
          </View>
        </TouchableOpacity>

      </View>
    );
  }

  render() {
    const data = [
      {
        title: "Aenean leo",
        body: "Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada placerat nisl. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
        img: "https://img.bitgetimg.com/multiLang/web/66abae51e11753a3ac6d84dcdc9dbca6.jpeg",
      },
      {
        title: "In turpis",
        body: "Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ",
        img: "https://img.bitgetimg.com/multiLang/web/55c7d6a38da97cd4c6bf32fec4837cb6.png",
      }
    ];
    return (
      <View flex={1} style={{flexDirection:"column",justifyContent:"center",backgroundColor:"#013B94"}} >
        <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#013B94" translucent = {true}/>

        <ScrollView style={{paddingHorizontal:20,marginBottom:100}}>
          <View flex={1} style={{marginTop:10,paddingHorizontal:0,
            width:"100%",height:130,alignItems:"center"}}>
            <View style={{width:"100%",height:"100%"}}>
              <Carousel
                data={data}
                renderItem={this._renderItem}
                sliderWidth={Dimensions.get('window').width}
                itemWidth={Dimensions.get('window').width}
                autoplay={true}
                firstItem={0}
                loop={true}
                autoplayDelay={4000}
              />
            </View>
          </View>

          <Text style={{marginTop:23,fontSize:20,color:"#ffffff"}}>Daily Task</Text>

          <View style={{height:135,backgroundColor:"#70BBFA",marginTop:10,
            borderRadius:15,flexDirection:"column",padding:20,marginBottom:20}}>
              <View style={{flexDirection:"row"}}>
                <View style={{flexDirection:"row",width:"50%"}}>
                  <FontAwesome6
                    name={'list-check'} style={{marginTop:2,borderWidth:2,
                    borderColor:"#004E91",borderRadius:10,padding:5}} color="#004E91"
                    size={30}  />
                  <Text style={{color:"#004E91",fontSize:16,marginLeft:10}}>Complete Daily {"\n"} Check in</Text>
                </View>
                <View style={{alignItems:"flex-end",width:"50%"}}>
                  <TouchableOpacity style={{marginTop:0,backgroundColor:"#012F63",width:70,height:35,
                    borderRadius:10}}>
                    <Text style={{color:"white",textAlign:"center",padding:6.5,fontSize:14,paddingHorizontal:15}}>Go</Text>
                  </TouchableOpacity>
                </View>
              </View>

            <View style={{flexDirection:"row",marginTop:10}}>
              <View style={{flexDirection:"column",marginRight:10}}>
                <FontAwesome6
                  name={'circle-check'} style={{}} color="#004E91"
                  size={30}  />
                <Text style={{color:"black"}}>100</Text>
              </View>
              <View style={{flexDirection:"column",marginRight:10}}>
                <FontAwesome6
                  name={'circle-check'} style={{}} color="#004E91"
                  size={30}  />
                <Text style={{color:"black"}}>100</Text>
              </View>
              <View style={{flexDirection:"column",marginRight:10}}>
                <FontAwesome6
                  name={'circle-check'} style={{}} color="#004E91"
                  size={30}  />
                <Text style={{color:"black"}}>100</Text>
              </View>
              <View style={{flexDirection:"column",marginRight:10}}>
                <FontAwesome6
                  name={'circle-check'} style={{}} color="#004E91"
                  size={30}  />
                <Text style={{color:"black"}}>100</Text>
              </View>
              <View style={{flexDirection:"column",marginRight:10}}>
                <FontAwesome6
                  name={'circle-check'} style={{}} color="#004E91"
                  size={30}  />
                <Text style={{color:"black"}}>100</Text>
              </View>
              <View style={{flexDirection:"column",marginRight:10}}>
                <FontAwesome6
                  name={'circle-check'} style={{}} color="#004E91"
                  size={30}  />
                <Text style={{color:"black"}}>100</Text>
              </View>
              <View style={{flexDirection:"column",marginRight:10}}>
                <FontAwesome6
                  name={'circle-check'} style={{}} color="#004E91"
                  size={30}  />
                <Text style={{color:"black"}}>1 Z</Text>
              </View>
            </View>

          </View>

          <View style={{height:130,backgroundColor:"#70BBFA",
            borderRadius:15,flexDirection:"column",padding:15,marginBottom:20}}>
            <View style={{flexDirection:"row"}}>
              <View style={{flexDirection:"row",width:"70%"}}>
                <FontAwesome6
                  name={'wallet'} style={{marginTop:10}} color="#004E91"
                  size={40}  />
                <View style={{flexDirection:"column",marginLeft:15}}>
                  <Text style={{color:"#004E91",fontSize:16,marginBottom:10}}>Access your Airdrop Wallet</Text>
                  <Text style={{fontSize:12,color:"black"}}> Easily manage your rewards and track your earnings with your Airdrop
                    Wallet.
                  </Text>
                </View>
              </View>
              <View style={{alignItems:"flex-end",width:"30%"}}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate("AirdropWallet")} style={{marginTop:0,backgroundColor:"#012F63",width:70,height:35,
                  borderRadius:10}}>
                  <Text style={{color:"white",textAlign:"center",padding:6.5,fontSize:14,paddingHorizontal:15}}>Wallet</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={{height:130,backgroundColor:"#70BBFA",
            borderRadius:15,flexDirection:"column",padding:15,marginBottom:20}}>
            <View style={{flexDirection:"row"}}>
              <View style={{flexDirection:"row",width:"70%"}}>
                <FontAwesome6
                  name={'stairs'} style={{marginTop:30}} color="#004E91"
                  size={40}  />
                <View style={{flexDirection:"column",marginLeft:15}}>
                  <Text style={{color:"#004E91",fontSize:14,marginBottom:10}}>Stake your ETH or Zeros {"\n"} point to
                  earn Zeros token
                  </Text>
                  <Text style={{fontSize:12,color:"black"}}> Stake your ETH or zeros point to earn Zeros token
                   Don't miss out—stake now and reap the benefits!
                  </Text>
                </View>
              </View>
              <View style={{alignItems:"flex-end",width:"30%"}}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate("Stake")} style={{marginTop:0,backgroundColor:"#012F63",width:70,height:35,
                  borderRadius:10}}>
                  <Text style={{color:"white",textAlign:"center",padding:6.5,fontSize:14,paddingHorizontal:15}}>Stake</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={{height:130,backgroundColor:"#70BBFA",
            borderRadius:15,flexDirection:"column",padding:15,marginBottom:20}}>
            <View style={{flexDirection:"row"}}>
              <View style={{flexDirection:"row",width:"70%"}}>
                <FontAwesome6
                  name={'retweet'} style={{marginTop:30}} color="#004E91"
                  size={40}  />
                <View style={{flexDirection:"column",marginLeft:15}}>
                  <Text style={{color:"#004E91",fontSize:14,marginBottom:10}}>Swap your ETH or Zeros {"\n"} point to
                     earn Zeros token </Text>
                  <Text style={{fontSize:11,color:"black"}}>
                    Swap your ETH or zeros point to earn Zeros token
                  Start swapping with a daily limit of 1$ to $200, you can collect up to
                    6,000 points per day.
                  </Text>
                </View>
              </View>
              <View style={{alignItems:"flex-end",width:"30%"}}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate("Swap")} style={{marginTop:0,backgroundColor:"#012F63",width:70,height:35,
                  borderRadius:10}}>
                  <Text style={{color:"white",textAlign:"center",padding:6.5,fontSize:14,paddingHorizontal:15}}>Swap</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={{height:145,backgroundColor:"#70BBFA",
            borderRadius:15,flexDirection:"column",padding:15,marginBottom:20}}>
            <View style={{flexDirection:"row"}}>
              <View style={{flexDirection:"row",width:"70%"}}>
                <FontAwesome6
                  name={'user-plus'} style={{marginTop:30}} color="#004E91"
                  size={40}  />
                <View style={{flexDirection:"column",marginLeft:15}}>
                  <Text style={{color:"#004E91",fontSize:15,marginBottom:10}}>Get 20 points instantly +7%{"\n"}
                  Commission on Every Referral
                  </Text>
                  <Text style={{fontSize:12,color:"black"}}>
                    Get an instant 20 points bonus and enjoy a 7% commission for every successful referral! Click now to start referring and earning.
                  </Text>
                </View>
              </View>
              <View style={{alignItems:"flex-end",width:"30%"}}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate("Refer")} style={{marginTop:0,backgroundColor:"#012F63",width:70,height:35,
                  borderRadius:10}}>
                  <Text style={{color:"white",textAlign:"center",padding:6.5,fontSize:14,paddingHorizontal:15}}>Go</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

        </ScrollView>

      </View>
    );
  }
}

export default Airdrop;
