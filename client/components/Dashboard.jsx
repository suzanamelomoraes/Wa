import React, { Component } from 'react'

import { Segment, Grid } from 'semantic-ui-react'

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
  id: 2
}
export class Dashboard extends Component {
  state = { }
  render () {
    return (
      <div>
        <Grid columns={3}>
          <Grid.Column>
            <Profile user={props}/>
            <TimeCurrency props={props}/>

          </Grid.Column>
          <Grid.Column>
            <OfferingList/>
          </Grid.Column>
          <Grid.Column>
            <div>
              <h1>Recieving</h1>
            </div>
          </Grid.Column>
        </Grid>
        <Segment fixed='true' attached='bottom'>
          <AddMahi id={props.id}/>
        </Segment>
      </div>

    )
  }
}

export default Dashboard
