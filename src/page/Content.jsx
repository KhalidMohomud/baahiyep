import  { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaUser, FaComments, FaPaperPlane, FaCheckCircle, FaRocket, FaLightbulb, FaUsers} from 'react-icons/fa';
import SectionFooter from '../components/SectionFooter';
import Clients from '../components/Clients';


// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);
  const headerRef = useRef(null);
    const featureCardsRef = useRef(null);
     const featuresRef = useRef(null);
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
      details: "+252618-046672\n+252682-569080\n+252 61 3732356",
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
    <div ref={sectionRef} className="relative min-h-screen overflow-hidden transition-colors duration-300 bg-white dark:bg-dark-bg">
    
        <div className="pb-16 bg-gradient-to-r from-red-800 via-red-700 to-brandOrange pt-28">
    <div className="flex items-center justify-around mx-auto max-w-7xl sm:py-20">
      {/* Left side - Title */}
      <h1 className="text-4xl font-extrabold text-white md:text-5xl">Content</h1>

      {/* Right side - Breadcrumb */}
      <div className="flex items-center gap-2 text-lg font-bold text-white/90 ">
        <a href="/" className="hover:underline">Home</a>
        <span>›</span>
        <span>Content</span>
      </div>
    </div>
  </div>
      <div className="container relative z-10 px-6 py-16 mx-auto">
        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <div ref={headerRef} className="mb-16 text-center">
            <h2 className="mb-6 text-5xl font-bold md:text-6xl text-brandNavy dark:text-dark-text">Get in Touch</h2>
            <p className="max-w-3xl mx-auto mb-8 text-xl text-gray-600 dark:text-gray-300">
              Ready to start your digital transformation journey? Let's discuss how we can help your business grow
            </p>
            <div className="w-32 h-1 mx-auto bg-brandOrange"></div>
          </div>
          
          <div className="grid items-start gap-16 lg:grid-cols-2">
            
            {/* Contact Form */}
            <div ref={formRef} className="p-8 bg-white border border-gray-100 shadow-2xl dark:bg-dark-card dark:border-gray-600 rounded-3xl">
              <div className="mb-8 text-center">
                <h3 className="mb-3 text-3xl font-bold text-gray-900 dark:text-dark-text">Send us a Message</h3>
                <p className="text-gray-600 dark:text-gray-300">Fill out the form below and we'll get back to you soon</p>
              </div>
              
              {isSubmitted ? (
                <div className="py-12 text-center">
                  <FaCheckCircle className="mx-auto mb-4 text-6xl text-green-500" />
                  <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-dark-text">Message Sent!</h3>
                  <p className="text-gray-600 dark:text-gray-300">Thank you for contacting us. We'll respond within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="group">
                      <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
                      <div className="relative">
                        <FaUser className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full py-3 pl-10 pr-4 transition-all duration-300 border-2 border-gray-200 dark:border-gray-600 dark:bg-dark-surface dark:text-dark-text rounded-xl focus:border-brandOrange focus:outline-none group-hover:border-brandOrange/50"
                          placeholder="Enter your full name"
                        />
                      </div>
                    </div>
                    
                    <div className="group">
                      <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
                      <div className="relative">
                        <FaEnvelope className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full py-3 pl-10 pr-4 transition-all duration-300 border-2 border-gray-200 dark:border-gray-600 dark:bg-dark-surface dark:text-dark-text rounded-xl focus:border-brandOrange focus:outline-none group-hover:border-brandOrange/50"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="group">
                      <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Phone Number</label>
                      <div className="relative">
                        <FaPhone className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full py-3 pl-10 pr-4 transition-all duration-300 border-2 border-gray-200 dark:border-gray-600 dark:bg-dark-surface dark:text-dark-text rounded-xl focus:border-brandOrange focus:outline-none group-hover:border-brandOrange/50"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>
                    
                    <div className="group">
                      <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Subject</label>
                      <div className="relative">
                        <FaComments className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="w-full py-3 pl-10 pr-4 transition-all duration-300 border-2 border-gray-200 dark:border-gray-600 dark:bg-dark-surface dark:text-dark-text rounded-xl focus:border-brandOrange focus:outline-none group-hover:border-brandOrange/50"
                          placeholder="What's this about?"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="group">
                    <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 transition-all duration-300 border-2 border-gray-200 resize-none dark:border-gray-600 dark:bg-dark-surface dark:text-dark-text rounded-xl focus:border-brandOrange focus:outline-none group-hover:border-brandOrange/50"
                      placeholder="Tell us about your project or inquiry..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 text-lg font-semibold text-white transition-all duration-300 transform shadow-lg bg-gradient-to-r from-brandOrange to-brandNavy rounded-xl hover:from-brandNavy hover:to-brandOrange hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <div className="w-5 h-5 mr-2 border-b-2 border-white rounded-full animate-spin"></div>
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
                <h3 className="mb-4 text-3xl font-bold text-gray-900 dark:text-dark-text">Contact Information</h3>
                <p className="text-lg text-gray-600 dark:text-gray-300">Get in touch with us through any of these channels</p>
              </div>
              
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="p-6 transition-all duration-300 bg-white border border-gray-100 shadow-lg cursor-pointer dark:bg-dark-card dark:border-gray-600 group rounded-2xl hover:shadow-2xl"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${info.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="mb-2 text-xl font-bold text-gray-900 dark:text-dark-text">{info.title}</h4>
                      <p className="leading-relaxed text-gray-600 whitespace-pre-line dark:text-gray-300">{info.details}</p>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Features */}
              <div className="grid grid-cols-1 gap-4 mt-8">
                {features.map((feature, index) => (
                  <div key={index} className="p-4 text-center border border-gray-100 dark:border-gray-600 bg-gradient-to-r from-gray-50 to-white dark:from-dark-surface dark:to-dark-card rounded-xl">
                    <div className="inline-flex items-center justify-center w-12 h-12 mb-3 rounded-full bg-gradient-to-br from-brandOrange/10 to-brandNavy/10">
                      {feature.icon}
                    </div>
                    <h4 className="mb-1 text-lg font-bold text-gray-900 dark:text-dark-text">{feature.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>


      
       
       
       <Clients/>

      {/* Bottom section */}
   
          <SectionFooter />
    </div>


  );
};

export default Contact;