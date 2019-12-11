import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Image, Icon } from 'semantic-ui-react'
import SelectVolunteerMahi from './SelectVolunteerMahi'
import { getUser } from '../actions/user'
import DeselectUser from './DeselectUser'
import Loading from './Loading'

export class VolunteerMahi extends Component {
  render () {
    const { title, status, assignerName, category, hours, description, assignerImage } = this.props.data
    const shortDescription = shortenText(description)

    return (
      <>
        <Loading />
        <Card>
          <Card.Content size="huge">
            <Image src={assignerImage} size="small" floated="right" ></Image>
            <Card.Header as='h1'>{title}</Card.Header>
            <Card.Meta as="h3"><u>Assigner</u> <Icon name="user" size="small"></Icon><br/>{assignerName}</Card.Meta>
            <Card.Meta as="h3"><u>Status</u> <Icon name="spinner" size="small"></Icon><br/>{status}</Card.Meta>
            <Card.Meta as='h3'><u>Category</u> <Icon name='columns' size='small'></Icon><br/><span>{category}</span></Card.Meta>
            <Card.Meta as="h3"><u>Hours</u> <Icon name="time" size="small"></Icon><br/>{hours}</Card.Meta>
            <Card.Description>{shortDescription}</Card.Description>
          </Card.Content>
          <Card.Content>
            <SelectVolunteerMahi data={this.props.data}/>
            <DeselectUser id={this.props.data.id}/>
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

const mapDispatchToProps = {
  getUser
}

export default connect(null, mapDispatchToProps)(VolunteerMahi)
