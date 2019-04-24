/* eslint no-console: "off" */

const initialState = {
  stateDataGetting: null,
};


const SET_STATE_DATA_GETTING = 'root/SET_STATE_DATA_GETTING';


export const ActionsRoot = dispatch => ({
  setStateDataGetting: value => dispatch({
    type: SET_STATE_DATA_GETTING,
    payload: value,
  }),
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STATE_DATA_GETTING:
      return {
        ...state,
        stateDataGetting: action.payload,
      };
    default: return state;
  }
};
export default reducer;
