import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Card, Grid, Button, Icon, Divider } from 'semantic-ui-react'
import MahiSummary from './MahiSummary'
import Map from './Map'
import MahiMarker from './MahiMarker'
import Notification from './Notification'
import Error from './Error'
import Loading from './Loading'

// import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

import { setError } from '../actions/error'
import { getUser } from '../actions/user'
import { changeActiveTask, getTasks } from '../actions/tasks'

const MapToggleButton = ({ text, onClick }) => (
  <Button
    animated='fade'
    size='huge'
    color='olive'
    onClick={onClick}
    style={{ marginTop: 50, marginRight: 25 }}
  >
    <Button.Content hidden style={{ fontSize: '0.8em' }}>
      {text}
    </Button.Content>
    <Button.Content visible>
      <Icon name='map outline' />
    </Button.Content>
  </Button>
)

export class Listing extends Component {
  state = {
    mapVisible: null
  }

  componentDidMount () {
    this.props.getTasks()
      .then(() => this.props.changeActiveTask(null))
  }

  toggleMap = () => {
    const { mapVisible } = this.state
    const { changeActiveTask } = this.props

    this.setState({
      mapVisible: !mapVisible
    })

    changeActiveTask(null)
  }

  render () {
    const { mapVisible } = this.state
    const { tasks } = this.props

    return (
      <React.Fragment>
        <Loading />
        <Grid>
          <Grid.Column
            textAlign='left'
            width={6}
          >
            <Notification />
          </Grid.Column>

          <Grid.Column
            textAlign='right'
            width={10}
          >
            <MapToggleButton text={mapVisible ? 'Close Map' : 'Open Map'} onClick={this.toggleMap}/>
          </Grid.Column>
        </Grid>

        <Divider />

        <Grid>
          <Loading />
          <Grid.Column
            width={mapVisible ? 8 : 16}
            style={{
              height: '100vh',
              width: '100%',
              overflow: 'scroll'
            }}
          >
            {this.props.error
              ? <Error /> : (
                <Card.Group centered>
                  {tasks.map(mahi => {
                    if (mahi.status === 'Open') {
                      return (
                        <MahiSummary
                          key={mahi.taskId}
                          {...mahi}
                          mapVisible={mapVisible}
                        />
                      )
                    }
                  })}
                </Card.Group>)
            }
          </Grid.Column>

          {mapVisible &&
            <Grid.Column width={8}>
              <Map>
                {tasks.map(mahi => {
                  if (mahi.status === 'Open') {
                    return (
                      <MahiMarker
                        key={mahi.taskId}
                        {...mahi}
                        lat={mahi.latitude}
                        lng={mahi.longitude}
                      />
                    )
                  }
                })}

              </Map>
            </Grid.Column>
          }
        </Grid>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    activeIndex: state.activeIndex,
    tasks: state.tasks,
    error: state.error,
    load: state.pending
  }
}

const mapDispatchToProps = {
  changeActiveTask,
  getTasks
}

export default connect(mapStateToProps, mapDispatchToProps)(Listing)
