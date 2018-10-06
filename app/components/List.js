import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

import { lighterWhite } from '../utils/Colors';

const title = 'Recent Notes';

class List extends Component {
	state = {
		isEditing: false
	};

	render() {
		return (
			<ScrollView style={styles.container}>
				<Text style={[styles.titleText, { color: lighterWhite }]}>
					{title.toUpperCase()}
				</Text>
			</ScrollView>
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
	}
});

export default List;
