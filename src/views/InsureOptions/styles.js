import styled from 'styled-components/native'
import { Animated, Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window')

export const Container = styled(Animated.View)`
  position: absolute;
  background: red;
  height: ${height}px;
  width: 100%;
  z-index: 5;
`
export const TextView = styled.Text`
  font-family: avenir;
  font-size: 18px;
  color: #fff;
  font-weight: bold;
`
