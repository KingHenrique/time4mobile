import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Container,
  ContentAnimation,
  Title,
  TitleContent,
  Content
} from './styles'
import { InsurePlans } from '../../components'
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
    return (
      <Container>
        <ContentAnimation>
          <TitleContent>
            <Title>Seguros Atualizados</Title>
          </TitleContent>
          <Content>
            {insures.map(insure => (
              <InsurePlans insure={insure} />
            ))}
          </Content>
        </ContentAnimation>
      </Container>
    )
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
