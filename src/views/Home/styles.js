import styled from 'styled-components/native'
import { colors } from '../../styles'
import { Animated } from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { View } from 'react-native-animatable'

export const Container = styled.ScrollView`
  flex: 1;
`
export const ContainerAnimation = styled(Animated.View)`
  flex: 1;
`
export const ContentAnimation = styled(View).attrs({
  animation: 'fadeInUp'
})``
export const TitleContent = styled.View`
  margin-top: ${getStatusBarHeight() + 30}px;
  padding: 0 20px;
  width: 200px;
`
export const Title = styled.Text`
  font-family: avenir;
  font-weight: bold;
  font-size: 28px;
  color: ${colors.dark};
`
export const Content = styled.View`
  padding: 20px 20px;
`
