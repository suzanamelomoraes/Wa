import React from 'react'
import { connect } from 'react-redux'
import { Loader } from 'semantic-ui-react'

export class Loading extends React.Component {
  render () {
    return (
    <>
      {this.props.load && <Loader active> loading  </Loader>}
    </>
    )
  }
}

const mapStateToProps = state => {
  return {
    load: state.pending
  }
}

export default connect(mapStateToProps)(Loading)
