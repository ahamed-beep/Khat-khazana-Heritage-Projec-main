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

  const byDecade = {
    label: "BY DECADE (1900–2000)",
    to: "#",
    children: Array.from({ length: 11 }, (_, i) => {
      const year = 1900 + i * 10;
      return {
        label: `${year}`,
        to: `/${year}`,
      };
    }),
  };

  const byCategory = {
    label: "BY CATEGORY",
    to: "/letters/category",
    children: [
      { label: "LOVE LETTERS", to: "/love" },
      { label: "FAMILY", to: "/family" },
      { label: "WAR/POLITICAL TURMOIL", to: "/war" },
      { label: "TRAVEL", to: "/travel" },
      { label: "DAIRYPAGES/NEWSPAGES", to: "/dairy" },
      { label: "CARDS/POSTCARDS", to: "/cards" },
      { label: "MOVIE POSTER", to: "/movie" },
      { label: "CALENDERS", to: "/calenders" },
      { label: "OTHERS", to: "/other" },
      { label: "LETTERS BY FAMOUS PERSONALITIES", to: "/famous" },
    ],
  };

  const extraPages = [
    { label: "FEATURED LETTERS", to: "/featured" },
    { label: "FEATURED PHOTOGRAPHS", to: "/photographs" },
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
                    className="relative"
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
                    <button className="flex items-center text-sm text-gray-800 hover:text-black gap-1">
                      {link.label}
                      <ChevronDownIcon
                        className={`h-4 w-4 transform transition-transform duration-200 ${
                          lettersHover ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </button>

                    {lettersHover && (
                      <div className="absolute top-full left-0 bg-white shadow-lg mt-1 border rounded w-56 z-30">
                        {/* BY DECADE */}
                        <div
                          onMouseEnter={() => setNestedDropdown(byDecade.label)}
                          onMouseLeave={() => setNestedDropdown(null)}
                          className="relative group"
                        >
                          <Link
                            to={byDecade.to}
                            className="flex justify-between items-center px-4 py-2 text-sm hover:bg-gray-100"
                          >
                            {byDecade.label}
                            <ChevronRightIcon className="h-4 w-4" />
                          </Link>
                          {nestedDropdown === byDecade.label && (
                            <div className="absolute top-0 left-full bg-white shadow-lg border rounded w-56 z-40">
                              {byDecade.children.map((child) => (
                                <Link
                                  key={child.label}
                                  to={child.to}
                                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* BY CATEGORY */}
                        <div
                          onMouseEnter={() => setNestedDropdown(byCategory.label)}
                          onMouseLeave={() => setNestedDropdown(null)}
                          className="relative group"
                        >
                          <Link
                            to={byCategory.to}
                            className="flex justify-between items-center px-4 py-2 text-sm hover:bg-gray-100"
                          >
                            {byCategory.label}
                            <ChevronRightIcon className="h-4 w-4" />
                          </Link>
                          {nestedDropdown === byCategory.label && (
                            <div className="absolute top-0 left-full bg-white shadow-lg border rounded w-56 z-40">
                              {byCategory.children.map((child) => (
                                <Link
                                  key={child.label}
                                  to={child.to}
                                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* Extra Pages Outside Dropdown */}
                        {extraPages.map((item) => (
                          <Link
                            key={item.label}
                            to={item.to}
                            className="block px-4 py-2 text-sm hover:bg-gray-100 border-t"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    to={link.to}
                    className="text-sm text-gray-800 hover:text-black"
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
