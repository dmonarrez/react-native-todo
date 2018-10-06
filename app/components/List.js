import React, { Component } from 'react';
import {
	View,
	Text,
	ScrollView,
	StyleSheet,
	Dimensions,
	TouchableOpacity,
	Platform
} from 'react-native';

import {
	lighterWhite,
	checkmarkInactive,
	itemListText,
	checkmarkActive,
	itemListTextStrike
} from '../utils/Colors';

const title = 'Recent Notes';
const { width } = Dimensions.get('window');

class List extends Component {
	state = {
		isEditing: false,
		isCompleted: false
	};

	toggleItem = () => {
		this.setState(prevState => {
			return {
				isCompleted: !prevState.isCompleted
			};
		});
		// TODO: remove this!
		alert('Pressed!');
	};

	render() {
		const { isCompleted } = this.state;

		return (
			<ScrollView style={styles.container}>
				<View style={styles.titleContainer}>
					<Text style={[styles.titleText, { color: lighterWhite }]}>
						{title.toUpperCase()}
					</Text>
				</View>
				<View style={styles.listItemContainer}>
					<TouchableOpacity onPress={this.toggleItem}>
						<View
							style={[
								styles.circle,
								isCompleted
									? { borderColor: checkmarkActive }
									: { borderColor: checkmarkInactive }
							]}
						/>
					</TouchableOpacity>
					<Text
						style={[
							styles.text,
							isCompleted
								? {
										color: itemListTextStrike,
										textDecorationLine: 'line-through'
								  }
								: { color: itemListText }
						]}
					>
						Item 1
					</Text>
				</View>
				<View style={styles.listItemContainer}>
					<TouchableOpacity onPress={this.toggleItem}>
						<View style={[styles.circle, { borderColor: checkmarkInactive }]} />
					</TouchableOpacity>
					<Text style={[styles.text, { color: itemListText }]}>Item 2</Text>
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
		alignItems: 'center',
		...Platform.select({
			ios: {
				shadowColor: 'rgb(50,50,50)',
				shadowOpacity: 0.8,
				shadowRadius: 2,
				shadowOffset: {
					height: 2,
					width: 0
				}
			},
			android: {
				elevation: 5
			}
		})
	},
	circle: {
		width: 30,
		height: 30,
		borderRadius: 15,
		borderWidth: 3,
		marginRight: 20
	},
	text: {
		fontWeight: '500',
		fontSize: 16
	}
});

export default List;
