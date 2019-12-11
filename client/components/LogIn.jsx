import React, { Component } from 'react'
import { isAuthenticated, signIn } from 'authenticare/client'

import { Button, Form, Input, Header, Container, Image, Grid } from 'semantic-ui-react'

export class LogIn extends Component {
  state ={
    username: '',
    password: ''

  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = () => {
    const { username, password } = this.state
    signIn({
      username: username,
      password: password
    })
      .then((token) => {
        if (isAuthenticated()) {
          this.props.history.push('/dashboard')
        }
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
              <Header.Content>Log into your account</Header.Content>
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
            Sign In
              </Form.Field>
            </Form>
          </Container>
        </Grid.Column>
      </Grid>

    )
  }
}

export default LogIn
