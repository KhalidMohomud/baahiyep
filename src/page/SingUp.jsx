import React from 'react';
import { SignUp } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';

const SingUp = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-lightGray via-white to-lightGray flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-brandNavy">
            Create Your Account
          </h2>
          <p className="mt-2 text-gray-600">
            Join Baahiye Digital Marketing today
          </p>
        </div>

        {/* Clerk SignUp Component */}
        <div className="mt-8">
          <SignUp 
            appearance={{
              elements: {
                formButtonPrimary: 'bg-brandOrange hover:bg-brandNavy text-white font-medium py-3 px-4 rounded-lg transition-colors duration-300',
                card: 'bg-white rounded-2xl shadow-lg border-0',
                headerTitle: 'text-2xl font-bold text-brandNavy',
                headerSubtitle: 'text-gray-600',
                socialButtonsBlockButton: 'border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-300',
                formFieldInput: 'border border-gray-300 rounded-lg focus:ring-2 focus:ring-brandOrange focus:border-brandOrange transition-all duration-300',
                footerActionLink: 'text-brandOrange hover:text-brandNavy transition-colors duration-300',
                verificationCodeInput: 'border border-gray-300 rounded-lg focus:ring-2 focus:ring-brandOrange focus:border-brandOrange transition-all duration-300 text-center text-lg tracking-widest',
                formFieldLabel: 'text-gray-700 font-medium',
                formFieldAction: 'text-brandOrange hover:text-brandNavy transition-colors duration-300',
                dividerLine: 'bg-gray-200',
                dividerText: 'text-gray-500'
              }
            }}
            routing="path"
            path="/SingUp"
            signInUrl="/SingIn"
            redirectUrl="/"
            afterSignUpUrl="/verify-email"
          />
        </div>

        {/* Additional Info */}
        <div className="text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <Link
              to="/SingIn"
              className="font-medium text-brandOrange hover:text-brandNavy transition-colors duration-300"
            >
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingUp;