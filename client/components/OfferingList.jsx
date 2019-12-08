import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Segment } from 'semantic-ui-react'

export class OfferingList extends Component {
  state = { }
  render () {
    return (
      <Segment style={{ marginTop: 75 }}>
        <h1>Offering Component</h1>
      </Segment>
    )
  }
}

export default connect()(OfferingList)
