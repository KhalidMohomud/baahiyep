import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { FaPalette, FaChartLine, FaGlobe, FaUsers, FaRocket, FaCheck, FaArrowLeft } from 'react-icons/fa'

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
  'web-solutions': {
    title: 'Web Solutions',
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
}

function InformtionSevices() {
  const { title } = useParams()
  const navigate = useNavigate()

  const service = SERVICE_CONTENT[title] || SERVICE_CONTENT['digital-marketing']

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
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
          <div className="p-8 bg-white border border-gray-100 shadow-lg rounded-2xl">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">What You Get</h2>
            <ul className="space-y-3">
              {service.points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-gray-700">
                  <FaCheck className="mt-1 text-green-600" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Highlights */}
          <div className="p-8 bg-white border border-gray-100 shadow-lg rounded-2xl">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Highlights</h2>
            <div className="flex flex-wrap gap-3">
              {service.highlights.map((h) => (
                <span key={h} className="px-4 py-2 text-sm font-semibold text-gray-700 border border-gray-200 rounded-full bg-gray-50">
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
