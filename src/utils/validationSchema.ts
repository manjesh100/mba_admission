export const validationSchema = {
  first_name: {
    required: "Name is required",
  },
  last_name: {
    required: "Last name is required",
  },
  email: {
    required: "Email is required",
  },
  phone: {
    required: "Phone is required",
    minLength: {
      value: 10,
      message: "Minimum length schoud be 10 digit",
    },
  },
  isd_code: {
    required: "Country code  is required",
  },
  password: {
    required: "Password is required",
    minLength: { value: 8, message: "Minimum length should be 8 characterss" },
    maxLength: { value: 16, message: "Maximum length should be 16 characters" },
    pattern: {
      value:
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%*?&_])[A-Za-z\d!@#$%*?&_]{8,16}$/,
      message:
        "Password must contain uppercase, lowercase, digits, and special characters.",
    },
  },
  confirmPassword: {
    required: "Confirm Password is required",
  },
};
