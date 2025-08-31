import React from 'react'
  export  const Herosections = () => {
  return (
       <div className="relative overflow-hidden">
        <div className="stripe-bg"></div>
        <div className="relative px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8 md:py-12">
          <div className="relative md:ml-auto md:w-[850px] md:h-[360px] rounded-[48px] ring-8 ring-brandNavy overflow-hidden shadow-3xl animate-slide-in-up md:animate-float">
            <img src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Creative design workspace" className="object-cover w-full h-full" />
            <div className="absolute inset-x-0 bottom-0 h-6 bg-brandNavy"></div>
          </div>

          <div className="absolute top-6 left-0 right-0 md:right-auto md:w-[820px]">
            <div className="text-white shadow-xl bg-brandOrange angled-banner animate-slide-in-left">
              <div className="px-6 py-6 sm:px-10 md:py-10">
                <div className="text-lg tracking-widest uppercase md:text-2xl opacity-90">Center of</div>
                <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
                  Marketing &<br className="hidden md:block" /> Advertisement
                </h1>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 mt-6 md:mt-10 md:gap-4 animate-slide-in-up">
            <div className="flex items-center justify-center w-12 h-12 text-white rounded-full md:w-14 md:h-14 bg-brandOrange animate-glow">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 md:w-7 md:h-7" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 100 20A10 10 0 0012 2zm7.938 9h-3.11a14.17 14.17 0 00-1.06-4.02A8.03 8.03 0 0119.938 11zM12 4a12.14 12.14 0 011.94 5H10.06A12.14 12.14 0 0112 4zM8.23 5.98A14.17 14.17 0 007.172 11H4.062a8.03 8.03 0 014.168-5.02zM4.062 13h3.11a14.17 14.17 0 001.058 4.02A8.03 8.03 0 014.061 13zM12 20a12.14 12.14 0 01-1.94-5h3.88A12.14 12.14 0 0112 20zm3.77-1.98A14.17 14.17 0 0016.828 13h3.11a8.03 8.03 0 01-4.168 5.02z"/></svg>
            </div>
            <div className="text-2xl font-semibold md:text-3xl">www.baahiye.so</div>
          </div>
        </div>
      </div>
  )
}
