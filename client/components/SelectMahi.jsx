import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Button, Header, Image, Modal } from 'semantic-ui-react'

import { selectTask } from '../api/tasks'
import { getTasks } from '../actions/tasks'
import { showNotification } from '../actions/notification'
import { IfAuthenticated } from './Authenticated'

export class SelectMahi extends Component {
  handleClick = () => {
    const { taskId } = this.props.details
    const { closeModal, getTasks, showNotification } = this.props

    selectTask(taskId)
      .then(() => closeModal())
      .then(() => showNotification('This Mahi has been added to your dashboard'))
      .then(() => getTasks())
  }

  render () {
    const { details, closeModal, userId } = this.props

    return (
      <>
        <Modal.Header>{details.category}</Modal.Header>

        <Modal.Content image>
          <Image wrapped size='medium' src={details.image} />

          <Modal.Description>
            <Header as='h1'>{details.title}</Header>

            <p style={{ fontSize: '1.25em' }}>{details.description}</p>

            <p style={{ fontSize: '1.25em' }}>
              You can earn <b><u>{details.hours} hour(s)</u></b> when you help out {details.assignerName}
            </p>
          </Modal.Description>
        </Modal.Content>

        <Modal.Actions>
          <Button
            negative
            icon='close'
            labelPosition='right'
            content='Close'
            onClick={closeModal}
          />

          <IfAuthenticated>
            {(userId === details.assignerId)
              ? <p>You created this mahi</p>
              : <Button
                positive
                icon='smile outline'
                labelPosition='right'
                content='Help out!'
                onClick={this.handleClick}
              />
            }
          </IfAuthenticated>
        </Modal.Actions>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    userId: state.user.id
  }
}

const mapDispatchToProps = {
  getTasks,
  showNotification
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectMahi)
