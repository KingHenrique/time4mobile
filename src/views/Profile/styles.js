import styled from 'styled-components/native'
import { colors } from '../../styles'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { View } from 'react-native-animatable'

export const Container = styled.ScrollView`
  flex: 1;
`
export const ContentAnimation = styled(View).attrs({
  animation: 'fadeInUp'
})``
export const Personal = styled.View`
  margin-top: ${getStatusBarHeight() + 30}px;
  padding: 0 20px;
  flex-direction: row;
`
export const Avatar = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 30px;
`
export const PersonalInfo = styled.View`
  padding: 0 16px;
  justify-content: center;
`
export const Message = styled.Text`
  font-family: avenir;
  font-size: 18px;
  color: ${colors.gray};
`
export const Name = styled.Text`
  font-family: avenir;
  font-weight: bold,
  font-size: 22px;
  color: ${colors.dark};
`
export const Finance = styled.View`
  height: 160px;
  margin-top: 40px;
  align-items: center;
`
export const FinanceDescription = styled.Text`
  font-family: avenir;
  font-weight: bold,
  font-size: 16px;
  text-align: left;
  color: ${colors.dark};
`
export const FinanceValue = styled.Text`
  font-family: avenir;
  font-weight: bold;
  font-size: 26px;
  color: ${colors.dark};
`
export const FinanceValueRight = styled.Text`
  font-family: avenir;
  font-weight: bold;
  font-size: 26px;
  color: ${colors.gray};
`
export const Content = styled.View`
  margin: 0 20px;
`
export const SeparatorTitle = styled.Text`
  font-family: avenir;
  font-weight: bold;
  font-size: 28px;
  color: ${colors.dark};
`
