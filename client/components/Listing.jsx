import React, { Component } from 'react'

import { Card } from 'semantic-ui-react'
import MahiSummary from './MahiSummary'

import { getTasks } from '../api/tasks'

class Listing extends Component {
  state = {
    mahiDetails: []
  }

  componentDidMount() {
    getTasks()
      .then(mahiDetails => {
        this.setState({mahiDetails})
      })
  }

  render () {
    const { mahiDetails } = this.state

    return (
      <Card.Group centered style={{ marginTop: 75 }}>
        {mahiDetails.map(mahi =>
          <MahiSummary key={mahi.id} {...mahi} />)}
      </Card.Group>
    )
  }
}

export default Listing
