import React, { useState } from "react";
import "./Admission.css";

const Admission = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    grade: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Your application has been submitted successfully!");
  };

  return (
    <div className="admission-container">
      <h1 className="admission-title">Admission Form</h1>
      <form className="admission-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="grade">Grade Applying For</label>
          <select
            id="grade"
            name="grade"
            value={formData.grade}
            onChange={handleChange}
            required
          >
            <option value="">Select Grade</option>
            <option value="1">Grade 1</option>
            <option value="2">Grade 2</option>
            <option value="3">Grade 3</option>
            <option value="4">Grade 4</option>
            <option value="5">Grade 5</option>
            <option value="6">Grade 6</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="message">Additional Information</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <button type="submit" className="submit-button">Submit Application</button>
      </form>

      <div className="instructions">
        <h2>How to Fill the Admission Form</h2>
        <div>
          <p>1. Enter your full name as it appears on official documents.</p>
          <p>2. Provide a valid email address to receive further communication.</p>
          <p>3. Include a phone number where you can be reached easily.</p>
          <p>4. Select the grade level you are applying for from the dropdown menu.</p>
          <p>5. Use the additional information section to mention any special requests or requirements.</p>
          <p>6. Click on "Submit Application" to complete the process.</p>
        </div>
        <p>Once submitted, our team will review your application and contact you with further instructions. Thank you for choosing our institution!</p>
      </div>
    </div>
  );
};

export default Admission;
