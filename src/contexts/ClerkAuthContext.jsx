import React, { createContext, useContext } from 'react';
import { useUser, useAuth, SignIn, SignUp } from '@clerk/clerk-react';

const ClerkAuthContext = createContext();

export const useClerkAuth = () => {
  const context = useContext(ClerkAuthContext);
  if (!context) {
    throw new Error('useClerkAuth must be used within a ClerkAuthProvider');
  }
  return context;
};

export const ClerkAuthProvider = ({ children }) => {
  const { isSignedIn, user, isLoaded } = useUser();
  const { signOut } = useAuth();

  // Clerk provides all the authentication functionality
  const value = {
    // User state
    currentUser: isSignedIn ? {
      id: user?.id,
      email: user?.primaryEmailAddress?.emailAddress,
      name: user?.fullName || user?.firstName || 'User',
      verified: user?.emailAddresses?.[0]?.verification?.status === 'verified',
      createdAt: user?.createdAt,
      imageUrl: user?.imageUrl
    } : null,
    
    // Loading state
    loading: !isLoaded,
    
    // Authentication state
    isAuthenticated: isSignedIn,
    isVerified: user?.emailAddresses?.[0]?.verification?.status === 'verified',
    
    // Auth methods (these will be handled by Clerk components)
    signIn: SignIn,
    signUp: SignUp,
    signOut,
    
    // Clerk user object for advanced features
    clerkUser: user,
    
    // Helper methods
    hasRole: (role) => user?.publicMetadata?.role === role,
    hasPermission: (permission) => user?.publicMetadata?.permissions?.includes(permission),
    
    // Profile methods
    updateProfile: async (data) => {
      if (user) {
        await user.update({
          firstName: data.firstName,
          lastName: data.lastName,
          publicMetadata: data.publicMetadata
        });
      }
    }
  };

  return (
    <ClerkAuthContext.Provider value={value}>
      {children}
    </ClerkAuthContext.Provider>
  );
};
