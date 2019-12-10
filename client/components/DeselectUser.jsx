import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { deselectTask } from '../api/tasks'
import { getVolunteering } from '../actions/tasks'

export class DeselectUser extends React.Component {
  state = {
    showModal: false,
    id: 2
  }

  handleClickButton = (event, callAPI) => {
    event.preventDefault()
    this.setState({
      showModal: false
    })
    if (callAPI) {
      deselectTask(this.props.id)
        .then(this.props.getVolunteering())
    }
  }
  render () {
    return (
      <Modal open={this.state.showModal} centered={true} trigger={
        <Button color="red" basic floated='right'
          id="one" data-test="firstBtn" onClick={() => this.setState({ showModal: true })}>Deselect</Button>
      }>
        <Modal.Header style={{ fontSize: '2rem' }}>Confirm</Modal.Header>
        <Modal.Content image>
          <Modal.Description>
            <div style={{ fontSize: '1.25rem' }}>
              <p>
                Are you sure you want to leave this mahi?<br></br>
                The mahi will be added back to the list for the community
              </p>
            </div>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button
            negative
            icon='times'
            labelPosition='right'
            content="Close"
            size="large"
            onClick={(evt) => this.handleClickButton(evt, 0)}
            data-test="secondBtnNegative"
          />
          <Button
            positive
            icon='check'
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

const mapDispatchToProps = {
  getVolunteering
}
export default connect(null, mapDispatchToProps)(DeselectUser)
