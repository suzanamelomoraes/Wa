import React, { Component } from 'react'

import { Button, Header, Image, Modal } from 'semantic-ui-react'

import { selectTask } from '../api/tasks'

const userID = 2 //delete after getting connected to Authenticare

class SelectMahi extends Component {

  handleClick = () => {
    const { id } = this.props.details
    const { closeModal } = this.props

    selectTask(id, userID)
    closeModal()
  }

  render () {
    const { details } = this.props

    return (
      <>
        <Modal.Header>{details.category}</Modal.Header>
        <Modal.Content image>
          <Image wrapped size='medium' src={details.image} />
          <Modal.Description>
            <Header as='h1'>{details.title}</Header>
            <p style={{ fontSize: '1.25em' }}>
              {details.description}
            </p>
            <p style={{ fontSize: '1.25em' }}>You can earn {details.hours} hours when you help out {details.assigner}</p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button
            positive
            icon='smile outline'
            labelPosition='right'
            content="Help out!"
            onClick={this.handleClick}
          />
        </Modal.Actions>
      </>
    )
  }
}

export default SelectMahi
