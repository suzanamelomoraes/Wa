import React from 'react'
import { connect } from 'react-redux'
import { Segment, Grid, Header, Icon, Card } from 'semantic-ui-react'

import { getVolunteering } from '../actions/tasks'
import { setError } from '../actions/error'

import MahiSummary from './MahiSummary'

const props = {
  name: 'Steve Jobs',
  image: '/images/avatar02.png',
  about: 'Coding Enthusiast',
  mobile: '021 456 4445',
  email: 'steve.jobs@apple.com',
  address: '12 Morgan Street, Newmarket, Auckland, NewZealand',
  balance: 8,
  id: 3
}

export class VolunteeringList extends React.Component {
  state = {
  }

  componentDidMount () {
    this.props.getVolunteering(this.props.id)
  }

  render () {
    const { volunteering } = this.props
    return (
      <Segment style={{ marginTop: 75 }}>
        {volunteering
          ? <React.Fragment>
            <Header as='h3'>
              <Icon name='calendar alternate outline'/>
              <Header.Content>Currently Volunteering</Header.Content>
            </Header>
            <Grid>
              <Grid.Column>
                <Card.Group centered>
                  {/* {volunteering.map(volunteer =>
                    <MahiSummary
                      key={volunteer.id}
                      {...volunteering}
                      props={props}
                    />
                  )} */}
                  
                </Card.Group>
              </Grid.Column>
            </Grid>
          </React.Fragment>
          : null
        }
      </Segment>
    )
  }
}

const mapStatetoProps = (state) => {
  return {
    volunteering: [state.volunteering]
  }
}

const mapDispatchToProps = {
  getVolunteering,
  setError
}
export default connect(mapStatetoProps, mapDispatchToProps)(VolunteeringList)
