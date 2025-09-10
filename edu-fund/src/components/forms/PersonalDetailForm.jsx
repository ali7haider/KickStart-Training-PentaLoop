import { useState } from "react";

const PersonalDetailsForm = ({ data, onSave, onNext }) => {
  const [formData, setFormData] = useState(data);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave("step1", formData);
    onNext();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name:</label>
        <input
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First Name"
        />
      </div>

      <div>
        <label>Last Name:</label>
        <input
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last Name"
        />
      </div>

      <div>
        <label>Email:</label>
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
      </div>

      <div>
        <label>Password:</label>
        <input
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
        />
      </div>

      <button type="submit">Next: Academic Details</button>
    </form>
  );
};

export default PersonalDetailsForm;
