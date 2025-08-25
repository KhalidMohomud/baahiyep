import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useClerkAuth } from '../contexts/ClerkAuthContext';
import { UserButton } from '@clerk/clerk-react';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isAuthenticated, signOut } = useClerkAuth();

  const handleLogout = () => {
    signOut();
    setMobileOpen(false);
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-100">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <NavLink to="/" className="flex items-center group">
            <img
              src="/image/logo.png"
              alt="Baahiye Digital Marketing logo"
              className="object-contain w-auto h-16 md:h-20 transition-transform duration-300 group-hover:scale-105"
            />
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="items-center hidden space-x-8 md:flex">
            {[
              { to: '/', label: 'Home' },
              { to: '/about', label: 'About' },
              { to: '/service', label: 'Services' },
              { to: '/Contact', label: 'Contact' },
              { to: '/Portifole', label: 'Portfolio' },
            ].map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-gray-700 hover:text-brandOrange transition-all duration-300 font-medium relative group ${
                    isActive ? 'text-brandOrange' : ''
                  }`
                }
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brandOrange transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            ))}
          </nav>

          {/* Authentication Section */}
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <NavLink
                  to="/profile"
                  className="hidden md:block px-4 py-2 text-gray-700 hover:text-brandOrange transition-colors duration-300 font-medium"
                >
                  Profile
                </NavLink>
                <UserButton
                  appearance={{
                    elements: {
                      userButtonAvatarBox: 'w-10 h-10',
                      userButtonPopoverCard: 'shadow-lg border border-gray-200',
                      userButtonPopoverActionButton:
                        'hover:bg-gray-100 transition-colors duration-200',
                    },
                  }}
                  afterSignOutUrl="/"
                />
              </div>
            ) : (
              <div className="hidden md:flex items-center space-x-3">
                <NavLink
                  to="/SingIn"
                  className="px-4 py-2 text-gray-700 hover:text-brandOrange transition-colors duration-300 font-medium"
                >
                  Sign In
                </NavLink>
                <NavLink
                  to="/SingUp"
                  className="px-4 py-2 bg-brandOrange text-white rounded-lg hover:bg-brandNavy transition-all duration-300 font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  Sign Up
                </NavLink>
              </div>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-gray-700 transition-colors duration-300 rounded-md md:hidden hover:text-brandOrange hover:bg-gray-100"
              aria-label="Toggle mobile menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="py-4 border-t border-gray-200 md:hidden animate-in slide-in-from-top-2 duration-300">
          <nav className="flex flex-col space-y-3">
            {[
              { to: '/', label: 'Home' },
              { to: '/about', label: 'About' },
              { to: '/service', label: 'Services' },
              { to: '/Portifole', label: 'Portfolio' },
              { to: '/Contact', label: 'Contact' },
            ].map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-brandOrange text-white shadow-md'
                      : 'text-gray-700 hover:text-brandOrange hover:bg-gray-100'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            {/* Mobile Authentication */}
            {!isAuthenticated && (
              <div className="pt-4 border-t border-gray-200 space-y-2">
                <NavLink
                  to="/SingIn"
                  onClick={closeMobileMenu}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-brandOrange hover:bg-gray-100 rounded-md transition-all duration-300"
                >
                  Sign In
                </NavLink>
                <NavLink
                  to="/SingUp"
                  onClick={closeMobileMenu}
                  className="block px-3 py-2 text-base font-medium bg-brandOrange text-white rounded-md hover:bg-brandNavy transition-all duration-300 shadow-md"
                >
                  Sign Up
                </NavLink>
              </div>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
