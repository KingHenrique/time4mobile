import styled from 'styled-components/native'
import { colors } from '../../styles'
import { StyleSheet } from 'react-native'

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6
})`
  flex: 1;
  height: 60px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-color: ${colors.ice};
`
export const Company = styled.Text`
  font-family: avenir;
  font-size: 18px;
  color: ${colors.dark};
  font-weight: bold;
`
export const Type = styled.Text`
  font-family: avenir;
  font-size: 18px;
  color: ${colors.dark};
`
