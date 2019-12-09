import React, { Component } from 'react'
import { Card, Header } from 'semantic-ui-react'

export class TimeCurrency extends Component {
  state = { }

  render () {
    // const balance = this.props.props.balance
    const centerStyle = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap' }

    return (
      <>
      <Card style={{ borderRadius: '25px', backgroundColor: '#123b26', color: 'white', width: '150px' }}>
        <Card.Content style={centerStyle}>
          <div>
            <Header as='h1' textAlign='center' style={{ fontWeight: 'bold', color: 'white' }}>5 hours
            </Header>
            <h3>Total currency</h3>
          </div>
        </Card.Content>
      </Card>
    </>
    )
  }
}

export default TimeCurrency
