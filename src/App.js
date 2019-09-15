import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import Routes from './routes/Routes'
import store from './redux/store'
import { Provider } from 'react-redux'
import { YellowBox } from 'react-native'

YellowBox.ignoreWarnings([
  'Warning: ReactNative.createElement',
  'Warning: Each',
  'Warning: Failed'
])

console.disableYellowBox = true

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    )
  }
}
