import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Card } from 'semantic-ui-react'
import MahiSummary from './MahiSummary'
import Error from './Error'
import Loading from './Loading'
import Map from './Map'
import MahiMarker from './MahiMarker'

import { getTasks } from '../api/tasks'
import { setError } from '../actions/error'

export class Listing extends Component {
  state = {
    mahiDetails: [],
  }

  componentDidMount () {
    getTasks()
      .then(mahiDetails => {
        this.setState({ mahiDetails })
      })
      .catch((error) => {
        setError(error)
      })
  }

  render () {
    const { mahiDetails } = this.state
    const { error, pending } = this.props
    
    if (error) {
      return <Error />
    } else if (pending) {
      return <Loading />
    }
      return (
        <>
          <Card.Group centered style={{ marginTop: 75 }}>
            {mahiDetails.map(mahi =>
              <MahiSummary key={mahi.taskId} {...mahi} />)}
          </Card.Group>

          <Map>
            {mahiDetails.map(mahi => 
              <MahiMarker key={mahi.taskId} {...mahi} lat={mahi.latitude} lng={mahi.longitude} />)}
          </Map>
        </>
    )
  }
}

const mapStateToProps = state => {
  return {
    error: state.error,
    pending: state.pending
  }
}
export default connect(mapStateToProps)(Listing)
