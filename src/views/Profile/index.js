import React, { Component } from 'react'
import { actions } from '../../redux/actions'
import { connect } from 'react-redux'
import {
  Container,
  Personal,
  Avatar,
  PersonalInfo,
  Message,
  Name
} from './styles'
import PropTypes from 'prop-types'

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Container>
        <Personal>
          <Avatar source={require('../../assets/avatar.jpg')} />
          <PersonalInfo>
            <Message>Bem vindo</Message>
            <Name>Vanesso Pudinic</Name>
          </PersonalInfo>
        </Personal>
      </Container>
    )
  }
}

Profile.defaultProps = {}

Profile.propTypes = {}

const mapStateToProps = state => {
  return {
    initial: []
  }
}

export default connect(mapStateToProps)(Profile)
