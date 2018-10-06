import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { LinearGradient } from 'expo';

import { gradientStart, gradientEnd } from './utils/Colors';
import Header from './components/Header';

const headerTitle = 'Todo';

export default class Main extends React.Component {
	render() {
		return (
			<LinearGradient
				colors={[gradientStart, gradientEnd]}
				style={styles.container}
			>
				<StatusBar barStyle="light-content" />
				<View style={styles.centered}>
					<Header title={headerTitle} />
				</View>
			</LinearGradient>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	centered: {
		alignItems: 'center'
	}
});
