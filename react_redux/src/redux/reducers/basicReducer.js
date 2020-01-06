import * as actionTypes from "../actionTypes";

const initialState = { message: "" };

export default (state = Object.assign({}, initialState), action) => {
  switch (action.type) {
    case actionTypes.BASIC_ACTION:
      return { message: action.payload.message };
    default:
      return state;
  }
};
