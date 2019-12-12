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

    const shortTitle = shortenText(title, 43)
    const shortDescription = shortenText(description, 85)

    return (
      <>
        <Loading />
        <Card>
          <Card.Content size="huge">
            <Image src={assignerImage} size="small" floated="right" ></Image>
            <Card.Header as='h1'>{shortTitle}</Card.Header>
            <Card.Meta as="h3"><u>Assigner</u> <Icon name="user" size="small"></Icon><br/>{assignerName}</Card.Meta>
            <Card.Meta as="h3"><u>Status</u> <Icon name="spinner" size="small"></Icon><br/>{status}</Card.Meta>
            <Card.Meta as='h3'><u>Category</u> <Icon name='columns' size='small'></Icon><br/><span>{category}</span></Card.Meta>
            <Card.Meta as="h3"><u>Hours</u> <Icon name="time" size="small"></Icon><br/>{hours}</Card.Meta>
            <Card.Description>{shortDescription}</Card.Description>
          </Card.Content>
          <Card.Content>
            <SelectVolunteerMahi data={{ ...this.props.data, assignerImage }}/>
            <DeselectUser id={this.props.data.id}/>
          </Card.Content>
        </Card>
      </>
    )
  }
}

// maxCharLength: max number of character before shortening occurs
function shortenText (longText, maxCharLength) {
  const charLength = longText.length

  if (charLength > maxCharLength) {
    // If text is too long, then return the amount
    const splitArray = longText.split(' ')
    let charCounter = 0
    let i = 0
    for (i = 0; i < splitArray.length; i++) {
      if (charCounter + splitArray[i].length + 1 > maxCharLength) {
        break
      }
      charCounter += splitArray[i].length + 1
    }
    const shortenedText = splitArray.slice(0, i).join(' ') + ' ...'
    return shortenedText
  }
  //  If text is right
  return longText
}

const mapDispatchToProps = {
  getUser
}

export default connect(null, mapDispatchToProps)(VolunteerMahi)
