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
      top: new Animated.Value(height),
      opacity: new Animated.Value(0)
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
      Animated.spring(this.state.opacity, {
        toValue: 1
      }).start()
      Animated.spring(this.state.top, {
        toValue: 100
      }).start()
    }
    if (this.props.showModal == false) {
      Animated.spring(this.state.opacity, {
        toValue: 0
      }).start()
      Animated.spring(this.state.top, {
        toValue: height
      }).start()
    }
  }

  render() {
    const { currentInsure } = this.props
    let description =
      currentInsure?.description.length > 200
        ? currentInsure?.description.substring(0, 400 - 3) + '...'
        : currentInsure?.description
    return (
      <Container style={{ top: this.state.top, opacity: this.state.opacity }}>
        <IconContainer onPress={this.closeModal}>
          <Icon name={'ios-close'} size={44} />
        </IconContainer>
        <Content>
          <Company>
            {currentInsure.id == 1 ? (
              <>
                <Logo source={require('../../assets/mongeral.jpeg')} />
                <CompanyInformation>
                  <Title>Mongeral Aegon</Title>
                  <Subtitle>Cotação seguro viagem</Subtitle>
                </CompanyInformation>
              </>
            ) : (
              <>
                <Logo source={require('../../assets/travelace.jpeg')} />
                <CompanyInformation>
                  <Title>Travel Ace</Title>
                  <Subtitle>Cotação Seguro viagem</Subtitle>
                </CompanyInformation>
              </>
            )}
          </Company>
          <TextInfo>{description}</TextInfo>
        </Content>
        <Button onPress={this.share}>
          <ButtonContainer>
            <IconShare name={'ios-share-alt'} style={{ marginRight: 8 }} />
            <ButtonText>indicar</ButtonText>
          </ButtonContainer>
        </Button>
      </Container>
    )
  }
}

InsureOptions.defaultProps = {
  currentInsure: {
    description: ''
  }
}

InsureOptions.propTypes = {}

const mapStateToProps = state => {
  return {
    showModal: state.Animation.showModal,
    currentInsure: state.Insure.currentInsure
  }
}

export default connect(
  mapStateToProps,
  { ...actions.Animation }
)(InsureOptions)
