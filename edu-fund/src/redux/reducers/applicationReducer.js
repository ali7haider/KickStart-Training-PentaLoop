import {SAVE_FORM_DATA,NEXT_STEP,PREV_STEP,SUBMIT_APPLICATION_FAILURE,SUBMIT_APPLICATION_SUCCESS,SUBMIT_APPLICATION_START,RESET_FORM_DATA} from "../actions/actionTypes";

const initialState = {
  currentStep: 1,
  isSubmitting: false,
  submitError: null,
  formData: {
    step1: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    step2: {
      gpa: "",
      major: "",
      university: "",
    },
    step3: {
      essay: "",
      transcriptUploaded: false,
      recommendationLetterUploaded: false,
    },
  },
};

const applicationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_FORM_DATA:
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.payload.step]: {
            ...state.formData[action.payload.step],
            ...action.payload.data,
          },
        },
      };
    case NEXT_STEP:
      return {
        ...state,
        currentStep: state.currentStep + 1,
      };
    case PREV_STEP:
      return {
        ...state,
        currentStep: state.currentStep - 1,
      };
    case SUBMIT_APPLICATION_START:
      return {
        ...state,
        isSubmitting: true,
        submitError: null,
      };
    case SUBMIT_APPLICATION_SUCCESS:
      return {
        ...state,
        isSubmitting: false,
      };
    case SUBMIT_APPLICATION_FAILURE:
      return {
        ...state,
        isSubmitting: false,
        submitError: action.payload,
      };
    case RESET_FORM_DATA:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default applicationReducer;
