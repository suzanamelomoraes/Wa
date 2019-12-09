import React, { Component } from 'react'
import { Message } from 'semantic-ui-react'

export class TimeCurrency extends Component {
  state = { }

  render () {
    const balance = this.props.balance
    const centerStyle = {
      justifyContent: 'center',
      alignItems: 'center' }

    return (
      <>
      <Message style={centerStyle}>
        <Message.Header>{balance} hours</Message.Header>
        <Message.Content>
           Total currency
        </Message.Content>
      </Message>
    </>
    )
  }
}

export default TimeCurrency
