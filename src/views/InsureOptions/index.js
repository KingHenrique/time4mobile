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
  Button
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
          <Text
            style={{
              fontFamily: 'avenir',
              fontWeight: 'bold',
              fontSize: 26,
              marginLeft: 20
            }}>
            Informações
          </Text>
          <TextInfo>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </TextInfo>
        </Content>
        <Button>
          <ButtonContainer onPress={this.share}>
            <IconShare
              color={'#454851'}
              name={'ios-share-alt'}
              style={{ marginright: 8 }}
            />
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
