import React from 'react';
import { SignIn } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';

const SingIn = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-lightGray via-white to-lightGray flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-brandNavy mb-2">
            Welcome Back
          </h2>
          <p className="text-gray-600">
            Sign in to your Baahiye Digital Marketing account
          </p>
        </div>

        {/* Clerk SignIn Component */}
        <div className="mt-8">
          <SignIn 
            appearance={{
              elements: {
                formButtonPrimary: 'bg-brandOrange hover:bg-brandNavy text-white font-medium py-3 px-4 rounded-lg transition-colors duration-300',
                card: 'bg-white rounded-2xl shadow-lg border-0',
                headerTitle: 'text-2xl font-bold text-brandNavy',
                headerSubtitle: 'text-gray-600',
                socialButtonsBlockButton: 'border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-300',
                formFieldInput: 'border border-gray-300 rounded-lg focus:ring-2 focus:ring-brandOrange focus:border-brandOrange transition-all duration-300',
                footerActionLink: 'text-brandOrange hover:text-brandNavy transition-colors duration-300'
              }
            }}
            routing="path"
            path="/SingIn"
            signUpUrl="/SingUp"
            redirectUrl="/"
          />
        </div>

        {/* Additional Info */}
        <div className="text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <Link
              to="/SingUp"
              className="font-medium text-brandOrange hover:text-brandNavy transition-colors duration-300"
            >
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingIn;