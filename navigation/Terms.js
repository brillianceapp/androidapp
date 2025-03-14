import React, { Component } from "react";
import { ActivityIndicator, BackHandler, StatusBar, View } from "react-native";
import WebView from "react-native-webview";

class Terms extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: true };
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
  hideSpinner() {
    this.setState({ visible: false });
  }
  render() {
    return (
      <View flex={1} style={{backgroundColor:"#D0E1F1",paddingBottom:60,paddingHorizontal:20,paddingTop:20}} >
        <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#D0E1F1" translucent = {true}/>

        <View style={{backgroundColor:"#D0E1F1"}} flex={1} style={{marginTop:-90}}>

          <WebView onLoad={() =>
            this.hideSpinner()}
                   source={{ uri: "https://app.zeroswallet.com/terms" }}
                   scalesPageToFit={false}
                   scrollEnabled={false}
                   setBuiltInZoomControls={false}
                   javaScriptEnabled={true}
                   style={{
                     backgroundColor: '#D0E1F1'
                   }}
          />

          {this.state.visible==true?<ActivityIndicator size="large" color="red"
                                                       style={{marginTop:-500}}/>:""}

        </View>

      </View>
    );
  }
}

export default Terms;