import { useState } from "react";

const DocumentForm = ({ data, onSave, onNext, onPrev }) => {
  const [formData, setFormData] = useState(data);

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave("step3", formData);
    onNext();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Essay:</label>
        <input
          type="text"
          name="essay"
          value={formData.essay}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            name="transcriptUploaded"
            checked={formData.transcriptUploaded}
            onChange={handleChange}
          />
          Transcript Uploaded
        </label>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            name="recommendationLetterUploaded"
            checked={formData.recommendationLetterUploaded}
            onChange={handleChange}
          />
          Recommendation Letter Uploaded
        </label>
      </div>

      <div style={{ marginTop: "1rem" }}>
        <button type="button" onClick={onPrev}>
          Previous
        </button>
        <button type="submit" style={{ marginLeft: "0.5rem" }}>
          Next: Review Application
        </button>
      </div>
    </form>
  );
};

export default DocumentForm;
