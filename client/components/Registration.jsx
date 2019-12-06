import React, { Component } from 'react'
import { isAuthenticated, register } from 'authenticare/client'

import { Button, Form, Dropdown } from 'semantic-ui-react'

const options = [
  { id: 1, postcode: 632, suburb: 'Albany' },
  { id: 2, postcode: 632, suburb: 'Albany Heights' },
  { id: 3, postcode: 2105, suburb: 'Alfriston' },
  { id: 4, postcode: 2022, suburb: 'Auckland Airport' },
  { id: 5, postcode: 1010, suburb: 'Auckland Central' },
  { id: 6, postcode: 1011, suburb: 'Auckland Central Fringe' }
]

export class Registration extends Component {
state ={
  name: '',
  email: '',
  password: '',
  mobile: null,
  street: '',
  suburb: '',
  postcode: null,
  city: 'Auckland'
}

handleChange = (e) => {
  this.setState({
    [e.target.name]: e.target.value
  })
}

handleSubmit = () => {
  const { name, email, password, mobile, street, suburb, postcode, city } = this.state
  register({
    name: name,
    email: email,
    password: password,
    mobile: mobile,
    street: street,
    suburb: suburb,
    postcode: postcode,
    city: city
  }, {
    baseUrl: process.env.BASE_API_URL
  })
    .then((token) => {
      if (isAuthenticated()) {
        this.props.history.push('/')
      }
    })
}

handleSelect = (e, data) => {
  const selected = data.value
  const address = options.find(option =>
    option.suburb === selected
  )
  this.setState({
    suburb: address.suburb,
    postcode: address.postcode
  })
}

render () {
  return (
    <Form>
      <Form.Field label='Name'
        name='name'
        id='name'
        onChange={this.handleChange}
        required
        type='text'
        placeholder='Name' />
      <Form.Field label='Email'
        name='email'
        id='email'
        onChange={this.handleChange}
        required
        type='text'
        placeholder='Email' />
      <Form.Field label='Password'
        name='password'
        id='password'
        onChange={this.handleChange}
        required
        type='password'
        placeholder='Password' />
      <Form.Field label='Mobile'
        name='mobile'
        id='mobile'
        onChange={this.handleChange}
        required
        type='number'
        placeholder='Mobile' />
      <Form.Field label='Street Address'
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
        name='city'
        id='city'
        value = 'Auckland'
        required
        type='text'
        placeholder='Name' />

      <Form.Checkbox label='I agree to the Terms and Conditions' />
      <Form.Feild label='Register'
        control={Button}
        onSubmit= {this.handleSubmit} />
    </Form>
  )
}
}

export default Registration
