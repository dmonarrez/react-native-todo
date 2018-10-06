import React, { Component } from 'react';
import { StyleSheet, TextInput } from 'react-native';

import { inputPlaceholder } from '../utils/Colors';

class Input extends Component {
	render() {
		const { inputValue, onChangeText } = this.props;
		return (
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
				maxLength={60}
				returnKeyType="done"
				autoCorrect={false}
				blurOnSubmit={true}
				onSubmitEditing={() => Keyboard.dismiss()}
			/>
		);
	}
}

const styles = StyleSheet.create({
	input: {
		paddingTop: 10,
		paddingRight: 15,
		fontSize: 30,
		color: 'white',
		fontWeight: '500'
	}
});

export default Input;
