import React from 'react'
import { Container, Date, Indication, Title, Value } from './styles'
import PropTypes from 'prop-types'

const Indications = ({ indicator }) => {
  return (
    <Container>
      <Date>{indicator.date}</Date>
      {indicator.days_indicators.map(indication => {
        return (
          <Indication>
            <Title>{indication.title}</Title>
            <Value>R$ {indication.value}</Value>
          </Indication>
        )
      })}
    </Container>
  )
}

Indications.defaultProps = {}

Indications.propTypes = {}

export default Indications
