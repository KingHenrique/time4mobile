import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { Container } from './styles'
import PropTypes from 'prop-types'

class Home extends Component {
  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props)
    this.state = {
      username: ''
    }
  }

  render() {
    return <Container></Container>
  }
}

Home.defaultProps = {}

Home.propTypes = {}

const mapStateToProps = state => {
  return {
    initial: []
  }
}

export default connect(mapStateToProps)(Home)
