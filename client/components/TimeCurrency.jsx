import React, { Component } from 'react'
import { Card, Header } from 'semantic-ui-react'

export class TimeCurrency extends Component {
  state = { }

  render () {
    const balance = this.props.props.balance
    const centerStyle = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap' }

    return (
      <>
      <Card style={{ borderRadius: '25px', height: '150px' }}>
        <Card.Content style={centerStyle}>
          <Header as='h1' textAlign='center' style={{ fontWeight: 'bold' }}>{balance} hours
            <Header as='h3' textAlign='center' >Total currency: </Header>
          </Header>
        </Card.Content>
      </Card>
    </>
    )
  }
}

export default TimeCurrency
