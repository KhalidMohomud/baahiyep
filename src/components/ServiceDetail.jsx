import  { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaPalette, FaRocket,  FaStar, FaCheck, 
  FaArrowLeft, FaPhone, FaEnvelope,  FaAward,
  FaLightbulb, FaCode,  FaHeart, FaRocket as FaRocketIcon,
  FaVideo,
  FaCalendarAlt,
  FaPrint
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
    longDescription: "Our graphic design expertise spans all aspects of brand development, from initial concept to final execution. Great design is not just about aesthetics—it's about creating meaningful connections with your audience.",
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
    icon: <FaRocket className="text-8xl" />,
    bgGradient: "from-blue-900 via-blue-800 to-cyan-700",
    accentColor: "from-blue-400 to-cyan-500",
    description: "Drive sustainable business growth with our data-driven digital marketing strategies. We help businesses connect with their audience and achieve measurable results.",
    longDescription: "Our digital marketing approach combines creativity with analytics to deliver campaigns that not only look great but perform exceptionally well. We focus on building long-term customer relationships through strategic content and engagement.",
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
  'web-design': {
    title: "Web Design",
    subtitle: "Digital Excellence",
    icon: <FaCode className="text-8xl" />,
    bgGradient: "from-green-900 via-green-800 to-emerald-700",
    accentColor: "from-green-400 to-emerald-500",
    description: "Custom web design focused on user experience and modern aesthetics to build your online presence.",
    longDescription: "Our web design services ensure your website looks professional and functions flawlessly across all devices and platforms, offering an engaging experience that converts visitors into customers.",
    features: [
      "Responsive Web Design",
      "E-commerce Development",
      "Custom Web Applications",
      "User Experience Optimization",
      "CMS Integration",
      "Performance Optimization",
      "SEO Friendly Design",
      "Ongoing Maintenance"
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
  'video-production': {
    title: "Video Production",
    subtitle: "Visual Storytelling",
    icon: <FaVideo className="text-8xl" />,
    bgGradient: "from-purple-800 via-purple-700 to-pink-600",
    accentColor: "from-pink-400 to-pink-600",
    description: "High-quality video production services to tell your story and engage your audience effectively.",
    longDescription: "From concept development to post-production, we create compelling videos tailored to your brand’s voice and goals. Our team handles everything from scripting to animation and editing.",
    features: [
      "Script Writing",
      "Filming & Direction",
      "Video Editing",
      "Animation & Motion Graphics",
      "Voiceover & Sound Design",
      "Live Streaming",
      "Promotional Videos",
      "Corporate Videos"
    ],
    benefits: [
      "Enhanced Brand Storytelling",
      "Improved Engagement",
      "Professional Quality Content",
      "Multi-Platform Distribution",
      "Higher Conversion Rates",
      "Brand Awareness Boost"
    ],
    process: [
      { step: 1, title: "Concept", description: "Understanding objectives and developing ideas" },
      { step: 2, title: "Pre-Production", description: "Scriptwriting, storyboarding, and planning" },
      { step: 3, title: "Production", description: "Filming and capturing footage" },
      { step: 4, title: "Post-Production", description: "Editing, effects, and finalization" },
      { step: 5, title: "Delivery", description: "Final video delivery and distribution" }
    ],
    pricing: {
      basic: { price: "$1,200", features: ["1-minute Promo Video", "Basic Editing", "1 Revision", "HD Delivery"] },
      professional: { price: "$3,500", features: ["5-minute Video", "Advanced Editing", "Unlimited Revisions", "4K Delivery", "Motion Graphics"] },
      enterprise: { price: "$7,500", features: ["Full Video Campaign", "Custom Animation", "Dedicated Team", "Multiple Formats", "Marketing Support"] }
    }
  },
  'event-branding': {
    title: "Event Branding",
    subtitle: "Memorable Experiences",
    icon: <FaCalendarAlt className="text-8xl" />,
    bgGradient: "from-yellow-700 via-yellow-600 to-orange-500",
    accentColor: "from-yellow-400 to-orange-600",
    description: "Unique event branding solutions to create memorable and engaging event experiences.",
    longDescription: "We design cohesive event branding elements from logos to signage and promotional materials to ensure your event stands out and connects with attendees.",
    features: [
      "Event Logos & Themes",
      "Signage & Booth Design",
      "Printed & Digital Materials",
      "Swag & Giveaways",
      "Event Programs",
      "Stage & Backdrops",
      "Marketing Collateral",
      "On-site Branding"
    ],
    benefits: [
      "Increased Event Visibility",
      "Consistent Brand Messaging",
      "Engaged Attendees",
      "Professional Presentation",
      "Enhanced Sponsorship Value",
      "Memorable Brand Experience"
    ],
    process: [
      { step: 1, title: "Consultation", description: "Understanding event goals and audience" },
      { step: 2, title: "Concept Development", description: "Creating themes and branding concepts" },
      { step: 3, title: "Design", description: "Developing all event branding assets" },
      { step: 4, title: "Production", description: "Coordinating print and digital deliverables" },
      { step: 5, title: "Support", description: "On-site assistance and post-event review" }
    ],
    pricing: {
      basic: { price: "$1,000", features: ["Event Logo", "Basic Signage", "Print Materials", "3 Revisions"] },
      professional: { price: "$2,500", features: ["Full Branding Package", "Booth Design", "Digital Assets", "Unlimited Revisions"] },
      enterprise: { price: "$5,000", features: ["Complete Event Branding", "Swag Design", "On-site Support", "Marketing Collateral"] }
    }
  },
  'print-services': {
    title: "Print Services",
    subtitle: "Quality Materials",
    icon: <FaPrint className="text-8xl" />,
    bgGradient: "from-gray-800 via-gray-700 to-gray-600",
    accentColor: "from-gray-500 to-gray-700",
    description: "Professional print services for all your marketing and business needs with high-quality materials and finishes.",
    longDescription: "We provide end-to-end print solutions including design assistance, proofing, and production to ensure your printed materials make a strong impact.",
    features: [
      "Business Cards",
      "Brochures & Flyers",
      "Posters & Banners",
      "Packaging Printing",
      "Custom Invitations",
      "Labels & Stickers",
      "Large Format Printing",
      "Direct Mail Campaigns"
    ],
    benefits: [
      "High-Quality Prints",
      "Professional Finishes",
      "Fast Turnaround",
      "Competitive Pricing",
      "Custom Solutions",
      "Reliable Delivery"
    ],
    process: [
      { step: 1, title: "Consultation", description: "Understanding print requirements and goals" },
      { step: 2, title: "Design Support", description: "Assisting with print-ready file preparation" },
      { step: 3, title: "Proofing", description: "Reviewing samples and approvals" },
      { step: 4, title: "Printing", description: "Production with premium materials" },
      { step: 5, title: "Delivery", description: "On-time delivery to your location" }
    ],
    pricing: {
      basic: { price: "$299", features: ["Business Cards", "Standard Paper", "Full Color", "1000 Copies"] },
      professional: { price: "$899", features: ["Brochures & Flyers", "Premium Paper", "Custom Sizes", "3000 Copies"] },
      enterprise: { price: "$2,499", features: ["Posters & Banners", "Large Format", "Special Finishes", "5000+ Copies"] }
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
          <div className="absolute w-32 h-32 rounded-full top-20 left-20 bg-white/5 blur-xl animate-pulse"></div>
          <div className="absolute w-40 h-40 delay-1000 rounded-full bottom-20 right-20 bg-white/5 blur-xl animate-pulse"></div>
        </div>

        <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 px-6 py-3 mb-8 text-white transition-all border rounded-full bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30 hover:scale-105"
          >
            <FaArrowLeft />
            Back to Home
          </motion.button>

          {/* Service Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-block p-6 mb-6 border bg-white/20 backdrop-blur-sm rounded-2xl border-white/30">
              {service.icon}
            </div>
            <span className={`inline-block px-4 py-2 mb-4 bg-gradient-to-r ${service.accentColor} text-white text-sm font-semibold rounded-full`}>
              {service.subtitle}
            </span>
            <h1 className="mb-6 text-5xl font-bold md:text-7xl">
              {service.title}
            </h1>
            <p className="max-w-3xl mx-auto text-xl leading-relaxed text-white/95">
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
              <div className="p-8 bg-white border border-gray-100 shadow-xl rounded-2xl">
                <h3 className="flex items-center gap-3 mb-6 text-2xl font-bold text-gray-800">
                  <FaStar className="text-yellow-500" />
                  Key Features
                </h3>
                <div className="grid gap-4 md:grid-cols-2">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 transition-colors rounded-lg bg-gray-50 hover:bg-gray-100">
                      <FaCheck className="flex-shrink-0 text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="p-8 bg-white border border-gray-100 shadow-xl rounded-2xl">
                <h3 className="flex items-center gap-3 mb-6 text-2xl font-bold text-gray-800">
                  <FaAward className="text-blue-500" />
                  Benefits
                </h3>
                <div className="space-y-3">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-blue-50">
                      <FaHeart className="flex-shrink-0 text-red-500" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Process & Pricing */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Process */}
              <div className="p-8 bg-white border border-gray-100 shadow-xl rounded-2xl">
                <h3 className="flex items-center gap-3 mb-6 text-2xl font-bold text-gray-800">
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
                        <p className="text-sm text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing */}
              <div className="p-8 bg-white border border-gray-100 shadow-xl rounded-2xl">
                <h3 className="flex items-center gap-3 mb-6 text-2xl font-bold text-gray-800">
                  <FaLightbulb className="text-yellow-500" />
                  Pricing Plans
                </h3>
                <div className="space-y-4">
                  {Object.entries(service.pricing).map(([plan, details]) => (
                    <div key={plan} className="p-4 transition-colors border border-gray-200 rounded-lg hover:border-gray-300">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-gray-800 capitalize">{plan}</h4>
                        <span className="text-2xl font-bold text-gray-800">{details.price}</span>
                      </div>
                      <ul className="space-y-2">
                        {details.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                            <FaCheck className="text-xs text-green-500" />
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
          <motion.div variants={itemVariants} className="p-8 mt-12 bg-white border border-gray-100 shadow-xl rounded-2xl">
            <h3 className="mb-6 text-2xl font-bold text-gray-800">About This Service</h3>
            <p className="text-lg leading-relaxed text-gray-700">{service.longDescription}</p>
          </motion.div>

          {/* CTA Section */}
          <motion.div variants={itemVariants} className="mt-12 text-center">
            <div className="p-8 text-white bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl">
              <h3 className="mb-4 text-3xl font-bold">Ready to Get Started?</h3>
              <p className="mb-6 text-gray-300">Let's discuss your project and create something amazing together.</p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <button className="flex items-center justify-center gap-2 px-8 py-4 font-semibold text-white transition-transform duration-300 rounded-full bg-gradient-to-r from-brandOrange to-orange-600 hover:scale-105">
                  <FaPhone />
                  Contact Us
                </button>
                <button className="flex items-center justify-center gap-2 px-8 py-4 font-semibold text-white transition-colors border rounded-full bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30">
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
