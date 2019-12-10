import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Segment, Grid, Header, Icon, Card, Divider } from 'semantic-ui-react'

import { getOfferings } from '../actions/tasks'

import OfferingMahi from './OfferingMahi'

export class OfferingList extends Component {
  componentDidMount () {
    this.props.getOfferings()
  }

  render () {
    const { offerings } = this.props
    return (
      <Segment style={{ marginTop: 100 }}>
        {offerings
          ? <React.Fragment>
            <Header as='h3'>
              <Icon name='tasks'/>
              <Header.Content>Currently Offering</Header.Content>
            </Header>
            <Divider />
            <Grid>
              <Grid.Column style={{
                height: '60vh',
                overflow: 'scroll'
              }}>
                <Card.Group centered>
                  {offerings.map(offering =>
                    <OfferingMahi
                      key={offering.id}
                      data={offering}
                    />
                  )}
                </Card.Group>
              </Grid.Column>
            </Grid>
          </React.Fragment>
          : <React.Fragment>
            <Header as='h3'>
              <Icon name='calendar alternate outline'/>
              <Header.Content>Currently Offering</Header.Content>
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
                      <p>
    You are currently not offering yet.
                      </p>
                      <p>
    To get started click "Add Mahi"
                      </p>
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

const mapStatetoProps = (state) => {
  return {
    offerings: state.offerings
  }
}

const mapDispatchToProps = {
  getOfferings
}
export default connect(mapStatetoProps, mapDispatchToProps)(OfferingList)
