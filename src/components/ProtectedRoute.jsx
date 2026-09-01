import React from 'react';

const ProtectedRoute = ({ children }) => {
  // Removed Clerk authentication - route is now accessible to all
  return children;

  // User is authenticated and verified (if required), render children
  return children;
};

export default ProtectedRoute;
