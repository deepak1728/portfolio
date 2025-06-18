import React from "react";

const Header = ({ activeSection, setActiveSection }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      setIsOpen(false);
    }
  };

  const navItems = ["home", "about", "projects", "contact"];

  const getButtonClass = (id) =>
    `text-base font-semibold px-4 py-2 rounded transition ${
      activeSection === id
        ? "!bg-blue-700 text-white"
        : "!bg-white text-black hover:!bg-blue-700 hover:!text-white"
    }`;

  return (
    <header className="w-full fixed top-0 left-0 bg-white text-black py-4 px-6 shadow-md z-50">
      <div className="flex items-center justify-between">
        <h2 className="text-lg md:text-xl font-semibold whitespace-nowrap">
          &lt;𝔇𝔢𝔢𝔭𝔞𝔨 ℜ𝔢𝔡𝔡𝔶 𝔐𝔞𝔱𝔱𝔞 /&gt;
        </h2>

        <button
          className="md:hidden text-3xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          &#9776;
        </button>

        <div className="hidden md:flex items-center gap-x-6">
          {navItems.map((id) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={getButtonClass(id)}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-16 right-4 md:hidden w-48 bg-white p-4 rounded shadow-lg flex flex-col gap-2 z-50">
          {navItems.map((id) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={getButtonClass(id)}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
