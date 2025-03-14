import React from 'react';
import { View, Text, StatusBar, Image, ScrollView, TextInput, SafeAreaView, Button } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Dapps({navigation}){
  return(
    <View flex={1} style={{flexDirection:"column",justifyContent:"center",backgroundColor:"#D0E1F1"}} >
      <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#D0E1F1" translucent = {true}/>
      <View style={{alignItems:"center"}}>
        <Text style={{fontSize:20}}>Coming soon .....</Text>
      </View>
    </View>
  );
}
