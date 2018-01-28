import React from 'react';
import { StyleSheet, Text, View, Image, Animated} from 'react-native';
import CurrentLevelButton from './CurrentLevelButton.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOnTitle: true,
      level: 1,
      progress: .1
    }
  }

  componentDidMount() {
    // if (this.state.isOnTitle) {
    //   this.timerID = setInterval(() => this.changeScreen(), 3000);
    // }
    // else {
    //   setInterval(() => this.refreshProgress(), 1000);
    // }

    setTimeout(() => {
      this.setState({isOnTitle: false})
    }, 3000);

    var timer = setInterval(() => {
      if (this.state.progress < 1) {
        this.setState(prevState => ({
          progress: prevState.progress + .1
        }));
      }
      else {
        clearInterval(timer);
      }

    }, 1000); 
  }

  changeScreen() {
    this.setState({isOnTitle: false});
  }

  render() {
    if (this.state.isOnTitle) {
      return (
        <View style={styles.container}>
          <Text style = {styles.mainText}>Concussion Therapy</Text>
        </View>
      );
    }
    else {
      return(
        <View style = {styles.container}>
          <Text style = {styles.levelText}>Level: {this.state.level}</Text>
          <CurrentLevelButton progress ={this.state.progress}/>
          <Text>{this.state.progress}</Text>
        </View>
      );
    }

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#525252',
    alignItems: 'center',
    justifyContent: 'center',
  },

  mainText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30
  },

  levelText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 45
  }
});
