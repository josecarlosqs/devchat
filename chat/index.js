import React,{Component} from 'react'
import {View,Text,StyleSheet,AppRegistry} from 'react-native'

export default class app extends Component{
	render(){
		return (
			<View><Text>Hola Mundo!</Text></View>
		)
	}
}

AppRegistry.registerComponent('devchat', () => app)