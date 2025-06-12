import React from 'react';
import { Link, useNavigate } from 'react-router'; // Corrected from 'react-router'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from './Redux/user';

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'About', href: '/about', current: false },
  { name: 'Contact', href: '/contact', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Nax = () => {
  const handleLogout = () => {
  dispatch(logout());
  navigate('/log');  
};
const dispatch   = useDispatch();
const navigate   = useNavigate();
const isAuth     = useSelector((state) => !!state.user.token); 
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <Disclosure as="nav" className="fixed top-0 left-0 right-0 z-50 bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between items-center">
            <div className="flex items-center">
              <img
                alt="Your Company"
                src="/Images/logo2.jpeg"
                className="h-16 w-auto py-2" 
              />
            </div>

            <div className="hidden sm:flex space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-black text-white'
                      : 'text-black hover:bg-gray-200 hover:text-black transition duration-300',
                    'rounded-md px-3 py-2 text-sm font-medium'
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <div className="sm:hidden">
                <DisclosureButton className="inline-flex items-center justify-center p-2 rounded-md text-black hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black">
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                </DisclosureButton>
              </div>

              <Menu as="div" className="relative">
                <MenuButton className="flex items-center text-sm focus:outline-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="h-7 w-7 text-black"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </MenuButton>
                <MenuItems className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
               <MenuItem>
  {({ active }) =>
    isAuth ? (
      /* ---- SIGN-OUT when logged in ---- */
      <button
        onClick={handleLogout}
        className={`block w-full text-left px-4 py-2 text-sm ${
          active ? 'bg-gray-200' : 'text-black'
        }`}
      >
        Sign Out
      </button>
    ) : (
      /* ---- SIGN-IN when not logged in ---- */
      <Link
        to="/sign"
        className={`block px-4 py-2 text-sm ${
          active ? 'bg-gray-200' : 'text-black'
        }`}
      >
        Sign In
      </Link>
    )
  }
</MenuItem>

                  <MenuItem>
                    {({ active }) => (
                      <Link
                        to="/admin"
                        className={`block px-4 py-2 text-sm ${active ? 'bg-gray-200' : 'text-black'}`}
                      >
                        Admin
                      </Link>
                    )}
                  </MenuItem>
               
                </MenuItems>
              </Menu>
            </div>
          </div>
        </div>

        <DisclosurePanel className="sm:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as={Link}
                to={item.href}
                className={classNames(
                  item.current ? 'bg-black text-white' : 'text-black hover:bg-gray-200',
                  'block rounded-md px-3 py-2 text-base font-medium'
                )}
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure>
    </motion.div>
  );
};

export default Nax;
