import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container, Header, Menu } from 'semantic-ui-react'
import { logOff } from 'authenticare/client'

import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

export class NavBar extends Component {
  logOff = () => {
    this.props.history.push('/list')
    logOff()
  }

  render () {
    return (
      <Menu borderless fixed='top' inverted style = {{ backgroundColor: '#123b26' }}>
        <Container>
          <Menu.Item as={Link} to='/' header>
            <Header data-test="header" as='h1' inverted style={{ fontSize: '2.5rem' }}>Wā</Header>
          </Menu.Item>

          <Menu.Item as={Link} to='/'>Home</Menu.Item>

          <Menu.Item as={Link} to='/list'>Mahi</Menu.Item>

          <IfAuthenticated>
            <Menu.Item as={Link} to='/dashboard'>Dashboard</Menu.Item>
          </IfAuthenticated>

          <Menu.Item position='right'>
            <IfNotAuthenticated>
              <Menu.Item as={Link} to='./register'>Register</Menu.Item>
              <Menu.Item as={Link} to='/signin'>Sign In</Menu.Item>
            </IfNotAuthenticated>
            
            <IfAuthenticated>
              <Menu.Item as={Link} onClick={this.logOff} to='#'>Sign Out</Menu.Item>
            </IfAuthenticated>
          </Menu.Item>
        </Container>
      </Menu>
    )
  }
}

export default NavBar
