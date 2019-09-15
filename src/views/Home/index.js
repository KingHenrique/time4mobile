import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, ContentAnimation, Title, TitleContent } from './styles'
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
