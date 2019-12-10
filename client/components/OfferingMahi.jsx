import React, { Component } from 'react'

import { Modal, Card, Image, Button, Icon } from 'semantic-ui-react'
import CompleteMahi from './CompleteMahi'
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
      console.log('then', user)
      if (user) {
        const assigneeName = user.name
        console.log('then', assigneeName)
        this.setState({ assigneeName: assigneeName })
      } else {
        this.setState({ assigneeName: '' })
      }
    })
  }

  render () {
    console.log('data', this.props.data)
    const { title, status, assigner, assignee, assignerId, categoryId, hours, id, description } = this.props.data
    const assigneeId = assignee
    const taskId = id
    const assigneeName = this.state.assigneeName

    const shortDescription = shortenText(description)

    // Sets categoryName to '' if haven't received this.props.categories. Else set categoryName to a category name
    let categoryName = ''
    if (this.props.categories && this.props.categories.length > 0) {
      const category = this.props.categories.find(category => category.id === categoryId)
      categoryName = category.name
    }

    return (
      <>
        <Card>
          <Card.Content size="huge">
            <Image src="/images/avatar01.png" size="small" floated="right" ></Image>
            <Card.Header as='h1'>{title}</Card.Header>
            <Card.Meta as="h3">Assignee <Icon name="user" size="small"></Icon><br/>{assigneeName || 'Not Assigned'}</Card.Meta>
            <Card.Meta as="h3">Status <Icon name="spinner" size="small"></Icon><br/>{status}</Card.Meta>
            <Card.Meta as='h3'>Category <Icon name='columns' size='small'></Icon><br/>{categoryName && categoryName}</Card.Meta>
            <Card.Meta as="h3">Hours <Icon name="time" size="small"></Icon><br/>{hours}</Card.Meta>

            <Card.Description>{shortDescription}</Card.Description>
          </Card.Content>
          <Card.Content>
            <CompleteMahi data={{ assigneeId, assignerId, taskId, hours }}/>
            <SelectOfferingMahi data={{ ...this.props.data, assigneeId, categoryName, assigneeName }}/>
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

const mapStateToProps = state => {
  return ({
    categories: state.categories
  })
}

export default connect(mapStateToProps)(OfferingMahi)