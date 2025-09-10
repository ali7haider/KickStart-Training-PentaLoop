import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchScholarships } from "../redux/thunks/scholarshipThunks";
import ScholarshipContainer from "../containers/scholarshipContainer";
const ScholarshipPage = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.scholarships);

  useEffect(() => {
    dispatch(fetchScholarships());
  }, [dispatch]);
  return (
    <div>
      <h1>Available Scholarship</h1>
      <ScholarshipContainer
        scholarships={items}
        loading={loading}
        error={error}
      />
    </div>
  );
};

export default ScholarshipPage;
    