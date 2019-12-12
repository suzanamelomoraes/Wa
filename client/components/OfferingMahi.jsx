import React, { Component } from 'react'

import { Card, Image, Icon } from 'semantic-ui-react'
import CompleteMahi from './CompleteMahi'
import Loading from './Loading'
import SelectOfferingMahi from './SelectOfferingMahi'
import { connect } from 'react-redux'
import { getUserById } from '../api/users'

export class OfferingMahi extends Component {
  state = {
    assigneeName: ''
  }

  componentDidMount () {
    const { assignee } = this.props.data

    getUserById(assignee).then(user => {
      if (user) {
        const assigneeName = user.name
        this.setState({ assigneeName: assigneeName })
      } else {
        this.setState({ assigneeName: '' })
      }
    })
  }

  render () {
    const { title, status, assignee, assignerId, categoryId, hours, id, description } = this.props.data
    const assigneeId = assignee
    const taskId = id
    const assigneeName = this.state.assigneeName

    const shortTitle = shortenText(title, 43)
    const shortDescription = shortenText(description, 85)

    let categoryName = ''
    if (this.props.categories && this.props.categories.length > 0) {
      const category = this.props.categories.find(category => category.id === categoryId)
      categoryName = category.name
    }

    return (
      <>
        <Loading />
        <Card>
          <Card.Content size="huge">
            <Image src="/images/avatar01.png" size="small" floated="right" ></Image>
            <Card.Header as='h1'>{shortTitle}</Card.Header>
            <Card.Meta as="h3"><u>Assignee</u> <Icon name="user" size="small"></Icon><br/>{assigneeName || 'Not Assigned'}</Card.Meta>
            <Card.Meta as="h3"><u>Status</u> <Icon name="spinner" size="small"></Icon><br/>{status}</Card.Meta>
            <Card.Meta as='h3'><u>Category</u> <Icon name='columns' size='small'></Icon><br/>{categoryName && categoryName}</Card.Meta>
            <Card.Meta as="h3"><u>Hours</u> <Icon name="time" size="small"></Icon><br/>{hours}</Card.Meta>

            <Card.Description>{shortDescription}</Card.Description>
          </Card.Content>
          <Card.Content>
            <CompleteMahi data={{ assigneeId, assignerId, taskId, hours, assignee }}/>
            <SelectOfferingMahi data={{ ...this.props.data, assigneeId, categoryName, assigneeName }}/>
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

const mapStateToProps = state => {
  return ({
    categories: state.categories

  })
}
export default connect(mapStateToProps)(OfferingMahi)
