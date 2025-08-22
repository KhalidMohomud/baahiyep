import React from 'react';
import { useClerkAuth } from '../contexts/ClerkAuthContext';
import { FaUser, FaEnvelope, FaCalendar, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { UserProfile as ClerkUserProfile } from '@clerk/clerk-react';

const UserProfile = () => {
  const { currentUser, isAuthenticated } = useClerkAuth();

  if (!isAuthenticated || !currentUser) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-lightGray via-white to-lightGray flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-brandNavy mb-4">
            Please Sign In
          </h2>
          <p className="text-gray-600">
            You need to be signed in to view your profile.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-lightGray via-white to-lightGray py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-brandNavy mb-2">
            Your Profile
          </h1>
          <p className="text-gray-600">
            Manage your account settings and preferences
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* User Info Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-brandNavy mb-6">Account Information</h2>
            
            {/* Profile Picture & Basic Info */}
            <div className="text-center mb-6">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-brandOrange to-brandNavy rounded-full flex items-center justify-center mb-4">
                {currentUser.imageUrl ? (
                  <img 
                    src={currentUser.imageUrl} 
                    alt={currentUser.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : (
                  <FaUser className="w-10 h-10 text-white" />
                )}
              </div>
              <h3 className="text-2xl font-bold text-brandNavy">{currentUser.name}</h3>
              <p className="text-gray-600">{currentUser.email}</p>
            </div>

            {/* Verification Status */}
            <div className="mb-6">
              <div className={`flex items-center justify-between p-4 rounded-lg border ${
                currentUser.verified 
                  ? 'bg-green-50 border-green-200' 
                  : 'bg-yellow-50 border-yellow-200'
              }`}>
                <div className="flex items-center">
                  {currentUser.verified ? (
                    <FaCheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  ) : (
                    <FaTimesCircle className="w-5 h-5 text-yellow-600 mr-3" />
                  )}
                  <div>
                    <div className={`font-medium ${
                      currentUser.verified ? 'text-green-800' : 'text-yellow-800'
                    }`}>
                      {currentUser.verified ? 'Email Verified' : 'Email Not Verified'}
                    </div>
                    <div className={`text-sm ${
                      currentUser.verified ? 'text-green-600' : 'text-yellow-600'
                    }`}>
                      {currentUser.verified 
                        ? 'Your account is fully activated' 
                        : 'Please verify your email to access all features'
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* User Details */}
            <div className="space-y-4">
              <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                <FaEnvelope className="w-5 h-5 text-gray-400 mr-3" />
                <div>
                  <div className="text-sm text-gray-500">Email</div>
                  <div className="font-medium text-gray-900">{currentUser.email}</div>
                </div>
              </div>
              
              <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                <FaCalendar className="w-5 h-5 text-gray-400 mr-3" />
                <div>
                  <div className="text-sm text-gray-500">Member Since</div>
                  <div className="font-medium text-gray-900">
                    {currentUser.createdAt ? new Date(currentUser.createdAt).toLocaleDateString() : 'N/A'}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Clerk UserProfile Component */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-brandNavy mb-6">Account Settings</h2>
            <ClerkUserProfile 
              appearance={{
                elements: {
                  card: 'bg-transparent shadow-none border-0 p-0',
                  pageScrollBox: 'p-0',
                  navbar: 'hidden',
                  pageContent: 'p-0',
                  formButtonPrimary: 'bg-brandOrange hover:bg-brandNavy text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300',
                  formFieldInput: 'border border-gray-300 rounded-lg focus:ring-2 focus:ring-brandOrange focus:border-brandOrange transition-all duration-300',
                  formFieldLabel: 'text-gray-700 font-medium',
                  formFieldAction: 'text-brandOrange hover:text-brandNavy transition-colors duration-300',
                  dividerLine: 'bg-gray-200',
                  dividerText: 'text-gray-500',
                  headerTitle: 'text-lg font-semibold text-brandNavy',
                  headerSubtitle: 'text-gray-600'
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
