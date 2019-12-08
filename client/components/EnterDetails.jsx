import React, { Component } from 'react'
import { isAuthenticated, register } from 'authenticare/client'

import { Button, Form, Input, Dropdown, Header, Container, Image, Grid } from 'semantic-ui-react'

const suburbs = [
  { id: 1, postcode: 632, suburb: 'Albany' },
  { id: 2, postcode: 632, suburb: 'Albany Heights' },
  { id: 3, postcode: 2105, suburb: 'Alfriston' },
  { id: 4, postcode: 2022, suburb: 'Auckland Airport' },
  { id: 5, postcode: 1010, suburb: 'Auckland Central' },
  { id: 6, postcode: 1011, suburb: 'Auckland Central Fringe' }
]

export class Registration extends Component {
  state ={
    email: '',
    mobile: null,
    street: '',
    suburb: '',
    postcode: null,
    city: 'Auckland'
  }

handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {
    const { email, mobile, street, suburb, postcode, city } = this.state
    register({
      email: email,
      mobile: mobile,
      street: street,
      suburb: suburb,
      postcode: postcode,
      city: city
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
    const options = suburbs.map(suburb => ({
      key: suburb.id,
      value: suburb.suburb,
      text: suburb.suburb
    }))

    return (
      <Grid centered={true}>
        <Grid.Column width={6}>
          <Container style={{ marginTop: 75, border: '1px', borderStyle: 'solid', padding: '25px' }}g>
            <Header as='h2' color='brown' textAlign='center'>
              <Image
                verticalAlign='middle'
                floated='right'
                size='small'
                circular
                src='/images/avatar01.png'
              />
              <Header.Content>Enter your details</Header.Content>
            </Header>
            <Form onSubmit={this.handleSubmit}>
              <Form.Field label='Email'
                control={Input}
                name='email'
                id='email'
                onChange={this.handleChange}
                required
                type='text'
                placeholder='Email' />
              <Form.Field label='Mobile'
                control={Input}
                name='mobile'
                id='mobile'
                onChange={this.handleChange}
                required
                type='number'
                placeholder='Mobile' />
              <Form.Field label='Street Address'
                control={Input}
                name='street'
                id='street'
                onChange={this.handleChange}
                required
                type='text'
                placeholder='Street Address' />

              <Form.Field control={Dropdown}
                placeholder='Suburb'
                name='suburb'
                fluid
                clearable
                label='Suburb'
                selection
                required
                onChange={this.handleSelect}
                options={options}
              />
              <Form.Field label='City'
                control={Input}
                name='city'
                id='city'
                value = 'Auckland'
                required
                type='text'
                placeholder='Name' />
              <Form.Field
                control={Button}
                onSubmit= {this.handleSubmit}>
            Save Details
              </Form.Field>
            </Form>
          </Container>
        </Grid.Column>
      </Grid>

    )
  }
}

export default Registration
