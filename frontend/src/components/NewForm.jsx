import React, { useEffect, useState } from "react";
import "./NewForm.css";

const NewForm = () => {
  const [carData, setCarData] = useState({});
  const [partList, setPartList] = useState([]);

  const [showMakeDropdown, setShowMakeDropdown] = useState(false);
  const [showModelDropdown, setShowModelDropdown] = useState(false);

  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  const [formData, setFormData] = useState({
    leadLabel: "FNPAUTOPARTS",
    make: "",
    model: "",
    year: "",
    part: "",
    fullName: "",
    phone: "",
    email: "",
  });

  // Load external data (same sources as the original form)
  useEffect(() => {
    fetch("/carData.json")
      .then((r) => r.json())
      .then((d) => setCarData(d))
      .catch((e) => console.error("Error loading car data:", e));

    fetch("/smallParts.json")
      .then((r) => r.json())
      .then((d) => setPartList(d))
      .catch((e) => console.error("Error loading parts list:", e));
  }, []);

  // Build years list
  const currentYear = new Date().getFullYear();
  const years = [];
  for (let y = 1950; y <= currentYear; y++) years.push(y);

  // Handlers
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "fullName" && /[^a-zA-Z\s]/.test(value)) return;
    if (name === "phone" && /[^0-9]/.test(value)) return;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const allMakes = Object.keys(carData).sort();
  const filteredMakes = allMakes.filter((m) =>
    m.toLowerCase().includes(formData.make.toLowerCase())
  );

  const modelsForMake = carData[formData.make] || [];
  const filteredModels = modelsForMake.filter((mod) =>
    mod.toLowerCase().includes(formData.model.toLowerCase())
  );

  const filteredParts = partList.filter((p) =>
    p.toLowerCase().includes(formData.part.toLowerCase())
  );

  const handleSelectMake = (make) => {
    setFormData((prev) => ({ ...prev, make, model: "" }));
    setShowMakeDropdown(false);
  };

  const handleSelectModel = (model) => {
    setFormData((prev) => ({ ...prev, model }));
    setShowModelDropdown(false);
  };

  const generateLeadId = () =>
    "LEAD_" + Date.now() + "_" + Math.random().toString(36).substr(2, 9);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!privacyAccepted) {
      alert("Please accept the Privacy Policy to proceed.");
      return;
    }

    try {
      const submissionData = {
        ...formData,
        leadId: generateLeadId(),
        submissionTime: new Date().toISOString(),
      };

      const response = await fetch("/api/offers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submissionData),
      });

      const result = await response.json();

      if (!response.ok) {
        let alertMessage = "Please fix the following errors:\n\n";
        if (result.errors && Array.isArray(result.errors)) {
          result.errors.forEach((error) => {
            alertMessage += `- ${error.msg}\n`;
          });
        } else {
          alertMessage += "- Unexpected error occurred. Please try again.";
        }
        alert(alertMessage);
      } else {
        alert("Form submitted successfully!");
        // Reset
        setFormData({
          leadLabel: "FNPAUTOPARTS",
          make: "",
          model: "",
          year: "",
          part: "",
          fullName: "",
          phone: "",
          email: "",
        });
        setPrivacyAccepted(false);
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="form-container">
      <form className="custom-form" onSubmit={handleSubmit}>
        {/* Row 1: Make / Model */}
        <div className="form-row">
          <div className="form-col">
            <label>Make*</label>
            <div style={{ position: "relative" }}>
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
            <div style={{ position: "relative" }}>
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

        {/* Row 2: Year / Part */}
        <div className="form-row part-details-row">
          <div className="form-col">
            <label>Year*</label>
            <select
              name="year"
              value={formData.year}
              onChange={handleChange}
              required
            >
              <option value=""></option>
              {years.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </div>

          <div className="form-col">
            <label>Part*</label>
            <select
              name="part"
              value={formData.part}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select part
              </option>
              {filteredParts.map((part, idx) => (
                <option key={idx} value={part}>
                  {part}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Row 3: Name / Phone */}
        <div className="form-row">
          <div className="form-col">
            <label>Name*</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="John Doe"
              required
            />
          </div>

          <div className="form-col">
            <label>Phone*</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="123-456-7890"
              required
              inputMode="numeric"
            />
          </div>
        </div>

        {/* Email */}
        <div className="form-col">
          <label>Email*</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="email"
            onChange={handleChange}
            required
          />
        </div>

        {/* Privacy Policy */}
        <div className="checkbox-container">
          <input
            type="checkbox"
            id="privacyPolicy"
            checked={privacyAccepted}
            onChange={(e) => setPrivacyAccepted(e.target.checked)}
            className="consent-checkbox"
          />
          <label htmlFor="privacyPolicy" className="consent-label">
            I agree to the{" "}
            <a href="/privacy" target="_self" rel="noopener noreferrer">
              Privacy Policy
            </a>
            .
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewForm;
