import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Segment, Grid, Header, Icon, Card } from 'semantic-ui-react'

import { getOfferings } from '../actions/tasks'

import MahiSummary from './MahiSummary'

export class OfferingList extends Component {
  state = {
  }

  componentDidMount () {
    this.props.getOfferings(this.props.id)
  }

  render () {
    const { offerings } = this.props
    return (
      <Segment style={{ marginTop: 75 }}>
        {offerings
          ? <React.Fragment>
            <Header as='h3'>
              <Icon name='tasks'/>
              <Header.Content>Currently Offering</Header.Content>
            </Header>
            <Grid>
              <Grid.Column>
                <Card.Group centered>
                  {offerings.map(offering =>
                    <MahiSummary
                      key={offering.id}
                      {...offerings}
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

const mapStatetoProps = (state) => {
  return {
    offerings: state.offerings
  }
}

const mapDispatchToProps = {
  getOfferings
}
export default connect(mapStatetoProps, mapDispatchToProps)(OfferingList)
