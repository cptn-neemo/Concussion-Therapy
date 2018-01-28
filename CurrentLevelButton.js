import React from 'react';
import { StyleSheet, Text, View, Image, Animated, ProgressViewIOS} from 'react-native';
import ProgressBar from 'react-native-progress/Bar';


class CurrentLevelButton extends React.Component {
	constructor(props) {
		super(props);		
	}

	render() {
		return(
			<View>
				<ProgressBar width = {300} height = {30}
					progress = {this.props.progress}
					color = '#2c7c18'/>
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
