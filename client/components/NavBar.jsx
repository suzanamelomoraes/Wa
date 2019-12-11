import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Header, Menu, Image } from 'semantic-ui-react'
import { logOff } from 'authenticare/client'
import { connect } from 'react-redux'
import { getUser } from '../actions/user'

import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

export class NavBar extends Component {
  componentDidMount () {
    if (this.props.user.length !== 0) {
      return this.props.getUser()
    }
  }

  logOff = () => {
    this.props.history.push('/list')
    logOff()
  }

  render () {
    const { user } = this.props
    return (
      <>

      <Menu borderless fixed='top' inverted style = {{ backgroundColor: '#123b26', height: '80px' }} >

        <Menu.Item as={Link} to='/' header >
          <Header data-test="header" as='h1' inverted style={{ fontSize: '2.5rem' }}>Wā</Header>
        </Menu.Item>
        <Menu.Item as={Link} to='/'>Home</Menu.Item>
        <Menu.Item as={Link} to='/list'>Mahi</Menu.Item>
        <IfAuthenticated>
          <Menu.Item as={Link} to='/dashboard'>Dashboard</Menu.Item>
        </IfAuthenticated>

        <Menu.Menu position='right' >
          <IfNotAuthenticated>
            <Menu.Item as={Link} to='./register'>Register</Menu.Item>
            <Menu.Item as={Link} to='/signin'>Sign In</Menu.Item>
          </IfNotAuthenticated>

          <IfAuthenticated>
            <Menu.Item> Balance <br/>{user.balance} Hours</Menu.Item>
            <Image style = {{ height: '65px' }} src={user.image}/>
            <Menu.Item as={Link} onClick={this.logOff} to='#'>Sign Out</Menu.Item>
          </IfAuthenticated>
        </Menu.Menu>
      </Menu>
      </>
    )
  }
}

const mapDispatchToProps = {
  getUser
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
