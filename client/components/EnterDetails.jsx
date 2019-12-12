import React, { Component } from 'react'
import { isAuthenticated, register } from 'authenticare/client'

import { Button, Form, Input, Dropdown, Header, Container, Image, Grid } from 'semantic-ui-react'

import { geocodeAddress, addUserDetails } from '../api/users'
const suburbs = [
  { id: 1, suburb: 'Albany' },
  { id: 2, suburb: 'Auckland CBD' },
  { id: 3, suburb: 'Avondale' },
  { id: 5, suburb: 'Blockhouse Bay' },
  { id: 6, suburb: 'Eden Terrace' },
  { id: 7, suburb: 'Ellerslie' },
  { id: 8, suburb: 'Epsom' },
  { id: 9, suburb: 'Freemans Bay' },
  { id: 10, suburb: 'Glendowie' },
  { id: 11, suburb: 'Glen Innes' },
  { id: 12, suburb: 'Grafton' },
  { id: 13, suburb: 'Greenlane' },
  { id: 14, suburb: 'Grey Lynn' },
  { id: 15, suburb: 'Herne Bay' },
  { id: 16, suburb: 'Hillsborough' },
  { id: 17, suburb: 'Kingsland' },
  { id: 18, suburb: 'Kohimarama' },
  { id: 19, suburb: 'Lynfield' },
  { id: 20, suburb: 'Meadowbank' },
  { id: 21, suburb: 'Mission Bay' },
  { id: 22, suburb: 'Mount Albert' },
  { id: 23, suburb: 'Mount Eden' },
  { id: 24, suburb: 'Mount Roskill' },
  { id: 25, suburb: 'Mount Wellington' },
  { id: 26, suburb: 'Newmarket' },
  { id: 27, suburb: 'Newton' },
  { id: 28, suburb: 'Onehunga' },
  { id: 29, suburb: 'One Tree Hill' },
  { id: 30, suburb: 'Orakei' },
  { id: 31, suburb: 'Panmure' },
  { id: 32, suburb: 'Parnell' },
  { id: 33, suburb: 'Ponsonby' },
  { id: 34, suburb: 'Remuera' },
  { id: 35, suburb: 'Saint Heliers' },
  { id: 36, suburb: 'Sandringham' },
  { id: 39, suburb: 'Stonefields' },
  { id: 38, suburb: 'Three Kings' },
  { id: 40, suburb: 'Waterview' },
  { id: 41, suburb: 'Western Springs' }
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
    const { email, mobile, street, suburb, city } = this.state
    geocodeAddress({
      street: street,
      suburb: suburb,
      city: city
    })
      .then(addressDetails =>
        addUserDetails(
          addressDetails,
          mobile,
          email
        )
      )
      .then(() =>
        this.props.history.push('/dashboard'))
  }

  handleSelect = (e, data) => {
    const selected = data.value
    const address = suburbs.find(option =>
      option.suburb === selected
    )
    this.setState({
      suburb: address.suburb
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
          <Container style={{ marginTop: 75, border: '1px', borderStyle: 'solid', padding: '25px' }}>
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
