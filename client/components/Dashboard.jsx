import React, { Component } from 'react'

import Profile from './Profile'
import AddMahi from './AddMahi'

// to be removed once there are props passed down
const profileprops = {
  name: 'Steve Jobs',
  image: '/images/avatar02.png',
  about: 'Coding Enthusiast',
  mobile: '021 456 4445',
  email: 'steve.jobs@apple.com',
  address: '12 Morgan Street, Newmarket, Auckland, NewZealand'
}
export class Dashboard extends Component {
  state = { }
  render () {
    return (
      <div>
        <Profile user={profileprops}/>
        <AddMahi/>
      </div>
    )
  }
}

export default Dashboard
