import React, { Component } from 'react'
import { Card, Image, Button, Icon } from 'semantic-ui-react'

export class MahiSummary extends Component {
  state = {
    title: this.props.title,
    category: this.props.categoryName,
    hours: this.props.time,
    description: this.props.description,
    assigner: this.props.assignerName,
    image: this.props.image
  }
  render () {
    const { title, category, hours, description, image, assigner } = this.props
    return (
      <Card >
        <Card.Content>
          <Image
            floated='right'
            size='small'
            src='/images/avatar01.png'
          />
          <Card.Header as='h1'>{title}</Card.Header>
          <Card.Meta as='h3'>Category <Icon name='columns' size='small'></Icon><br/><span>{category}category</span></Card.Meta>
          <Card.Meta as='h3'>Hours <Icon name='time' size='small'></Icon><br/><span>{hours} hours</span></Card.Meta>
          <Card.Meta as='h3'>Needed by<br/><span>{assigner} name</span></Card.Meta>
          <Card.Description>
            {description}
             Mahi description Mahi description Mahi description Mahi description Mahi description Mahi description Mahi description Mahi description
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
