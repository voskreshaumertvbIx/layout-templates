

interface FormData {
  email: string;
  password: string;
  confirmPassword?: string;
  termsAccepted?: boolean;
}

interface ValidationResult {
  email: { state?: 'success' | 'warning' | 'error'; message: string };
  password: { state?: 'success' | 'warning' | 'error'; message: string };
  confirmPassword: { state?: 'success' | 'warning' | 'error'; message: string };
  termsAccepted: { state?: 'success' | 'warning' | 'error'; message: string };
}

export const validateForm = (formData: FormData): ValidationResult => {
  const validation: ValidationResult = {
    email: { state: undefined, message: "" },
    password: { state: undefined, message: "" },
    confirmPassword: { state: undefined, message: "" },
    termsAccepted: { state: undefined, message: "" },
  };

 
  if (!formData.email) {
    validation.email = { state: "error", message: "Email is required" };
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    validation.email = { state: "error", message: "Email is not valid" };
  } else if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(formData.email)) {
    
    validation.email = {
      state: "warning",
      message: "It's recommended to use a Gmail account",
    };
  } else {
    validation.email = { state: "success", message: "" };
  }

  
  if (!formData.password) {
    validation.password = { state: "error", message: "Password is required" };
  } else if (formData.password.length < 6) {
    validation.password = {
      state: "error",
      message: "Password must be at least 6 characters long",
    };
  } else if (!/[A-Z]/.test(formData.password)) {
    validation.password = {
      state: "warning",
      message: "Should contain at least one uppercase letter",
    };
  } else {
    validation.password = { state: "success", message: "" };
  }

 
  if (formData.confirmPassword !== formData.password) {
    validation.confirmPassword = {
      state: "error",
      message: "Passwords do not match",
    };
  } else {
    validation.confirmPassword = { state: "success", message: "" };
  }


  if (!formData.termsAccepted) {
    validation.termsAccepted = {
      state: "error",
      message: "You must accept the terms and conditions",
    };
  } else {
    validation.termsAccepted = { state: "success", message: "" };
  }

  return validation;
};
