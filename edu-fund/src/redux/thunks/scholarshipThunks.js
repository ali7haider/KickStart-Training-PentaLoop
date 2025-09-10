import {
  fetchScholarshipFailure,
  fetchScholarshipSuccess,
  fetchScholarshipRequest,
} from "../actions/scholarshipActions";

export const fetchScholarships = () => {
  return (dispatch) => {
    dispatch(fetchScholarshipRequest());
    setTimeout(() => {
      const mockScholarships = [{ id: 1, name: "Test Scholarship" }];
      dispatch(fetchScholarshipSuccess(mockScholarships));
    }, 1000);
    // dispatch(fetchScholarshipFailure(error));
  };
};
