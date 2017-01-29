import * as actionTypes from './actionTypes';
import * as userStatuses from '../constants/userStatuses';

const initialState = {
  userStatus: userStatuses.INIT,
  user: {
    firstName: '',
    pictureURL: '',
  },
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.USER_NOT_LOGGED:
      return {
        userStatus: userStatuses.NOT_LOGGED,
        user: {
          firstName: '',
          pictureURL: '',
        },
      };
    case actionTypes.USER_LOGGED:
      return {
        userStatus: userStatuses.LOGGED,
        user: parseUserData(action.userData),
      };
    case actionTypes.LOGOUT:
      return {
        userStatus: userStatuses.NOT_LOGGED,
        user: {
          firstName: '',
          pictureURL: '',
        },
      };
    case actionTypes.LOGIN:
      return {
        userStatus: userStatuses.LOGGED,
        user: parseUserData(action.userData),
      };
    default:
      return state;
  }
}

function parseUserData(userData) {
  return {
      firstName: userData.first_name,
      pictureUrl: userData.picture.data.url,
    };
}
