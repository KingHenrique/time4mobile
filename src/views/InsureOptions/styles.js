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
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  z-index: 1000;
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
  right: 10px;
  height: 44px;
  width: 44px;
  justify-content: center;
  align-items: center;
  background: #fff;
`
export const Icon = styled(ICON).attrs({
  size: 44,
  color: colors.blue
})``
export const IconShare = styled(ICON).attrs({
  size: 28,
  color: colors.ice
})``
export const Company = styled.View`
  height: 80px;
  flex-direction: row;
  padding: 0 20px;
  border-bottom-width: 1px;
  border-color: ${colors.ice};
`
export const Logo = styled.Image`
  height: 60px;
  width: 60px;
  background: yellow;
`
export const CompanyInformation = styled.View``
export const Title = styled.Text`
  font-family: avenir;
  font-weight: bold;
  font-size: 24px;
  margin-left: 20px;
  color: ${colors.dark};
`
export const Subtitle = styled.Text`
  font-family: avenir;
  font-size: 14px;
  color: ${colors.blue}
  margin-left: 20px;
`
export const Content = styled.View`
  margin-top: 100px;
`
export const TextInfo = styled.Text`
  font-size: 14px;
  padding: 15px;
  color: ${colors.dark};
`
export const ButtonContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`
export const Button = styled.View`
  margin-top: 20px;
  height: 60px;
  background: ${colors.blue}
  justify-content: center;
  align-items: center;
  margin: 0 60px;
`
export const ButtonText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: white;
  color: ${colors.ice};
`
export const Square = styled.View`
  background: red;
  width: 100px;
  height: 44px;
`
