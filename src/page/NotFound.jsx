
import { Link } from 'react-router-dom'


const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">
        {/* 404 Illustration */}
        <div className="mb-8 text-center">
          <div className="mb-4 font-bold text-transparent text-9xl bg-clip-text bg-gradient-to-r bg-primary">
            404
          </div>
          <div className="w-32 h-32 mx-auto mb-6">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <circle cx="100" cy="100" r="80" fill="none" stroke="url(#gradient)" strokeWidth="8" className="animate-pulse"/>
              <circle cx="100" cy="100" r="60" fill="none" stroke="url(#gradient)" strokeWidth="4" className="animate-ping"/>
              <circle cx="100" cy="100" r="40" fill="url(#gradient)" className="animate-bounce"/>
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FF5722" />
                  <stop offset="100%" stopColor="#FF5722" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Error Message */}
        <div className="max-w-md mb-8 text-center">
          <h1 className="mb-4 text-3xl font-bold text-gray-800">
           Page Not Found
          </h1>
          <p className="text-lg leading-relaxed text-gray-600">
            The page you're looking for doesn't exist or has been moved. 
            Don't worry, let's get you back on track!
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-4 mb-8 sm:flex-row">
          <Link 
            to="/"
            className="flex items-center justify-center px-8 py-3 font-semibold text-white transition-all duration-200 transform rounded-lg shadow-lg bg-primary to-purple-600 hover:shadow-xl hover:-translate-y-1"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Go Home
          </Link>
          
          <button 
            onClick={() => window.history.back()}
            className="flex items-center justify-center px-8 py-3 font-semibold text-gray-700 transition-all duration-200 border-2 border-gray-300 rounded-lg hover:border-gray-400 hover:bg-gray-50"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Go Back
          </button>
        </div>

        {/* Helpful Links */}
        <div className="text-center">
          <p className="mb-4 text-gray-500">Or try these popular pages:</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/about" className="transition-colors text-primary hover:text-blue-800 hover:underline">
              About Us
            </Link>
            <Link to="/service" className="transition-colors text-primary hover:text-blue-800 hover:underline">
              Services
            </Link>
            <Link to="/Contact" className="transition-colors text-primary hover:text-blue-800 hover:underline">
              Contact
            </Link>
            <Link to="/Portifole" className="transition-colors text-primary hover:text-blue-800 hover:underline">
              Portfolio
            </Link>
          </div>
        </div>
       </div>
    </div>
  )
}

export default NotFound