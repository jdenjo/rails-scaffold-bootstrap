import React from "react";
// import "../styles/FormErrors.css";

const FormErrors = props => {
  const { forField, errors = [] } = props;
  // <FormErrors forField="title" errors={errors} />

  let filteredErrors = errors;
  if (forField) {
    filteredErrors = errors.filter(
      e => e.field.toLowerCase() === forField.toLowerCase()
    );
  }

  if (filteredErrors.length < 1) {
    return null;
  }

  return (
    <ul className="FormErrors">
      {filteredErrors.map((error, i) => (
        <li key={i}>{error.message}</li>
      ))}
    </ul>
  );
};

export default FormErrors;
