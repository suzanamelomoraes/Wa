import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Modal, Card, Image, Button, Icon } from 'semantic-ui-react'

import SelectMahi from './SelectMahi'
import { runMapActions } from '../actions/tasks'

export class MahiSummary extends Component {
  state = {
    modalVisible: false
  }

  toggleModalView = () => {
    const { modalVisible } = this.state

    this.setState({
      modalVisible: !modalVisible
    })
  }

  handleClick = () => {
    const { taskId, latitude, longitude, runMapActions } = this.props
    const center = {
      lat: latitude,
      lng: longitude
    }

    runMapActions(center, taskId)
  }

  render () {
    const {
      taskId,
      title,
      category,
      hours,
      description,
      image,
      assignerName,
      activeIndex,
      mapVisible
    } = this.props
    const { modalVisible } = this.state
    const shortTitle = shortenText(title, 43)
    const shortDescription = shortenText(description, 120)


    return (
      <Card
        color={taskId === activeIndex ? 'orange' : 'grey'}
        style={{ textAlign: 'left' }}
      >
        <Card.Content>
          <Image floated='right' size='small' src={image} id='mahiImage' />

          <Card.Header as='h1' id='mahiTitle'>
            {shortTitle}
          </Card.Header>

          <Card.Meta as='h3' id='mahiCategory'>
            <u>Category</u> <Icon name='columns' size='small'></Icon>
            <br />
            <span>{category}</span>
          </Card.Meta>

          <Card.Meta as='h3'>
            <u>Hours</u>
            <Icon name='time' size='small'></Icon>
            <br />
            <span id='mahiHours'>{hours} hours</span>
          </Card.Meta>

          <Card.Meta as='h3' id='mahiAssigner'>
            <u>Needed by</u>
            <br />
            <span>{assignerName}</span>
          </Card.Meta>

          <Card.Description id='mahiDescription'>
            {shortDescription}
          </Card.Description>
        </Card.Content>

        <Card.Content textAlign='center' extra>
          <Modal
            trigger={
              mapVisible ? (
                <Button basic color='green' onClick={this.handleClick}>
                  View in Map
                </Button>
              ) : (
                <Button basic color='green' onClick={this.toggleModalView}>
                  View Detail
                </Button>
              )
            }
            open={modalVisible}
          >
            <SelectMahi
              details={this.props}
              closeModal={this.toggleModalView}
            />
          </Modal>
        </Card.Content>
      </Card>
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
  return {
    activeIndex: state.activeIndex
  }
}

const mapDispatchToProps = {
  runMapActions
}

export default connect(mapStateToProps, mapDispatchToProps)(MahiSummary)
