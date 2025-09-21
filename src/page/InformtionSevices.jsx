import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { FaPalette, FaChartLine, FaGlobe, FaUsers, FaRocket, FaCheck, FaArrowLeft, FaVideo, FaCalendarAlt, FaPrint } from 'react-icons/fa'

const SERVICE_CONTENT = {
  'graphic-design': {
    title: 'Graphic Design & Branding',
    subtitle: 'Creative Excellence',
    icon: <FaPalette className="text-6xl" />,
    gradient: 'from-red-800 via-red-700 to-brandOrange',
    intro: 'We craft memorable brand identities and visuals that connect with your audience and elevate your business.',
    points: [
      'Logo and brand identity systems',
      'UI/UX design for web and mobile',
      'Print and digital marketing materials',
      'Event and campaign branding'
    ],
    highlights: ['Logo Design', 'Brand Guidelines', 'UI/UX', 'Marketing Materials']
  },
  'digital-marketing': {
    title: 'Digital Marketing',
    subtitle: 'Strategic Growth',
    icon: <FaChartLine className="text-6xl" />,
    gradient: 'from-red-800 via-red-700 to-brandOrange',
    intro: 'Data-driven strategies to grow your brand, increase conversions, and build long-term customer relationships.',
    points: [
      'Social media strategy and management',
      'Content creation and campaigns',
      'SEO and paid advertising (PPC)',
      'Analytics, reporting, and optimization'
    ],
    highlights: ['Social Media', 'SEO', 'Content Strategy', 'PPC']
  },
  'web-design': {
    title: 'Web Design',
    subtitle: 'Digital Excellence',
    icon: <FaGlobe className="text-6xl" />,
    gradient: 'from-red-800 via-red-700 to-brandOrange',
    intro: 'Modern websites and hosting solutions that are fast, secure, and built to convert visitors into customers.',
    points: [
      'Responsive web design and development',
      'E-commerce and custom applications',
      'Domains, hosting, and SSL certificates',
      'Performance and SEO best practices'
    ],
    highlights: ['Web Design', 'Hosting', 'Domains', 'SSL']
  },
  'video-production': {
    title: 'Video Production',
    subtitle: 'Visual Storytelling',
    icon: <FaVideo className="text-6xl" />,
    gradient: 'from-red-800 via-red-700 to-brandOrange',
    intro: 'High-quality video production services to tell your story and engage your audience effectively.',
    points: [
      'Script writing and storyboarding',
      'Professional filming and direction',
      'Video editing and post-production',
      'Animation and motion graphics'
    ],
    highlights: ['Script Writing', 'Filming', 'Editing', 'Animation']
  },
  'event-branding': {
    title: 'Event Branding',
    subtitle: 'Memorable Experiences',
    icon: <FaCalendarAlt className="text-6xl" />,
    gradient: 'from-red-800 via-red-700 to-brandOrange',
    intro: 'Unique event branding solutions to create memorable and engaging event experiences.',
    points: [
      'Event logos and theme development',
      'Signage and booth design',
      'Printed and digital materials',
      'On-site branding and support'
    ],
    highlights: ['Event Logos', 'Signage Design', 'Booth Design', 'Promotional Materials']
  },
  'print-services': {
    title: 'Print Services',
    subtitle: 'Quality Materials',
    icon: <FaPrint className="text-6xl" />,
    gradient: 'from-red-800 via-red-700 to-brandOrange',
    intro: 'Professional print services for all your marketing and business needs with high-quality materials.',
    points: [
      'Business cards and stationery',
      'Brochures and marketing materials',
      'Posters and large format printing',
      'Custom packaging and labels'
    ],
    highlights: ['Business Cards', 'Brochures', 'Posters', 'Flyers']
  },
}

function InformtionSevices() {
  const { title } = useParams()
  const navigate = useNavigate()

  const service = SERVICE_CONTENT[title] || SERVICE_CONTENT['digital-marketing']

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-dark-bg dark:to-dark-surface transition-colors duration-300">
      {/* Hero */}
      <section className={`relative py-20 text-white bg-gradient-to-r ${service.gradient}`}>
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 px-5 py-2 mb-8 border rounded-full bg-white/20 border-white/30 hover:bg-white/30"
          >
            <FaArrowLeft /> Back
          </button>

          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 mx-auto mb-6 border rounded-2xl bg-white/20 border-white/30">
              {service.icon}
            </div>
            <span className="inline-block px-4 py-1 mb-3 text-sm font-semibold border rounded-full bg-white/20 border-white/30">
              {service.subtitle}
            </span>
            <h1 className="mb-4 text-4xl font-extrabold md:text-6xl">
              {service.title}
            </h1>
            <p className="text-lg text-white/90">
              {service.intro}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {/* What you get */}
          <div className="p-8 bg-white dark:bg-dark-card border border-gray-100 dark:border-gray-600 shadow-lg rounded-2xl">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-dark-text">What You Get</h2>
            <ul className="space-y-3">
              {service.points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                  <FaCheck className="mt-1 text-green-600" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Highlights */}
          <div className="p-8 bg-white dark:bg-dark-card border border-gray-100 dark:border-gray-600 shadow-lg rounded-2xl">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-dark-text">Highlights</h2>
            <div className="flex flex-wrap gap-3">
              {service.highlights.map((h) => (
                <span key={h} className="px-4 py-2 text-sm font-semibold text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600 rounded-full bg-gray-50 dark:bg-dark-surface">
                  {h}
                </span>
              ))}
            </div>

            <div className="p-6 mt-8 text-white rounded-xl bg-gradient-to-r from-brandOrange to-brandNavy">
              <h3 className="mb-2 text-xl font-semibold">Need this service?</h3>
              <p className="mb-4 text-white/90">Contact us to get a tailored plan and timeline for your project.</p>
              <button
                onClick={() => navigate('/Contact')}
                className="px-6 py-3 font-semibold border rounded-lg bg-white/20 border-white/30 hover:bg-white/30"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InformtionSevices
