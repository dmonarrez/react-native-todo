import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Keyboard } from 'react-native';

import { lightWhite, inputPlaceholder } from '../utils/Colors';

const title = "What's Next?";

class Input extends Component {
	render() {
		const { inputValue, onChangeText } = this.props;
		return (
			<View style={styles.container} behavior="padding" enabled>
				<Text style={[styles.titleText, { color: lightWhite }]}>
					{title.toUpperCase()}
				</Text>
				<TextInput
					style={styles.input}
					value={inputValue}
					onChangeText={onChangeText}
					placeholder="Type here to add note."
					placeholderTextColor={inputPlaceholder}
					multiline={true}
					autoCapitalize="sentences"
					underlineColorAndroid="transparent"
					selectionColor={'white'}
					maxLength={240}
					returnKeyType="done"
					autoCorrect={false}
					blurOnSubmit={true}
					onSubmitEditing={() => Keyboard.dismiss()}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		marginTop: 40,
		paddingLeft: 15
	},
	titleText: {
		fontSize: 16,
		fontWeight: '500'
	},
	input: {
		paddingTop: 10,
		paddingRight: 15,
		fontSize: 30,
		color: 'white'
	}
});

export default Input;
