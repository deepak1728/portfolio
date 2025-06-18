import React, { useState, useEffect } from "react";
import { scroller } from "react-scroll";

const Contact = ({ setActiveSection }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        scroller.scrollTo("home", {
          duration: 800,
          smooth: "easeInOutQuart",
          offset: -70,
        });

        if (setActiveSection) {
          setActiveSection("home");
        }

        setSubmitted(false);
        setName("");
        setEmail("");
        setMessage("");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [submitted, setActiveSection]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);

    try {
      const response = await fetch("https://formspree.io/f/xnnvzwqd", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("Error submitting form. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-100 to-white px-6 py-12"
    >
      {submitted ? (
        <div className="text-center">
          <h3 className="text-3xl font-bold text-green-600 mb-2">Thank you!</h3>
          <p className="text-lg text-gray-700">
            Your message was sent successfully.
          </p>
          <p className="text-sm text-gray-500 mt-2">Redirecting to home...</p>
        </div>
      ) : (
        <>
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-black mb-4">
              Connect with me
            </h2>
            <p className="text-xl text-gray-500 leading-relaxed max-w-xl mx-auto">
              If you want to know more about me or my work, or if you would just
              like to say hello, send me a message. I'd love to hear from you.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md bg-white/0"
            autoComplete="off"
          >
            <label className="block text-lg font-medium text-black mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="border border-gray-300 text-black px-3 py-2 rounded w-full mb-4"
            />

            <label className="block text-lg font-medium text-black mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border border-gray-300 text-black px-3 py-2 rounded w-full mb-4"
            />

            <label className="block text-lg font-medium text-black mb-1">
              Message
            </label>
            <textarea
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
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
        </>
      )}
    </section>
  );
};

export default Contact;
