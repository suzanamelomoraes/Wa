import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Icon, Popup, Button } from 'semantic-ui-react'
import MahiPopUp from './MahiPopup'

import { selectTask } from '../api/tasks'
import { showNotification } from '../actions/notification'
import { IfAuthenticated } from './Authenticated'
import { changeActiveTask, getTasks } from '../actions/tasks'

export class MahiMarker extends Component {
  handleClick = () => {
    const { taskId, changeActiveTask, getTasks, showNotification } = this.props

    selectTask(taskId)
      .then(() => getTasks())
      .then(() => showNotification('This Mahi has been added to your dashboard'))
      .then(() => changeActiveTask(null))
  }

  handleOpen = () => {
    const { taskId, changeActiveTask } = this.props
    changeActiveTask(taskId)
  }

  render() {
    const { taskId, activeIndex, changeActiveTask } = this.props

    return (
      <Popup
        onOpen={this.handleOpen}
        open={taskId === activeIndex}
        trigger={<Icon name='map marker alternate' size='big' />}
      >
        <MahiPopUp details={this.props} closePopup={changeActiveTask} />
        <IfAuthenticated>
          <Button
            positive
            icon='smile outline'
            labelPosition='right'
            content='Help out!'
            floated='right'
            style={{ marginTop: '1em' }}
            onClick={this.handleClick}
          />
        </IfAuthenticated>
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
  getTasks,
  showNotification
}

export default connect(mapStateToProps, mapDispatchToProps)(MahiMarker)
