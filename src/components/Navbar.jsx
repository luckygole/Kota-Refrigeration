import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import RequestServiceModal from "./RequestServiceModal";
import logo from "../assets/kotalogo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const location = useLocation();
  const navigate = useNavigate();

  // Track active section (only on home)
  useEffect(() => {
    if (location.pathname !== "/") return;

    const handleScroll = () => {
      const sections = ["home", "services", "about", "contact"];
      const scrollY = window.scrollY + 200;
      let currentSection = "home";

      for (let id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            currentSection = id;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleInPageNav = (id) => {
    setMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToSection(id), 500);
    } else {
      scrollToSection(id);
    }
  };

  const handleRequestService = () => {
    setIsModalOpen(true);
    setMenuOpen(false);
  };

  const navItems = [
    { name: "Home", type: "link", path: "/" },
    { name: "Services", type: "section", id: "services" },
    { name: "About", type: "link", path: "/about" },
    { name: "Contact", type: "section", id: "contact" },
  ];

  return (
    <>
      <nav className="bg-gradient-to-r from-blue-700 via-blue-600 to-teal-500 text-white shadow-lg fixed w-full top-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          {/* 🔹 Left: Logo */}
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="flex items-center space-x-2"
          >
            <img
              src={logo}
              alt="Kota Refrigeration Works"
              className="w-30 h-12  rounded-md object-contain"
            />
          </Link>

          {/* 🔹 Center: Menu */}
          <div className="hidden md:flex space-x-8 font-medium items-center justify-center flex-1">
            {navItems.map((item) => {
              const isActive =
                (item.type === "link" && location.pathname === item.path) ||
                (item.type === "section" &&
                  activeSection === item.id &&
                  location.pathname === "/");

              if (item.type === "link") {
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className={`relative pb-1 transition-all duration-300 ${
                      isActive
                        ? "text-orange-300 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-orange-400 after:rounded-full"
                        : "hover:text-orange-300"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              } else {
                return (
                  <button
                    key={item.name}
                    onClick={() => handleInPageNav(item.id)}
                    className={`relative pb-1 transition-all duration-300 ${
                      isActive
                        ? "text-orange-300 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-orange-400 after:rounded-full"
                        : "hover:text-orange-300"
                    }`}
                  >
                    {item.name}
                  </button>
                );
              }
            })}

            <button
              onClick={handleRequestService}
              className="hover:text-orange-300 transition-all duration-300"
            >
              Request Service
            </button>
          </div>

          {/* 🔹 Right: Call Now Button */}
          <div className="hidden md:block">
            <a
              href="tel:+916265580736"
              className="bg-gradient-to-r from-orange-400 to-orange-500 text-white px-4 py-2 rounded-full shadow hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Call Now
            </a>
          </div>

          {/* 🔹 Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden focus:outline-none ml-2"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* 🔹 Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-blue-700/95 text-white flex flex-col space-y-4 px-6 py-5 absolute top-full left-0 w-full shadow-lg">
            {navItems.map((item) =>
              item.type === "link" ? (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={`transition-colors duration-300 ${
                    location.pathname === item.path
                      ? "text-orange-300 font-semibold"
                      : "hover:text-orange-300"
                  }`}
                >
                  {item.name}
                </Link>
              ) : (
                <button
                  key={item.name}
                  onClick={() => handleInPageNav(item.id)}
                  className="hover:text-orange-300 text-left transition-colors duration-300"
                >
                  {item.name}
                </button>
              )
            )}

            <button
              onClick={handleRequestService}
              className="hover:text-orange-300 text-left transition-colors duration-300"
            >
              Request Service
            </button>

            <a
              href="tel:+916265580736"
              className="bg-gradient-to-r from-orange-400 to-orange-500 text-center py-2 rounded-full shadow hover:scale-105 transition-all duration-300"
              onClick={() => setMenuOpen(false)}
            >
              Call Now
            </a>
          </div>
        )}
      </nav>

      {/* 🔹 Request Service Modal */}
      <RequestServiceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
