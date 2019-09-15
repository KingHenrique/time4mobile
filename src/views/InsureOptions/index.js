import React, { Component } from 'react'
import { Animated, Dimensions, Text } from 'react-native'
import { actions } from '../../redux/actions'
import { connect } from 'react-redux'
import {
  Container,
  BlueLine,
  IconContainer,
  Icon,
  IconShare,
  Content,
  Square,
  ContentOne,
  TextInfo,
  ButtonContainer,
  ButtonText,
  Button,
  Company,
  Logo,
  CompanyInformation,
  Title,
  Subtitle
} from './styles'
import PropTypes from 'prop-types'
import Share from 'react-native-share'
const { width, height } = Dimensions.get('window')

class InsureOptions extends Component {
  constructor(props) {
    super(props)
    this.state = {
      top: new Animated.Value(height)
    }
  }

  share = () => {
    let shareOptions = {
      title: 'From Indicator',
      url: `https://www.facebook.com/renan.henrique.771`,
      subject: 'Share Link for indicator'
    }
    Share.open(shareOptions)
      .then(r => console.log('share is ok'))
      .catch(err => console.log(err))
  }

  componentDidMount = () => {
    this.toggleMenu()
  }

  componentDidUpdate = () => {
    this.toggleMenu()
  }

  closeModal = () => {
    this.props.toggleModalAction()
  }

  toggleMenu = () => {
    if (this.props.showModal) {
      Animated.spring(this.state.top, {
        toValue: 100
      }).start()
    }
    if (this.props.showModal == false) {
      Animated.spring(this.state.top, {
        toValue: height
      }).start()
    }
  }

  render() {
    return (
      <Container style={{ top: this.state.top }}>
        <IconContainer onPress={this.closeModal}>
          <Icon name={'ios-close'} size={44} />
        </IconContainer>
        <Content>
          <Company>
            <Logo source={require('../../assets/mongeral.jpeg')} />
            <CompanyInformation>
              <Title>Mongeral Aegon</Title>
              <Subtitle>Seguros e previência</Subtitle>
            </CompanyInformation>
          </Company>
          <TextInfo>
            {
              'A Mongeral Aegon é a primeira iniciativa de previdência do país e acredita que todos devem ter a oportunidade de planejar um futuro cada vez mais longo com tranquilidade e segurança.\n\nNossos quase 200 anos de atuação ininterrupta no Brasil acumularam conhecimento para acompanhar as mudanças dos anseios de consumo e planejamento financeiro das pessoas.\n\nCom soluções completas e flexíveis de seguros de vida e previdência, buscamos atender às necessidades de segurança financeira de nossos clientes e estar ao seu lado durante toda a vida como uma referência de confiança e solidez.\n'
            }
          </TextInfo>
        </Content>
        <Button>
          <ButtonContainer>
            <IconShare name={'ios-share-alt'} />
            <ButtonText>indicar</ButtonText>
          </ButtonContainer>
        </Button>
      </Container>
    )
  }
}

InsureOptions.defaultProps = {}

InsureOptions.propTypes = {}

const mapStateToProps = state => {
  return {
    showModal: state.Animation.showModal
  }
}

export default connect(
  mapStateToProps,
  { ...actions.Animation }
)(InsureOptions)
