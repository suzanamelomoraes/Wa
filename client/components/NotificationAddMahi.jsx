import React, { Component } from "react";
import { connect } from "react-redux";
import { Message, Container } from "semantic-ui-react";

export class NotificationAddMahi extends Component {
  render() {
    return (
      <Container>
        {this.props.notification && (
          <Message negative floating>
            <Message.Header>
              Mahi has been added to your dashboard
            </Message.Header>
            <p>{this.props.notification}</p>
          </Message>
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    notification: state.notification
  };
};

export default connect(mapStateToProps)(NotificationAddMahi);
