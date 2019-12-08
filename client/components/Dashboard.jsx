import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Segment, Grid } from 'semantic-ui-react'

import { getUser } from '../actions/user'

import Profile from './Profile'
import TimeCurrency from './TimeCurrency'
import AddMahi from './AddMahi'
import OfferingList from './OfferingList'

// to be removed once there are props passed down
const props = {
  name: 'Steve Jobs',
  image: '/images/avatar02.png',
  about: 'Coding Enthusiast',
  mobile: '021 456 4445',
  email: 'steve.jobs@apple.com',
  address: '12 Morgan Street, Newmarket, Auckland, NewZealand',
  balance: 8,
  id: 1
}
export class Dashboard extends Component {
  state = {
    id: 1
  }
  componentDidMount () {
    const id = 1
    this.props.getUser(id)
  }
  render () {
    const id = this.state.id

    return (
      <div>
        <Grid columns={3}>
          <Grid.Column>
            <Profile user={this.props.user}/>
            <TimeCurrency props={this.props.user}/>

          </Grid.Column>
          <Grid.Column>
            <OfferingList id={id}/>
          </Grid.Column>
          <Grid.Column>
            <div>
              <h1>Recieving</h1>
            </div>
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
