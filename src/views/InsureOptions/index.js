import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { actions } from '../../redux/actions'
import { connect } from 'react-redux'
import { Container, TextView} from './styles'
import PropTypes from 'prop-types'

class InsureOptions extends Component {

  constructor(props){
    super(props)
    this.state = {

    }
  }

  render(){
    return(
      <Container>
        <TextView>InsureOptions</TextView>
      </Container>
    )
  }
}

InsureOptions.defaultProps = {

}

InsureOptions.propTypes = {

}

const mapStateToProps = state => {
  return {
    initial:[]
  }
}

export default connect(mapStateToProps)(InsureOptions)