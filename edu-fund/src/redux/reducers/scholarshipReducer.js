import {FETCH_SCHOLARSHIPS_FAILURE,FETCH_SCHOLARSHIPS_START,FETCH_SCHOLARSHIPS_SUCCESS} from "../actions/actionTypes";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const scholarshipReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SCHOLARSHIPS_START:
      return {
        ...state,
        loading: true,
        error: null,
        items: [],
      };
    case FETCH_SCHOLARSHIPS_SUCCESS:
      return {
        ...state,
        loading:false,
        items: action.payload,
      };
    case FETCH_SCHOLARSHIPS_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default scholarshipReducer;
