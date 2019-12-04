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
            src={image}
            id='mahiImage'
          />  
          <Card.Header as='h1' id='mahiTitle'>{title}</Card.Header>
          <Card.Meta as='h3'id='mahiCategory'>Category <Icon name='columns' size='small'></Icon><br/><span>{category}</span></Card.Meta>
          <Card.Meta as='h3'id='mahiHours'>Hours <Icon name='time' size='small'></Icon><br/><span>{hours} hours</span></Card.Meta>
          <Card.Meta as='h3'id='mahiAssigner'>Needed by<br/><span>{assigner}</span></Card.Meta>
          <Card.Description id='mahiDescription'>
            {description}
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
