import React from 'react';
import { StyleSheet, Text, View, Image, Animated, ProgressViewIOS} from 'react-native';
import ProgressBar from 'react-native-progress/Bar';
import { Button } from 'react-native-elements';


class CurrentLevelButton extends React.Component {
	constructor(props) {
		super(props);		
	}

	render() {
		return(
			<View>
				<ProgressBar width = {350} height = {60}
					progress = {this.props.progress}
					color = '#1fa83f'/>

			</View>
		);
	}
		
}

let styles = StyleSheet.create({
	progressBar: {
		width: null,
		height: 100
	}
});

export default CurrentLevelButton;
