import React from 'react';

const Header = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-lightGray via-white to-lightGray relative overflow-hidden">
      <div className="absolute inset-0 network-pattern opacity-30"></div>
      
      {/* Orange decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full -translate-y-32 translate-x-32 opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary rounded-full translate-y-48 -translate-x-48 opacity-15"></div>
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[80vh]">
          <div className="flex-1 mb-12 lg:mb-0">
            {/* Logo */}
            <div className="flex items-center mb-8">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mr-4 shadow-lg">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <div className="flex space-x-1">
                      <div className="w-1 h-4 bg-white rounded"></div>
                      <div className="w-1 h-3 bg-white rounded"></div>
                      <div className="w-1 h-4 bg-white rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-navy">
                  baahiye<span className="text-primary">.</span>
                </h1>
                <p className="text-primary font-semibold text-lg tracking-wider">
                  DIGITAL MARKETING
                </p>
              </div>
            </div>
            
            {/* Main heading */}
            <div className="bg-primary text-white p-8 rounded-r-full max-w-2xl shadow-2xl">
              <h2 className="text-2xl lg:text-3xl font-light mb-2">CENTER OF</h2>
              <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
                MARKETING &<br />
                ADVERTISEMENT
              </h2>
            </div>
            
            {/* Website URL */}
            <div className="mt-8 flex items-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-2xl font-bold text-navy">www.baahiye.so</span>
            </div>
          </div>
          
          {/* Image section */}
          <div className="flex-1 lg:pl-16">
            <div className="relative">
              <div className="bg-navy rounded-2xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <img 
                  src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Creative Design Work"
                  className="rounded-lg w-full"
                />
                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                  <div className="text-center">
                    <div className="text-primary text-2xl font-bold">CREATIVE</div>
                    <div className="text-navy text-sm">DESIGN</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;