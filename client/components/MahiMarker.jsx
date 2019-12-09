import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Icon, Popup, Button } from 'semantic-ui-react'
import MahiPopUp from './MahiPopup'

import { selectTask } from '../api/tasks'
import { changeActiveTask } from '../actions/tasks'
import { getTasks } from '../actions/tasks'

export class MahiMarker extends Component {

  handleClick = () => {
    const userID = 2 //delete after getting connected to Authenticare
    const { taskId, changeActiveTask, getTasks } = this.props

    selectTask(taskId, userID)
    changeActiveTask(null)
    getTasks()
  }

  handleOpen = () => {
    const { taskId, changeActiveTask } = this.props

    changeActiveTask(taskId)
  }

  render () {
    const { taskId, activeIndex, changeActiveTask } = this.props

    return (
      <Popup
        onOpen={this.handleOpen}
        open={(taskId === activeIndex) ? true : false}
        trigger={
          <Icon 
            name='map marker alternate' 
            size='big'
          />
        }
      >
        <MahiPopUp details={this.props} closePopup={changeActiveTask}/>
        <Button
          positive
          icon='smile outline'
          labelPosition='right'
          content='Help out!'
          floated='right'
          style={{marginTop: 75}}
          onClick={this.handleClick}
        />
      </Popup>
    )
  }
}

const mapStateToProps = state => {
  return {
    activeIndex: state.activeIndex
  }
}

const mapDispatchToProps = {
  changeActiveTask,
  getTasks
}

export default connect(mapStateToProps, mapDispatchToProps)(MahiMarker)