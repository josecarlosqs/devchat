import React,{Component} from 'react'
import {View,Text,StyleSheet,Button} from 'react-native'
import {Actions} from 'react-native-router-flux'

export default class app extends Component{
	render(){
		return (
			<View style={{marginTop: 64}}>
				<Text>Pantalla login</Text>
				<Button onPress={() => {Actions.register()}} title="Ir a registro" />
				<Button onPress={() => {Actions.chat()}} title="Ir al chat" />
			</View>
		)
	}
}