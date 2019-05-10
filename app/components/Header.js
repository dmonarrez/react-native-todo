import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
const Header = ({ title }) => (
  <View>
    <Text style={styles.headerContainer}>{title.toUpperCase()}</Text>
  </View>
);

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 40
  },
  
  headerText: {
    color: 'white',
    fontSize: 22,
    fontWeight: '500'
  }
});

export default Header;