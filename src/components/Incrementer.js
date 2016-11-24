import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../redux/actions';

import { Button } from 'react-bootstrap';

const buttonStyle = { display: 'block' };

class Incrementer extends React.Component {
  render() {
    return (
      <div>
        <Button bsStyle="primary" onClick={this.props.onIncrement} style={buttonStyle}>Increment</Button>
        <Button bsStyle="danger" onClick={this.props.onDecrement} style={buttonStyle}>Decrement</Button>
        Number is: {this.props.number}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { 
    number: state.number
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => {
      dispatch(increment());
    },

    onDecrement: () => {
      dispatch(decrement());
    },
  };
};

const IncrementerConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(Incrementer);

export default IncrementerConnected;
