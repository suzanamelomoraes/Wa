import React, { Component } from 'react'
import { Button, Header, Image, Modal, Form, Icon } from 'semantic-ui-react'
// import { connect } from 'react-redux'
import { completeTask } from '../api/tasks'


class AcceptMahi extends Component {
state = {
  showModal: false,
  assigneeId: '',
  assignerId: '',
  assigneeName: '',
  taskId: '',
  hours: ''
}

handleClickButton = (event, callAPI) => {
  event.preventDefault()
  this.setState({
    showModal: false
  })
  // Can only COMPELTE task if there's an assignee for that task

  if (callAPI) {
    const { taskId, assigneeId, hours } = this.state
    completeTask(taskId, assigneeId, hours)
    // TESTING VERSION:   completeTask(1, 3, 1, 2)  <--  THIS WORKS
  }
}

componentDidMount () {
  const { taskId, assignerId, assigneeId, hours } = this.props.data
  this.setState({ taskId, assignerId, assigneeId, hours })
}

render () {
  const completeBtnColor = this.state.assigneeId === '' ? 'grey' : 'green'
  return (

    <>
      <Modal open={this.state.showModal} centered={true} trigger={
        <Button basic floated='right' color={completeBtnColor}
          id="one" data-test="firstBtn" onClick={() => { this.setState({ showModal: this.state.assigneeId !== '' }) }}>Complete</Button>
      }>

        <Modal.Header style={{ fontSize: '2rem' }}>Confirm</Modal.Header>
        <Modal.Content image>
          <Modal.Description>
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
    </>
  )
}
}

export default AcceptMahi

// connect()()
