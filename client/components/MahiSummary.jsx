import React, { Component } from 'react'
import { Card, Image, Button } from 'semantic-ui-react'

class MahiSummary extends Component {
  state = { }
  render () {
    return (
      <Card >
        <Card.Content>
          <Image
            floated='right'
            size='mini'
            src='/images/avatar01.png'
          />
          <Card.Header as='h1'>Mahi Title</Card.Header>
          <Card.Meta>Category</Card.Meta>
          <Card.Meta>Hours</Card.Meta>
          <Card.Description>
             Mahi description
          </Card.Description>
        </Card.Content>
        <Card.Content textAlign='center' extra>
          <div >
            <Button basic color='green'>
              View Detail
            </Button>
          </div>
        </Card.Content>
      </Card>

    )
  }
}

export default MahiSummary
