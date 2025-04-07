
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 py-8 mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="font-serif text-lg">Alexia Vasilaki</span>
          </div>
          
          <div className="flex space-x-6 text-sm text-gray-600">
            <Link to="/" className="hover:text-black transition-colors">
              Home
            </Link>
            <Link to="/resume" className="hover:text-black transition-colors">
              Resume
            </Link>
            <Link to="/events" className="hover:text-black transition-colors">
              Events
            </Link>
            <Link to="/articles" className="hover:text-black transition-colors">
              Articles
            </Link>
            <Link to="/contact" className="hover:text-black transition-colors">
              Contact
            </Link>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} Alexia Vasilaki. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
