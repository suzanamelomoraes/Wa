import React, { Component } from 'react'

import { Button, Header, Image, Modal, Icon } from 'semantic-ui-react'

export class SelectVolunteerMahi extends Component {
  state = {
    showModal: false
  }

  handleClick = () => {
    this.setState({ showModal: false })
  }

  render () {
    const { title, assignerName, category, hours, description, assignerMobile, assignerEmail,assignerImage } = this.props.data

    return (
      <Modal open={this.state.showModal} centered={true} trigger={
        <Button color="green" basic floated='left'
          id="one" data-test="firstBtn" onClick={() => this.setState({ showModal: true })}>View Details</Button>
      }>

        <Modal.Header>{category}</Modal.Header>
        <Modal.Content image>
          <Image wrapped size='medium' src={assignerImage} />
          <Modal.Description>
            <Header as='h1' icon>{title}</Header>

            <p style={{ fontSize: '1.25em' }}>{description}</p>

            <p style={{ fontSize: '1.25em' }}>You will earn <b><u>{hours} hour(s)</u></b> when you complete this mahi for <b><u>{assignerName}</u></b></p>
            <br/>
            <p style={{ fontSize: '1.25em', margin: '0px' }}> Get in touch </p>
            <Icon name="call" style={{ fontSize: '1.25em' }}/>: <strong>{assignerMobile}</strong>
            <br/>
            <Icon name="mail" style={{ fontSize: '1.25em' }}/>: <strong>{assignerEmail}</strong>
          </Modal.Description>
        </Modal.Content>

        <Modal.Actions>
          <Button
            basic
            color ="green"
            content="Close"
            onClick={this.handleClick}>
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

export default SelectVolunteerMahi
