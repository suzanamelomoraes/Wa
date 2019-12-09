import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Header, Menu } from 'semantic-ui-react'

const NavBar = () => {
  return (
    <>
      <Menu borderless fixed='top' inverted style = {{ backgroundColor: '#123b26' }}>
        <Container>
          <Menu.Item as={Link} to='/' header >
            <Header data-test="header" as='h1' inverted style={{ fontSize: '2.5rem' }}>Wā</Header>
          </Menu.Item>
          <Menu.Item style={{ fontSize: '1.5rem' }} as={Link} to='/'>Home</Menu.Item>
          <Menu.Item style={{ fontSize: '1.5rem' }} as={Link} to='/list'>Mahi</Menu.Item>
          <Menu.Item style={{ fontSize: '1.5rem' }} as={Link} to='/dashboard'>Dashboard</Menu.Item>
          <Menu.Item position='right'>
            <Menu.Item style={{ fontSize: '1.5rem' }} as={Link} to='./register'>Register</Menu.Item>
            <Menu.Item style={{ fontSize: '1.5rem' }} as={Link} to='/signin'>Sign In</Menu.Item>
          </Menu.Item>
        </Container>
      </Menu>
    </>
  )
}

export default NavBar