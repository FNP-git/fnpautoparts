import React from 'react';
import './Form.css';

const Form = () => {
  return (
    <div className="form-container">
      <form className="custom-form">
        <h4 className="form-title">Contact info</h4>

        <label>Full Name*</label>
        <input type="text" required />

        <label>Phone No.*</label>
        <input type="text" required />

        <div className="form-row email-zip-row">
          <div className="form-col">
            <label>Email*</label>
            <input type="email" required />
          </div>
          <div className="form-col">
            <label>Zip Code*</label>
            <input type="text" required />
          </div>
        </div>

        <h4 className="form-title">Part Details</h4>

        <div className="form-row part-details-row">
          <div className="form-col">
            <label>Year*</label>
            <input type="text" required />
          </div>
          <div className="form-col">
            <label>Make*</label>
            <input type="text" required />
          </div>
          <div className="form-col">
            <label>Model*</label>
            <input type="text" required />
          </div>
        </div>

        <label>Choose Part*</label>
        <input type="text" required />

        <label>VIN Number (Optional)</label>
        <input type="text" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
