import React from 'react'
import * as views from '../views'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation'

const AppNavigator = createBottomTabNavigator({
  Home: { screen: views.Home },
  Profile: { screen: views.Profile }
  // Insert views here
})

export default createAppContainer(AppNavigator)
