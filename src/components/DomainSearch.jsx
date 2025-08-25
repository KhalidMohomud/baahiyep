import  { useState } from 'react'
import { FaCheckCircle, FaExclamationCircle } from 'react-icons/fa'

const DomainSearch = () => {
  const [domain, setDomain] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)
  const [error, setError] = useState(null)

  const handleSearch = async () => {
    if (!domain) {
      setError('Please enter a domain name')
      return
    }

    setLoading(true)
    setResult(null)
    setError(null)

    try {
      const response = await fetch(
        'https://domain-checker.p.rapidapi.com/whois?domain=' + encodeURIComponent(domain),
        {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': 'cfa1ed4ebcmsh75026d0992078d6p17ee7fjsn683481e21165',
            'X-RapidAPI-Host': 'domain-checker7.p.rapidapi.com',
          },
        }
      )

      if (!response.ok) {
        throw new Error('API request failed')
      }
      const data = await response.json()
      setResult(data)
    } catch (err) {
      setError(err.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  // Define your availability logic here:
  const isAvailable = () => {
    if (!result) return false
    // Adjust this based on your API data:
    return result.available === true || result.status === 'available'
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl px-4 mx-auto text-center sm:px-6 lg:px-8">
        <h2 className="mb-8 text-4xl font-bold section-heading text-brandNavy">
          Choose Your Domain Today!
        </h2>
        <div className="flex flex-col gap-4 mb-8 sm:flex-row">
          <input
            type="text"
            placeholder="Search your domain"
            className="flex-1 px-6 py-4 text-lg border-2 border-gray-300 rounded-lg focus:border-brandOrange focus:outline-none"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="px-8 py-4 text-lg font-semibold text-white transition-colors rounded-lg cta-button bg-brandOrange hover:bg-brandNavy"
            disabled={loading}
          >
            {loading ? 'Checking...' : 'Search'}
          </button>
        </div>

        {error && <p className="mb-4 text-red-600">{error}</p>}

   
{result && (
  <div className="mb-8 text-left">
    {isAvailable() ? (
      <div
        style={{
          backgroundColor: '#d7f1d8',
          border: '1px solid #1c8b1c',
          padding: '10px 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderRadius: '5px',
          marginBottom: '15px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', color: '#1c8b1c', fontWeight: 600 }}>
          <FaCheckCircle style={{ marginRight: '8px' }} />
          <span>Congratulation {domain} is available!</span>
        </div>
        <button
          style={{
            backgroundColor: '#3d0c0c',
            color: 'white',
            borderRadius: '8px',
            padding: '8px 12px',
            border: 'none',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
          onClick={() => alert('Redirect to purchase page')}
        >
          Purchase
        </button>
      </div>
    ) : (
      <div
        style={{
          backgroundColor: '#f5d4d4',
          border: '1px solid #d11a1a',
          padding: '10px 20px',
          display: 'flex',
          alignItems: 'center',
          borderRadius: '5px',
          marginBottom: '15px',
          gap: '10px',
          color: '#d11a1a',
          fontWeight: '600',
        }}
      >
        <FaExclamationCircle />
        <span>{domain} is unavailable</span>
      </div>
    )}
  </div>
)}


        {/* Pricing grid */}
        <div className="grid grid-cols-2 gap-6 mb-8 md:grid-cols-4">
          {[
            { ext: '.com', price: '$14.99/year' },
            { ext: '.org', price: '$12.99/year' },
            { ext: '.net', price: '$13.99/year' },
            { ext: '.so', price: '$11.99/year' },
            { ext: '.edu', price: '$15.99/year' },
          ].map((domain) => (
            <div key={domain.ext} className="text-center">
              <div className="text-2xl font-bold text-brandNavy">{domain.ext}</div>
              <div className="text-gray-600">{domain.price}</div>
            </div>
          ))}
        </div>

        <div className="flex justify-end">
          <div className="px-6 py-3 text-white border-4 rounded-full bg-brandOrange border-brandOrange/50">
            <div className="text-sm font-semibold">Limited Time Offer</div>
            <div className="text-lg font-bold">Sale .SO 50%</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DomainSearch
