import React from 'react';
import { StyleSheet, Text, View, StatusBar, ScrollView } from 'react-native';
import { LinearGradient } from 'expo';
import { primaryGradientArray } from './utils/Colors';
import Header from './components/Header'
import Input from './components/Input';

const headerTitle = "To Do";

export default class Main extends React.Component {
  state ={
    inputValue: ''
  };
  
  newInputValue = Value => {
    this.setState({
      inputValue: value
    });
  };
  
	render() {
    const { inputValue } = this.state;
		return(
			<LinearGradient colors={primaryGradientArray} style={styles.container}>
        //status bar
				<StatusBar barStyle='light-content' />
        //header
				<View style={styles.centered}>
					<Header title={headerTitle} />
				</View>
        //input
        <View style={styles.inputContainer}>
          <Input inputValue={inputValue} onChangeText={this.newInputValue} />
        </View>
        //list
        <View style={styles.list}>
          <ScrollView contentContainerStyle={styles.scrollableList}>
          {Object.values(allItems).reverse().map(item => (
            <List 
              key={item.id} 
              {...item}
              deleteItem={this.deleteItem}
              completeItem={this.completeItem}
              incompleteItem={this.incompleteItem} 
            />
          ))}
          </ScrollView>
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
    marginBottom: 10,
    paddingLeft: 15
  },
  
  scrollableList: {
    marginTop: 15
  }
});