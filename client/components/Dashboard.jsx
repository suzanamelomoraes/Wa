import React, { Component, createRef } from 'react'
import { connect } from 'react-redux'
import { Grid } from 'semantic-ui-react'

import { getUser } from '../actions/user'

import Profile from './Profile'
import AddMahi from './AddMahi'
import OfferingList from './OfferingList'
import VolunteeringList from './VolunteeringList'

import { getOfferings, getVolunteering } from '../actions/tasks'

export class Dashboard extends Component {
  state = {
    id: 2,
    user: null,
    offerings: null,
    volunteering: null
  }

  componentDidMount () {
    this.props.getUser()
      .then(() => this.props.getOfferings())
      .then(() => this.props.getVolunteering())
      .then(() => {
        this.setState({
          user: this.props.user,
          offerings: this.props.offerings,
          volunteering: this.props.volunteering
        })
      })
  }

  render () {
    const { user, offerings, volunteering } = this.props
    if (!user || !offerings || !volunteering) return null
    return (
      <div>
        <Grid stackable={true} columns={3}>
          <Grid.Column width={5}>
            <Profile />
          </Grid.Column>
          <Grid.Column width={5}>
            <OfferingList offerings={offerings} id={user.id}/>
          </Grid.Column>
          <Grid.Column width={5}>
            <VolunteeringList volunteering={volunteering} id={user.id}/>
          </Grid.Column>
        </Grid>

        <AddMahi
          id={user.id}
          balance={user.balance}
        />

      </div>
    )
  }
}

const mapDispatchToProps = {
  getUser,
  getOfferings,
  getVolunteering
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    offerings: state.offerings,
    volunteering: state.volunteering
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
