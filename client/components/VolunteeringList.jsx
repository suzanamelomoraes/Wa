import React from 'react'
import { Header, Segment } from 'semantic-ui-react'
import { getVolunteering } from '../api/users'
import { connect } from 'react-redux'

export class Volunteeringlist extends React.Component {
  state = {
    volunteering: []
  }

  componentDidMount () {
    getVolunteering()
      .then(res => {
        this.setState({
          volunteering: res.body
        })
      })
      .catch(err => {
        this.setState({
          message: err.message
        })
      })
  }

  render () {
    return (
      <Segment >
        <Header>
      volunteering List
        </Header>

      </Segment>
    )
  }
}

function mapStateToProps (state) {
  return {
    volunteering: state.volunteering
  }
}

export default connect(mapStateToProps)(Volunteeringlist)
