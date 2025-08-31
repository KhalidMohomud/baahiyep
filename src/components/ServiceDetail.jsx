import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaPalette, FaChartLine, FaGlobe, FaRocket, FaUsers, FaStar, FaCheck, 
  FaArrowLeft, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaAward,
  FaLightbulb, FaCode, FaShieldAlt, FaHeart, FaRocket as FaRocketIcon
} from 'react-icons/fa';

const ServiceDetail = () => {
  const { title } = useParams();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  const serviceData = {
    'graphic-design': {
      title: "Graphic Design & Branding",
      subtitle: "Creative Excellence",
      icon: <FaPalette className="text-8xl" />,
      bgGradient: "from-red-800 via-red-700 to-brandOrange",
      accentColor: "from-pink-400 to-purple-600",
      description: "Transform your brand with our comprehensive graphic design services. We create captivating visual identities that leave lasting impressions and drive business growth.",
      longDescription: "Our graphic design expertise spans across all aspects of brand development, from initial concept to final execution. We understand that great design is not just about aesthetics—it's about creating meaningful connections with your audience.",
      features: [
        "Professional Logo Design",
        "Brand Identity Development",
        "UI/UX Design Solutions",
        "Event Branding & Materials",
        "Print & Digital Collateral",
        "Social Media Graphics",
        "Packaging Design",
        "Corporate Branding"
      ],
      benefits: [
        "Increased Brand Recognition",
        "Professional Market Presence",
        "Consistent Visual Identity",
        "Enhanced Customer Trust",
        "Competitive Advantage",
        "Scalable Design Systems"
      ],
      process: [
        { step: 1, title: "Discovery", description: "Understanding your brand, goals, and target audience" },
        { step: 2, title: "Strategy", description: "Developing a comprehensive design strategy and concept" },
        { step: 3, title: "Design", description: "Creating initial designs and visual concepts" },
        { step: 4, title: "Refinement", description: "Collaborating on feedback and perfecting the design" },
        { step: 5, title: "Delivery", description: "Finalizing and delivering all design assets" }
      ],
      pricing: {
        basic: { price: "$499", features: ["Logo Design", "Basic Brand Guidelines", "3 Revisions", "Source Files"] },
        professional: { price: "$1,299", features: ["Complete Brand Identity", "Brand Guidelines", "Unlimited Revisions", "All Source Files", "Social Media Kit"] },
        enterprise: { price: "$2,999", features: ["Full Brand Identity", "Comprehensive Guidelines", "Unlimited Revisions", "All Source Files", "Social Media Kit", "Print Materials", "Brand Strategy"] }
      }
    },
    'digital-marketing': {
      title: "Digital Marketing",
      subtitle: "Strategic Growth",
      icon: <FaChartLine className="text-8xl" />,
      bgGradient: "from-blue-900 via-blue-800 to-cyan-700",
      accentColor: "from-blue-400 to-cyan-500",
      description: "Drive sustainable business growth with our data-driven digital marketing strategies. We help businesses connect with their audience and achieve measurable results.",
      longDescription: "Our digital marketing approach combines creativity with analytics to deliver campaigns that not only look great but also perform exceptionally well. We focus on building long-term relationships with your customers through strategic content and engagement.",
      features: [
        "Social Media Marketing",
        "Content Marketing Strategy",
        "Search Engine Optimization (SEO)",
        "Pay-Per-Click Advertising",
        "Email Marketing Campaigns",
        "Analytics & Reporting",
        "Influencer Partnerships",
        "Community Management"
      ],
      benefits: [
        "Increased Online Visibility",
        "Higher Conversion Rates",
        "Better Customer Engagement",
        "Measurable ROI",
        "Brand Authority Building",
        "Cost-Effective Marketing"
      ],
      process: [
        { step: 1, title: "Audit", description: "Comprehensive analysis of current digital presence" },
        { step: 2, title: "Strategy", description: "Developing customized marketing strategies" },
        { step: 3, title: "Implementation", description: "Executing campaigns across all channels" },
        { step: 4, title: "Optimization", description: "Continuous monitoring and improvement" },
        { step: 5, title: "Reporting", description: "Regular performance reports and insights" }
      ],
      pricing: {
        starter: { price: "$799", features: ["Social Media Management", "Content Creation", "Basic Analytics", "Monthly Reports"] },
        growth: { price: "$1,999", features: ["Full Digital Marketing", "SEO Optimization", "PPC Management", "Advanced Analytics", "Weekly Reports"] },
        enterprise: { price: "$4,999", features: ["Complete Digital Strategy", "All Marketing Channels", "Custom Analytics", "Daily Monitoring", "Dedicated Manager"] }
      }
    },
    'web-solutions': {
      title: "Web Solutions",
      subtitle: "Digital Excellence",
      icon: <FaGlobe className="text-8xl" />,
      bgGradient: "from-green-900 via-green-800 to-emerald-700",
      accentColor: "from-green-400 to-emerald-500",
      description: "Build your digital presence with our comprehensive web solutions. From stunning designs to robust hosting, we create websites that convert visitors into customers.",
      longDescription: "Our web solutions encompass every aspect of your online presence, ensuring that your website not only looks professional but also performs flawlessly across all devices and platforms.",
      features: [
        "Responsive Web Design",
        "E-commerce Development",
        "Custom Web Applications",
        "Domain Registration",
        "Web Hosting Services",
        "SSL Certificates",
        "Website Maintenance",
        "Performance Optimization"
      ],
      benefits: [
        "Professional Online Presence",
        "Mobile-First Design",
        "Fast Loading Times",
        "SEO Optimized",
        "Secure & Reliable",
        "24/7 Support"
      ],
      process: [
        { step: 1, title: "Planning", description: "Requirements gathering and project planning" },
        { step: 2, title: "Design", description: "Creating wireframes and visual designs" },
        { step: 3, title: "Development", description: "Building the website with clean code" },
        { step: 4, title: "Testing", description: "Quality assurance and testing" },
        { step: 5, title: "Launch", description: "Deployment and post-launch support" }
      ],
      pricing: {
        basic: { price: "$999", features: ["5-Page Website", "Responsive Design", "Basic SEO", "Contact Form", "1 Month Support"] },
        professional: { price: "$2,499", features: ["10-Page Website", "E-commerce Features", "Advanced SEO", "CMS Integration", "3 Months Support"] },
        enterprise: { price: "$5,999", features: ["Custom Website", "Full E-commerce", "Premium SEO", "Custom Features", "6 Months Support"] }
      }
    },
    'project-innovation': {
      title: "Project Innovation",
      subtitle: "Future Technology",
      icon: <FaRocket className="text-8xl" />,
      bgGradient: "from-purple-900 via-purple-800 to-pink-700",
      accentColor: "from-purple-400 to-pink-500",
      description: "Stay ahead of the curve with our innovative technology solutions. We leverage cutting-edge tools and methodologies to create future-ready digital experiences.",
      longDescription: "Innovation is at the heart of everything we do. We continuously explore new technologies and approaches to deliver solutions that not only meet current needs but also anticipate future challenges and opportunities.",
      features: [
        "AI-Powered Solutions",
        "Machine Learning Integration",
        "Real-time Analytics",
        "Smart Automation",
        "Cloud Infrastructure",
        "API Development",
        "IoT Solutions",
        "Blockchain Technology"
      ],
      benefits: [
        "Competitive Advantage",
        "Future-Proof Solutions",
        "Increased Efficiency",
        "Data-Driven Insights",
        "Scalable Architecture",
        "Innovation Leadership"
      ],
      process: [
        { step: 1, title: "Research", description: "Exploring latest technologies and trends" },
        { step: 2, title: "Innovation", description: "Developing cutting-edge solutions" },
        { step: 3, title: "Prototyping", description: "Creating proof of concepts" },
        { step: 4, title: "Development", description: "Building scalable solutions" },
        { step: 5, title: "Deployment", description: "Launching and monitoring" }
      ],
      pricing: {
        innovation: { price: "$3,999", features: ["Technology Assessment", "Innovation Strategy", "Proof of Concept", "Basic Implementation"] },
        advanced: { price: "$7,999", features: ["Full Innovation Solution", "Custom Development", "Integration Services", "Training & Support"] },
        enterprise: { price: "$15,999", features: ["Complete Innovation Platform", "Custom AI Solutions", "Full Integration", "Ongoing Innovation"] }
      }
    },
    'team-excellence': {
      title: "Team Excellence",
      subtitle: "Expert Collaboration",
      icon: <FaUsers className="text-8xl" />,
      bgGradient: "from-indigo-900 via-indigo-800 to-blue-700",
      accentColor: "from-indigo-400 to-blue-500",
      description: "Work with our team of seasoned professionals who bring years of experience and expertise to every project. We collaborate closely to deliver exceptional results.",
      longDescription: "Our team is our greatest asset. Each member brings unique skills and perspectives, creating a collaborative environment that fosters creativity and innovation while maintaining the highest standards of quality.",
      features: [
        "Expert Designers",
        "Senior Developers",
        "Marketing Strategists",
        "Project Managers",
        "Quality Assurance",
        "Technical Support",
        "Creative Directors",
        "Business Analysts"
      ],
      benefits: [
        "Expert Knowledge",
        "Proven Track Record",
        "Dedicated Support",
        "Quality Assurance",
        "Timely Delivery",
        "Ongoing Partnership"
      ],
      process: [
        { step: 1, title: "Team Assembly", description: "Selecting the perfect team for your project" },
        { step: 2, title: "Collaboration", description: "Working closely with your team" },
        { step: 3, title: "Expertise", description: "Leveraging specialized knowledge" },
        { step: 4, title: "Quality", description: "Ensuring highest standards" },
        { step: 5, title: "Success", description: "Delivering exceptional results" }
      ],
      pricing: {
        team: { price: "$2,999", features: ["Dedicated Team", "Project Management", "Regular Updates", "Quality Assurance"] },
        premium: { price: "$5,999", features: ["Senior Team Members", "Priority Support", "Advanced Tools", "Performance Guarantee"] },
        enterprise: { price: "$12,999", features: ["Executive Team", "24/7 Support", "Custom Solutions", "Success Guarantee"] }
      }
    }
  };

  const service = serviceData[title] || serviceData['graphic-design'];

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, [title]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className={`relative py-20 overflow-hidden text-white bg-gradient-to-r ${service.bgGradient}`}>
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/5 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-white/5 rounded-full blur-xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 px-6 py-3 mb-8 text-white transition-all bg-white/20 backdrop-blur-sm rounded-full border border-white/30 hover:bg-white/30 hover:scale-105"
          >
            <FaArrowLeft />
            Back to Home
          </motion.button>

          {/* Service Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-block p-6 mb-6 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30">
              {service.icon}
            </div>
            <span className={`inline-block px-4 py-2 mb-4 bg-gradient-to-r ${service.accentColor} text-white text-sm font-semibold rounded-full`}>
              {service.subtitle}
            </span>
            <h1 className="mb-6 text-5xl font-bold md:text-7xl">
              {service.title}
            </h1>
            <p className="text-xl leading-relaxed text-white/95 max-w-3xl mx-auto">
              {service.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        className="relative z-10 -mt-20"
      >
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          {/* Content Cards */}
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Features & Benefits */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Features */}
              <div className="p-8 bg-white rounded-2xl shadow-xl border border-gray-100">
                <h3 className="mb-6 text-2xl font-bold text-gray-800 flex items-center gap-3">
                  <FaStar className="text-yellow-500" />
                  Key Features
                </h3>
                <div className="grid gap-4 md:grid-cols-2">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <FaCheck className="text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="p-8 bg-white rounded-2xl shadow-xl border border-gray-100">
                <h3 className="mb-6 text-2xl font-bold text-gray-800 flex items-center gap-3">
                  <FaAward className="text-blue-500" />
                  Benefits
                </h3>
                <div className="space-y-3">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                      <FaHeart className="text-red-500 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Process & Pricing */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Process */}
              <div className="p-8 bg-white rounded-2xl shadow-xl border border-gray-100">
                <h3 className="mb-6 text-2xl font-bold text-gray-800 flex items-center gap-3">
                  <FaRocketIcon className="text-purple-500" />
                  Our Process
                </h3>
                <div className="space-y-4">
                  {service.process.map((step, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r ${service.accentColor} text-white font-bold text-sm flex items-center justify-center`}>
                        {step.step}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">{step.title}</h4>
                        <p className="text-gray-600 text-sm">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing */}
              <div className="p-8 bg-white rounded-2xl shadow-xl border border-gray-100">
                <h3 className="mb-6 text-2xl font-bold text-gray-800 flex items-center gap-3">
                  <FaLightbulb className="text-yellow-500" />
                  Pricing Plans
                </h3>
                <div className="space-y-4">
                  {Object.entries(service.pricing).map(([plan, details]) => (
                    <div key={plan} className="p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-gray-800 capitalize">{plan}</h4>
                        <span className="text-2xl font-bold text-gray-800">{details.price}</span>
                      </div>
                      <ul className="space-y-2">
                        {details.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                            <FaCheck className="text-green-500 text-xs" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Long Description */}
          <motion.div variants={itemVariants} className="mt-12 p-8 bg-white rounded-2xl shadow-xl border border-gray-100">
            <h3 className="mb-6 text-2xl font-bold text-gray-800">About This Service</h3>
            <p className="text-gray-700 leading-relaxed text-lg">{service.longDescription}</p>
          </motion.div>

          {/* CTA Section */}
          <motion.div variants={itemVariants} className="mt-12 text-center">
            <div className="p-8 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl text-white">
              <h3 className="mb-4 text-3xl font-bold">Ready to Get Started?</h3>
              <p className="mb-6 text-gray-300">Let's discuss your project and create something amazing together.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-brandOrange to-orange-600 text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2">
                  <FaPhone />
                  Contact Us
                </button>
                <button className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full border border-white/30 hover:bg-white/30 transition-colors flex items-center justify-center gap-2">
                  <FaEnvelope />
                  Get Quote
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ServiceDetail;
