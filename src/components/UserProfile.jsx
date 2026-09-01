import React from 'react';
import { FaUser } from 'react-icons/fa';

const UserProfile = () => {
  // Placeholder profile content (Clerk authentication removed)
  return (
    <div className="min-h-screen bg-gradient-to-br from-lightGray via-white to-lightGray py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-brandNavy mb-2">
            User Profile
          </h1>
          <p className="text-gray-600">
            Welcome to your profile
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* User Info Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-brandNavy mb-6">Account Information</h2>

            {/* Profile Picture & Basic Info */}
            <div className="text-center mb-6">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-brandOrange to-brandNavy rounded-full flex items-center justify-center mb-4">
                <FaUser className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-brandNavy">User</h3>
              <p className="text-gray-600">user@example.com</p>
            </div>

            {/* Placeholder */}
            <div className="bg-gray-50 p-4 rounded-lg text-center text-gray-600">
              <p>Authentication has been removed from this app.</p>
              <p className="text-sm mt-2">Profile features are currently unavailable.</p>
            </div>
          </div>

          {/* Settings Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-brandNavy mb-6">Account Settings</h2>
            <div className="bg-gray-50 p-4 rounded-lg text-center text-gray-600">
              <p>No authentication system configured.</p>
              <p className="text-sm mt-2">Please set up an authentication method if needed.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
