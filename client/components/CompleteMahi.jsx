import React, { Component } from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

class AcceptMahi extends Component {
  render () {
    return (

      <div data-title="testingtestingtesting" style={{ margin: '5rem' }}>
        <Modal trigger={<Button>Confirm Completion</Button>} centered={true}>
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
            />
            <Button
              positive
              icon='smile outline'
              labelPosition='right'
              content="Yes, I am"
            />
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

export default AcceptMahi
