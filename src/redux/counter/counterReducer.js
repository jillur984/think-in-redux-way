import { INCREMENT, DECREMENT } from "./actionTypes";

const initialState = {
  value: 100,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        payload: state.value + 1,
      };
    case DECREMENT:
      return {
        ...state,
        payload: state.value - 1,
      };

    default:
      return state;
  }
};

export default counterReducer;
