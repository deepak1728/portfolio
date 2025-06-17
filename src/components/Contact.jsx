import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") setName(value);
    else if (name === "email") setEmail(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
      <section
  id="contact"
  className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-100 to-white px-6 py-12"
>
  <div className="text-center mb-10">
    <h2 className="text-4xl font-bold text-black mb-4">Connect with me</h2>
    <p className="text-xl text-gray-500 leading-relaxed max-w-xl mx-auto">
      If you want to know more about me or my work, or if you would just like
      to say hello, send me a message. I'd love to hear from you.
    </p>
  </div>

  <form
    onSubmit={handleSubmit}
    className="w-full max-w-md bg-white/0"
  >
    <label className="block text-lg font-medium text-black mb-1">Name</label>
    <input
      type="text"
      name="name"
      value={name}
      onChange={handleChange}
      placeholder="Enter your name"
      className="border border-gray-300 text-black px-3 py-2 rounded w-full mb-4"
    />

    <label className="block text-lg font-medium text-black mb-1">Email</label>
    <input
      type="email"
      name="email"
      value={email}
      onChange={handleChange}
      placeholder="Enter your email"
      className="border border-gray-300 text-black px-3 py-2 rounded w-full mb-4"
    />

    <label className="block text-lg font-medium text-black mb-1">Message</label>
    <textarea
      name="message"
      placeholder="Enter your message"
      className="border border-gray-300 text-black px-3 py-2 rounded w-full h-32 mb-4"
    ></textarea>

    <div className="flex justify-end mt-4">
      <button
        type="submit"
        className="px-6 py-2 !bg-blue-500 !text-white rounded-md hover:bg-indigo-600 transition"
      >
        Submit
      </button>
    </div>
  </form>
</section>

    );
  };

  export default Contact;
