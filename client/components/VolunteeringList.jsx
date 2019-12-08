import React from 'react'
import { connect } from 'react-redux'
import { Segment, Grid, Header, Icon, Card } from 'semantic-ui-react'
import VolunteerMahi from './VolunteerMahi'

import { getVolunteering } from '../actions/tasks'

export class VolunteeringList extends React.Component {
state={}

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
                {volunteering.map(volunteer =>
                  <VolunteerMahi
                    key={volunteer.id}
                    data={volunteer}
                  />
                )}
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

const mapStateToProps = (state) => {
  return {
    volunteering: state.volunteering
  }
}

const mapDispatchToProps = {
  getVolunteering
}

export default connect(mapStateToProps, mapDispatchToProps)(VolunteeringList)
