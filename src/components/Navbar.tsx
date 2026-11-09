import { useState } from "react";

interface NavbarProps {
  onContactClick: () => void;
}

const Navbar = ({ onContactClick }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#031430] text-white">
      <div className="max-w-360 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <a href="/" className="flex items-center" aria-label="Go to homepage">
            <img
              src="/images/Logo.webp"
              alt="College Logo"
              className="w-50 mr-3"
            />
          </a>
          <nav className="hidden md:flex space-x-8">
            <a href="#about">About</a>
            <a href="#academics">Academics</a>
            <a href="#research">Research</a>
            <a href="#admissions">Admissions</a>
            <a href="#news">News</a>
            <a href="/gallery">Gallery and Art Sales</a>
            <button
              onClick={onContactClick}
              className="cursor-pointer text-[#3aafe4] hover:text-white transition-colors duration-200"
            >
              Contact Us
            </button>
          </nav>
          <button
            type="button"
            className="relative z-[60] md:hidden"
            onClick={() => setMenuOpen((isOpen) => !isOpen)}
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? (
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav
          id="mobile-navigation"
          className="fixed inset-0 z-50 flex h-screen flex-col items-center justify-center gap-8 overflow-y-auto bg-[#031430]/97 text-xl text-white md:hidden"
        >
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a href="#academics" onClick={() => setMenuOpen(false)}>
            Academics
          </a>
          <a href="#research" onClick={() => setMenuOpen(false)}>
            Research
          </a>
          <a href="#admissions" onClick={() => setMenuOpen(false)}>
            Admissions
          </a>
          <a href="#news" onClick={() => setMenuOpen(false)}>
            News
          </a>
          <a href="/gallery" onClick={() => setMenuOpen(false)}>
            Gallery and Art Sales
          </a>
          <button
            onClick={() => {
              setMenuOpen(false);
              onContactClick();
            }}
            className="text-[#3aafe4]"
          >
            Contact Us
          </button>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
