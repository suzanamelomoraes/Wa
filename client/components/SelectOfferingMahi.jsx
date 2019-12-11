import React, { Component } from 'react'

import { Button, Header, Image, Modal } from 'semantic-ui-react'

import { connect } from 'react-redux'

import { getOfferings } from '../actions/tasks'
import { getUser } from '../actions/user'
import { deleteMahi } from '../api/tasks'

class SelectOfferingMahi extends Component {
  state = {
    showModal: false
  }

  hideModal = () => {
    this.setState({ showModal: false })
  }

  showModal = () => {
    this.setState({ showModal: true })
  }

  handleClick = () => {
    const { id, assignerId, hours } = this.props.data
    const { getUser, getOfferings } = this.props

    deleteMahi({ id, assignerId, hours })
      .then(getUser)
      .then(this.hideModal)
      .then(getOfferings)
  }

  render () {
    const { title, categoryName, hours, description } = this.props.data
    return (
      <Modal open={this.state.showModal} centered={true} trigger={
        <Button color="green" basic floated='left'
          id="one" data-test="firstBtn" onClick={this.showModal}>View Details</Button>
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
            color ="red"
            content="Delete"
            onClick={this.handleClick}>
          </Button>
          <Button
            basic
            color ="green"
            content="Close"
            onClick={this.hideModal}>
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

const mapDispatchToProps = {
  getOfferings,
  getUser
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectOfferingMahi)
