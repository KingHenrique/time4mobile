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
  Content,
  Logout,
  LogoutText,
  Withdraw,
  WithdrawText
} from './styles'
import PropTypes from 'prop-types'
import { Indications } from '../../components'

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
            <Withdraw>
              <WithdrawText>Sacar</WithdrawText>
            </Withdraw>
          </Finance>
          <Content>
            <SeparatorTitle>Últimas indicações</SeparatorTitle>
            {indicators.map((indicator, index) => (
              <Indications key={index} indicator={indicator} />
            ))}
          </Content>
          <Logout>
            <LogoutText>Sair</LogoutText>
          </Logout>
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

const indicators = [
  {
    date: 'JUNE 27, 2019',
    days_indicators: [
      {
        title: 'Vida - Mongeral',
        value: '17.71'
      },
      {
        title: 'Viagem - Travel Ace',
        value: '30.00'
      }
    ]
  },
  {
    date: 'JUNE 26, 2019',
    days_indicators: [
      {
        title: 'Viagem - Travel Ace',
        value: '28.90'
      }
    ]
  }
]
