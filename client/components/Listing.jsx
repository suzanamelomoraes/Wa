import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Card } from 'semantic-ui-react'
import MahiSummary from './MahiSummary'

const mahiDetails = [{ // hard-coded data
  id: 1,
  title: 'Fix my headlight',
  category: 'Automotive',
  description: 'Toyota Civic 2013, left headlight is broken. Might be electrical connection?',
  assigner: 'Andria',
  assignee: null,
  status: 'open',
  hours: 3,
  image: '/images/avatar01.png'
},
{
  id: 2,
  title: 'Teach me to swim',
  category: 'Sports',
  description: 'Adult, 23, cannot swim at all. Want to get to at least intermediate level',
  assigner: 'Andrea',
  assignee: null,
  status: 'open',
  hours: 6,
  image: '/images/avatar01.png'
},
{
  id: 3,
  title: 'Wanna learn Japanese',
  category: 'Language',
  description: 'Even just basic phrases is okay!',
  assigner: 'Andria',
  assignee: null,
  status: 'open',
  hours: 3,
  image: '/images/avatar01.png'
},
{
  id: 4,
  title: 'Teach me basketball',
  category: 'Sports',
  description: 'Wanna be the next Kobe beef',
  assigner: 'Andrea',
  assignee: null,
  status: 'open',
  hours: 6,
  image: '/images/avatar01.png'
},
{
  id: 5,
  title: 'Basic JS help',
  category: 'Technical',
  description: 'Need help with homework!',
  assigner: 'Andria',
  assignee: null,
  status: 'open',
  hours: 3,
  image: '/images/avatar01.png'
},
{
  id: 6,
  title: 'Teach me volleyball',
  category: 'Sports',
  description: 'Need it to impress boyz',
  assigner: 'Andrea',
  assignee: null,
  status: 'open',
  hours: 6,
  image: '/images/avatar01.png'
},
{
  id: 7,
  title: 'Fix my computer',
  category: 'Computer',
  description: 'Laptop MacBook Air 2013 would not turn on',
  assigner: 'Andria',
  assignee: null,
  status: 'open',
  hours: 3,
  image: '/images/avatar01.png'
},
{
  id: 8,
  title: 'Teach me billiards',
  category: 'Sports',
  description: 'Wanna hit balls',
  assigner: 'Andrea',
  assignee: null,
  status: 'open',
  hours: 4,
  image: '/images/avatar01.png'
},
{
  id: 9,
  title: 'Install dashcam',
  category: 'Automotive',
  description: 'Already dashcam, just need installation',
  assigner: 'Andria',
  assignee: null,
  status: 'open',
  hours: 2,
  image: '/images/avatar01.png'
},
{
  id: 10,
  title: 'Clean car',
  category: 'Automotive',
  description: 'Muddy as hell, but only a sedan',
  assigner: 'Andria',
  assignee: null,
  status: 'open',
  hours: 1,
  image: '/images/avatar01.png'
},
{
  id: 11,
  title: 'Teach me Te Reo Maori',
  category: 'Language',
  description: 'So I can make this app',
  assigner: 'Andria',
  assignee: null,
  status: 'open',
  hours: 3,
  image: '/images/avatar01.png'
},
{
  id: 12,
  title: 'Help clean my yard',
  category: 'Housework',
  description: 'Small yard but lots of leaves',
  assigner: 'Andria',
  assignee: null,
  status: 'open',
  hours: 3,
  image: '/images/avatar01.png'
}]

export class Listing extends Component {

  render () {
    // const { mahiDetails } = this.props

    return (
      <Card.Group centered style={{ marginTop: 75 }}>
        {mahiDetails.map(mahi =>
          <MahiSummary key={mahi.id} {...mahi} />)}
      </Card.Group>
    )
  }
}

const mapStateToProps = state => {
  return {
    mahiDetails: state.tasks // change name to whatever is in the store
  }
}

export default connect(mapStateToProps)(Listing)
