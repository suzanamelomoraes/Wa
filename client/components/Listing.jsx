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
  }]

class Listing extends Component {
  state = {

  }

  render () {
    // const { mahiDetails } = this.props //change mahi name to whatever is being sent

    return (
      <Card.Group>
        {mahiDetails.map(mahi =>
          <MahiSummary key={mahi.id} {...mahi} />)}
      </Card.Group>
    )
  }
}

export default Listing
