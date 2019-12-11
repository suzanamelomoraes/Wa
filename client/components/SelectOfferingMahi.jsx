import React, { Component } from 'react'

import { Button, Header, Image, Modal } from 'semantic-ui-react'

import { connect } from 'react-redux'

export class SelectOfferingMahi extends Component {
  state = {
    showModal: false
  }

  handleClick = () => {
    this.setState({ showModal: false })
  }
  render () {
    const { title, categoryName, hours, description } = this.props.data
    return (
      <Modal open={this.state.showModal} centered={true} trigger={
        <Button color="green" basic floated='left'
          id="one" data-test="firstBtn" onClick={() => this.setState({ showModal: true })}>View Details</Button>
      }>

        <Modal.Header>{categoryName}</Modal.Header>
        <Modal.Content image>
          <Image wrapped size='medium' src='/images/avatar01.png' />
          <Modal.Description>
            <Header as='h1'>{title}</Header>
            <p style={{ fontSize: '1.25em' }}>{description}</p>
            <p style={{ fontSize: '1.25em' }}>You are offering <b><u>{hours} hour(s)</u></b> for this mahi.</p>
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

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(SelectOfferingMahi)
