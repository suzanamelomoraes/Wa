import React, { Component } from 'react'
import { isAuthenticated, register } from 'authenticare/client'

import { Button, Form, Input, Grid, Header, Container, Image } from 'semantic-ui-react'

const suburbs = [
  { id: 1, postcode: 632, suburb: 'Albany' },
  { id: 2, postcode: 632, suburb: 'Albany Heights' },
  { id: 3, postcode: 2105, suburb: 'Alfriston' },
  { id: 4, postcode: 2022, suburb: 'Auckland Airport' },
  { id: 5, postcode: 1010, suburb: 'Auckland Central' },
  { id: 6, postcode: 1011, suburb: 'Auckland Central Fringe' },
  { id: 7, postcode: 1023, suburb: 'Newmarket' }
]

export class Registration extends Component {
  state ={
    username: '',
    password: ''
  }

handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {
    const { username, password } = this.state
    register({
      username: username,
      password: password
    })
      .then((token) => {
        if (isAuthenticated()) {
          this.props.history.push('/details')
        }
      })
  }

  handleSelect = (e, data) => {
    const selected = data.value
    const address = suburbs.find(option =>
      option.suburb === selected
    )
    this.setState({
      suburb: address.suburb,
      postcode: address.postcode
    })
  }

  render () {
    return (
      <Grid centered={true}>
        <Grid.Column width={6}>
          <Container style={{ marginTop: 75, border: '1px', borderStyle: 'solid', padding: '25px' }}>
            <Header as='h2' color='brown' textAlign='center'>
              <Image
                verticalAlign='middle'
                floated='right'
                size='small'
                circular
                src='/images/avatar01.png'
              />
              <Header.Content>Create a new account</Header.Content>
            </Header>
            <Form onSubmit={this.handleSubmit}>
              <Form.Field label='Username'
                control={Input}
                name='username'
                id='username'
                onChange={this.handleChange}
                required
                type='text'
                placeholder='Username' />
              <Form.Field label='Password'
                control={Input}
                name='password'
                id='password'
                onChange={this.handleChange}
                required
                type='password'
                placeholder='Password' />
              <Form.Field
                control={Button}
                onSubmit= {this.handleSubmit}>
           Register
              </Form.Field>
            </Form>
          </Container>
        </Grid.Column>
      </Grid>
    )
  }
}

export default Registration
