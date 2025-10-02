import gsap from 'gsap';
import React, { useRef, useState, useEffect } from 'react'

const Testimonials = () => {
  const testimonialsRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const testimonials = [

        {
      quote: "Shaqo cajiib ah iyo latalin sax ah. Baahiye waxay noo sahleen in aan si dhakhso leh u gaarno macaamiil cusub.",
      author: "Shiikh Nuradiin",
      title: "Al Nuureyn Travel Agent",
      image: "/image/TestimonialsiMage/shiikh nuradiin .png",
      rating: 5
    },

      {
      quote: "Professional team and outstanding results. We saw real growth in a short time.",
      author: "Abdikarin Hussan",
      title: "Qudus Construction",
      image: "/image/TestimonialsiMage/Abdikarin-Hussan-qudusconstruction..png",
      rating: 5
    }, 

     {
      quote: "“I have full confidence in their work. They are a strong, united team, and I firmly believe they can accomplish great things.”",
      author: "DR Abdullahi Sharif",
      title: "PhDProfessor at Somali National University",
      image: "/image/TestimonialsiMage/dr_k.jpeg",
      rating: 6
    },

    
    {
      quote: "They helped us reach new customers and elevate our brand online.",
      author: "Abdifitaah Farayare",
      title: "CEO of Farayare Training Company.",
      image: "/image/TestimonialsiMage/abdifitaah Farayare.jpg",
      rating: 6
    },
    {
      quote: "Kooxdu waa hal-abuur leh oo daacad ah. Adeegyo heer sare ah ayey bixiyeen waana ku qanacsanahay.",
      author: "Abdikafi Abdulahi Hassan",
      title: "Yaziid Service Group Ltd",
      image: "/image/TestimonialsiMage/abdikafi Abdulahi Hassan .jpg",
      rating: 5
    },


    {
      quote: "From strategy to execution, Baahiye delivered exceptional work and communication.",
      author: "Feynuus",
      title: "CEO, Electric Solutions",
      image: "/image/TestimonialsiMage/feynuus Electric solutions  ceo.jpg",
      rating: 5
    },
 
      {
      quote: "Baahiye waxay si xirfad leh u kobciyeen sumaddeena. Natiijooyinka degdegga ah iyo isgaarsiin joogto ah ayaan aad uga helnay.",
      author: "Dr. Mohamed Omar",
      title: "haleel polyclinic",
      image: "/image/TestimonialsiMage/DR Mohamed omar-01.jpg",
      rating: 5
    },
    {
      quote: "Baahiye waxay si hufan noogu diyaariyeen ololaha onlayn-ka. Guul weyn ayaan ka gaarney.",
      author: "Shaati Cade",
      title: "CEO, Kiro Taat & Suud",
      image: "/image/TestimonialsiMage/shaati Cade CEO KIRO TAAT AND SUUD.jpg",
      rating: 5
    },

    {
      quote: "Creative, reliable, and effective. The campaign exceeded our KPIs across the board.",
      author: "Mohamed Abdikarin",
      title: "ceo of mck electronics",
      image: "/image/TestimonialsiMage/Mohamed Abdikarin CEO (1).jpg",
      rating: 5
    }
  ];

  useEffect(() => {
    // GSAP animations for testimonial cards
    gsap.fromTo(".testimonial-card", 
      { opacity: 0, y: 100, scale: 0.9 },
      { 
        opacity: 1, 
        y: 0, 
        scale: 1, 
        duration: 0.8, 
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: testimonialsRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Check scroll position on mount and scroll events
    const checkScrollPosition = () => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
      }
    };

    checkScrollPosition();
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', checkScrollPosition);
      return () => scrollContainer.removeEventListener('scroll', checkScrollPosition);
    }
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      gsap.to(scrollContainerRef.current, {
        scrollLeft: scrollContainerRef.current.scrollLeft - 400,
        duration: 0.8,
        ease: "power2.out"
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      gsap.to(scrollContainerRef.current, {
        scrollLeft: scrollContainerRef.current.scrollLeft + 400,
        duration: 0.8,
        ease: "power2.out"
      });
    }
  };

  return (
    <div>
      <section ref={testimonialsRef} className="py-20 transition-colors duration-300 bg-gradient-to-br from-lightGray via-white to-lightGray dark:from-dark-surface dark:via-dark-bg dark:to-dark-surface">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h2 className="mb-16 text-4xl font-bold text-center section-heading text-brandNavy dark:text-dark-text">
            What Our Clients Say
          </h2>
          
          {/* Navigation Controls */}
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={scrollLeft}
              disabled={!canScrollLeft}
              className={`flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${
                canScrollLeft 
                  ? 'bg-brandOrange text-white hover:bg-brandNavy shadow-lg hover:shadow-xl' 
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="text-center">
              <div className="text-lg font-semibold text-brandNavy dark:text-dark-text">Scroll to see more testimonials</div>
              <div className="mt-1 text-sm text-gray-600 dark:text-gray-300">Use arrows or swipe</div>
            </div>

            <button
              onClick={scrollRight}
              disabled={!canScrollRight}
              className={`flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${
                canScrollRight 
                  ? 'bg-brandOrange text-white hover:bg-brandNavy shadow-lg hover:shadow-xl' 
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Horizontal Scrolling Container */}
          <div className="relative">
            <div 
              ref={scrollContainerRef}
              className="flex gap-6 pb-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
              style={{ scrollBehavior: 'smooth' }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="relative flex-shrink-0 p-8 text-center transition-all duration-500 bg-white border border-gray-100 shadow-lg dark:bg-dark-card dark:border-gray-600 testimonial-card group rounded-2xl hover:shadow-2xl hover:-translate-y-2 w-80 snap-start"
                >
                
              

                  {/* Profile Image */}
                  <div className="mb-6">
                    <div className="w-20 h-20 mx-auto overflow-hidden transition-all duration-300 border-4 rounded-full shadow-lg border-brandOrange/20 group-hover:border-brandOrange">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.author}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>

                  {/* Quote Text */}
                  <blockquote className="mb-6 text-lg italic leading-relaxed text-gray-700 dark:text-gray-300">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="pt-4 border-t border-gray-100 dark:border-gray-600">
                    <div className="mb-1 text-lg font-bold text-brandNavy dark:text-dark-text">{testimonial.author}</div>
                    <div className="font-medium text-brandOrange">{testimonial.title}</div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute transition-opacity duration-300 top-4 right-4 opacity-10 group-hover:opacity-20">
                    <svg className="w-16 h-16 text-brandOrange" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                  </div>
                </div>
              ))}
            </div>

            {/* Scroll Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <div 
                  key={index}
                  className="w-2 h-2 transition-all duration-300 bg-gray-300 rounded-full"
                ></div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          {/* <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold text-white transition-colors rounded-full cursor-pointer bg-brandOrange hover:bg-brandNavy group">
              <span>Read More Testimonials</span>
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </div> */}
        </div>
      </section>

      {/* Custom CSS for hiding scrollbar */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}

export default Testimonials