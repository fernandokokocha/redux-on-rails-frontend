import { INCREMENT, DECREMENT, increment, decrement } from './actions';

const initialState = {
  number: 0,
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return { number: state.number + 1 };
    case DECREMENT:
      return { number: state.number - 1 };
    default:
      return state;
  }
}
