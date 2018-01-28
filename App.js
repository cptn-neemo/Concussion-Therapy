import React from 'react';
import { StyleSheet, Text, View, Image, Alert, TouchableOpacity} from 'react-native';
import CurrentLevelButton from './CurrentLevelButton.js';
import {Badge, Divider, Button} from 'react-native-elements'

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOnTitle: true,
      level: 1,
      progress: .1,
      continue: false,
      score: 0,
      userName: '',
      question: '',
      isOnAccount: false
    }
  }

  componentDidMount() {

    setTimeout(() => {
      this.setState({isOnTitle: false})
    }, 3000);

       var timer = setInterval(() => {
         this.getUserInformation();
       }, 1000 ); 
  }

  changeScreen() {
    this.setState({isOnTitle: false});
  }

  onButtonPress() {
    //Alert.alert('You tapped continue');
    this.setState(prevState => ({
      progress: 0,
      level: prevState.level + 1,
      continue: !prevState.continue
    }));
  }

  getUserInformation() {
    return fetch('https://5p2focm5m7.execute-api.us-west-2.amazonaws.com/delta/test')
    .then((response) => response.json())
    .then((responseJSON) => {
      console.log('User score: ' + responseJSON.score);
      console.log('Username: ' + responseJSON.username);

      let level = Math.floor(responseJSON.score / 50) + 1;
      let prog = (responseJSON.score % 50) / 50.0;
      let useName = '';
      let lastQuest = '';
      let score = 0;


      console.log('level: ' + level);
      console.log('prog: ' + prog);
      
      if (responseJSON.userName == null && responseJSON.score == null) {
        this.setState({
          score: 0,
          userName: 'Error',
          question: 'Error: No Connection',
          progress: 0,
          level: 0
        });
      }
      else {
        this.setState({
          score: responseJSON.score,
          userName: responseJSON.username,
          question: responseJSON.lastQuestion,
          progress: prog,
          level: level
        });
      }
     })
  }

  accountButtonPress() {
    this.setState(prevState => ({
      isOnAccount: !prevState.isOnAccount
    }));
  }

  render() {
    if (this.state.isOnTitle) {
      return (
        <View style={styles.mainView}>
          <Text style = {styles.mainText}>Concussion Therapy</Text>
        </View>
      );
    }
    else if (this.state.isOnAccount) {
      return (
        <View style = {styles.container}>
          <View style = {styles.levelView}>
            <Text style={styles.levelText}>{this.state.userName}</Text>
          </View>

          <Text style = {styles.questionText}>
            Total Score: {this.state.score}
          </Text>

          <Text style = {styles.questionText}>
            Questions Answered: {this.state.score / 10}
          </Text>

          <View style = {styles.buttonView}>
              
            <Button
                large
                rounded
                onPress={() => this.accountButtonPress()}
                textStyle = {styles.buttonText}
                buttonStyle = {styles.button}
                iconRight={{name: 'backspace'}}
                title='Back to Questions' />

          </View>
        </View>
      );
    }
    else {    
        return(
          <View style = {styles.container}>
            <View style = {styles.levelView}>
              <Text style = {styles.levelText}>Level: {this.state.level}</Text>
            </View>

            <Text style = {styles.questionText}>{this.state.question}</Text>
            <CurrentLevelButton progress ={this.state.progress}/>
            <Badge textStyle = {styles.buttonText}
              value = {this.state.progress * 100 + '%'}
              wrapperStyle = {styles.badge}/>

            <View style = {styles.buttonView}>

              <Button
                large
                rounded
                onPress={() => this.accountButtonPress()}
                textStyle = {styles.buttonText}
                buttonStyle = {styles.button}
                iconRight={{name: 'account-box'}}
                title='My Progress' />

            </View>
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
    justifyContent: 'flex-start',
  },

  badgeText:  {
    color: 'orange',
    fontSize: 60
  },

  mainText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
  },

  levelText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 70,
    textAlignVertical: 'top',

  },

  buttonText: {
    fontSize: 35,
    color: 'orange'
  },

  questionText: {
    color: 'white',
    fontSize: 35,
    textAlign: 'center',
    padding: '10%'
  },

  progressText: {
    color: 'white',
    fontSize: 20,
  },

  button: {
    alignItems: 'center',
    backgroundColor: '#252526',
    padding: '10%',
  },

  mainView: {
    flex: 1,
    backgroundColor: '#525252',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonView: {
    paddingTop: '15%',
    alignSelf: 'stretch'
  },

  badge: {
    paddingTop: '5%'
  },

  levelView: {
    paddingBottom: '10%',
    paddingTop: '20%'
  }
});
