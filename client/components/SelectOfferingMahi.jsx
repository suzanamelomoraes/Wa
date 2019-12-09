import React, { Component } from 'react'

import { Button, Header, Image, Modal } from 'semantic-ui-react'

import { selectTask } from '../api/tasks'

export class SelectOfferingMahi extends Component {
  state = {
    showModal: false
  }

  handleClick = () => {
    this.setState({ showModal: false })
  }
  render () {
    const { title, assigner, assignee, assignerId, assigneeId, categoryName, hours, taskId, description, assigneeName } = this.props.data

    return (
      <Modal open={this.state.showModal} centered={true} trigger={
        <Button color="green" basic floated='left'
          id="one" data-test="firstBtn" onClick={() => this.setState({ showModal: true })}>View Details</Button>
      }>

        <Modal.Header>{categoryName}</Modal.Header>
        <Modal.Content image>
          <Image wrapped size='medium' src='/images/avatar01.png' />
          <Modal.Description>
            <Header as='h1'>{title}</Header>
            <p style={{ fontSize: '1.25em' }}>{description}</p>
            <p style={{ fontSize: '1.25em' }}>You can earn {hours} hour/s when you help out {assigneeName}</p>
          </Modal.Description>
        </Modal.Content>

        <Modal.Actions>
          <Button
            basic
            color ="green"
            content="Close"
            onClick={this.handleClick}>
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

export default SelectOfferingMahi
