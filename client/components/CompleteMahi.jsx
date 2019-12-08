import React, { Component } from 'react'
import { Button, Header, Image, Modal, Form, Icon } from 'semantic-ui-react'
// import { connect } from 'react-redux'
import { completeTask } from '../api/tasks'

class AcceptMahi extends Component {
state = {
  showModal: false,
  assigneeId: '',
  assignerId: '',
  taskId: '',
  hours: ''
}

handleClickButton = (event, callAPI) => {
  event.preventDefault()
  this.setState({
    showModal: false
  })
  const { taskId, assignerId, assigneeId, hours } = this.state
  // Can only COMPELTE task if there's an assignee for that task

  if (callAPI && assigneeId !== '') {
    completeTask(taskId, assignerId, 1, hours)
    // TESTING VERSION:   completeTask(1, 3, 1, 2)  <--  THIS WORKS
  }
}

render () {
  return (
    <Modal open={this.state.showModal} centered={true} trigger={
      <Button color="green" basic floated='right'
        id="one" data-test="firstBtn" onClick={() => this.setState({ showModal: true })}>Completed</Button>
    }>
      <Modal.Header style={{ fontSize: '2rem' }}>Confirm</Modal.Header>
      <Modal.Content image>
        {/* <Image wrapped size='medium' src='/images/avatar01.png' /> */}
        <Modal.Description>
          {/* <Header style={{ fontSize: '2rem' }}>Teach me to swim</Header> */}
          <div style={{ fontSize: '1.25rem' }}>
            <p>
Are you sure your task is completed?
            </p>
          </div>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button
          negative
          icon='frown outline'
          labelPosition='right'
          content="No, I am not"
          size="large"
          onClick={(evt) => this.handleClickButton(evt, 0)}
          data-test="secondBtnNegative"
        />
        <Button
          positive
          icon='smile outline'
          labelPosition='right'
          content="Yes, I am"
          size="large"
          onClick={(evt) => this.handleClickButton(evt, 1)}
          data-test="secondBtnPositive"
        />
      </Modal.Actions>
    </Modal>
  )
}
}

export default AcceptMahi

// connect()()
