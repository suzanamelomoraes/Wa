import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Card, Icon, Image, Table, Header, Segment } from 'semantic-ui-react'

import TimeCurrency from './TimeCurrency'

export class Profile extends Component {

  render () {
    const { name, image, about, mobile, email, address, balance } = this.props.user
    const hold = this.props.offerings.reduce((a, { hours: b }) => (a + b), 0)
    return (
      <Segment compact style={{ marginTop: 100, size: 'small' }}>
        <Card fluid>
          <Card.Content>
            <Image
              floated='right'
              size='small'
              src={image}
              style={{ marginTop: '2em' }}
            />
            <Card.Header>{name}</Card.Header>
            <Card.Meta>{about}</Card.Meta>
            <TimeCurrency balance={balance} hold={hold}/>
          </Card.Content>
        </Card>
        <Table basic padded >
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Description</Table.HeaderCell>
              <Table.HeaderCell>Your Details</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>

            <Table.Row>
              <Table.Cell>
                <Header as='h4' image>
                  <Icon name='phone' size='small'/>
                  <Header.Content>
          Mobile
                  </Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell>{mobile}</Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell>
                <Header as='h4' image>
                  <Icon name='mail' size='small'/>
                  <Header.Content>
          Email
                  </Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell>{email}</Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell>
                <Header as='h4' image>
                  <Icon name='address card' size='small'/>
                  <Header.Content>
          Address
                  </Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell>{address}</Table.Cell>
            </Table.Row>

          </Table.Body>
        </Table>
      </Segment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    offerings: state.offerings
  }
}
export default connect(mapStateToProps)(Profile)
