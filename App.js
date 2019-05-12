import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

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
          <Text >
            Ini Home
          </Text>
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
  }
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

export default App