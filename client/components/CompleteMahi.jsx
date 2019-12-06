import React, { Component } from 'react'
import { Button, Header, Image, Modal, Form, Icon } from 'semantic-ui-react'
// import { connect } from 'react-redux'

class AcceptMahi extends Component {
state = {
  showModal: false
}

handleCreateButton = (event) => {
  event.preventDefault()
  this.setState({
    showModal: false
  })
}

render () {
  return (

    <div data-title="testingtestingtesting" style={{ margin: '5rem' }}>
      <Modal open={this.state.showModal} trigger={<Button
        id="one" data-test="one" onClick={() => this.setState({ showModal: true })}>Completed</Button>} centered={true}>
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
            onClick={(evt) => this.handleCreateButton(evt)}
            id="bobbyjones"
          />
          <Button
            positive
            icon='smile outline'
            labelPosition='right'
            content="Yes, I am"
            size="large"
            onClick={(evt) => this.handleCreateButton(evt)}
          />
        </Modal.Actions>
      </Modal>
    </div>
  )
}
}

export default AcceptMahi

// connect()()
