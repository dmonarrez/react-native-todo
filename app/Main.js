import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo';

import { gradientStart, gradientEnd } from './utils/Colors';

export default class Main extends React.Component {
	render() {
		return (
			<LinearGradient
				colors={[gradientStart, gradientEnd]}
				style={styles.container}
			>
				<Text>Open up App.js to start working on your app!</Text>
			</LinearGradient>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});
