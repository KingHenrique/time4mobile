import React, { Component } from 'react'
import { actions } from '../../redux/actions'
import { connect } from 'react-redux'
import {
  Container,
  ContentAnimation,
  Personal,
  Avatar,
  PersonalInfo,
  Message,
  Name,
  Finance,
  FinanceDescription,
  FinanceValue,
  FinanceValueRight,
  SeparatorTitle,
  Content
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
        <ContentAnimation>
          <Personal>
            <Avatar source={require('../../assets/avatar.jpg')} />
            <PersonalInfo>
              <Message>Bem vindo</Message>
              <Name>Vanesso Pudinic</Name>
            </PersonalInfo>
          </Personal>
          <Finance>
            <FinanceDescription>Agora você tem</FinanceDescription>
            <FinanceValue>
              R$ 12300<FinanceValueRight>,00</FinanceValueRight>
            </FinanceValue>
          </Finance>
          <Content>
            <SeparatorTitle>Indicações</SeparatorTitle>
          </Content>
        </ContentAnimation>
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
