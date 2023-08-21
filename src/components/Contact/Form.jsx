import React, { Fragment, useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company_name: "",
    title: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    company_name: "",
    title: "",
    message: "",
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear validation error for the field
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form fields
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = "Name is required";
    }

    if (!formData.company_name) {
      newErrors.company_name = "Company name is required";
    }
    if (!formData.title) {
      newErrors.title = "title is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.message) {
      newErrors.message = "Message is required";
    }

    // If there are validation errors, update the state with errors
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Form is valid, you can submit the data or perform any other action here
      console.log("Form data:", formData);
    }
  };

  // Helper function to validate email format
  const isValidEmail = (email) => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
  };

  return (
    <Fragment>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 items-center lg:items-start"
      >
        <div>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="bg-midnightGreen text-white border-2 border-t-0 border-x-0 border-white w-[325px] lg:w-[540px] py-3 focus:outline-none"
            placeholder="Name"
          />
          <div className="text-coral">{errors.name}</div>
        </div>

        <div>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="bg-midnightGreen text-white border-2 border-t-0 border-x-0 border-white w-[325px] lg:w-[540px] py-3 focus:outline-none"
            placeholder="Email Address"
          />
          <div className="text-coral">{errors.email}</div>
        </div>

        <div>
          <input
            type="text"
            id="company_name"
            name="company_name"
            value={formData.company_name}
            onChange={handleInputChange}
            className="bg-midnightGreen text-white border-2 border-t-0 border-x-0 border-white w-[325px] lg:w-[540px] py-3 focus:outline-none"
            placeholder="Company Name"
          />
          <div className="text-coral">{errors.company_name}</div>
        </div>

        <div>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="bg-midnightGreen text-white border-2 border-t-0 border-x-0 border-white w-[325px] lg:w-[540px] py-3 focus:outline-none"
            placeholder="Title"
          />
          <div className="text-coral">{errors.title}</div>
        </div>

        <div>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className="bg-midnightGreen text-white border-2 border-t-0 border-x-0 border-white w-[325px] lg:w-[540px] py-5 focus:outline-none"
            placeholder="Message"
          />
          <div className="text-coral">{errors.message}</div>
        </div>

        <button
          type="submit"
          className="bg-white border-0 rounded-3xl leading-7 text-lg text-darkGreen px-10 py-3 hover:bg-raptureBlue transition-[0.25s]"
        >
          Submit
        </button>
      </form>
    </Fragment>
  );
};

export default Form;
