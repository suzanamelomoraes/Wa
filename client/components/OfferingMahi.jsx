import React, { Component } from 'react'

import { Modal, Card, Image, Button, Icon } from 'semantic-ui-react'
import CompleteMahi from './CompleteMahi'
import SelectOfferingMahi from './SelectOfferingMahi'

export default class OfferingMahi extends Component {
  render () {
    return (
      <>
        <Card>
          <Card.Content size="huge">
            <Image src="/images/avatar01.png" size="small" floated="right" ></Image>

            <Card.Header as='h1'>Walking my dogs</Card.Header>
            <Card.Meta as="h3">Asignee <Icon name="user" size="small"></Icon><br/>Piha</Card.Meta>
            <Card.Meta as="h3">Status <Icon name="spinner" size="small"></Icon><br/>In Progress</Card.Meta>
            <Card.Meta as='h3'>Category <Icon name='columns' size='small'></Icon><br/><span>Outside and Pets</span></Card.Meta>
            <Card.Meta as="h3">Hours <Icon name="time" size="small"></Icon><br/>5 hours</Card.Meta>
            {/* <Card.Image src="/images/avatar01.png"></Card.Image> */}
            <Card.Description>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</Card.Description>
          </Card.Content>
          <Card.Content>
            <CompleteMahi/>
            <SelectOfferingMahi/>
          </Card.Content>
        </Card>
      </>
    )
  }
}
