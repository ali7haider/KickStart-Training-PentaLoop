import * as types from "../actions/actionTypes";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const scholarshipReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_SCHOLARSHIPS_START:
      return {
        ...state,
        loading: true,
        error: null,
        items: [],
      };
    case types.FETCH_SCHOLARSHIPS_SUCCESS:
      return {
        ...state,
        loading:false,
        items: action.payload,
      };
    case types.FETCH_SCHOLARSHIPS_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default scholarshipReducer;
