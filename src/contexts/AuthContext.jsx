import React, { createContext, useContext, useState, useEffect } from 'react';
import emailService from '../utils/emailService';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [verificationSent, setVerificationSent] = useState(false);

  // Check if user is logged in on app load
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setCurrentUser(JSON.parse(user));
    }
    setLoading(false);
  }, []);

  // Simulate user registration
  const register = async (email, password, name) => {
    try {
      setLoading(true);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Create user object
      const user = {
        id: Date.now().toString(),
        email,
        name,
        verified: false,
        createdAt: new Date().toISOString()
      };
      
      // Store user in localStorage (in real app, this would be in a database)
      localStorage.setItem('user', JSON.stringify(user));
      setCurrentUser(user);
      
      // Send verification email using email service
      const emailResult = await emailService.sendVerificationEmail(email, Math.floor(100000 + Math.random() * 900000).toString());
      
      if (emailResult.success) {
        setVerificationSent(true);
        return { success: true, user, message: 'Registration successful! Please check your email for verification code.' };
      } else {
        return { success: false, error: emailResult.error };
      }
    } catch (error) {
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  // Simulate user login
  const login = async (email, password) => {
    try {
      setLoading(true);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Check if user exists (in real app, this would validate against database)
      const storedUser = localStorage.getItem('user');
      if (!storedUser) {
        throw new Error('User not found. Please register first.');
      }
      
      const user = JSON.parse(storedUser);
      
      // Simple password validation (in real app, this would be proper authentication)
      if (user.email !== email) {
        throw new Error('Invalid email or password');
      }
      
      // Update user and store in localStorage
      localStorage.setItem('user', JSON.stringify(user));
      setCurrentUser(user);
      
      return { success: true, user };
    } catch (error) {
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  // Send verification email
  const sendVerificationEmail = async (email) => {
    try {
      setLoading(true);
      
      // Generate verification code
      const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();
      
      // Use email service to send verification email
      const result = await emailService.sendVerificationEmail(email, verificationCode);
      
      if (result.success) {
        setVerificationSent(true);
        return { success: true, message: 'Verification email sent successfully' };
      } else {
        return { success: false, error: result.error };
      }
    } catch (error) {
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  // Verify email with code
  const verifyEmail = async (code) => {
    try {
      setLoading(true);
      
      if (!currentUser) {
        throw new Error('No user logged in');
      }
      
      // Use email service to verify code
      const result = await emailService.verifyEmailCode(currentUser.email, code);
      
      if (result.success) {
        // Update user verification status
        const updatedUser = { ...currentUser, verified: true };
        localStorage.setItem('user', JSON.stringify(updatedUser));
        setCurrentUser(updatedUser);
        setVerificationSent(false);
        
        return { success: true, message: 'Email verified successfully' };
      } else {
        return { success: false, error: result.error };
      }
    } catch (error) {
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  // Logout user
  const logout = () => {
    localStorage.removeItem('user');
    setCurrentUser(null);
    setVerificationSent(false);
  };

  // Resend verification email
  const resendVerification = async () => {
    if (currentUser) {
      return await emailService.resendVerificationEmail(currentUser.email);
    }
    return { success: false, error: 'No user logged in' };
  };

  // Check verification status
  const getVerificationStatus = (email) => {
    return emailService.getVerificationStatus(email);
  };

  const value = {
    currentUser,
    loading,
    verificationSent,
    register,
    login,
    logout,
    sendVerificationEmail,
    verifyEmail,
    resendVerification,
    getVerificationStatus
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
