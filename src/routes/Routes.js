import React from 'react'
import * as views from '../views'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import { colors } from '../styles'

const AppNavigator = createBottomTabNavigator(
  {
    Profile: { screen: views.Profile },
    Home: { screen: views.Home }
    // Insert views here
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        tabBarIcon: ({ tintColor }) => {
          const { routeName } = navigation.state
          let IconComponent = Icon
          let iconName
          if (routeName === 'Home') {
            iconName = 'ios-albums'
          } else {
            iconName = 'ios-person'
          }
          // You can return any component that you like here!
          return <IconComponent name={iconName} size={30} color={tintColor} />
        }
        // tabBarOnPress: tabBarOnPress(navigation)
      }
    },
    resetOnBlur: true,
    tabBarOptions: {
      pressOpacity: 0.6,
      activeTintColor: colors.blue,
      inactiveTintColor: colors.dark,
      style: {
        paddingTop: 8,
        height: 60
      },
      labelStyle: {
        fontFamily: 'avenir',
        fontWeight: '600',
        fontSize: 11
      }
    }
  }
)

export default createAppContainer(AppNavigator)
