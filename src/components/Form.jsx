import React, { useState } from 'react';

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const setData = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Optional: reset form
    setFormData({
      name: '',
      email: '',
      message: '',
    });

    // Hide message after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6 space-y-4"
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter Your Name"
            value={formData.name}
            onChange={setData}
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={setData}
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter Your Message"
            value={formData.message}
            onChange={setData}
            rows={4}
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
        >
          Submit
        </button>

        {submitted && (
          <p className="text-green-600 font-semibold text-center mt-2">
            ✅ Your Message has Been Submitted!
          </p>
        )}
      </form>
    </>
  );
}

export default Form;


