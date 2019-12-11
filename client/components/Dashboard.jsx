import React, { Component, createRef } from 'react'
import { connect } from 'react-redux'
import { Grid } from 'semantic-ui-react'

import { getUser } from '../actions/user'

import Profile from './Profile'
import AddMahi from './AddMahi'
import OfferingList from './OfferingList'
import VolunteeringList from './VolunteeringList'
import Error from './Error'
import Loading from './Loading'

import { getOfferings, getVolunteering } from '../actions/tasks'

export class Dashboard extends Component {
  state = {
    isLoaded: false,
    user: {}
  }

  componentDidMount () {
    this.props.getUser()
      .then(() => this.props.getOfferings())
      .then(() => this.props.getVolunteering())
      .then(() => {
        this.setState({
          isLoaded: true,
          user: this.props.user
        })
      })
  }

  render () {
    const { isLoaded, user } = this.state
    if (!isLoaded || !user) return <Error/>
    return (
      <div>
        <Loading />
        {this.props.error
          ? <Error />
          : (<>
        <Grid stackable={true} columns={3}>
          <Grid.Column width={5}>
            <Profile />
          </Grid.Column>
          <Grid.Column width={5}>
            <OfferingList />
          </Grid.Column>
          <Grid.Column width={5}>
            <VolunteeringList />
          </Grid.Column>
        </Grid>

        <AddMahi id={user.id} />
        </>
          )
        }
      </div>
    )
  }
}

const mapDispatchToProps = {
  getUser,
  getOfferings,
  getVolunteering
}

const mapStateToProps = state => {
  return {
    user: state.user,
    offerings: state.offerings,
    volunteering: state.volunteering,
    error: state.error,
    load: state.pending
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
