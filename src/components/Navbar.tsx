const Navbar = () => {
  return (
    <header className="bg-[#031430] text-white">
      <div className="max-w-360 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img
              src="images/Logo.webp"
              alt="College Logo"
              className="w-50 mr-3"
            />
            {/* <h1 className="text-3xl font-bold">
              College of Fine & Applied Arts
            </h1> */}
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="">
              About
            </a>
            <a href="#academics" className="">
              Academics
            </a>
            <a href="#research" className="">
              Research
            </a>
            <a href="#admissions" className="">
              Admissions
            </a>
            <a href="#news" className="">
              News
            </a>
            <a href="#events" className="">
              Events
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
