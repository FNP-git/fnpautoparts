const express = require("express");
const { body, validationResult } = require("express-validator");
const { submitOffersForm } = require("../controllers/offersController");

const router = express.Router();

// ===== Validation (tailored to NewForm.jsx) =====
const CURRENT_YEAR = new Date().getFullYear();
const validateOffersForm = [
  body("fullName")
    .trim()
    .isLength({ min: 3 }).withMessage("Full Name must be at least 3 characters long")
    .matches(/^[A-Za-z\s]+$/).withMessage("Full Name must contain only letters and spaces"),

  body("phone")
    .trim()
    .customSanitizer(v => String(v || "").replace(/\D/g, "")) // digits only
    .isLength({ min: 10, max: 10 }).withMessage("Phone number must be exactly 10 digits")
    .matches(/^\d{10}$/).withMessage("Phone number must contain only numbers"),

  body("email")
    .trim()
    .isLength({ min: 7 }).withMessage("Email must be at least 7 characters long")
    .isEmail().withMessage("Invalid email format"),

  body("year")
    .notEmpty().withMessage("Year is required")
    .isInt({ min: 1950, max: CURRENT_YEAR })
    .withMessage(`Year must be between 1950-${CURRENT_YEAR}`),

  body("make").trim().notEmpty().withMessage("Make is required"),
  body("model").trim().notEmpty().withMessage("Model is required"),
  body("part").trim().notEmpty().withMessage("Part is required"),

  // Frontend sends this; enforce if you want server-side consent
  body("privacyAccepted")
    .optional({ nullable: true })    // set to .notEmpty() and .equals('true') if you want hard enforcement
    .toBoolean()
];

// ===== Health check (same style) =====
router.get("/", (req, res) => {
  res.json({ message: "Offers API is working!" });
});

// ===== POST: Offers form submission =====
router.post("/", validateOffersForm, async (req, res) => {
  // Keep the same early validation guard you used
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.error("Validation failed (OFFERS):", errors.array());
    return res.status(400).json({
      success: false,
      message: "Validation errors",
      errors: errors.array(),
    });
  }

  // Delegate to the controller which sends the email and returns your standard JSON shape
  return submitOffersForm(req, res);
});

module.exports = router;
