import React from 'react';
import { StyleSheet, Text, View, Image, Animated, ProgressViewIOS} from 'react-native';


class CurrentLevelButton extends React.Component {
	constructor(props) {
		super(props);		
	}

	render() {
		return(
			<ProgressViewIOS progress = {this.props.progress} 
				style = {styles.progressBar}
				progressTintColor = 'green'/>
		);
	}
		
}

let styles = StyleSheet.create({
	progressBar: {
		width: 300,
		height: 100
	}
});

export default CurrentLevelButton;
