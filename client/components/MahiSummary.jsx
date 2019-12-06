import React, { Component } from 'react'
import { Modal, Card, Image, Button, Icon } from 'semantic-ui-react'

import SelectMahi from './SelectMahi'

export class MahiSummary extends Component {
  state = {}

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
          <Card.Meta as='h3'>Hours <Icon name='time' size='small'></Icon><br/><span id='mahiHours'>{hours} hours</span></Card.Meta>
          <Card.Meta as='h3'id='mahiAssigner'>Needed by<br/><span>{assigner}</span></Card.Meta>
          <Card.Description id='mahiDescription'>
            {description}
          </Card.Description>
        </Card.Content>
        <Card.Content textAlign='center' extra>
          <div >
            <Modal trigger={<Button basic color='green'>View Detail</Button>}>
              <SelectMahi details={this.props}/>
            </Modal>
          </div>
        </Card.Content>
      </Card>

    )
  }
}

export default MahiSummary
