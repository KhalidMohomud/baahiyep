import  { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useClerkAuth } from '../contexts/ClerkAuthContext';
import { UserButton } from '@clerk/clerk-react';
import DarkModeToggle from './DarkModeToggle';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isAuthenticated } = useClerkAuth();

  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-50 transition-colors duration-300 border-b border-gray-100 shadow-lg dark:border-gray-700 bg-white/95 dark:bg-dark-surface/95 backdrop-blur-sm">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <NavLink to="/" className="flex items-center group">
            <img
              src="/image/logo.png"
              alt="Baahiye Digital Marketing logo"
              className="object-contain w-auto h-12 transition-transform duration-300 md:h-14 group-hover:scale-105"
            />
          </NavLink>

          {/* Desktop Navigation & Auth */}
          <div className="flex items-center space-x-8">
            <nav className="hidden space-x-8 md:flex">
              {[
               

              { to: '/', label: 'Home' },
              { to: '/service', label: 'Services' },
                { to: '/about', label: 'About' },
                 { to: '/Contact', label: 'Contact' },
              { to: 'https://www.behance.net/baahiyedigitalmark', label: 'Portfolio' },
              ].map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                className={({ isActive }) =>
                  `relative font-medium transition-all duration-300 group ${
                    isActive
                      ? 'text-brandOrange font-semibold'
                      : 'text-gray-700 dark:text-gray-300 hover:text-brandOrange'
                  }`
                }
                  onClick={closeMobileMenu}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-brandOrange transition-all duration-300 group-hover:w-full ${
                      location.pathname === link.to ? 'w-full' : 'w-0'
                    }`}
                  ></span>
                </NavLink>
              ))}
            </nav>

            {/* Dark Mode Toggle */}
            {/* <div className="hidden md:block">
              <DarkModeToggle />
            </div> */}

            {/* User Avatar */}
            {isAuthenticated && (
              <div className="hidden md:block">
                <UserButton
                  appearance={{
                    elements: {
                      userButtonAvatarBox: 'w-10 h-10',
                      userButtonPopoverCard: 'shadow-lg border border-gray-200 dark:border-gray-600 dark:bg-dark-surface',
                      userButtonPopoverActionButton:
                        'hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200',
                    },
                  }}
                  afterSignOutUrl="/"
                />
              </div>
            )}

            {/* Mobile Dark Mode Toggle */}
            <div className="md:hidden">
              <DarkModeToggle />
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-gray-700 transition-colors duration-300 rounded-md dark:text-gray-300 md:hidden hover:text-brandOrange hover:bg-gray-100 dark:hover:bg-gray-600"
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
        <div className="py-4 transition-colors duration-300 bg-white border-t border-gray-200 dark:border-gray-700 dark:bg-dark-surface md:hidden animate-in slide-in-from-top-2">
          <nav className="flex flex-col px-4 space-y-3">
            {[
              { to: '/', label: 'Home' },
              { to: '/service', label: 'Services' },
                { to: '/about', label: 'About' },
                 { to: '/Contact', label: 'Contact' },
             
                 { to: 'https://www.behance.net/baahiyedigitalmark', label: 'Portfolio' },
             
            ].map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-brandOrange text-white shadow-md'
                      : 'text-gray-700 dark:text-gray-300 hover:text-brandOrange hover:bg-gray-100 dark:hover:bg-gray-600'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
