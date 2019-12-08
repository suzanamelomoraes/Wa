import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Header, Menu } from 'semantic-ui-react'

const NavBar = () => {
  return (
    <>
      <Menu borderless fixed='top' inverted style = {{ backgroundColor: '#3c1518' }}>
        <Container>
          <Menu.Item as={Link} to='/' header>
            <Header data-test="header" as='h1' inverted style={{ fontSize: '2.5rem' }}>Wā</Header>
          </Menu.Item>
          <Menu.Item as={Link} to='/'>Home</Menu.Item>
          <Menu.Item as={Link} to='/list'>Mahi</Menu.Item>
          <Menu.Item as={Link} to='/dashboard'>Dashboard</Menu.Item>
          <Menu.Item position='right'>
          </Menu.Item>
        </Container>
      </Menu>
    </>
  )
}

export default NavBar
