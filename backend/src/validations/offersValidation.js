const { checkSchema } = require("express-validator");

const CURRENT_YEAR = new Date().getFullYear();

module.exports.validateNewForm = checkSchema({

  make: {
    in: ["body"],
    trim: true,
    notEmpty: { errorMessage: "Make is required" },
    isLength: { options: { min: 2, max: 40 }, errorMessage: "Make must be 2–40 chars" },
  },

  model: {
    in: ["body"],
    trim: true,
    notEmpty: { errorMessage: "Model is required" },
    isLength: { options: { min: 1, max: 50 }, errorMessage: "Model must be 1–50 chars" },
  },

  year: {
    in: ["body"],
    notEmpty: { errorMessage: "Year is required" },
    toInt: true,
    isInt: {
      options: { min: 1950, max: CURRENT_YEAR },
      errorMessage: `Year must be between 1950–${CURRENT_YEAR}`,
    },
  },

  part: {
    in: ["body"],
    trim: true,
    notEmpty: { errorMessage: "Part is required" },
    isLength: { options: { min: 2, max: 60 }, errorMessage: "Part must be 2–60 chars" },
  },

  fullName: {
    in: ["body"],
    trim: true,
    isLength: { options: { min: 3 }, errorMessage: "Full Name must be at least 3 characters" },
    matches: {
      options: /^[A-Za-z\s]+$/,
      errorMessage: "Full Name must contain only letters and spaces",
    },
  },

  phone: {
    in: ["body"],
    trim: true,
    customSanitizer: { options: (v) => String(v || "").replace(/\D/g, "") }, // keep digits only
    isLength: { options: { min: 10, max: 10 }, errorMessage: "Phone must be exactly 10 digits" },
    matches: { options: /^\d{10}$/, errorMessage: "Phone must contain digits only" },
  },

  email: {
    in: ["body"],
    trim: true,
    isLength: { options: { min: 7 }, errorMessage: "Email must be at least 7 characters" },
    isEmail: { errorMessage: "Invalid email format" },
    normalizeEmail: true,
  },
});
