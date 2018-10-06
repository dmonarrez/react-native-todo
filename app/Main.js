import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { LinearGradient } from 'expo';

import { gradientStart, gradientEnd } from './utils/Colors';
import Header from './components/Header';
import Input from './components/Input';

const headerTitle = 'Todo';

export default class Main extends React.Component {
	state = {
		inputValue: ''
	};

	newInputValue = value => {
		this.setState({
			inputValue: value
		});
	};

	render() {
		const { inputValue } = this.state;
		return (
			<LinearGradient
				colors={[gradientStart, gradientEnd]}
				style={styles.container}
			>
				<StatusBar barStyle="light-content" />
				<View style={styles.centered}>
					<Header title={headerTitle} />
				</View>
				<View>
					<Input inputValue={inputValue} onChangeText={this.newInputValue} />
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
