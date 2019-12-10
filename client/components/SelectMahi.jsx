import React, { Component } from 'react'
import { connect } from 'react-redux'
<<<<<<< HEAD

import { Button, Header, Image, Modal } from 'semantic-ui-react'

=======
import { Button, Header, Image, Modal } from 'semantic-ui-react'

>>>>>>> 311e3a51125b9c095819881f48d2131ef37b4929
import { selectTask } from '../api/tasks'
import { getTasks } from '../actions/tasks'
import { showNotification } from '../actions/notification'
import { IfAuthenticated } from './Authenticated'

export class SelectMahi extends Component {
  handleClick = () => {
    const { taskId } = this.props.details
    const { closeModal, getTasks, showNotification } = this.props

    selectTask(taskId)
<<<<<<< HEAD
      .then(() => getTasks())
      .then(() => showNotification('This Mahi has been added to your dashboard'))
      .then(() => closeModal())
  }

  render () {
=======
    getTasks()
    showNotification('This Mahi has been added to your dashboard')
    closeModal()
  }

  render() {
>>>>>>> 311e3a51125b9c095819881f48d2131ef37b4929
    const { details, closeModal } = this.props

    return (
      <>
        <Modal.Header>{details.category}</Modal.Header>

        <Modal.Content image>
          <Image wrapped size='medium' src={details.image} />

          <Modal.Description>
            <Header as='h1'>{details.title}</Header>

            <p style={{ fontSize: '1.25em' }}>{details.description}</p>

            <p style={{ fontSize: '1.25em' }}>
<<<<<<< HEAD
              You can earn {details.hours} hour/s when you help out{' '}
              {details.assignerName}
=======
              You can earn {details.hours} hour/s when you help out {details.assignerName}
>>>>>>> 311e3a51125b9c095819881f48d2131ef37b4929
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
            <Button
              positive
              icon='smile outline'
              labelPosition='right'
              content='Help out!'
              onClick={this.handleClick}
            />
          </IfAuthenticated>
        </Modal.Actions>
      </>
    )
  }
}

const mapDispatchToProps = {
  getTasks,
  showNotification
}

export default connect(null, mapDispatchToProps)(SelectMahi)
