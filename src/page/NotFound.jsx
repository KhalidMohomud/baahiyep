import React from 'react'
import { Link } from 'react-router-dom'


const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">
        {/* 404 Illustration */}
        <div className="text-center mb-8">
          <div className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
            404
          </div>
          <div className="w-32 h-32 mx-auto mb-6">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <circle cx="100" cy="100" r="80" fill="none" stroke="url(#gradient)" strokeWidth="8" className="animate-pulse"/>
              <circle cx="100" cy="100" r="60" fill="none" stroke="url(#gradient)" strokeWidth="4" className="animate-ping"/>
              <circle cx="100" cy="100" r="40" fill="url(#gradient)" className="animate-bounce"/>
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#8B5CF6" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Error Message */}
        <div className="text-center mb-8 max-w-md">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Oops! Page Not Found
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            The page you're looking for doesn't exist or has been moved. 
            Don't worry, let's get you back on track!
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Link 
            to="/"
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 flex items-center justify-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Go Home
          </Link>
          
          <button 
            onClick={() => window.history.back()}
            className="px-8 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 flex items-center justify-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Go Back
          </button>
        </div>

        {/* Helpful Links */}
        <div className="text-center">
          <p className="text-gray-500 mb-4">Or try these popular pages:</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/about" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">
              About Us
            </Link>
            <Link to="/service" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">
              Services
            </Link>
            <Link to="/Contact" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">
              Contact
            </Link>
            <Link to="/Portifole" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">
              Portfolio
            </Link>
          </div>
        </div>
       </div>
    </div>
  )
}

export default NotFound