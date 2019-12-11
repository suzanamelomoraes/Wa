import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Message } from 'semantic-ui-react'

export class Notification extends Component {
  render () {
    return (
      <>
        {this.props.notification ? (
          <Message positive size='large' style={{ marginLeft: 25, marginTop: 50, height: 50 }}>
            <Message.Header>{this.props.notification}</Message.Header>
          </Message>
        ) : null}
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    notification: state.notification
  }
}

export default connect(mapStateToProps)(Notification)
