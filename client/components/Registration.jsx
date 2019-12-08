  
import React, { Component } from 'react'
import { isAuthenticated, register } from 'authenticare/client'

import { Button, Checkbox, Form } from 'semantic-ui-react'

export class Registration extends Component {
state ={
  name: '',
  email: '',
  mobile: null,
  streetAddress: '',
  suburb: '',
  postcode: '',
  city: 'Auckland'
}

handleChange = (e, {name,value})=> this.setState({[name]:value})


render() {
    return (
      <Form>
         <Form.Field label='Name'
            name='name'
            id='name'
            onChange={this.handleChange}
            required
            type='text'
            placeholder='Name' />
            <Form.Field label='Name'
            name='name'
            id='name'
            onChange={this.handleChange}
            required
            type='text'
            placeholder='Name' />
            <Form.Field label='Name'
            name='name'
            id='name'
            onChange={this.handleChange}
            required
            type='text'
            placeholder='Name' />
            <Form.Field label='Name'
            name='name'
            id='name'
            onChange={this.handleChange}
            required
            type='text'
            placeholder='Name' />
            <Form.Field label='Name'
            name='name'
            id='name'
            onChange={this.handleChange}
            required
            type='text'
            placeholder='Name' />
        <Form.Checkbox label='I agree to the Terms and Conditions' />
       <Form.Feild label='Register'
           control={Button} />
      </Form>
    )
  }
}
export default Registration

