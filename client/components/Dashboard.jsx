import React, { Component, createRef } from 'react'
import { connect } from 'react-redux'
import { Segment, Grid, Sticky } from 'semantic-ui-react'

import { getUser } from '../actions/user'

import Profile from './Profile'
import AddMahi from './AddMahi'
import OfferingList from './OfferingList'
import VolunteeringList from './VolunteeringList'

export class Dashboard extends Component {
  state = {
    id: 2,
    user: {}
  }

  componentDidMount () {
    this.props.getUser()
      .then(() =>
        this.setState({
          user: this.props.user
        })
      )
  }

  contextRef = createRef()
  render () {
    const { user } = this.state
    return (
      <div>
        <Grid stackable={true} columns={3}>
          <Grid.Column width={5}>
            <Profile user={user}/>
          </Grid.Column>
          <Grid.Column width={5}>
            <OfferingList id={user.id}/>
          </Grid.Column>
          <Grid.Column width={5}>
            <VolunteeringList id={user.id}/>
          </Grid.Column>
        </Grid>
        <Sticky>
          <Segment fixed='true' attached='bottom'>
            <AddMahi id={user.id}/>
          </Segment>
        </Sticky>

      </div>

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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
