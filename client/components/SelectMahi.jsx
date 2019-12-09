import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Button, Header, Image, Modal } from 'semantic-ui-react'

import { IfAuthenticated } from './Authenticated'

import { selectTask } from '../api/tasks'
import { getTasks } from '../actions/tasks'

export class SelectMahi extends Component {
  handleClick = () => {
    const { taskId } = this.props.details
    const { closeModal, getTasks } = this.props

    selectTask(taskId)
    getTasks()
    closeModal()
  }

  render () {
    const { details, closeModal } = this.props

    return (
      <>
        <Modal.Header>{details.category}</Modal.Header>

        <Modal.Content image>
          <Image wrapped size='medium' src={details.image} />
          <Modal.Description>
            <Header as='h1'>{details.title}</Header>

            <p style={{ fontSize: '1.25em' }}>{details.description}</p>

            <p style={{ fontSize: '1.25em' }}>You can earn {details.hours} hour/s when you help out {details.assignerName}</p>
          </Modal.Description>
        </Modal.Content>

        <Modal.Actions>

          <Button
            negative
            icon='close'
            labelPosition='right'
            content="Close"
            onClick={closeModal}
          />
          <IfAuthenticated>
            <Button
              positive
              icon='smile outline'
              labelPosition='right'
              content="Help out!"
              onClick={this.handleClick}
            />
          </IfAuthenticated>
        </Modal.Actions>
      </>
    )
  }
}

const mapDispatchToProps = {
  getTasks
}

export default connect(null, mapDispatchToProps)(SelectMahi)
