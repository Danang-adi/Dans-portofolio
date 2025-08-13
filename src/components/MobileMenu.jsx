export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-screen 
        bg-[rgba(10,10,10,0.8)] z-[9999] 
        flex flex-col items-center justify-center 
        transition-opacity duration-300 ease-in-out
        ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
      `}
    >
      {/* Tombol Close */}
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-4 right-10 text-white text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>

      {/* Menu Links */}
      {["Home", "Overview", "Projects", "Contact"].map((item, idx) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          onClick={() => setMenuOpen(false)}
          className={`text-2xl font-semibold text-white my-4 transform transition-all duration-300
            ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
          `}
          style={{ transitionDelay: `${idx * 100}ms` }} // Stagger animation
        >
          {item}
        </a>
      ))}
    </div>
  );
};
