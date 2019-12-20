import React from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import Item from './item'
import datos from './datos';

export default class App extends React.Component {

  handlePress = () => {

  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Recordatorios</Text>  
        </View>
        <Button title='Agregar' onPress={this.handlePress}/>
        <FlatList data={datos} renderItem={Item} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
		height: 100,
		borderBottomWidth: 1,
		borderBottomColor: "#ddd"
	},
	title: {
		textAlign: "center",
		marginTop: 50,
		fontSize: 28
	}
});
