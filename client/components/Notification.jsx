import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Message } from 'semantic-ui-react'

export class NotificationAddMahi extends Component {
  render () {
    return (
      <>

      {this.props.notification
        ? <Message positive floating style={{ marginTop: 40, height: 50 }}>
          <Message.Header>
            {this.props.notification}
          </Message.Header>

        </Message>
        : null
      }
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    notification: state.notification
  }
}

export default connect(mapStateToProps)(NotificationAddMahi)
