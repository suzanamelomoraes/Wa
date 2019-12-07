import React, { Component } from 'react'
import { Icon, Popup, Button } from 'semantic-ui-react'

import MahiPopUp from './MahiPopup'

import { selectTask } from '../api/tasks'

class MahiMarker extends Component {

  handleClick = () => {
    const userID = 2 //delete after getting connected to Authenticare
    const { taskId } = this.props

    selectTask(taskId, userID)
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

export default MahiMarker;
