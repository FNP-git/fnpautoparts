const { validationResult } = require("express-validator");
const nodemailer = require("nodemailer");
require("dotenv").config();

// Gmail transporter (same creds you already use)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Helper function to determine ad source — EXACT same logic
function getAdSource(tracking = {}) {
  if (tracking.gclid) return 'Google Ads';
  if (tracking.msclkid) return 'Bing Ads';
  if (tracking.fbclid) return 'Facebook Ads';
  if (tracking.utm_source === 'google') return 'Google Ads';
  if (tracking.utm_source === 'bing') return 'Bing Ads';
  if (tracking.utm_source) return tracking.utm_source;
  return 'Direct Traffic';
}

// Compose email — EXACT same format as your existing code
function buildEmailContent(body) {
  const {
    leadLabel,
    fullName,
    phone,
    email,
    zip,
    year,
    make,
    model,
    part,
    vin,
    browser,
    tracking,
    leadId,
    submissionTime,
  } = body;

  return `
FNP AutoParts Support - New Lead Submission

Company: ${leadLabel}
Full Name: ${fullName}
Phone: ${phone}
Email: ${email}
Zip: ${zip}
Year: ${year}
Make: ${make}
Model: ${model}
Part: ${part}
VIN: ${vin || "Not Provided"}
Browser: ${browser || "Not Provided"}

=== AD TRACKING INFORMATION ===
Lead ID: ${leadId || 'Not Generated'}
Ad Source: ${getAdSource(tracking || {})}
Campaign: ${tracking?.utm_campaign || 'Not specified'}
Medium: ${tracking?.utm_medium || 'Not specified'}
Source: ${tracking?.utm_source || 'direct'}
Search Term: ${tracking?.utm_term || 'Not captured'}
Ad Content: ${tracking?.utm_content || 'Not specified'}
Campaign ID: ${tracking?.utm_id || 'Not specified'}
Google Click ID: ${tracking?.gclid || 'Not captured'}
Bing Click ID: ${tracking?.msclkid || 'Not captured'}
Facebook Click ID: ${tracking?.fbclid || 'Not captured'}
Referrer: ${tracking?.referrer || 'Direct visit'}
Landing Page: ${tracking?.landing_page || 'Not captured'}
Submission Time: ${submissionTime || new Date().toISOString()}
=== END TRACKING INFO ===
  `;
}

exports.submitOffersForm = async (req, res) => {
  // Mirror your controller pattern: validate first
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: "Validation errors",
      errors: errors.array(),
    });
  }

  try {
    const { fullName = "Unknown", tracking } = req.body;

    // Subject — EXACT same logic as your existing code
    const subjectLine =
      tracking?.utm_campaign && tracking.utm_campaign !== 'none'
        ? `New Lead: ${fullName} - ${getAdSource(tracking)} - ${tracking.utm_campaign}`
        : `New Lead: ${fullName} - ${getAdSource(tracking || {})}`;

    // Email options — EXACT same from/to usage
    const mailOptions = {
      from: `"FNP AutoParts Support" <devops@fnpautoparts.com>`,
      to: "leads1@autopartocean.com",
      subject: subjectLine,
      text: buildEmailContent(req.body),
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent (OFFERS):", info.response);

    // Match your success payload
    return res.status(200).json({
      success: true,
      message: "Form submitted successfully!",
      data: req.body,
    });
  } catch (error) {
    console.error("Error sending email (OFFERS):", {
      message: error.message,
      response: error.response,
      code: error.code,
    });
    return res.status(500).json({
      success: false,
      message: "Failed to send email",
      errors: [{ msg: error.message }],
    });
  }
};
