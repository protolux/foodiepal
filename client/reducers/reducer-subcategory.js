import {
  GET_SUBCATEGORIES_REQUEST,
  GET_SUBCATEGORIES_SUCCESS,
  GET_SUBCATEGORIES_FAILURE,
  ADD_SUBCATEGORY_REQUEST,
  ADD_SUBCATEGORY_SUCCESS
} from '../actions';

// const INITIAL_STATE = [];
const INITIAL_STATE = {
  isFetching: false,
  data: []
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case GET_SUBCATEGORIES_REQUEST:
    return Object.assign({}, state, {
      isFetching: true
    });
  case GET_SUBCATEGORIES_SUCCESS:
    // return action.payload;
    return Object.assign({}, state, {
      isFetching: false,
      data: action.payload
    });
  case ADD_SUBCATEGORY_REQUEST:
    return state;
  case ADD_SUBCATEGORY_SUCCESS:
    // return action.payload;
    return Object.assign({}, state, {
      data: action.payload
    });
  default:
    return state;
  }
}