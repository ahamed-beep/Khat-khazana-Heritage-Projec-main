import React, { useState, useRef } from "react";
import {
  MagnifyingGlassIcon,
  XMarkIcon,
  Bars3Icon,
  ChevronDownIcon,
  ChevronRightIcon,
  HomeIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router";
import MobileSidebar from "./MobileSidebar";

const Nax = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [lettersHover, setLettersHover] = useState(false);
  const [nestedDropdown, setNestedDropdown] = useState(null);
  const hoverTimeout = useRef(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [dropdownState, setDropdownState] = useState({});

  const toggleDropdown = (key) => {
    setDropdownState((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const navLinks = [
    { label: "ABOUT US", to: "/about" },
    { label: "LETTERS", to: "/letters", isDropdown: true },
    { label: "PHOTO GALLERY", to: "/photo" },
    { label: "SUBMISSION", to: "/sub" },
    { label: "SUPPORT", to: "/supp" },
    { label: "CONTACT US", to: "/contact" },
  ];

  const lettersDropdownItems = [
    {
      label: "BY DECADE (1900–2000)",
      to: "/letters/decade",
      children: Array.from({ length: 11 }, (_, i) => {
        const year = 1900 + i * 10;
        return {
          label: `${year}`,
          to: `/letters/decade/${year}`,
        };
      }),
    },
    {
      label: "BY CATEGORY",
      to: "/letters/category",
      children: [
        "LOVE LETTERS",
        "FAMILY",
        "WAR/POLITICAL TURMOIL",
        "TRAVEL",
        "DAIRYPAGES/NEWSPAGES",
        "CARDS/POSTCARDS",
        "MOVIE POSTER",
        "CALENDERS",
        "OTHERS",
        "LETTERS BY FAMOUS PERSONALITIES",
        "FEATURED LETTERS",
        "FEATURED PHOTO GRAPHS",
      ].map((label) => ({
        label,
        to: `/letters/category/${label.toLowerCase().replace(/\s|\//g, "-")}`,
      })),
    },
  ];

  return (
    <nav className="w-full bg-white px-4 py-3 relative border-b border-gray-300 z-50">
      <div className="max-w-6xl mx-auto">
        {/* Mobile Navbar */}
        <div className="flex justify-between items-center md:hidden">
          <button onClick={() => setIsSidebarOpen(true)}>
            <Bars3Icon className="h-6 w-6 text-gray-700" />
          </button>

          {showSearch ? (
            <div className="flex items-center gap-2 flex-grow mx-2 bg-white px-2 py-1 border border-gray-300 rounded">
              <input
                type="text"
                autoFocus
                placeholder="Search..."
                className="text-sm w-full outline-none bg-white"
              />
              <button onClick={() => setShowSearch(false)}>
                <XMarkIcon className="h-5 w-5 text-gray-700" />
              </button>
            </div>
          ) : (
            <button onClick={() => setShowSearch(true)}>
              <MagnifyingGlassIcon className="h-6 w-6 text-gray-700" />
            </button>
          )}
        </div>

        {/* Desktop Navbar */}
        <div className="hidden md:flex flex-col items-center">
          <div className="h-[1px] bg-gray-300 w-full mb-2" />

          {showSearch ? (
            <div className="flex items-center gap-2 w-full bg-white px-3 py-1 border border-gray-300 rounded">
              <input
                type="text"
                autoFocus
                placeholder="Type to search..."
                className="text-sm w-full outline-none bg-white"
              />
              <button onClick={() => setShowSearch(false)}>
                <XMarkIcon className="h-5 w-5 text-gray-700" />
              </button>
            </div>
          ) : (
            <div className="flex items-center justify-between gap-4 w-full flex-wrap">
              <Link to="/">
                <HomeIcon className="h-5 w-5 text-gray-700" />
              </Link>

              {navLinks.map((link) =>
                link.isDropdown ? (
                  <div
                    key={link.label}
                    className="relative group"
                    onMouseEnter={() => {
                      clearTimeout(hoverTimeout.current);
                      setLettersHover(true);
                    }}
                    onMouseLeave={() => {
                      hoverTimeout.current = setTimeout(() => {
                        setLettersHover(false);
                        setNestedDropdown(null);
                      }, 300);
                    }}
                  >
                    <button className="flex items-center text-sm text-gray-600  hover:text-black gap-1">
                      {link.label}
                      <ChevronDownIcon
                        className={`h-4 w-4 transform transition-transform duration-200 ${
                          lettersHover ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </button>

                    {/* Main Dropdown */}
                    {lettersHover && (
                      <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg border border-gray-200 rounded-md z-50">
                        {lettersDropdownItems.map((item) => (
                          <div
                            key={item.label}
                            onMouseEnter={() => setNestedDropdown(item.label)}
                            onMouseLeave={() => setNestedDropdown(null)}
                            className="relative group"
                          >
                            <Link
                              to={item.to}
                              className="flex justify-between items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              {item.label}
                              {item.children && (
                                <ChevronRightIcon className="h-4 w-4" />
                              )}
                            </Link>

                            {/* Nested Dropdown */}
                            {item.children &&
                              nestedDropdown === item.label && (
                                <div className="absolute top-0 left-full mt-0 ml-1 w-56 bg-white shadow-lg border border-gray-200 rounded-md z-50">
                                  {item.children.map((child) => (
                                    <Link
                                      key={child.label}
                                      to={child.to}
                                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    >
                                      {child.label}
                                    </Link>
                                  ))}
                                </div>
                              )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    to={link.to}
                    className="text-sm text-gray-600 hover:text-black"
                  >
                    {link.label}
                  </Link>
                )
              )}

              <button onClick={() => setShowSearch(true)}>
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-700" />
              </button>
            </div>
          )}

          <div className="h-[1px] bg-gray-300 w-full mt-2" />
        </div>
      </div>

      {/* Mobile Sidebar */}
      <MobileSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        dropdownState={dropdownState}
        toggleDropdown={toggleDropdown}
      />
    </nav>
  );
};

export default Nax;
