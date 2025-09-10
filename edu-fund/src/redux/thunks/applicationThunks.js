import {
  submitApplicationFailure,
  submitApplicationRequest,
  submitApplicationSuccess,
  resetFormData
} from "../actions/applicationActions";

export const submitApplication = () => {
  return (dispatch, getState) => {
    dispatch(submitApplicationRequest());

    const formData = getState().application;
    setTimeout(() => {
      console.log("Form Data: ", formData);
      dispatch(submitApplicationSuccess(formData));
      dispatch(resetFormData());
    }, 1000);
    // dispatch(submitApplicationFailure(error))
  };
};
