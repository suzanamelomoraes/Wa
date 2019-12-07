import React, { Component } from 'react'
import { Icon, Popup } from 'semantic-ui-react'

import MahiPopUp from './MahiPopup'

class MahiMarker extends Component {
  state = {
    modalVisible: false
  }

  toggleModalView = () => {
    this.setState({
      modalVisible: !this.state.modalVisible
    })
  }

  render () {

    
    return (
      <Popup
      trigger={
        <Icon 
        name='map marker alternate' 
        size='big'
        onClick={this.toggleModalView}
      />}
      on='click'
      >
        <MahiPopUp details={this.props}/>
      </Popup>
    )
  }
}

export default MahiMarker;
