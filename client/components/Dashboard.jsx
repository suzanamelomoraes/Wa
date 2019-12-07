import React, { Component } from 'react'
import Registration from './Registration'

export class Dashboard extends Component {
  state = { }
  render () {
    return (
      <div>
        <h1>Dashboard</h1>
        <Registration />
      </div>
    )
  }
}

export default Dashboard
