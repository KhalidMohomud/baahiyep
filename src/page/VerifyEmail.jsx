import React, { useState } from 'react';
import { useClerk, useSignUp } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';
import { FaEnvelope, FaCheckCircle, FaExclamationTriangle, FaArrowLeft } from 'react-icons/fa';

const VerifyEmail = () => {
  const { signUp, setActive } = useClerk();
  const navigate = useNavigate();
  const [verificationCode, setVerificationCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);

  const handleVerification = async (e) => {
    e.preventDefault();
    if (!verificationCode.trim()) {
      setError('Please enter the verification code');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      // Attempt to verify the email
      const result = await signUp.attemptEmailAddressVerification({
        code: verificationCode,
      });

      if (result.status === 'complete') {
        setSuccess(true);
        setError('');
        
        // Set the session as active
        await setActive({ session: result.createdSessionId });
        
        // Redirect to home page after a short delay
        setTimeout(() => {
          navigate('/');
        }, 2000);
      } else {
        setError('Verification failed. Please check your code and try again.');
      }
    } catch (err) {
      console.error('Verification error:', err);
      setError(err.errors?.[0]?.message || 'Verification failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendCode = async () => {
    setResendLoading(true);
    setError('');

    try {
      await signUp.prepareEmailAddressVerification();
      setError('');
      // Show success message
      alert('Verification code resent successfully! Please check your email.');
    } catch (err) {
      console.error('Resend error:', err);
      setError(err.errors?.[0]?.message || 'Failed to resend verification code.');
    } finally {
      setResendLoading(false);
    }
  };

  const handleBackToSignUp = () => {
    navigate('/SingUp');
  };

  if (success) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-lightGray via-white to-lightGray flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6">
              <FaCheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-brandNavy mb-4">
              Email Verified Successfully!
            </h2>
            <p className="text-gray-600 mb-6">
              Your account has been created and verified. You will be redirected to the home page shortly.
            </p>
            <div className="animate-pulse">
              <div className="w-4 h-4 bg-brandOrange rounded-full mx-auto"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-lightGray via-white to-lightGray flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="w-16 h-16 mx-auto bg-brandOrange rounded-full flex items-center justify-center mb-4">
            <FaEnvelope className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-brandNavy">
            Verify Your Email
          </h2>
          <p className="mt-2 text-gray-600">
            We've sent a verification code to your email address
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center">
            <FaExclamationTriangle className="w-5 h-5 mr-2" />
            {error}
          </div>
        )}

        {/* Verification Form */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <form onSubmit={handleVerification} className="space-y-6">
            <div>
              <label htmlFor="verificationCode" className="block text-sm font-medium text-gray-700 mb-2">
                Verification Code
              </label>
              <input
                id="verificationCode"
                type="text"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                placeholder="Enter 6-digit code"
                maxLength="6"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brandOrange focus:border-brandOrange transition-all duration-300 text-center text-lg tracking-widest"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-brandOrange text-white py-3 px-4 rounded-lg hover:bg-brandNavy transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Verifying...
                </div>
              ) : (
                'Verify Email'
              )}
            </button>
          </form>

          {/* Resend Code */}
          <div className="mt-6 text-center">
            <button
              onClick={handleResendCode}
              disabled={resendLoading}
              className="text-brandOrange hover:text-brandNavy transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {resendLoading ? 'Sending...' : "Didn't receive the code? Resend"}
            </button>
          </div>
        </div>

        {/* Back to Sign Up */}
        <div className="text-center">
          <button
            onClick={handleBackToSignUp}
            className="text-gray-600 hover:text-brandOrange transition-colors duration-300 flex items-center justify-center mx-auto"
          >
            <FaArrowLeft className="w-4 h-4 mr-2" />
            Back to Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
