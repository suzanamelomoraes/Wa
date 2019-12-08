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
    // const { details, closeModal } = this.props

    return (
      <Modal open={this.state.showModal} centered={true} trigger={
        <Button color="green" basic floated='left'
          id="one" data-test="firstBtn" onClick={() => this.setState({ showModal: true })}>View Details</Button>
      }>

        <Modal.Header>CATEGORY</Modal.Header>
        <Modal.Content image>
          <Image wrapped size='medium' src='/images/avatar01.png' />
          <Modal.Description>
            <Header as='h1'>TITLE</Header>

            <p style={{ fontSize: '1.25em' }}>DESCRIPTION</p>

            <p style={{ fontSize: '1.25em' }}>You can earn 100000000 hour/s when you help out THEASSIGNERGOESHERE</p>
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
