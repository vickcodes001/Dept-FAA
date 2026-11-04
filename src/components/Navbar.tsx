interface NavbarProps {
  onContactClick: () => void;
}

const Navbar = ({ onContactClick }: NavbarProps) => {
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
        </div>
      </div>
    </header>
  );
};

export default Navbar;
