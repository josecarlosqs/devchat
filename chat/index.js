import React,{Component} from 'react'
import {View,Text,StyleSheet,AppRegistry} from 'react-native'
import {Scene,Router,ActionConst} from 'react-native-router-flux'

import Login from './screens/login'
import Register from './screens/register'
import Chat from './screens/chat'


export default class app extends Component {
  render() {
    return (
    <Router>
      <Scene key="root">
        <Scene key="login" component={Login} title="Login" />
        <Scene key="register" component={Register} title="Register" />
        <Scene key="chat" component={Chat} type={ActionConst.REPLACE} />
      </Scene>
    </Router>
    )
  }
}

AppRegistry.registerComponent('devchat', () => app)