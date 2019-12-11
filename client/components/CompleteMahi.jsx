import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { completeTask } from '../api/tasks'

import { getOfferings } from '../actions/tasks'
import { getUser } from '../actions/user'

export class CompleteMahi extends Component {
state = {
  showModal: false,
  assigneeId: '',
  taskId: '',
  hours: ''
}

handleClickButton = (event, callAPI) => {
  event.preventDefault()
  this.setState({
    showModal: false
  })

  if (callAPI) {
    const { taskId, assigneeId, hours } = this.state
    completeTask(taskId, assigneeId, hours)
      .then(() => this.props.getUser())
      .then(() => this.props.getOfferings())
  }
}

componentDidMount () {
  const { taskId, assigneeId, hours } = this.props.data
  this.setState({ taskId, assigneeId, hours })
}

render () {
  const completeBtnColor = this.props.data.assigneeId === null ? 'grey' : 'green'
  return (
<>
<Modal open={this.state.showModal} centered={true} trigger={
  <Button basic floated='right' color={completeBtnColor}
    id="one" data-test="firstBtn" onClick={() => { this.setState({ showModal: this.props.data.assigneeId !== null }) }}>Complete</Button>}>

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
const mapDispatchToProps = {
  getOfferings,
  getUser
}

export default connect(null, mapDispatchToProps)(CompleteMahi)
