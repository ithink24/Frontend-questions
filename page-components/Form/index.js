import React, { useState, useEffect } from "react";
import { formSchema } from "./formSchema";
import styles from "./styles.module.css";

const App = () => {
  const [formFields, setFormFields] = useState([]);
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  useEffect(() => {
    setFormFields(formSchema.fields);
  }, []);

  const validateField = (field, value) => {
    if (field.required && !value) {
      return `${field.label} is required.`;
    }
    if (field.type === "email" && value && !/\S+@\S+\.\S+/.test(value)) {
      return "Invalid email address.";
    }
    return null;
  };

  const handleChange = (e, field) => {
    const value = e.target.value;
    setFormData({ ...formData, [field.name]: value });

    const errorMsg = validateField(field, value);
    setErrors({ ...errors, [field.name]: errorMsg });
  };

  const isFormValid = () => {
    return formFields.every(
      (field) => !validateField(field, formData[field.name])
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      setSubmittedData(formData);
    }
  };

  return (
    <div className={styles.container}>
      <h1>{formSchema.title}</h1>

      <form onSubmit={handleSubmit}>
        {formFields.map((field) => (
          <div key={field.name} className={styles.formGroup}>
            <label className={styles.label}>
              {field.label}
              {field.required && "*"}
            </label>
            {field.type === "textarea" ? (
              <textarea
                className={styles.textarea}
                value={formData[field.name] || ""}
                onChange={(e) => handleChange(e, field)}
              />
            ) : (
              <input
                className={styles.input}
                type={field.type}
                value={formData[field.name] || ""}
                onChange={(e) => handleChange(e, field)}
              />
            )}
            {errors[field.name] && (
              <div className={styles.error}>{errors[field.name]}</div>
            )}
          </div>
        ))}
        <button
          type="submit"
          className={styles.button}
          disabled={!isFormValid()}
        >
          Submit
        </button>
      </form>

      {submittedData && (
        <div className={styles.output}>
          <h3>Submitted JSON:</h3>
          <pre>{JSON.stringify(submittedData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default App;
