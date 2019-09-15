import React from 'react'
import * as views from '../views'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'

const AppNavigator = createStackNavigator({
  Home: { screen: views.Home }
  Profile: { screen: views.Profile },
  InsureOptions: { screen: views.InsureOptions },
  // Insert views here
})

export default createAppContainer(AppNavigator)
