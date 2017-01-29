import React from 'react';
import { connect } from 'react-redux';

import * as userStatuses from '../constants/userStatuses';

class Content extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.userStatus === userStatuses.INIT) {
      return <h1>Please wait...</h1>;
    } else if (this.props.userStatus === userStatuses.LOGGED) {
      return <h1>Hi, {this.props.name}</h1>;
    } else {
      return <h1>You need to login</h1>;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    userStatus: state.userStatus,
    name: state.user.firstName,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const ConnectedContent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Content);

export default ConnectedContent;
