import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useClerkAuth } from '../contexts/ClerkAuthContext';
import { FaUser, FaSignOutAlt, FaChevronDown } from 'react-icons/fa';
import { UserButton } from '@clerk/clerk-react';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const { currentUser, signOut, isAuthenticated } = useClerkAuth();

  const handleLogout = () => {
    signOut();
    setUserMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <NavLink to="/" className="flex items-center group">
            <img
              src="/image/logo.png"
              alt="Baahiye Digital Marketing logo"
              className="object-contain w-auto h-16 md:h-22"
            />
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="items-center hidden space-x-8 md:flex">
            <NavLink 
              to="/" 
              className={({isActive}) => 
                `text-gray-700 hover:text-brandOrange transition-colors font-medium ${
                  isActive ? 'text-brandOrange' : ''
                }`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({isActive}) => 
                `text-gray-700 hover:text-brandOrange transition-colors font-medium ${
                  isActive ? 'text-brandOrange' : ''
                }`
              }
            >
              About
            </NavLink>
            <NavLink 
              to="/service" 
              className={({isActive}) => 
                `text-gray-700 hover:text-brandOrange transition-colors font-medium ${
                  isActive ? 'text-brandOrange' : ''
                }`
              }
            >
              Services
            </NavLink>
            <NavLink 
              to="/Portifole" 
              className={({isActive}) => 
                `text-gray-700 hover:text-brandOrange transition-colors font-medium ${
                  isActive ? 'text-brandOrange' : ''
                }`
              }
            >
              Portfolio
            </NavLink>
            <NavLink 
              to="/Contact" 
              className={({isActive}) => 
                `text-gray-700 hover:text-brandOrange transition-colors font-medium ${
                  isActive ? 'text-brandOrange' : ''
                }`
              }
            >
              Contact
            </NavLink>
          </nav>

          {/* Authentication Section */}
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              /* User Menu with Clerk UserButton */
              <div className="flex items-center space-x-4">
                <NavLink
                  to="/profile"
                  className="hidden md:block px-4 py-2 text-gray-700 hover:text-brandOrange transition-colors font-medium"
                >
                  Profile
                </NavLink>
                
                {/* Clerk UserButton - provides built-in user menu */}
                <UserButton 
                  appearance={{
                    elements: {
                      userButtonAvatarBox: 'w-10 h-10',
                      userButtonPopoverCard: 'shadow-lg border border-gray-200',
                      userButtonPopoverActionButton: 'hover:bg-gray-100 transition-colors duration-200'
                    }
                  }}
                  afterSignOutUrl="/"
                />
              </div>
            ) : (
              /* Login/Signup Buttons */
              <div className="hidden md:flex items-center space-x-3">
                <NavLink
                  to="/SingIn"
                  className="px-4 py-2 text-gray-700 hover:text-brandOrange transition-colors font-medium"
                >
                  Sign In
                </NavLink>
                <NavLink
                  to="/SingUp"
                  className="px-4 py-2 bg-brandOrange text-white rounded-lg hover:bg-brandNavy transition-colors font-medium"
                >
                  Sign Up
                </NavLink>
              </div>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-gray-700 transition-colors rounded-md md:hidden hover:text-brandOrange hover:bg-gray-100"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <div className="py-4 border-t border-gray-200 md:hidden">
            <nav className="flex flex-col space-y-3">
              <NavLink 
                to="/" 
                onClick={() => setMobileOpen(false)}
                className={({isActive}) => 
                  `px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive 
                      ? 'bg-brandOrange text-white' 
                      : 'text-gray-700 hover:text-brandOrange hover:bg-gray-100'
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink 
                to="/about" 
                onClick={() => setMobileOpen(false)}
                className={({isActive}) => 
                  `px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive 
                      ? 'bg-brandOrange text-white' 
                      : 'text-gray-700 hover:text-brandOrange hover:bg-gray-100'
                  }`
                }
              >
                About
              </NavLink>
              <NavLink 
                to="/service" 
                onClick={() => setMobileOpen(false)}
                className={({isActive}) => 
                  `px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive 
                      ? 'bg-brandOrange text-white' 
                      : 'text-gray-700 hover:text-brandOrange hover:bg-gray-100'
                  }`
                }
              >
                Services
              </NavLink>
              <NavLink 
                to="/Portifole" 
                onClick={() => setMobileOpen(false)}
                className={({isActive}) => 
                  `px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive 
                      ? 'bg-brandOrange text-white' 
                      : 'text-gray-700 hover:text-brandOrange hover:bg-gray-100'
                  }`
                }
              >
                Portfolio
              </NavLink>
              <NavLink 
                to="/Contact" 
                onClick={() => setMobileOpen(false)}
                className={({isActive}) => 
                  `px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive 
                      ? 'bg-brandOrange text-white' 
                      : 'text-gray-700 hover:text-brandOrange hover:bg-gray-100'
                  }`
                }
              >
                Contact
              </NavLink>

              {/* Mobile Authentication */}
              {!isAuthenticated && (
                <div className="pt-4 border-t border-gray-200 space-y-2">
                  <NavLink
                    to="/SingIn"
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-brandOrange hover:bg-gray-100 rounded-md transition-colors"
                  >
                    Sign In
                  </NavLink>
                  <NavLink
                    to="/SingUp"
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-2 text-base font-medium bg-brandOrange text-white rounded-md hover:bg-brandNavy transition-colors"
                  >
                    Sign Up
                  </NavLink>
                </div>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
