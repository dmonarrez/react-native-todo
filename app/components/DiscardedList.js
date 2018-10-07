import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Dimensions,
	TouchableOpacity,
	Platform
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import {
	itemListText,
	itemListTextStrike,
	circleInactive,
	circleActive,
	lighterWhite,
	deleteItem
} from '../utils/Colors';

const { width } = Dimensions.get('window');

class List extends Component {
	state = {
		isCompleted: false
	};

	toggleListItem = () => {
		this.setState(prevState => {
			return {
				isCompleted: !prevState.isCompleted
			};
		});
	};

	render() {
		const { isCompleted } = this.state;

		return (
			<View style={styles.listItemContainer}>
				<View style={styles.rowContainer}>
					<TouchableOpacity onPress={this.toggleListItem}>
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
						Item 1
					</Text>
					{isCompleted ? (
						<View style={styles.button}>
							<TouchableOpacity>
								<MaterialIcons
									name="delete-forever"
									size={24}
									color={deleteItem}
								/>
							</TouchableOpacity>
						</View>
					) : null}
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	listItemContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: 5,
		marginBottom: 5,
		padding: 10,
		width: width - 50,
		height: 50,
		borderRadius: 5,
		backgroundColor: 'white',
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
	rowContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
		width: width / 2
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
	},
	buttons: {
		flexDirection: 'row'
	}
});

export default List;
