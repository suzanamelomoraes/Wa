import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Card } from 'semantic-ui-react'
import MahiSummary from './MahiSummary'

const mahiDetails = [{ //hard-coded data
    id: 1,
    name: 'Fix my headlight',
    category_name: 'Automotive',
    description: 'Toyota Civic 2013, left headlight is broken. Might be electrical connection?',
    assigner_name: 'Andria',
    assignee_name: null,
    status: 'open',
    time: 3
  },
  {
    id: 2,
    name: 'Teach me to swim',
    category_name: 'Sports',
    description: 'Adult, 23, cannot swim at all. Want to get to at least intermediate level',
    assigner_name: 'Andrea',
    assignee_name: null,
    status: 'open',
    time: 6
  },
  {
    id: 3,
    name: 'Wanna learn Japanese',
    category_name: 'Language',
    description: 'Even just basic phrases is okay!',
    assigner_name: 'Andria',
    assignee_name: null,
    status: 'open',
    time: 3
  },
  {
    id: 4,
    name: 'Teach me basketball',
    category_name: 'Sports',
    description: 'Wanna be the next Kobe beef',
    assigner_name: 'Andrea',
    assignee_name: null,
    status: 'open',
    time: 6
  },
  {
    id: 5,
    name: 'Basic JS help',
    category_name: 'Technical',
    description: 'Need help with homework!',
    assigner_name: 'Andria',
    assignee_name: null,
    status: 'open',
    time: 3
  },
  {
    id: 6,
    name: 'Teach me volleyball',
    category_name: 'Sports',
    description: 'Need it to impress boyz',
    assigner_name: 'Andrea',
    assignee_name: null,
    status: 'open',
    time: 6
  },
  {
    id: 7,
    name: 'Fix my computer',
    category_name: 'Computer',
    description: 'Laptop MacBook Air 2013 would not turn on',
    assigner_name: 'Andria',
    assignee_name: null,
    status: 'open',
    time: 3
  },
  {
    id: 8,
    name: 'Teach me billiards',
    category_name: 'Sports',
    description: 'Wanna hit balls',
    assigner_name: 'Andrea',
    assignee_name: null,
    status: 'open',
    time: 4
  },
  {
    id: 9,
    name: 'Install dashcam',
    category_name: 'Automotive',
    description: 'Already dashcam, just need installation',
    assigner_name: 'Andria',
    assignee_name: null,
    status: 'open',
    time: 2
  },
  {
    id: 10,
    name: 'Clean car',
    category_name: 'Automotive',
    description: 'Muddy as hell, but only a sedan',
    assigner_name: 'Andria',
    assignee_name: null,
    status: 'open',
    time: 1
  },
  {
    id: 11,
    name: 'Teach me Te Reo Maori',
    category_name: 'Language',
    description: 'So I can make this app',
    assigner_name: 'Andria',
    assignee_name: null,
    status: 'open',
    time: 3
  },
  {
    id: 12,
    name: 'Help clean my yard',
    category_name: 'Housework',
    description: 'Small yard but lots of leaves',
    assigner_name: 'Andria',
    assignee_name: null,
    status: 'open',
    time: 3
  }]

class Listing extends Component {

  render () {
    // const { mahiDetails } = this.props

    return (
      <Card.Group centered>
        {mahiDetails.map(mahi =>
          <MahiSummary key={mahi.id} {...mahi} />)}
      </Card.Group>
    )
  }
}

const mapStateToProps = state => {
  return {
    mahiDetails: state.tasks //change name to whatever is in the store
  }
}

export default connect(mapStateToProps)(Listing)
