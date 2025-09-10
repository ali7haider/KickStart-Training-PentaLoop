import { useState } from "react";

const AcademicDetailsForm = ({ data, onSave, onNext, onPrev }) => {
  const [formData, setFormData] = useState(data);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave("step2", formData);
    onNext();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>GPA:</label>
        <input
          name="gpa"
          value={formData.gpa}
          onChange={handleChange}
          placeholder="GPA"
        />
      </div>

      <div>
        <label>Degree:</label>
        <input
          name="degree"
          value={formData.degree}
          onChange={handleChange}
          placeholder="Degree"
        />
      </div>

      <div>
        <label>Institution:</label>
        <input
          name="institution"
          value={formData.institution}
          onChange={handleChange}
          placeholder="Institution"
        />
      </div>

      <div style={{ marginTop: "1rem" }}>
        <button type="button" onClick={onPrev}>
          Previous
        </button>
        <button type="submit" style={{ marginLeft: "0.5rem" }}>
          Next: Document Upload
        </button>
      </div>
    </form>
  );
};

export default AcademicDetailsForm;
