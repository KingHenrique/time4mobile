import styled from 'styled-components/native'
import { Animated, Dimensions } from 'react-native'
import { colors } from '../../styles'
import ICON from 'react-native-vector-icons/Ionicons'
const { width, height } = Dimensions.get('window')

export const Container = styled(Animated.View)`
  position: absolute;
  background: #fff;
  height: ${height}px;
  width: 100%;
  border-radius: 20px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.4);
  z-index: 5;
`
export const ContentOne = styled.View`
  flex: 1;
  background: red;
`
export const BlueLine = styled.View`
  background: ${colors.blue};
  height: 40px;
`
export const IconContainer = styled.TouchableOpacity`
  position: absolute;
  border-radius: 22;
  top: 10px;
  left: 50%;
  margin-left: -22px;
  height: 44px;
  width: 44px;
  justify-content: center;
  align-items: center;
  background: ${colors.blue};
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.4);
`
export const Icon = styled(ICON).attrs({
  size: 44,
  color: 'white'
})``
export const IconShare = styled(ICON).attrs({
  size: 36,
  color: 'white'
})``
export const Content = styled.View`
  margin-top: 100px;
  justify-content: space-around;
`
export const TextInfo = styled.Text`
  font-size: 16px;
  padding: 15px;
  color: ${colors.dark};
`
export const ButtonContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`
export const Button = styled.View`
  height: 180px;
  justify-content: center;
  align-items: center;
`
export const ButtonText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: white;
  color: ${colors.dark}
  margin-left: 8;
`
export const Square = styled.View`
  background: red;
  width: 100px;
  height: 44px;
`
