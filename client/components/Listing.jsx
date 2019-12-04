import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'
import MahiSummary from './MahiSummary'

class Listing extends Component {
  state = {

  }

  render () {
    return (
      <Card.Group>
        <MahiSummary />
      </Card.Group>
    )
  }
}

export default Listing
