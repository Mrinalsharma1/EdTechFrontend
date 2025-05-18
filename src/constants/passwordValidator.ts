export const validatePassword = (password: string) => ({
  hasMinLength: password.length >= 8,
  hasUpperCase: /[A-Z]/.test(password),
  hasLowerCase: /[a-z]/.test(password),
  hasNumber: /[0-9]/.test(password),
  hasSpecialChar: /[^A-Za-z0-9]/.test(password),
});

export const isPasswordValid = (password: string) => {
  const rules = validatePassword(password);
  return Object.values(rules).every(Boolean);
};
