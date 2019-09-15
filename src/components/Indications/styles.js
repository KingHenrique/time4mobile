import styled from 'styled-components/native'
import { colors } from '../../styles'
import { StyleSheet } from 'react-native'

export const Container = styled.View`
  flex: 1;
  margin-top: 20px;
  margin-bottom: 30px;
`
export const Date = styled.Text`
  font-family: avenir;
  font-size: 14px;
  color: ${colors.dark};
  margin-bottom: 10px;
`
export const Indication = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  height: 60px;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-color: ${colors.ice};
`
export const Title = styled.Text`
  font-family: avenir;
  font-weight: bold;
  font-size: 18px;
  color: ${colors.dark};
`
export const Value = styled.Text`
  font-family: avenir;
  font-weight: bold;
  font-size: 18px;
  color: ${colors.dark};
`
