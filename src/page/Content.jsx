import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaUser, FaComments, FaPaperPlane, FaCheckCircle, FaRocket, FaLightbulb, FaUsers, FaGlobe, FaClock } from 'react-icons/fa';


// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);
  const headerRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Header animations
    gsap.fromTo(headerRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );

    // Form animations
    gsap.fromTo(formRef.current,
      { x: -100, opacity: 0, scale: 0.9 },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "elastic.out(1, 0.5)",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Info animations
    gsap.fromTo(infoRef.current.children,
      { x: 100, opacity: 0, scale: 0.8 },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: infoRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Floating animation for contact info cards
    gsap.to(infoRef.current.children, {
      y: -5,
      duration: 3,
      ease: "power2.inOut",
      stagger: 0.3,
      yoyo: true,
      repeat: -1
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-2xl text-white" />,
      title: "Address",
      details: "City Tower 311 Floor 3 Shaqaalaha Street, Waaberi District Mogadishu, Somalia",
      color: "from-brandOrange to-orange-500"
    },
    {
      icon: <FaEnvelope className="text-2xl text-white" />,
      title: "Email",
      details: "info@Baahiye.so",
      color: "from-brandNavy to-blue-600"
    },
    {
      icon: <FaPhone className="text-2xl text-white" />,
      title: "Phone",
      details: "+252618-046672\n+252682-569080",
      color: "from-green-500 to-emerald-600"
    }
  ];

  const features = [
    {
      icon: <FaRocket className="text-2xl text-brandOrange" />,
      title: "Fast Response",
      description: "We respond within 24 hours"
    },
    {
      icon: <FaLightbulb className="text-2xl text-brandOrange" />,
      title: "Expert Support",
      description: "Professional team assistance"
    },
    {
      icon: <FaUsers className="text-2xl text-brandOrange" />,
      title: "24/7 Available",
      description: "Round the clock support"
    }
  ];

  return (
    <section ref={sectionRef} className="min-h-screen bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-white/50"></div>
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div ref={headerRef} className="mb-16 text-center">
            <h2 className="text-5xl md:text-6xl font-bold text-brandNavy mb-6">Get in Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Ready to start your digital transformation journey? Let's discuss how we can help your business grow
            </p>
            <div className="w-32 h-1 bg-brandOrange mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Contact Form */}
            <div ref={formRef} className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-3">Send us a Message</h3>
                <p className="text-gray-600">Fill out the form below and we'll get back to you soon</p>
              </div>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <FaCheckCircle className="text-6xl text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600">Thank you for contacting us. We'll respond within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                      <div className="relative">
                        <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-brandOrange focus:outline-none transition-all duration-300 group-hover:border-brandOrange/50"
                          placeholder="Enter your full name"
                        />
                      </div>
                    </div>
                    
                    <div className="group">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                      <div className="relative">
                        <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-brandOrange focus:outline-none transition-all duration-300 group-hover:border-brandOrange/50"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <div className="relative">
                        <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-brandOrange focus:outline-none transition-all duration-300 group-hover:border-brandOrange/50"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>
                    
                    <div className="group">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                      <div className="relative">
                        <FaComments className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-brandOrange focus:outline-none transition-all duration-300 group-hover:border-brandOrange/50"
                          placeholder="What's this about?"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-brandOrange focus:outline-none transition-all duration-300 group-hover:border-brandOrange/50 resize-none"
                      placeholder="Tell us about your project or inquiry..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-brandOrange to-brandNavy text-white py-4 rounded-xl font-semibold text-lg hover:from-brandNavy hover:to-brandOrange transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending Message...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        <FaPaperPlane className="mr-2" />
                        Send Message
                      </span>
                    )}
                  </button>
                </form>
              )}
            </div>
            
            {/* Contact Information */}
            <div ref={infoRef} className="space-y-8">
              <div className="text-center lg:text-left">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Contact Information</h3>
                <p className="text-gray-600 text-lg">Get in touch with us through any of these channels</p>
              </div>
              
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 cursor-pointer"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${info.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{info.title}</h4>
                      <p className="text-gray-600 leading-relaxed whitespace-pre-line">{info.details}</p>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Features */}
              <div className="grid grid-cols-1 gap-4 mt-8">
                {features.map((feature, index) => (
                  <div key={index} className="text-center p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-100">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-brandOrange/10 to-brandNavy/10 rounded-full mb-3">
                      {feature.icon}
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">{feature.title}</h4>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom section */}
      <div className="bg-brandOrange py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6 text-white">
            <div className="flex items-center space-x-4">
              <FaGlobe className="w-6 h-6" />
              <FaClock className="w-6 h-6" />
              <span className="font-semibold">Baahiye Digital Marketing</span>
            </div>
            <div className="text-sm opacity-90">
              Transforming businesses through digital innovation
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;