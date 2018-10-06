import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { LinearGradient } from 'expo';

import { gradientStart, gradientEnd } from './utils/Colors';
import Header from './components/Header';
import SubTitle from './components/SubTitle';
import Input from './components/Input';
import List from './components/List';

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
				<View style={styles.inputContainer}>
					<SubTitle subtitle={"What's Next"} />
					<Input inputValue={inputValue} onChangeText={this.newInputValue} />
				</View>

				<View style={styles.list}>
					<SubTitle subtitle={'Recent Notes'} />
					<List />
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
	},
	inputContainer: {
		marginTop: 40,
		paddingLeft: 15
	},
	list: {
		flex: 1,
		marginTop: 70,
		paddingLeft: 15
	}
});
