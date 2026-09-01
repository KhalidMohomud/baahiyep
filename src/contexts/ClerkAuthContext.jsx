import React, { createContext, useContext } from 'react';

const ClerkAuthContext = createContext();

export const useClerkAuth = () => {
  const context = useContext(ClerkAuthContext);
  if (!context) {
    throw new Error('useClerkAuth must be used within a ClerkAuthProvider');
  }
  return context;
};

export const ClerkAuthProvider = ({ children }) => {
  // Clerk has been removed - this is now a placeholder provider
  const value = {
    currentUser: null,
    loading: false,
    isAuthenticated: false,
    isVerified: false,
  };

  return (
    <ClerkAuthContext.Provider value={value}>
      {children}
    </ClerkAuthContext.Provider>
  );
};
