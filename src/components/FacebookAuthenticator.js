import React from 'react';
import { connect } from 'react-redux';
import { userNotLogged, userLogged } from '../redux/actions';
import * as userStatuses from '../constants/userStatuses';

class FacebookAuthenticator extends React.Component {
  constructor(props) {
    super(props);

    this.statusChangeCallback = this.statusChangeCallback.bind(this);
    this.checkLoginState = this.checkLoginState.bind(this);
    this.fetchUserData = this.fetchUserData.bind(this);
  }

  statusChangeCallback(response) {
    if (response.status === 'connected') {
      this.fetchUserData();
    } else if (response.status === 'not_authorized') {
      this.props.onNotLogged();
    } else {
      this.props.onNotLogged();
    }
  }

  checkLoginState() {
    FB.getLoginStatus(function (response) {
      statusChangeCallback(response);
    });
  }

  componentWillMount() {
    let _this = this;

    window.fbAsyncInit = function () {
      FB.init({
        appId: '196066247519614',
        cookie: true,
        xfbml: true,
        version: 'v2.8',
      });

      FB.getLoginStatus(function (response) {
        _this.statusChangeCallback(response);
      });
    };

    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = '//connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

  fetchUserData() {
    var _this = this;
    FB.api('/me?fields=first_name,picture', function (response) {
      _this.props.onLogged(response);
    });
  }

  render() {
    return null;
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onNotLogged: () => {
      dispatch(userNotLogged());
    },

    onLogged: (userData) => {
      dispatch(userLogged(userData));
    },
  };
};

const ConnectedFacebookAuthenticator = connect(
  mapStateToProps,
  mapDispatchToProps
)(FacebookAuthenticator);

export default ConnectedFacebookAuthenticator;
