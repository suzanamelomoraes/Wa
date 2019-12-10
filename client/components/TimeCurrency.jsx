import React, { Component } from 'react'
import { Card, Header, Grid, Divider } from 'semantic-ui-react'

export class TimeCurrency extends Component {
  state = { }

  render () {
    const balance = this.props.balance
    const centerStyle = {
      justifyContent: 'center',
      alignItems: 'center' }
    const hold = this.props.hold

    return (
      <>
      <Card style={{
        backgroundColor: '#123b26',
        color: 'white',
        width: '150px',
        heigth: '150px',
        border: '2px solid',
        borderRadius: '25px' }}>
        <Card.Content style={centerStyle}>
          <Grid >
            <Grid.Row columns={1} style={{ padding: 0, paddingTop: '1em' }}>
              <Grid.Column >
                <Header
                  as='h2'
                  textAlign='center'
                  style={{
                    fontWeight: 'bold',
                    color: 'white',
                    margin: 0
                  }}>
                  {balance} hour(s)
                </Header>
                <h3 style={{ textAlign: 'center', margin: 0 }}>Total Wā</h3>
              </Grid.Column>
            </Grid.Row>
            <Divider inverted />
            <Grid.Row columns={1} style={{ padding: 0, paddingBottom: '1em' }}>
              <Grid.Column>
                <Header
                  as='h2'
                  textAlign='center'
                  style={{
                    fontWeight: 'bold',
                    color: '#CACACA ',
                    margin: 0
                  }}>
                  {hold} hour(s)
                </Header>
                <h3 style={{ textAlign: 'center', margin: 0, color: '#CACACA ' }}>Wā on hold</h3>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Card.Content>
      </Card>
    </>
    )
  }
}

export default TimeCurrency
