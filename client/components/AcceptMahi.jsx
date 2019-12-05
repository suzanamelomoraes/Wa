import React, { Component } from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

class AcceptMahi extends Component {
  render () {
    return (

      <div data-title="testingtestingtesting" style={{ margin: '5rem' }}>
        <Modal trigger={<Button>Show Modal</Button>} centered={false}>
          <Modal.Header>Select a Photo</Modal.Header>
          <Modal.Content image>
            <Image wrapped size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />
            <Modal.Description>
              <Header>Default Profile Image</Header>
              <p>
  							Weve found the following gravatar image associated with your e-mail   			address.
              </p>
              <p>Is it okay to use this photo?</p>
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}

export default AcceptMahi
