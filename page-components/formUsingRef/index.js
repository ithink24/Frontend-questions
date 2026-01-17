import React, { useRef } from "react";

function SimpleFormSingleRef() {
  const inputRefs = useRef({});

  const handleSubmit = () => {
    const formData = {
      name: inputRefs.current.name.value,
      email: inputRefs.current.email.value,
      message: inputRefs.current.message.value,
    };
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div style={{ width: "300px", margin: "20px auto" }}>
      <h3>Contact Form</h3>

      <label>Name:</label>
      <input
        type="text"
        name="name"
        placeholder="Enter your name"
        ref={(el) => (inputRefs.current.name = el)}
      />
      <br />
      <br />

      <label>Email:</label>
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        ref={(el) => (inputRefs.current.email = el)}
      />
      <br />
      <br />

      <label>Message:</label>
      <textarea
        name="message"
        placeholder="Write your message..."
        ref={(el) => (inputRefs.current.message = el)}
      />
      <br />
      <br />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default SimpleFormSingleRef;
