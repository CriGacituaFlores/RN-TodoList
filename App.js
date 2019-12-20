import React from 'react';
import { StyleSheet, Text, View, FlatList, Modal } from 'react-native';
import Item from './item'
import Button from './button'
import datos from './datos';

export default class App extends React.Component {

	state = {
		data: datos,
		isVisible: false,
	}

  handlePress = () => {
		this.setState({isVisible: true})
  }

  render() {
		const { data } = this.state;
    return (
      <View style={[styles.container, styles.gray]}>
        <View style={styles.header}>
          <Text style={styles.title}>Recordatorios</Text>  
        </View>
				<View style={styles.view}>
					<Button title='Agregar' onPress={this.handlePress}/>
				</View>
        <FlatList data={data} renderItem={Item} />
				<Modal visible={this.state.isVisible} animationType="slide">
					<View style={[styles.container, styles.center]}>
						<Text style={styles.modalTitle}>Ingrese recordatorio</Text>
					</View>
				</Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
	},
	center: {
		justifyContent: "center",
		alignItems: "center"
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
	},
	view: {
		height: 50,
		margin: 15,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center"
	},
	gray: {
		backgroundColor: "#eee"
	},
	modalTitle: {
		fontSize: 28
	}
});
