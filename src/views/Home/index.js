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
import { Animated, Dimensions, Easing, View } from 'react-native'
import PropTypes from 'prop-types'
import { NavigationEvents } from 'react-navigation'
const { width, height } = Dimensions.get('window')

class Home extends Component {
  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props)
    this.state = {
      username: '',
      display: false,
      opacity: new Animated.Value(1),
      scale: new Animated.Value(1)
    }
  }

  selectInsure = async index => {
    let resp = await this.props.getInformations(index % 2 == 0 ? 1 : 2)
    console.log({ resp })

    resp.status == 200 ? this.props.toggleModalAction() : null
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
        toValue: 0.8,
        duration: 400,
        easing: Easing.in()
      }).start()
      Animated.spring(this.state.opacity, {
        toValue: 0.5
      }).start()
    }
    if (this.props.showModal == false) {
      Animated.timing(this.state.scale, {
        toValue: 1,
        duration: 400,
        easing: Easing.in()
      }).start()
      Animated.spring(this.state.opacity, {
        toValue: 1
      }).start()
    }
  }

  animated = () => {
    this.setState({ display: true })
    this.props.getInsures()
  }

  remove = () => {
    this.setState({ display: false })
  }

  renderView = () => (
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
            <Title>Serviços de parceiras</Title>
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

  render() {
    return (
      <>
        {console.log('this.', this.props)}
        <NavigationEvents onDidFocus={() => this.animated()} />
        <NavigationEvents onDidBlur={() => this.remove()} />
        {this.state.display ? this.renderView() : <View></View>}
      </>
    )
  }
}

Home.defaultProps = {}

Home.propTypes = {}

const mapStateToProps = state => {
  return {
    showModal: state.Animation.showModal,
    insures: state.Insure.insures
  }
}

export default connect(
  mapStateToProps,
  { ...actions.Animation, ...actions.Insure }
)(Home)

const insures = [
  {
    title: 'Mongeral',
    type: 'Seguro de vida'
  },
  {
    title: 'Travel Ace',
    type: 'Seguro para viagens'
  },
  {
    title: 'Mongeral',
    type: 'Seguro de vida'
  },
  {
    title: 'Travel Ace',
    type: 'Seguro para viagens'
  },
  {
    title: 'Mongeral',
    type: 'Seguro de vida'
  },
  {
    title: 'Travel Ace',
    type: 'Seguro para viagens'
  }
]
