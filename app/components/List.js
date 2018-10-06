import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native';

import { lighterWhite } from '../utils/Colors';

const title = 'Recent Notes';
const { height, width } = Dimensions.get('window');

class List extends Component {
	state = {
		isEditing: false
	};

	render() {
		return (
			<ScrollView style={styles.container}>
				<View style={styles.titleContainer}>
					<Text style={[styles.titleText, { color: lighterWhite }]}>
						{title.toUpperCase()}
					</Text>
				</View>
				<View style={styles.listItemContainer}>
					<Text>Item 1</Text>
				</View>
				<View style={styles.listItemContainer}>
					<Text>Item 2 </Text>
				</View>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		marginTop: 40,
		paddingLeft: 15
	},
	titleContainer: {
		marginBottom: 5
	},
	titleText: {
		fontSize: 16,
		fontWeight: '500'
	},
	listItemContainer: {
		marginTop: 5,
		marginBottom: 5,
		padding: 10,
		width: width - 50,
		height: 50,
		borderRadius: 5,
		backgroundColor: 'white',
		flexDirection: 'row',
		alignItems: 'center'
	}
});

export default List;
