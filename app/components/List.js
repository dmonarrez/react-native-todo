import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Dimensions,
	ScrollView,
	TouchableOpacity,
	Platform
} from 'react-native';

import {
	lighterWhite,
	itemListText,
	itemListTextStrike,
	circleInactive,
	circleActive
} from '../utils/Colors';

const { width } = Dimensions.get('window');

class List extends Component {
	state = {
		isCompleted: false,
		listItems: [{ id: 1, content: 'Item 1' }, { id: 2, content: 'Item 2' }]
	};

	toggleComplete = () => {
		this.setState(prevState => {
			return {
				isCompleted: !prevState.isCompleted
			};
		});
	};

	render() {
		const { isCompleted } = this.state;

		return (
			<ScrollView>
				{this.state.listItems.map(item => (
					<View style={styles.listItemContainer} key={item.id}>
						<TouchableOpacity onPress={this.toggleComplete}>
							<View
								style={[
									styles.circle,
									isCompleted
										? { borderColor: circleActive }
										: { borderColor: circleInactive }
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
							{item.content}
						</Text>
					</View>
				))}
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
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
