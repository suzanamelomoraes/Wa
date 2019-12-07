import React, { Component } from 'react'
import { Card, Icon, Image, Button, Message } from 'semantic-ui-react'

class Profile extends Component {
  state = { }
  render () {
    return (
      <Card>
        <Card.Content>
          <Image
            floated='right'
            size='mini'
            src='/images/steve.jpg'
          />
          <Card.Header>Steve Jobs</Card.Header>
          <Card.Meta>Language Enthusiast</Card.Meta>
          <Card.Description>
          Steve wants to add you to the group <strong>best friends</strong>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
      
        </Card.Content>
      </Card>
    )
  }
}

export default Profile
