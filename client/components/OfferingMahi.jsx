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

    const shortDescription = shortenText(description)

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
            <Card.Header as='h1'>{title}</Card.Header>
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
    categories: state.categories,

  })
}

export default connect(mapStateToProps)(OfferingMahi)
