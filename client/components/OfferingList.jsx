import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Segment, Grid, Header, Icon, Card } from 'semantic-ui-react'

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
            <Grid>
              <Grid.Column>
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
