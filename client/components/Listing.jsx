import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card } from 'semantic-ui-react'

import MahiSummary from './MahiSummary'

const mahiDetails = [{
    id: 1,
    name: 'Fix my headlight',
    category: 'Automotive',
    description: 'Toyota Civic 2013, left headlight is broken. Might be electrical connection?',
    assigner: 'Andria',
    assignee: null,
    status: 'open',
    time: 3
  },
  {
    id: 2,
    name: 'Teach me to swim',
    category: 'Sports',
    description: 'Adult, 23, cannot swim at all. Want to get to at least intermediate level',
    assigner: 'Andrea',
    assignee: null,
    status: 'open',
    time: 6
  },
  {
    id: 3,
    name: 'Wanna learn Japanese',
    category: 'Language',
    description: 'Even just basic phrases is okay!',
    assigner: 'Andria',
    assignee: null,
    status: 'open',
    time: 3
  },
  {
    id: 4,
    name: 'Teach me basketball',
    category: 'Sports',
    description: 'Wanna be the next Kobe beef',
    assigner: 'Andrea',
    assignee: null,
    status: 'open',
    time: 6
  },
  {
    id: 5,
    name: 'Basic JS help',
    category: 'Technical',
    description: 'Need help with homework!',
    assigner: 'Andria',
    assignee: null,
    status: 'open',
    time: 3
  },
  {
    id: 6,
    name: 'Teach me volleyball',
    category: 'Sports',
    description: 'Need it to impress boyz',
    assigner: 'Andrea',
    assignee: null,
    status: 'open',
    time: 6
  },
  {
    id: 7,
    name: 'Fix my computer',
    category: 'Computer',
    description: 'Laptop MacBook Air 2013 would not turn on',
    assigner: 'Andria',
    assignee: null,
    status: 'open',
    time: 3
  },
  {
    id: 8,
    name: 'Teach me billiards',
    category: 'Sports',
    description: 'Wanna hit balls',
    assigner: 'Andrea',
    assignee: null,
    status: 'open',
    time: 4
  },
  {
    id: 9,
    name: 'Install dashcam',
    category: 'Automotive',
    description: 'Already dashcam, just need installation',
    assigner: 'Andria',
    assignee: null,
    status: 'open',
    time: 2
  },
  {
    id: 10,
    name: 'Clean car',
    category: 'Automotive',
    description: 'Muddy as hell, but only a sedan',
    assigner: 'Andria',
    assignee: null,
    status: 'open',
    time: 1
  },
  {
    id: 11,
    name: 'Teach me Te Reo Maori',
    category: 'Language',
    description: 'So I can make this app',
    assigner: 'Andria',
    assignee: null,
    status: 'open',
    time: 3
  },
  {
    id: 12,
    name: 'Help clean my yard',
    category: 'Housework',
    description: 'Small yard but lots of leaves',
    assigner: 'Andria',
    assignee: null,
    status: 'open',
    time: 3
  }]

class Listing extends Component {
  state = {

  }

  render () {
    // const { mahiDetails } = this.props //change mahi name to whatever is being sent

    return (
      <Card.Group centered>
        {mahiDetails.map(mahi =>
          <MahiSummary key={mahi.id} {...mahi} />)}
      </Card.Group>
    )
  }
}

export default Listing
