import React, { useEffect, useState } from "react";
import detectBrowser from '../utils/detectBrowser'
import "./NewForm.css";

const NewForm = () => {
  const [carData, setCarData] = useState({});
  const [partList, setPartList] = useState([]);
  const [trackingData, setTrackingData] = useState({});

  const [showMakeDropdown, setShowMakeDropdown] = useState(false);
  const [showModelDropdown, setShowModelDropdown] = useState(false);

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

  // Capture ad tracking parameters with sessionStorage persistence
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    
    // Check if we already have tracking data stored
    const existingTracking = sessionStorage.getItem('adTrackingData');
    let tracking;

    // If current page has UTM parameters OR Google/Bing ad parameters, use them (fresh ad click)
    if (urlParams.get('utm_source') || urlParams.get('gclid') || urlParams.get('gad_campaignid') || urlParams.get('msclkid')) {
      tracking = {
        utm_source: urlParams.get('utm_source') || 
                   (urlParams.get('gclid') ? 'google' : 
                   (urlParams.get('msclkid') ? 'bing' : 'direct')),
        utm_medium: urlParams.get('utm_medium') || 
                   (urlParams.get('gclid') || urlParams.get('msclkid') ? 'cpc' : 'none'),
        utm_campaign: urlParams.get('utm_campaign') || 
                     (urlParams.get('gad_campaignid') ? 'google_campaign_' + urlParams.get('gad_campaignid') :
                     (urlParams.get('msclkid') ? 'bing_auto_campaign' : 'google_auto_campaign')),
        utm_term: urlParams.get('utm_term') || '',
        utm_content: urlParams.get('utm_content') || '',
        utm_id: urlParams.get('utm_id') || urlParams.get('gad_campaignid') || '',
        gclid: urlParams.get('gclid') || '',
        msclkid: urlParams.get('msclkid') || '',
        fbclid: urlParams.get('fbclid') || '',
        gad_source: urlParams.get('gad_source') || '',
        gad_campaignid: urlParams.get('gad_campaignid') || '',
        referrer: document.referrer || 'direct',
        landing_page: window.location.href,
        timestamp: new Date().toISOString()
      };
      // Store new tracking data
      sessionStorage.setItem('adTrackingData', JSON.stringify(tracking));
    } 
    // If no UTM on current page but we have stored data, use stored data
    else if (existingTracking) {
      tracking = JSON.parse(existingTracking);
      // Update current page info but keep original tracking
      tracking.current_page = window.location.href;
    }
    // If no UTM and no stored data, check referrer
    else {
      tracking = {
        utm_source: 'direct',
        utm_medium: 'none',
        utm_campaign: 'none',
        utm_term: '',
        utm_content: '',
        utm_id: '',
        gclid: '',
        msclkid: '',
        fbclid: '',
        referrer: document.referrer || 'direct',
        landing_page: window.location.href,
        timestamp: new Date().toISOString()
      };

      // Check referrer as fallback
      if (document.referrer) {
        try {
          const referrerUrl = new URL(document.referrer);
          const referrerParams = new URLSearchParams(referrerUrl.search);
          
          if (referrerParams.get('utm_source') || referrerParams.get('gclid') || referrerParams.get('msclkid')) {
            tracking.utm_source = referrerParams.get('utm_source') || 
                                 (referrerParams.get('gclid') ? 'google' : 
                                 (referrerParams.get('msclkid') ? 'bing' : tracking.utm_source));
            tracking.utm_medium = referrerParams.get('utm_medium') || 
                                 (referrerParams.get('gclid') || referrerParams.get('msclkid') ? 'cpc' : 'none');
            tracking.utm_campaign = referrerParams.get('utm_campaign') || 
                                   (referrerParams.get('gclid') ? 'google_auto_campaign' :
                                   (referrerParams.get('msclkid') ? 'bing_auto_campaign' : 'none'));
            tracking.utm_term = referrerParams.get('utm_term') || '';
            tracking.utm_content = referrerParams.get('utm_content') || '';
            tracking.utm_id = referrerParams.get('utm_id') || '';
            tracking.gclid = referrerParams.get('gclid') || '';
            tracking.msclkid = referrerParams.get('msclkid') || '';
            tracking.fbclid = referrerParams.get('fbclid') || '';
          }
        } catch (error) {
          console.log(error.message);
        }
      }
    }
    
    setTrackingData(tracking);
    localStorage.setItem('adTrackingData', JSON.stringify(tracking));
  }, []);

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

  useEffect(() => {
    const browser = detectBrowser();
    setFormData((prevData) => ({ ...prevData, browser }));
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

    try {
      const storedTracking = sessionStorage.getItem('adTrackingData') || localStorage.getItem('adTrackingData');
      const currentTracking = storedTracking ? JSON.parse(storedTracking) : trackingData;
      
      const submissionData = {
        ...formData,
        tracking: currentTracking,
        browser: detectBrowser(),
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

        // ✅ Google Ads Conversion Tracking
        if (typeof gtag === "function") {
          gtag('event', 'conversion', {
            'send_to': 'AW-16900543345/bA93CJSci6YaEPGm5_o-',
            'event_callback': () => {
              console.log("✅ Google Ads conversion fired");
            }
          });
        }

        // ✅ Bing UET Conversion Tracking
        if (typeof uetq !== "undefined") {
          uetq.push('event', '', {
            'event_category': 'Lead',
            'event_action': 'Form Submission',
            'event_label': 'FNP Inquiry'
          });
          uetq.push('set', {
            'pid': {
              'em': formData.email || "",
              'ph': formData.phone || ""
            }
          });
          console.log("✅ Bing UET event fired");
        }

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

        <input type="hidden" name="browser" value={detectBrowser()} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewForm;