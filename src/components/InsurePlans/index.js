import React from 'react'
import { View, Text } from 'react-native'
import { Container, Company, Type } from './styles'
import PropTypes from 'prop-types'

const InsurePlans = ({ insure, index, press }) => {
  return (
    <Container onPress={() => press(index)}>
      <Company>{insure.title}</Company>
      <Type>{insure.type}</Type>
    </Container>
  )
}

InsurePlans.defaultProps = {}

InsurePlans.propTypes = {}

export default InsurePlans
