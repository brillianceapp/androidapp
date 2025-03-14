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
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";

class Support extends Component {
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
      <ScrollView>

        <View flex={10} style={{backgroundColor:"#D0E1F1",paddingBottom:60,paddingHorizontal:20,paddingTop:20}} >
          <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#D0E1F1" translucent = {true}/>


          <Text style={{color:"#000000",fontSize:18}}>
            Welcome to the Support Center{"\n"}
            We're here to assist you with any questions,{"\n"} issues, or concerns you may have.{"\n"}
            How Can We Help You?
          </Text>
          <Text style={{color:"#000000",fontSize:18}}>
            FAQs: Find quick answers to common{"\n"} questions.{"\n"}
            Technical Support: Facing an issue? Our{"\n"} team is ready to help you resolve it.{"\n"}
            Account Assistance: Need help with your{"\n"} account or transactions? We've got you{"\n"} covered.{"\n"}
            Feedback & Suggestions: Share your ideas{"\n"} or feedback to help us improve.{"\n"}
            Contact Us:{"\n"}
            If you can't find what you're looking for, feel{"\n"} free to reach out to us:{"\n"}
            telegram username :
            <TouchableOpacity onPress={()=>Linking.openURL("https://t.me/zeroscommunity")}>
              <Text style={{color:"#063267",fontSize:16}}> @zeroscommunity </Text>
            </TouchableOpacity> {"\n"}
            Live Chat: Click the chat icon at the bottom{"\n"} of the page to speak with a support agent.{"\n"}
            Help Desk: Submit a ticket, and our team{"\n"} will get back to you within 24–48 hours.{"\n"}
            We're committed to providing you with the{"\n"} best possible experience. Let us know how {"\n"}we can help!
          </Text>

        </View>
      </ScrollView>
    );
  }
}

export default Support;
