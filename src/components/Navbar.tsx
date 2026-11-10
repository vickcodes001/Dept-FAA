import { useEffect, useState } from "react";

interface NavbarProps {
  onContactClick: () => void;
}

const sectionLinks = [
  { href: "#academics", label: "Academics" },
  { href: "#research", label: "Research" },
  { href: "#admissions", label: "Admissions" },
  { href: "#news", label: "News" },
];

const Navbar = ({ onContactClick }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("");

  useEffect(() => {
    const updateGalleryState = () => {
      if (window.location.pathname === "/gallery") {
        setActiveItem("/gallery");
      }
    };

    updateGalleryState();

    const sections = sectionLinks
      .map(({ href }) => document.querySelector(href))
      .filter((section): section is Element => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          setActiveItem(`#${visible.target.id}`);
        }
      },
      { rootMargin: "-20% 0px -60% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    window.addEventListener("popstate", updateGalleryState);

    return () => {
      observer.disconnect();
      window.removeEventListener("popstate", updateGalleryState);
    };
  }, []);

  const linkClass = (href: string) =>
    `nav-link ${activeItem === href ? "nav-link-active" : ""}`;

  const closeMenu = () => setMenuOpen(false);

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

          <nav
            className="hidden md:flex space-x-8"
            aria-label="Main navigation"
          >
            {sectionLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className={linkClass(href)}
                aria-current={activeItem === href ? "location" : undefined}
              >
                {label}
              </a>
            ))}

            <a
              href="/gallery"
              className={linkClass("/gallery")}
              aria-current={activeItem === "/gallery" ? "page" : undefined}
            >
              Gallery and Art Sales
            </a>

            <button
              onClick={onContactClick}
              className="cursor-pointer text-[#3aafe4] hover:text-white transition-colors duration-200"
            >
              Contact Us
            </button>
          </nav>

          <button
            type="button"
            className={`relative z-60 transition-all duration-200 ease-in-out active:scale-90 md:hidden ${
              menuOpen
                ? "scale-110 text-[#3aafe4]"
                : "text-white hover:scale-110 hover:text-[#3aafe4]"
            }`}
            onClick={() => setMenuOpen((isOpen) => !isOpen)}
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-navigation"
          className="fixed inset-0 z-50 flex h-screen flex-col items-center justify-center gap-8 overflow-y-auto bg-[#031430]/97 text-xl text-white md:hidden"
          aria-label="Mobile navigation"
        >
          {sectionLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={linkClass(href)}
              aria-current={activeItem === href ? "location" : undefined}
              onClick={closeMenu}
            >
              {label}
            </a>
          ))}

          <a
            href="/gallery"
            className={linkClass("/gallery")}
            aria-current={activeItem === "/gallery" ? "page" : undefined}
            onClick={closeMenu}
          >
            Gallery and Art Sales
          </a>

          <button
            onClick={() => {
              closeMenu();
              onContactClick();
            }}
            className="text-[#3aafe4]"
          >
            Contact Us
          </button>
        </nav>
      )}

      <style>{`
        .nav-link {
          position: relative;
          transition: color 200ms ease;
        }

        .nav-link:hover,
        .nav-link-active {
          color: #3aafe4;
        }

        .nav-link::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: -6px;
          height: 2px;
          background: #3aafe4;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 220ms ease;
        }

        .nav-link-active::after {
          transform: scaleX(1);
        }

        @media (prefers-reduced-motion: reduce) {
          .nav-link,
          .nav-link::after {
            transition: none;
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
