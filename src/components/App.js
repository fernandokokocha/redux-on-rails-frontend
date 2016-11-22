import React from 'react';
import { connect } from 'react-redux'
import { increment, decrement } from '../redux/actions'

class App extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onIncrement}>Increment</button>
        <button onClick={this.props.onDecrement}>Decrement</button>
        Number is: {this.props.number}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    number: state.number
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => {
      dispatch(increment())
    },
    onDecrement: () => {
      dispatch(decrement())
    }
  }
}

const AppConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppConnected;
