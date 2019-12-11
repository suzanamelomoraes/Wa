import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Message, Container } from 'semantic-ui-react'

export class Error extends Component {
  render () {
    return (
      <Container style={{margin: '10rem'}} >

        {this.props.error &&
        <Message negative floating>
          <Message.Header>
           Something seems to have gone wrong!
          </Message.Header>
          <p>{this.props.error}</p>
        </Message>

        }
      </Container>
    )
  }
}
const mapStateToProps = state => {
  return {
    error: state.error
  }
}
export default connect(mapStateToProps)(Error)
