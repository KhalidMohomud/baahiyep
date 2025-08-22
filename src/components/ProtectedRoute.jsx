import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useClerkAuth } from '../contexts/ClerkAuthContext';

const ProtectedRoute = ({ children, requireVerification = false }) => {
  const { currentUser, loading, isAuthenticated, isVerified } = useClerkAuth();
  const location = useLocation();

  // Show loading spinner while checking authentication
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-lightGray via-white to-lightGray flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brandOrange mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  // If user is not authenticated, redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/SingIn" state={{ from: location }} replace />;
  }

  // If verification is required and user is not verified
  if (requireVerification && !isVerified) {
    return <Navigate to="/profile" state={{ from: location, requireVerification: true }} replace />;
  }

  // User is authenticated and verified (if required), render children
  return children;
};

export default ProtectedRoute;
