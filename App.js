import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import First from './First';
import Second from './Second'
// import App from '.'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tampilkanHome: false
    };
  }

  done = () => {
    this.setState({ tampilkanHome: true })
  }

  skip = () => {
    this.setState({ tampilkanHome: true })
  }
  
  render() {
    if(this.state.tampilkanHome){
      return (
        <View >
         <TouchableOpacity
            style={[styles.buttonContainer, styles.loginButton]}
            onPress={() => this.props.navigation.navigate('First')}
          >
          <Text style={{color:'white'}}>First</Text>
        </TouchableOpacity>
        </View>
      );
    } else{
      return(
        <AppIntroSlider
          slides={slides}
          onDone={this.done}
          showSkipButton={true}
          onSkip={this.skip}
        />
      );
    }
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },

  title: {
    fontSize: 26,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },

  text: {
    color: '#fff',
    fontSize: 20,
  },

  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain'
  },

  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },

  loginButton: {
    backgroundColor: '#3498db',
  },
});
 
const slides = [
  {
    key: 'id1',
    title: 'Slide Pertama',
    text: 'Ini Slide Pertama',
    image: {
      uri:
        'https://www.inovex.de/blog/wp-content/uploads/2018/03/react-native.png',
    },
    titleStyle: styles.title,
    textStyle: styles.text,
    imageStyle: styles.image,
    backgroundColor: '#FF1744',
  },
  {
    key: 'id2',
    title: 'Slide Kedua',
    text: 'Ini Slide Kedua',
    image: {
      uri:
        'https://www.inovex.de/blog/wp-content/uploads/2018/03/react-native.png',
    },
    titleStyle: styles.title,
    textStyle: styles.text,
    imageStyle: styles.image,
    backgroundColor: '#D500F9',
  },
  {
    key: 'id3',
    title: 'Slide Ketiga',
    text: 'Ini Slide Ketiga',
    image: {
      uri: 'https://www.inovex.de/blog/wp-content/uploads/2018/03/react-native.png',
    },
    titleStyle: styles.title,
    textStyle: styles.text,
    imageStyle: styles.image,
    backgroundColor: '#2979FF',
  },
  {
    key: 'id4',
    title: 'Slide Keempat',
    text: ' Ini Slide Keempat',
    image: {
      uri: 'https://www.inovex.de/blog/wp-content/uploads/2018/03/react-native.png',
    },
    titleStyle: styles.title,
    textStyle: styles.text,
    imageStyle: styles.image,
    backgroundColor: '#1DE9B6',
  },
];

const AppNavigator = createStackNavigator({
  App:{
    screen: App,
    navigationOptions: {
      header: null,
    },
  },
 
  First:{
    screen: First,
    navigationOptions: {
      header: null,
    },
  },
  
  // Second:{
  //   screen: Second,
  //   navigationOptions: {
  //     header: null,
  //   },
  // }
})

export default createAppContainer(AppNavigator)