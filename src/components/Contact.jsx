// // import React, { useState } from "react";

// // const Contact = () => {
// //   const [name, setName] = useState("");
// //   const [email, setEmail] = useState("");

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     if (name === "name") setName(value);
// //     else if (name === "email") setEmail(value);
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     alert(`Hello, ${name}! Your email: ${email}`);
// //   };

// //   return (
// //     <section
// //       id="contact"
// //       className="min-h-screen bg-gradient-to-b from-blue-100 to-white pt-20"
// //     >
// //       <div className="text-center mb-10">
// //         <h2 className="text-4xl font-bold text-black">Contact</h2>
// //       </div>

// //       <div className="flex flex-col md:flex-row justify-between w-full max-w-6xl ml-30 px-6 gap-10">
// //         {/* Left Section - Form */}
// //         <section className="w-full md:w-1/2">
// //           <h2 className="text-3xl font-bold text-blue-700 mb-2">
// //             Connect with me
// //           </h2>
// //           <p className="text-xl text-gray-500 leading-relaxed mb-6">
// //             If you want to know more about me or my work, or if you would just
// //             like to say hello, send me a message. I'd love to hear from you.
// //           </p>

// //           <form onSubmit={handleSubmit} className="w-full max-w-md p-4">
// //   <label className="block text-lg font-medium text-black mb-1">Name</label>
// //   <input
// //     type="text"
// //     name="name"
// //     value={name}
// //     onChange={handleChange}
// //     placeholder="Enter your name"
// //     className="border border-gray-300 text-black px-3 py-2 rounded w-full mb-4"
// //   />

// //   <label className="block text-lg font-medium text-black mb-1">Email</label>
// //   <input
// //     type="email"
// //     name="email"
// //     value={email}
// //     onChange={handleChange}
// //     placeholder="Enter your email"
// //     className="border border-gray-300 text-black px-3 py-2 rounded w-full mb-4"
// //   />

// //   <label className="block text-lg font-medium text-black mb-1">Message</label>
// //   <textarea
// //     name="message"
// //     placeholder="Enter your message"
// //     className="border border-gray-300 text-black px-3 py-2 rounded w-full h-32 mb-4"
// //   ></textarea>

// //   <div className="flex justify-end mt-4">
// //     <button
// //       type="submit"
// //       className="px-6 py-2 !bg-blue-500 !text-white hover:bg-indigo-600"
// //     >
// //       Submit
// //     </button>
// //   </div>
// // </form>
// //         </section>

// //         {/* Right Section - Contact Info */}
// //         <section className="w-full md:w-1/2 flex flex-col items-start md:items-end pt-6">
// //           <div className="text-left md:text-right">
// //             <div className="mb-6">
// //               <h3 className="text-2xl font-bold text-black mb-2">Email</h3>
// //               <p className="text-blue-700 font-medium">
// //                 deepakmatta28@email.com
// //               </p>
// //             </div>

// //             <div className="mb-6">
// //               <h3 className="text-2xl font-bold text-black mb-2">Address</h3>
// //               <p className="text-blue-700 font-medium">
// //                 JHILMIL COLONY, DELHI
// //                 <br />
// //                 INDIA
// //               </p>
// //             </div>

// //             {/* Socials (Optional icons) */}
// //             {/* <div>
// //               <h3 className="text-2xl font-bold text-black mb-2">Social</h3>
// //               <div className="flex gap-4 justify-end">
// //                 <a href="#" className="text-xl">🌐</a>
// //                 <a href="#" className="text-xl">📸</a>
// //                 <a href="#" className="text-xl">🐙</a>
// //                 <a href="#" className="text-xl">💼</a>
// //               </div>
// //             </div> */}
// //           </div>
// //         </section>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Contact;

// import React, { useState } from "react";

// const Contact = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name === "name") setName(value);
//     else if (name === "email") setEmail(value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(`Hello, ${name}! Your email: ${email}`);
//   };

//   return (
//     <section
//       id="contact"
//       className="min-h-screen bg-gradient-to-b from-blue-100 to-white pt-20"
//     >
//       <div className="text-center mb-10 mt-15">
//         <h2 className="text-4xl font-bold text-black">Contact</h2>
//       </div>

//       <div className="flex flex-col md:flex-row justify-between w-full max-w-6xl px-6 md:ml-10 gap-10">
//         <section className="w-full md:w-1/2 md:pl-50">
//           <h2 className="text-3xl font-bold text-blue-700 mb-2">
//             Connect with me
//           </h2>
//           <p className="text-xl text-gray-500 leading-relaxed mb-6">
//             If you want to know more about me or my work, or if you would just
//             like to say hello, send me a message. I'd love to hear from you.
//           </p>

//           <form onSubmit={handleSubmit} className="w-full max-w-md">
//             <label className="block text-lg font-medium text-black mb-1">
//               Name
//             </label>
//             <input
//               type="text"
//               name="name"
//               value={name}
//               onChange={handleChange}
//               placeholder="Enter your name"
//               className="border border-gray-300 text-black px-3 py-2 rounded w-full mb-4"
//             />

//             <label className="block text-lg font-medium text-black mb-1">
//               Email
//             </label>
//             <input
//               type="email"
//               name="email"
//               value={email}
//               onChange={handleChange}
//               placeholder="Enter your email"
//               className="border border-gray-300 text-black px-3 py-2 rounded w-full mb-4"
//             />

//             <label className="block text-lg font-medium text-black mb-1">
//               Message
//             </label>
//             <textarea
//               name="message"
//               placeholder="Enter your message"
//               className="border border-gray-300 text-black px-3 py-2 rounded w-full h-32 mb-4"
//             ></textarea>

//             <div className="flex justify-end mt-4">
//               <button
//                 type="submit"
//                 className="px-6 py-2 !bg-blue-500 !text-white rounded-md hover:bg-indigo-600 transition"
//               >
//                 Submit
//               </button>
//             </div>
//           </form>
//         </section>

//         <section className="w-full md:w-1/2 flex flex-col items-end pt-6">
//            <div className="text-right w-full max-w-[300px] md:mr-0 lg:mr-4 xl:mr-10">
//             <div className="mb-6">
//               <h3 className="text-2xl font-bold text-black mb-2">Email</h3>
//               <p className="text-blue-700 font-medium">
//                 deepakmatta28@email.com
//               </p>
//             </div>

//             <div className="mb-6">
//               <h3 className="text-2xl font-bold text-black mb-2">Address</h3>
//               <p className="text-blue-700 font-medium">
//                 Carrollton, Tx, USA
//                 <br />
//                 INDIA
//               </p>
//             </div>
//           </div>
//         </section>
//       </div>
//     </section>
//   );
// };

// export default Contact;
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
    alert(`Hello, ${name}! Your email: ${email}`);
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
