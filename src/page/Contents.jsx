// import React, { useEffect, useRef, useState } from 'react'
// import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import { TextPlugin } from 'gsap/TextPlugin'
// import Header from '../components/Header'
// import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute, FaShare, FaHeart, FaBookmark, FaComment, FaEye, FaDownload, FaCalendar, FaUser, FaTag, FaArrowRight, FaLightbulb, FaRocket, FaChartLine, FaUsers, FaAward } from 'react-icons/fa'

// // Register GSAP plugins
// gsap.registerPlugin(ScrollTrigger, TextPlugin)

// const Content = () => {
//   const heroRef = useRef(null)
//   const contentGridRef = useRef(null)
//   const statsRef = useRef(null)
//   const ctaRef = useRef(null)
//   const titleRef = useRef(null)
//   const subtitleRef = useRef(null)
//   const [currentVideo, setCurrentVideo] = useState(0)
//   const [isPlaying, setIsPlaying] = useState(false)

//   useEffect(() => {
//     // Hero section animations
//     const heroTl = gsap.timeline()
    
//     heroTl
//       .fromTo(titleRef.current, 
//         { y: 100, opacity: 0 },
//         { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
//       )
//       .fromTo(subtitleRef.current,
//         { y: 50, opacity: 0 },
//         { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
//         "-=0.8"
//       )
//       .fromTo(heroRef.current.querySelectorAll('.hero-element'),
//         { y: 30, opacity: 0, scale: 0.8 },
//         { y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.15, ease: "back.out(1.7)" },
//         "-=0.5"
//       )

//     // Content grid animations
//     gsap.fromTo(contentGridRef.current.children,
//       { y: 100, opacity: 0, scale: 0.9 },
//       {
//         y: 0,
//         opacity: 1,
//         scale: 1,
//         duration: 1,
//         stagger: 0.2,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: contentGridRef.current,
//           start: "top 80%",
//           end: "bottom 20%",
//           toggleActions: "play none none reverse"
//         }
//       }
//     )

//     // Stats section animations
//     gsap.fromTo(statsRef.current.children,
//       { scale: 0, opacity: 0, rotation: 180 },
//       {
//         scale: 1,
//         opacity: 1,
//         rotation: 0,
//         duration: 1.2,
//         stagger: 0.3,
//         ease: "elastic.out(1, 0.5)",
//         scrollTrigger: {
//           trigger: statsRef.current,
//           start: "top 80%",
//           end: "bottom 20%",
//           toggleActions: "play none none reverse"
//         }
//       }
//     )

//     // CTA section animation
//     gsap.fromTo(ctaRef.current,
//       { scale: 0.8, opacity: 0, y: 50 },
//       {
//         scale: 1,
//         opacity: 1,
//         y: 0,
//         duration: 1.2,
//         ease: "back.out(1.7)",
//         scrollTrigger: {
//           trigger: ctaRef.current,
//           start: "top 80%",
//           end: "bottom 20%",
//           toggleActions: "play none none reverse"
//         }
//       }
//     )

//     // Floating animation for content cards
//     gsap.to(contentGridRef.current.children, {
//       y: -15,
//       duration: 3,
//       ease: "power2.inOut",
//       stagger: 0.2,
//       yoyo: true,
//       repeat: -1
//     })

//     return () => {
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill())
//     }
//   }, [])

//   const handleCardHover = (e) => {
//     gsap.to(e.currentTarget, {
//       scale: 1.03,
//       y: -8,
//       duration: 0.4,
//       ease: "power2.out"
//     })
//   }

//   const handleCardLeave = (e) => {
//     gsap.to(e.currentTarget, {
//       scale: 1,
//       y: 0,
//       duration: 0.4,
//       ease: "power2.out"
//     })
//   }

//   const contentItems = [
//     {
//       type: 'video',
//       title: 'Digital Marketing Masterclass',
//       description: 'Learn the fundamentals of digital marketing and how to create effective campaigns.',
//       duration: '45 min',
//       views: '2.4K',
//       likes: '156',
//       thumbnail: '/image/clbg.jpeg',
//       category: 'Marketing',
//       author: 'Sarah Johnson',
//       date: '2 days ago'
//     },
//     {
//       type: 'article',
//       title: 'The Future of Web Design in 2024',
//       description: 'Explore the latest trends and technologies shaping the future of web design.',
//       readTime: '8 min read',
//       views: '1.8K',
//       likes: '89',
//       thumbnail: '/image/khalid.jpeg',
//       category: 'Design',
//       author: 'Mike Chen',
//       date: '1 week ago'
//     },
//     {
//       type: 'podcast',
//       title: 'Building Successful Brand Strategies',
//       description: 'Expert insights on creating and maintaining powerful brand identities.',
//       duration: '32 min',
//       views: '3.1K',
//       likes: '203',
//       thumbnail: '/image/logo.png',
//       category: 'Branding',
//       author: 'Emma Davis',
//       date: '3 days ago'
//     },
//     {
//       type: 'video',
//       title: 'SEO Optimization Techniques',
//       description: 'Advanced SEO strategies to improve your website ranking and visibility.',
//       duration: '52 min',
//       views: '1.9K',
//       likes: '134',
//       thumbnail: '/image/clbg.jpeg',
//       category: 'SEO',
//       author: 'David Wilson',
//       date: '5 days ago'
//     },
//     {
//       type: 'article',
//       title: 'Social Media Marketing Tips',
//       description: 'Proven strategies to grow your social media presence and engagement.',
//       readTime: '6 min read',
//       views: '2.7K',
//       likes: '178',
//       thumbnail: '/image/khalid.jpeg',
//       category: 'Social Media',
//       author: 'Lisa Brown',
//       date: '4 days ago'
//     },
//     {
//       type: 'podcast',
//       title: 'Content Creation Best Practices',
//       description: 'Learn how to create compelling content that resonates with your audience.',
//       duration: '28 min',
//       views: '2.2K',
//       likes: '145',
//       thumbnail: '/image/logo.png',
//       category: 'Content',
//       author: 'Alex Thompson',
//       date: '1 week ago'
//     }
//   ]

//   const stats = [
//     { number: '500+', label: 'Content Pieces', icon: <FaRocket /> },
//     { number: '50K+', label: 'Total Views', icon: <FaEye /> },
//     { number: '10K+', label: 'Active Users', icon: <FaUsers /> },
//     { number: '95%', label: 'Satisfaction Rate', icon: <FaAward /> }
//   ]

//   const categories = ['All', 'Marketing', 'Design', 'Branding', 'SEO', 'Social Media', 'Content', 'Development']

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
//       <Header />
      
//       {/* Hero Section */}
//       <section ref={heroRef} className="relative pt-32 pb-20 overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-r from-brandOrange/10 to-brandNavy/10"></div>
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h1 
//             ref={titleRef}
//             className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 hero-element"
//           >
//             Discover
//             <span className="text-brandOrange block">Amazing Content</span>
//           </h1>
//           <p 
//             ref={subtitleRef}
//             className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto hero-element"
//           >
//             Explore our curated collection of videos, articles, and podcasts designed to help you grow your business
//           </p>
          
//           {/* Search Bar */}
//           <div className="max-w-2xl mx-auto mb-8 hero-element">
//             <div className="relative">
//               <input
//                 type="text"
//                 placeholder="Search for content..."
//                 className="w-full px-6 py-4 text-lg border-2 border-gray-200 rounded-full focus:border-brandOrange focus:outline-none shadow-lg"
//               />
//               <button className="absolute right-2 top-2 px-6 py-2 bg-brandOrange text-white rounded-full hover:bg-brandNavy transition-colors duration-300">
//                 Search
//               </button>
//             </div>
//           </div>

//           {/* Category Filter */}
//           <div className="flex flex-wrap justify-center gap-3 hero-element">
//             {categories.map((category, index) => (
//               <button
//                 key={index}
//                 className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
//                   index === 0 
//                     ? 'bg-brandOrange text-white shadow-lg' 
//                     : 'bg-white text-gray-700 hover:bg-brandOrange hover:text-white border border-gray-200'
//                 }`}
//               >
//                 {category}
//               </button>
//             ))}
//           </div>
//         </div>
        
//         {/* Floating elements */}
//         <div className="absolute top-20 left-10 w-20 h-20 bg-brandOrange/20 rounded-full blur-xl hero-element"></div>
//         <div className="absolute top-40 right-20 w-32 h-32 bg-brandNavy/20 rounded-full blur-xl hero-element"></div>
//         <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-brandOrange/30 rounded-full blur-lg hero-element"></div>
//       </section>

//       {/* Stats Section */}
//       <section ref={statsRef} className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             {stats.map((stat, index) => (
//               <div key={index} className="text-center group">
//                 <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-brandOrange to-brandNavy rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
//                   <div className="text-white text-2xl">{stat.icon}</div>
//                 </div>
//                 <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
//                 <div className="text-gray-600 font-medium">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Content Grid Section */}
//       <section ref={contentGridRef} className="py-20 bg-gradient-to-r from-gray-50 to-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//               Featured Content
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Discover our most popular and trending content pieces created by industry experts
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {contentItems.map((item, index) => (
//               <div
//                 key={index}
//                 className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
//                 onMouseEnter={handleCardHover}
//                 onMouseLeave={handleCardLeave}
//               >
//                 {/* Thumbnail */}
//                 <div className="relative h-48 bg-gradient-to-br from-brandOrange/20 to-brandNavy/20">
//                   <img
//                     src={item.thumbnail}
//                     alt={item.title}
//                     className="w-full h-full object-cover"
//                   />
//                   <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                  
//                   {/* Play button for videos/podcasts */}
//                   {item.type !== 'article' && (
//                     <button className="absolute inset-0 flex items-center justify-center">
//                       <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
//                         <FaPlay className="text-brandOrange text-xl ml-1" />
//                       </div>
//                     </button>
//                   )}
                  
//                   {/* Category badge */}
//                   <div className="absolute top-4 left-4">
//                     <span className="px-3 py-1 bg-brandOrange text-white text-sm font-medium rounded-full">
//                       {item.category}
//                     </span>
//                   </div>
//                 </div>

//                 {/* Content */}
//                 <div className="p-6">
//                   <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
//                     <FaUser className="text-brandOrange" />
//                     <span>{item.author}</span>
//                     <span>•</span>
//                     <span>{item.date}</span>
//                   </div>
                  
//                   <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brandOrange transition-colors duration-300">
//                     {item.title}
//                   </h3>
                  
//                   <p className="text-gray-600 mb-4 leading-relaxed">
//                     {item.description}
//                   </p>
                  
//                   {/* Meta info */}
//                   <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
//                     <div className="flex items-center gap-4">
//                       {item.type === 'article' ? (
//                         <span className="flex items-center gap-1">
//                           <FaBookmark />
//                           {item.readTime}
//                         </span>
//                       ) : (
//                         <span className="flex items-center gap-1">
//                           <FaPlay />
//                           {item.duration}
//                         </span>
//                       )}
//                       <span className="flex items-center gap-1">
//                         <FaEye />
//                         {item.views}
//                       </span>
//                     </div>
//                     <span className="flex items-center gap-1">
//                       <FaHeart />
//                       {item.likes}
//                     </span>
//                   </div>
                  
//                   {/* Action buttons */}
//                   <div className="flex items-center justify-between">
//                     <button className="px-4 py-2 bg-brandOrange text-white rounded-full text-sm font-medium hover:bg-brandNavy transition-colors duration-300">
//                       {item.type === 'article' ? 'Read More' : 'Watch Now'}
//                     </button>
//                     <div className="flex items-center gap-2">
//                       <button className="p-2 text-gray-400 hover:text-brandOrange transition-colors duration-300">
//                         <FaShare />
//                       </button>
//                       <button className="p-2 text-gray-400 hover:text-brandOrange transition-colors duration-300">
//                         <FaBookmark />
//                       </button>
//                       <button className="p-2 text-gray-400 hover:text-brandOrange transition-colors duration-300">
//                         <FaDownload />
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
          
//           {/* Load More Button */}
//           <div className="text-center mt-12">
//             <button className="px-8 py-4 bg-gradient-to-r from-brandOrange to-brandNavy text-white rounded-full text-lg font-semibold hover:from-brandNavy hover:to-brandOrange transition-all duration-300 transform hover:scale-105 shadow-lg">
//               Load More Content
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section ref={ctaRef} className="py-20 bg-gradient-to-r from-brandOrange to-brandNavy">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
//             Ready to Create Amazing Content?
//           </h2>
//           <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
//             Join thousands of creators and businesses who trust us to deliver high-quality, engaging content that drives results.
//           </p>
//           <div className="flex flex-wrap justify-center gap-4">
//             <button className="px-8 py-4 bg-white text-brandOrange rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
//               Start Creating
//             </button>
//             <button className="px-8 py-4 border-2 border-white text-white rounded-full text-lg font-semibold hover:bg-white hover:text-brandOrange transition-all duration-300 transform hover:scale-105">
//               Get Inspired
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

// export default Content