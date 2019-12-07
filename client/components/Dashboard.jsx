import React, { Component } from 'react'

import { Menu, Segment } from 'semantic-ui-react'

import Profile from './Profile'
import TimeCurrency from './TimeCurrency'
import AddMahi from './AddMahi'

// to be removed once there are props passed down
const props = {
  name: 'Steve Jobs',
  image: '/images/avatar02.png',
  about: 'Coding Enthusiast',
  mobile: '021 456 4445',
  email: 'steve.jobs@apple.com',
  address: '12 Morgan Street, Newmarket, Auckland, NewZealand',
  balance: 8
}
export class Dashboard extends Component {
  state = { }
  render () {
    return (
      <div>
        <Profile user={props}/>
        <TimeCurrency props={props}/>
        <Segment fixed attached='bottom'>
          <AddMahi/>
        </Segment>
      </div>

    )
  }
}

export default Dashboard
