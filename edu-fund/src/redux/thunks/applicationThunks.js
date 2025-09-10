import {
  submitApplicationFailure,
  submitApplicationRequest,
  submitApplicationSuccess,
} from "../actions/applicationActions";

export const submitApplication = () => {
  return (dispatch, getState) => {
    dispatch(submitApplicationRequest());

    const formData = getState().application;
    setTimeout(() => {
      console.log("Form Data: ", formData);
      dispatch(submitApplicationSuccess(formData));
    }, 2000);
    // dispatch(submitApplicationFailure(error))
  };
};
