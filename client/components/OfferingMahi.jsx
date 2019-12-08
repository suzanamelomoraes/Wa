import React, { Component } from 'react'

import { Modal, Card, Image, Button, Icon } from 'semantic-ui-react'
import CompleteMahi from './CompleteMahi'
import SelectOfferingMahi from './SelectOfferingMahi'

export class OfferingMahi extends Component {
  render () {
    const { title, status, assigner, assignee, assignerId, assigneeId, category, hours, taskId, description } = this.props.data

    const shortDescription = shortenText(description)

    return (
      <>
        <Card>
          <Card.Content size="huge">
            <Image src="/images/avatar01.png" size="small" floated="right" ></Image>

            <Card.Header as='h1'>{title}</Card.Header>
            <Card.Meta as="h3">assignee <Icon name="user" size="small"></Icon><br/>{assignee}</Card.Meta>
            <Card.Meta as="h3">status <Icon name="spinner" size="small"></Icon><br/>{status}</Card.Meta>
            <Card.Meta as='h3'>Category <Icon name='columns' size='small'></Icon><br/><span>{category}</span></Card.Meta>
            <Card.Meta as="h3">Hours <Icon name="time" size="small"></Icon><br/>5 {hours}</Card.Meta>

            <Card.Description>{shortDescription}</Card.Description>
          </Card.Content>
          <Card.Content>
            <CompleteMahi />
            <SelectOfferingMahi data={this.props.data}/>
          </Card.Content>
        </Card>
      </>
    )
  }
}
function shortenText (longText) {
  const string = longText
  const splitArray = string.split(' ')
  if (splitArray.length > 10) {
    const splitShortenedArray = splitArray.slice(0, 10)
    const shortText = splitShortenedArray.join(' ') + ' ...'
    return shortText
  }
  return longText
}

export default OfferingMahi
