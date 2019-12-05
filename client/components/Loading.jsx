import React from 'react'
import { connect } from 'react-redux'
import { Loader } from 'semantic-ui-react'

export class Loading extends React.Component {
  render () {
    return (
    <>
      {this.props.load && <Loader acitve> this is a loader </Loader>}

    </>
    )
  }
}

const mapStateToProps = state => {
  return {
    load: state.loading
  }
}

export default connect(mapStateToProps)(Loading)
