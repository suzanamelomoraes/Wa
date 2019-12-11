import React, { Component } from 'react'

import { Button, Header, Image, Modal } from 'semantic-ui-react'

import { connect } from 'react-redux'

import { getOfferings } from '../actions/tasks'
import { getUser } from '../actions/user'
import { deleteMahi } from '../api/tasks'

export class SelectOfferingMahi extends Component {
_isMounted = false
constructor (props) {
  super(props)
  this.state = {
    showModal: false
  }
}
componentDidMount () {
  this._isMounted = true
}

  toggleModal =() => {
    this.setState({ showModal: false })
  }

  handleClick = () => {
    if (this._isMounted === true) {
      const { id, assignerId, hours } = this.props.data
      deleteMahi({ id, assignerId, hours })
        .then(() => this.props.getUser())
        .then(() => this.props.getOfferings())
        .then(() => this.toggleModal())
    }
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
            color ="red"
            content="Delete"
            onClick={() => this.handleClick()}>
          </Button>
          <Button
            basic
            color ="green"
            content="Close"
            onClick={() => this.toggleModal()}>
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
