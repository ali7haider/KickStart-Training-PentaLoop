import React from 'react'

const ApplicationReview = ({ data, onPrevious, onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Review Your Application</h2>

      <section>
        <h3>Personal Details</h3>
        <p><strong>First Name:</strong> {data.step1.firstName}</p>
        <p><strong>Last Name:</strong> {data.step1.lastName}</p>
        <p><strong>Email:</strong> {data.step1.email}</p>
      </section>

      <section>
        <h3>Academic Details</h3>
        <p><strong>GPA:</strong> {data.step2.gpa}</p>
        <p><strong>Degree:</strong> {data.step2.degree}</p>
        <p><strong>Institution:</strong> {data.step2.institution}</p>
      </section>

      <section>
        <h3>Documents</h3>
        <p><strong>Essay:</strong> {data.step3.essay}</p>
        <p>
          <strong>Transcript Uploaded:</strong>{" "}
          {data.step3.transcriptUploaded ? "Yes" : "No"}
        </p>
        <p>
          <strong>Recommendation Letter Uploaded:</strong>{" "}
          {data.step3.recommendationLetterUploaded ? "Yes" : "No"}
        </p>
      </section>

      <div style={{ marginTop: "1rem" }}>
        <button type="button" onClick={onPrevious}>
          Previous
        </button>
        <button type="submit" style={{ marginLeft: "0.5rem" }}>
          Submit Application
        </button>
      </div>
    </form>
  );
};

export default ApplicationReview;
