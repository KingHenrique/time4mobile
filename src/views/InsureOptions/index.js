import React, { Component } from 'react'
import { Animated, Dimensions } from 'react-native'
import { actions } from '../../redux/actions'
import { connect } from 'react-redux'
import { Container, TextView } from './styles'
import PropTypes from 'prop-types'
const { width, height } = Dimensions.get('window')

class InsureOptions extends Component {
  constructor(props) {
    super(props)
    this.state = {
      top: new Animated.Value(height)
    }
  }

  componentDidMount = () => {
    this.toggleMenu()
  }

  componentDidUpdate = () => {
    this.toggleMenu()
  }

  toggleMenu = () => {
    if (this.props.showModal) {
      Animated.spring(this.state.top, {
        toValue: 54
      }).start()
    }
    if (this.props.showModal == false) {
      Animated.spring(this.state.top, {
        toValue: height
      }).start()
    }
  }

  render() {
    return <Container style={{ top: this.state.top }}></Container>
  }
}

InsureOptions.defaultProps = {}

InsureOptions.propTypes = {}

const mapStateToProps = state => {
  return {
    showModal: state.Animation.showModal
  }
}

export default connect(mapStateToProps)(InsureOptions)
