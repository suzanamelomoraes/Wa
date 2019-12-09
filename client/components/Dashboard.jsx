import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Segment, Grid } from 'semantic-ui-react'

import { getUser } from '../actions/user'

import Profile from './Profile'
import TimeCurrency from './TimeCurrency'
import AddMahi from './AddMahi'
import OfferingList from './OfferingList'
import VolunteeringList from './VolunteeringList'

export class Dashboard extends Component {
  state = {
    id: 2,
    user: {}
  }
  componentDidMount () {
    const id = 1
    this.props.getUser(id)
      .then(() =>
        this.setState({
          user: this.props.user
        })
      )
  }
  render () {
    const { id, user } = this.state
    return (
      <div style={{ marginTop: 30 }}>
        <Grid columns={3}>
          <Grid.Column>
            <Profile user={user}/>
            <TimeCurrency props={user}/>

          </Grid.Column>
          <Grid.Column>
            <OfferingList id={id}/>
          </Grid.Column>
          <Grid.Column>
            <VolunteeringList id={id}/>
          </Grid.Column>
        </Grid>
        <Segment fixed='true' attached='bottom'>
          <AddMahi id={id}/>
        </Segment>
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
