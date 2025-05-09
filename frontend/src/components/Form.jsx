import React, { useState, useEffect } from 'react';
import './Form.css';

const Form = () => {
  const [carData, setCarData] = useState({});
  const [showMakeDropdown, setShowMakeDropdown] = useState(false);
  const [showModelDropdown, setShowModelDropdown] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    zip: '',
    year: '',
    make: '',
    model: '',
    part: '',
    vin: '',
  });

  useEffect(() => {
    fetch('/carData.json')
      .then((res) => res.json())
      .then((data) => setCarData(data))
      .catch((err) => console.error('Error loading car data:', err));
  }, []);

  const currentYear = new Date().getFullYear();
  const years = [];
  for (let y = 1950; y <= currentYear; y++) {
    years.push(y);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const allMakes = Object.keys(carData).sort();
  const filteredMakes = allMakes.filter((m) =>
    m.toLowerCase().includes(formData.make.toLowerCase())
  );

  const modelsForMake = carData[formData.make] || [];
  const filteredModels = modelsForMake.filter((mod) =>
    mod.toLowerCase().includes(formData.model.toLowerCase())
  );

  const handleSelectMake = (make) => {
    setFormData({ ...formData, make, model: '' });
    setShowMakeDropdown(false);
  };

  const handleSelectModel = (model) => {
    setFormData({ ...formData, model });
    setShowModelDropdown(false);
  };

  return (
    <div className="form-container">
      <form className="custom-form">
        <h4 className="form-title">Contact info</h4>

        <label>Full Name*</label>
        <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />

        <label>Phone No.*</label>
        <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />

        <div className="form-row email-zip-row">
          <div className="form-col">
            <label>Email*</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-col">
            <label>Zip Code*</label>
            <input type="text" name="zip" value={formData.zip} onChange={handleChange} required />
          </div>
        </div>

        <h4 className="form-title">Part Details</h4>

        <div className="form-row part-details-row">
          <div className="form-col">
            <label>Year*</label>
            <select name="year" value={formData.year} onChange={handleChange} required>
              <option value=""></option>
              {years.map((y) => (
                <option key={y} value={y}>{y}</option>
              ))}
            </select>
          </div>

          <div className="form-col">
            <label>Make*</label>
            <div style={{ position: 'relative' }}>
              <input
                type="text"
                name="make"
                placeholder="Select or type make"
                value={formData.make}
                onChange={(e) => {
                  handleChange(e);
                  setShowMakeDropdown(true);
                }}
                onFocus={() => setShowMakeDropdown(true)}
                onBlur={() => setTimeout(() => setShowMakeDropdown(false), 200)}
                required
              />
              {showMakeDropdown && filteredMakes.length > 0 && (
                <div className="dropdown">
                  {filteredMakes.map((make) => (
                    <div
                      key={make}
                      onMouseDown={() => handleSelectMake(make)}
                      className="dropdown-item"
                    >
                      {make}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="form-col">
            <label>Model*</label>
            <div style={{ position: 'relative' }}>
              <input
                type="text"
                name="model"
                placeholder="Enter or select model"
                value={formData.model}
                onChange={(e) => {
                  handleChange(e);
                  if (formData.make) setShowModelDropdown(true);
                }}
                onFocus={() => {
                  if (formData.make) setShowModelDropdown(true);
                }}
                onBlur={() => setTimeout(() => setShowModelDropdown(false), 200)}
                disabled={!formData.make}
                required
              />
              {showModelDropdown && filteredModels.length > 0 && (
                <div className="dropdown">
                  {filteredModels.map((model) => (
                    <div
                      key={model}
                      onMouseDown={() => handleSelectModel(model)}
                      className="dropdown-item"
                    >
                      {model}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <label>Choose Part*</label>
        <select name="part" value={formData.part} onChange={handleChange} required>
          <option value=""></option>
          <option value="Engine">Engine</option>
          <option value="Transmission">Transmission</option>
        </select>

        <label>VIN Number (Optional)</label>
        <input type="text" name="vin" value={formData.vin} onChange={handleChange} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
