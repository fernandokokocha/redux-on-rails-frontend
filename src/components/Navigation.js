import React from 'react';
import { connect } from 'react-redux';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

import { loginUser, logoutUser } from '../redux/actions';

import * as userStatuses from '../constants/userStatuses';

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.renderNavigation = this.renderNavigation.bind(this);
  }

  renderNavigation() {
    if (this.props.userStatus === userStatuses.LOGGED) {
      return <Nav>
        <NavItem disabled>Logged as {this.props.user.firstName}</NavItem>
        <NavItem onClick={this.props.onLogoutClicked}>Logout</NavItem>
      </Nav>;
    } else {
      return <Nav>
        <NavItem onClick={this.props.onLoginClicked}>Login</NavItem>
      </Nav>;
    }
  }

  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a>Collective dinners</a>
          </Navbar.Brand>
        </Navbar.Header>
        {this.renderNavigation()}
      </Navbar>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userStatus: state.userStatus,
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoginClicked: () => {
      FB.login(function (response) {
        FB.api('/me?fields=first_name,picture', function (response) {
          dispatch(loginUser(response));
        });
      });
    },

    onLogoutClicked: () => {
          FB.logout(function (response) {
            dispatch(logoutUser());
          });
        },
  };
};

const ConnectedNavigation = connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);

export default ConnectedNavigation;
