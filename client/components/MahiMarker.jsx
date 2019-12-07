import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Icon, Popup, Button } from 'semantic-ui-react'
import MahiPopUp from './MahiPopup'

import { selectTask } from '../api/tasks'
import { changeActiveTask } from '../actions/tasks'

export class MahiMarker extends Component {

  handleClick = () => {
    const userID = 2 //delete after getting connected to Authenticare
    const { taskId, changeActiveTask } = this.props

    selectTask(taskId, userID)
    changeActiveTask(null)
  }

  handleOpen = () => {
    const { taskId, changeActiveTask } = this.props

    changeActiveTask(taskId)
  }

  render () {
    const { taskId, activeIndex } = this.props

    return (
      <Popup
        trigger={
          <Icon 
          name='map marker alternate' 
          size='big'
        />}
        onOpen={this.handleOpen}
        open={(taskId === activeIndex) ? true : false}
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

const mapStateToProps = state => {
  return {
    activeIndex: state.tasks.activeIndex
  }
}

const mapDispatchToProps = {
  changeActiveTask
}

export default connect (mapStateToProps, mapDispatchToProps)(MahiMarker)