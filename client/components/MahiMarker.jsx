import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Icon, Popup, Button } from 'semantic-ui-react'
import MahiPopUp from './MahiPopup'

import { selectTask } from '../api/tasks'
import { changeActiveTask } from '../actions/tasks'

export class MahiMarker extends Component {

  handleClick = () => {
    const userID = 2 //delete after getting connected to Authenticare
    const { taskId } = this.props

    selectTask(taskId, userID)
  }

  handleOpen = () => {
    const { taskId, changeActiveTask } = this.props

    changeActiveTask(taskId)
  }

  render () {
    return (
      <Popup
      trigger={
        <Icon 
        name='map marker alternate' 
        size='big'
      />}
      on='click'
      onOpen={this.handleOpen}
      >
        <MahiPopUp details={this.props}/>
        <Button
            positive
            icon='smile outline'
            labelPosition='right'
            content='Help out!'
            floated='right'
            style={{marginTop: '1em'}}
            onClick={this.handleClick}
          />
      </Popup>
    )
  }
}

const mapDispatchToProps = {
  changeActiveTask
}

export default connect (null, mapDispatchToProps)(MahiMarker)