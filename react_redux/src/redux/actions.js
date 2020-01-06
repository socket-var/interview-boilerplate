import * as actionTypes from "./actionTypes";

export const connectReduxAction = () => {
  return {
    type: actionTypes.BASIC_ACTION,
    payload: {
      message: " A React boilerplate wired by redux and react router"
    }
  };
};
