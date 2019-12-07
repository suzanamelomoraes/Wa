import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Card, Grid, Button, Icon, Divider } from 'semantic-ui-react'
import MahiSummary from './MahiSummary'
import Map from './Map'
import MahiMarker from './MahiMarker'

import { getTasks } from '../api/tasks'
import { setError } from '../actions/error'

export class Listing extends Component {
  state = {
    mahiDetails: [],
    mapVisible: null,
    buttonColor: 'olive'
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

  toggleMap = () => {
    const { mapVisible } = this.state

    this.setState({
      mapVisible: !mapVisible,
    })
  }

  render () {
    const { mahiDetails, mapVisible, buttonColor } = this.state
    
    if (mapVisible) {
      return (
        <>
          <Grid>
            <Grid.Column textAlign='right'>
              <Button 
                animated='fade' 
                size='big' 
                color={buttonColor} 
                onClick={this.toggleMap}
                style={{ marginTop: 40, marginRight: 25 }}>
                  <Button.Content hidden style={{fontSize: '0.8em'}}>Show Map</Button.Content>
                  <Button.Content visible>
                    <Icon name='map outline' />
                  </Button.Content>
              </Button>

              <Divider />

            </Grid.Column>
          </Grid>

          <Grid>
            <Grid.Column width={8}>
              <Card.Group centered>
                {mahiDetails.map(mahi =>
                  <MahiSummary key={mahi.taskId} {...mahi} />)}
              </Card.Group>
            </Grid.Column>

            <Grid.Column width={8}>
              <Map>
              {mahiDetails.map(mahi => 
                <MahiMarker key={mahi.taskId} {...mahi} lat={mahi.latitude} lng={mahi.longitude} />)}
              </Map>
            </Grid.Column>
          </Grid>
        </>
      )}

      return (
        <Grid>
          <Grid.Column textAlign='right'>
            <Button 
              animated='fade' 
              size='big' 
              color={buttonColor} 
              onClick={this.toggleMap} 
              style={{ marginTop: 40, marginRight: 25 }}>
                <Button.Content hidden style={{fontSize: '0.8em'}}>Show Map</Button.Content>
                <Button.Content visible>
                  <Icon name='map outline' />
                </Button.Content>
            </Button>

            <Divider />

            <Card.Group centered>
              {mahiDetails.map(mahi =>
                <MahiSummary key={mahi.taskId} {...mahi} />)}
            </Card.Group>
          </Grid.Column>
        </Grid>
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
