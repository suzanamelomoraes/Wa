import React from 'react'
import { connect } from 'react-redux'
import { Segment, Grid, Header, Icon, Card, Divider } from 'semantic-ui-react'
import VolunteerMahi from './VolunteerMahi'

export class VolunteeringList extends React.Component {

  render () {
    const { volunteering } = this.props

    return (
      <Segment style={{ marginTop: 100 }}>
        {volunteering.length
          ? <React.Fragment>
            <Header as='h3'>
              <Icon name='calendar alternate outline'/>
              <Header.Content>Currently Volunteering</Header.Content>
            </Header>
            <Divider />
            <Grid>
              <Grid.Column style={{
                height: '80vh',
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
                      You are currently not volunteering for any mahi.
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

export default connect(mapStateToProps)(VolunteeringList)
