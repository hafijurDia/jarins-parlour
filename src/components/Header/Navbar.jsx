import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronUp, FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/logo/logo.png"
import ThemeToggle from "../../components/Header/ThemeToggle";

const Navbar = () => {
  const [menuItems, setMenuItems] = useState([]); // State to store menu data
  const [openDropdownId, setOpenDropdownId] = useState(null); // Track open dropdown
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Mobile menu state
  const dropdownRef = useRef(null);

  // Fetch menu data from API
  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const response = await fetch("/public/menu.json"); // Replace with your API endpoint
        const data = await response.json();
        setMenuItems(data);
      } catch (error) {
        console.error("Error fetching menu data:", error);
      }
    };

    fetchMenuData();
  }, []);

  // Toggle dropdown
  const toggleDropdown = (id) => {
    setOpenDropdownId(openDropdownId === id ? null : id);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdownId(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Render menu items
  const renderMenuItems = (items) => {
    return items.map((item) => (
      <div key={item.id}>
        {item.children.length > 0 ? (
          <div className="relative" ref={dropdownRef}>
            <div
              className="flex items-center cursor-pointer text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              onClick={() => toggleDropdown(item.id)}
            >
              <span>{item.title}</span>
              {openDropdownId === item.id ? (
                <FaChevronUp className="ml-1" />
              ) : (
                <FaChevronDown className="ml-1" />
              )}
            </div>
            {openDropdownId === item.id && (
              <div className="absolute top-full left-0 bg-white dark:bg-gray-800 shadow-lg mt-2 rounded-lg w-48 z-50">
                {item.children.map((child) => (
                  <Link
                    key={child.id}
                    to={child.url}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                  >
                    {child.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ) : <>
       
          {item.id == 8 ?<Link
            to={item.url}
            className="text-white bg-pink-600 hover:bg-gray-300 py-1 px-4 rounded-sm hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
          >
            {item.title}
          </Link> : <Link
            to={item.url}
            className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
          >
            {item.title}
          </Link>}
      
        </>}
      </div>
    ));
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md py-4 bg-pink-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div>
            <img src={logo} alt="Logo" className="h-12" />
          </div>
            <div className="flex justify-around gap-3">
                {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 items-center">
            {renderMenuItems(menuItems)}
          </div>

          {/* Dark Mode Toggle and Mobile Menu Toggle Button */}
          <div className="flex items-center gap-4">
          <div> <ThemeToggle></ThemeToggle> </div>
           {/* Use the ThemeToggle component */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 dark:text-gray-300 focus:outline-none md:hidden"
            >
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
          
            </div>
          
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4">
            {renderMenuItems(menuItems)}
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;