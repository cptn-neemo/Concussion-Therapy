import React from 'react';
import { StyleSheet, Text, View, Image, Animated} from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOnTitle: true,
    }
  }

  componentDidMount() {
    if (this.state.isOnTitle) {
      this.timerID = setInterval(() => this.changeScreen(), 3000);
    }
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
          <Text>This is not the title screen</Text>
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
  }
});
