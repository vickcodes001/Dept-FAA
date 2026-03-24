const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              College of Fine & Applied Arts
            </h3>
            <p className="text-gray-300 mb-4">
              University of Illinois at Urbana-Champaign
            </p>
            <p className="text-gray-300">
              408 E Peabody Drive
              <br />
              Champaign, IL 61820
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Academic Programs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Admissions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Student Resources
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Departments</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Architecture
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Art & Design
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Dance
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Music
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4 mb-4">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <span className="sr-only">Instagram</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.017 0C8.396 0 7.996.014 6.79.067 5.59.12 4.663.288 3.893.545c-.8.26-1.48.578-2.15 1.25C.578 2.468.26 3.148.002 3.948c-.257.81-.43 1.737-.483 2.937C-.014 7.092 0 7.492 0 11.113c0 3.621.014 4.021.067 5.227.053 1.2.226 2.127.483 3.327.258.81.576 1.49 1.248 2.16.672.672 1.352.99 2.152 1.248.81.257 1.737.43 2.937.483C7.092 23.986 7.492 24 11.113 24c3.621 0 4.021-.014 5.227-.067 1.2-.053 2.127-.226 3.327-.483.81-.258 1.49-.576 2.16-1.248.672-.672.99-1.352 1.248-2.152.257-.81.43-1.737.483-2.937.067-1.206.067-1.606.067-5.227 0-3.621-.014-4.021-.067-5.227-.053-1.2-.226-2.127-.483-3.327-.258-.81-.576-1.49-1.248-2.16-.672-.672-.99-1.352-1.248-2.152-.257-.81-.43-1.737-.483-2.937C16.008.014 15.608 0 12.017 0zm0 2.187c3.53 0 3.954.014 5.353.077 1.29.058 1.994.27 2.455.45.584.23 1 .52 1.447.967.447.447.737 1.033.967 1.617.18.461.392 1.165.45 2.455.063 1.399.077 1.823.077 5.353s-.014 3.954-.077 5.353c-.058 1.29-.27 1.994-.45 2.455-.23.584-.52 1-.967 1.447-.447.447-1.033.737-1.617.967-.461.18-1.165.392-2.455.45-1.399.063-1.823.077-5.353.077s-3.954-.014-5.353-.077c-1.29-.058-1.994-.27-2.455-.45-.584-.23-1-.52-1.447-.967-.447-.447-.737-1.033-.967-1.617-.18-.461-.392-1.165-.45-2.455-.063-1.399-.077-1.823-.077-5.353s.014-3.954.077-5.353c.058-1.29.27-1.994.45-2.455.23-.584.52-1 .967-1.447.447-.447 1.033-.737 1.617-.967.461-.18 1.165-.392 2.455-.45 1.399-.063 1.823-.077 5.353-.077zm0 3.124c-3.638 0-6.588 2.95-6.588 6.588s2.95 6.588 6.588 6.588 6.588-2.95 6.588-6.588-2.95-6.588-6.588-6.588zm0 10.856c-2.36 0-4.276-1.916-4.276-4.276s1.916-4.276 4.276-4.276 4.276 1.916 4.276 4.276-1.916 4.276-4.276 4.276zm6.406-10.923c-.9 0-1.631-.731-1.631-1.631s.731-1.631 1.631-1.631 1.631.731 1.631 1.631-.731 1.631-1.631 1.631z" />
                </svg>
              </a>
            </div>
            <p className="text-gray-300 text-sm">
              Phone: (217) 333-ARTS
              <br />
              Email: faa@illinois.edu
            </p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 College of Fine & Applied Arts, University of Illinois. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
