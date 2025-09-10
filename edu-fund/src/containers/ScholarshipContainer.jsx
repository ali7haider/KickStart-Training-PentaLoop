import { useNavigate } from "react-router-dom";

const ScholarshipContainer = ({ scholarships, loading, error }) => {
  const navigate = useNavigate();

  const handleApplyClick = (scholarshipId) => {
    navigate("/apply");
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>error</div>;
  }

  return (
    <>
      {scholarships.map((scholar) => (
        <div key={scholar.id} className="scholarship-card">
          <h3>{scholar.name}</h3>
          <p>Deadline: {scholar.deadline}</p>
          <p>Amount: ${scholar.amount}</p>
          <button onClick={() => handleApplyClick(scholar.id)}>
            Apply Now
          </button>
        </div>
      ))}
    </>
  );
};

export default ScholarshipContainer;
