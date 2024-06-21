"use client";
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  type ValidationProps = {
    preventDefault(): any;
    target: any;
  };

  const handleInputChange = (e: ValidationProps) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });

    // Clear error message when conditions are met
    if (id === "name" && value.length >= 3) {
      setErrors({ ...errors, name: "" });
    } else if (id === "email" && /\S+@\S+\.\S+/.test(value)) {
      setErrors({ ...errors, email: "" });
    } else if (id === "message" && value.length >= 4) {
      setErrors({ ...errors, message: "" });
    }
  };

  const handleSubmit = (e: ValidationProps) => {
    e.preventDefault();
    let valid = true;
    const newErrors = { ...errors };

    if (formData.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters";
      valid = false;
    } else {
      newErrors.name = "";
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      valid = false;
    } else {
      newErrors.email = "";
    }

    if (formData.message.trim().length < 4) {
      newErrors.message = "Message must be at least 4 characters";
      valid = false;
    } else {
      newErrors.message = "";
    }

    if (valid) {
      // Form submission logic here (e.g., send data to backend)
      console.log("Form data:", formData);
      // Reset form fields
      setFormData({ name: "", email: "", message: "" });
    }

    setErrors(newErrors);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-800">
      <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-4 py-8 mx-auto rounded-lg shadow-lg bg-white dark:bg-gray-100 md:grid-cols-2 md:px-8 lg:px-12 xl:px-16">
        <div className="flex flex-col justify-center">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold leading-tight md:text-4xl">
              Let's talk!
            </h2>
            <p className="text-gray-700 dark:text-gray-600">
              Have a project in mind? Want to collaborate or just say hi?
            </p>
          </div>
          <img
            src="/images/contact.png"
            alt=""
            className="p-6  mx-auto h-52 md:h-64"
          />
        </div>
        <form
          className="flex flex-col space-y-6 px-4 md:px-0"
          onSubmit={handleSubmit}
        >
          <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
            <label htmlFor="name" className="block text-sm font-medium">
              Full name
            </label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              className={`w-full px-3 py-2 mt-1 rounded-md border ${
                errors.name && "border-red-500"
              }`}
            />
            {errors.name && (
              <p className="text-xs text-red-500 mt-1">{errors.name}</p>
            )}
          </div>
          <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full px-3 py-2 mt-1 rounded-md border ${
                errors.email && "border-red-500"
              }`}
            />
            {errors.email && (
              <p className="text-xs text-red-500 mt-1">{errors.email}</p>
            )}
          </div>
          <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
            <label htmlFor="message" className="block text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              rows={3}
              value={formData.message}
              onChange={handleInputChange}
              className={`w-full px-3 py-2 mt-1 rounded-md border ${
                errors.message && "border-red-500"
              }`}
            ></textarea>
            {errors.message && (
              <p className="text-xs text-red-500 mt-1">{errors.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-sm font-bold tracking-wide text-white uppercase bg-violet-600 rounded-md hover:bg-violet-700 focus:outline-none focus:bg-violet-700 dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:bg-violet-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
