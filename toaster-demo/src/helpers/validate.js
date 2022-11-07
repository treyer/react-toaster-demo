const ruleFunctions = {
  isNotEmpty: (value) => {
    return value.length > 0;
  },
  isIndentSize: (value) => {
    let result = true;
    const elements = value.trim().split` `.filter((el) => el.length > 0);
    if (elements.length > 4) return false;
    elements.forEach((el) => {
      if (
        !(Number.isInteger(+el) || el === "sm" || el === "md" || el === "lg")
      ) {
        result = false;
      }
    });
    return result;
  },
  isPositiveIntegerOrZero: (value) => {
    return Number.isInteger(+value) && value >= 0;
  },
};

const ruleErrors = {
  isNotEmpty: (label) => `Field "${label}" is required`,
  isIndentSize: (label) =>
    `Field "${label}" may contain only numbers, spaces and constants "sm", "md" or "lg". 1-4 params.`,
  isPositiveIntegerOrZero: (label) =>
    `Field "${label}" must be integer number >= 0`,
};

export const validate = (label, value, rules) => {
  let error = null;
  if (rules) {
    rules.forEach((rule) => {
      const isMatch = ruleFunctions[rule](value);
      if (!isMatch) {
        error = ruleErrors[rule](label);
      }
    });
  }
  return error;
};
