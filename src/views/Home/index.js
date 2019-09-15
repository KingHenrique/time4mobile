import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Container,
  ContentAnimation,
  Title,
  TitleContent,
  Content,
  ContainerAnimation
} from './styles'
import { InsurePlans } from '../../components'
import { InsureOptions } from '../../views'
import { actions } from '../../redux/actions'
import { Animated, Dimensions, Easing } from 'react-native'
import PropTypes from 'prop-types'
const { width, height } = Dimensions.get('window')

class Home extends Component {
  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props)
    this.state = {
      username: '',
      opacity: new Animated.Value(1),
      scale: new Animated.Value(1)
    }
  }

  selectInsure = index => {
    this.props.toggleModalAction()
  }

  componentDidMount = () => {
    this.toggleMenu()
  }

  componentDidUpdate = () => {
    this.toggleMenu()
  }

  toggleMenu = () => {
    if (this.props.showModal) {
      Animated.timing(this.state.scale, {
        toValue: 0.5,
        duration: 300,
        easing: Easing.in()
      }).start()
      Animated.spring(this.state.opacity, {
        toValue: 0.5
      }).start()
    }
    if (this.props.showModal == false) {
      Animated.timing(this.state.scale, {
        toValue: 1,
        duration: 300,
        easing: Easing.in()
      }).start()
      Animated.spring(this.state.opacity, {
        toValue: 1
      }).start()
    }
    // if (this.props.showModal == false) {
    //   Animated.spring(this.state.top, {
    //     toValue: height
    //   }).start()
    // }
  }

  render() {
    return (
      <Container>
        <ContainerAnimation
          style={{
            transform: [
              {
                scale: this.state.scale
              }
            ],
            opacity: this.state.opacity
          }}>
          <ContentAnimation>
            <TitleContent>
              <Title>Seguros Atualizados</Title>
            </TitleContent>
            <Content>
              {insures.map((insure, index) => (
                <InsurePlans
                  press={this.selectInsure}
                  key={index}
                  index={index}
                  insure={insure}
                />
              ))}
            </Content>
          </ContentAnimation>
        </ContainerAnimation>
        <InsureOptions />
      </Container>
    )
  }
}

Home.defaultProps = {}

Home.propTypes = {}

const mapStateToProps = state => {
  return {
    showModal: state.Animation.showModal
  }
}

export default connect(
  mapStateToProps,
  { ...actions.Animation }
)(Home)

const insures = [
  {
    title: 'Mongeral',
    type: 'Seguro de vida'
  },
  {
    title: 'Travel Ace',
    type: 'Seguro para viagens'
  }
]
