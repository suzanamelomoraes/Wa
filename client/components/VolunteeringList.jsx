import React from 'react'
import { connect } from 'react-redux'
import { Segment, Grid, Header, Icon, Card, Divider } from 'semantic-ui-react'
import VolunteerMahi from './VolunteerMahi'

import { getVolunteering } from '../actions/tasks'

export class VolunteeringList extends React.Component {
  componentDidMount () {
    this.props.getVolunteering()
  }

  render () {
    const { volunteering } = this.props
    return (
      <Segment style={{ marginTop: 75 }}>
        {volunteering.length
          ? <React.Fragment>
            <Header as='h3'>
              <Icon name='calendar alternate outline'/>
              <Header.Content>Currently Volunteering</Header.Content>
            </Header>
            <Divider />
            <Grid>
              <Grid.Column style={{
                height: '60vh',
                overflow: 'scroll'
              }}>
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
          : <React.Fragment>
            <Header as='h3'>
              <Icon name='calendar alternate outline'/>
              <Header.Content>Currently Volunteering</Header.Content>
            </Header>
            <Divider />
            <Grid>
              <Grid.Column>
                <Card.Group centered>
                  <Card style={{
                    backgroundColor: '#ededed',
                    height: '375px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexWrap: 'wrap' }}>
                    <Header textAlign='center'
                      style={{
                        color: '#b5b5b5'
                      }}>
      You are currently not volunteering yet.
                    </Header>
                  </Card>
                </Card.Group>
              </Grid.Column>
            </Grid>
          </React.Fragment>
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
