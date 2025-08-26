import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const LOCAL_PROVIDERS = [
  { id: 'zaad', name: 'Zaad' },
  { id: 'edahab', name: 'E-Dahab' },
  { id: 'evc', name: 'EVC Plus' },
  { id: 'Jeeb', name: 'Jeeb' },
]

function Payments() {
  const [method, setMethod] = useState('cash') 
  const [localProvider, setLocalProvider] = useState(LOCAL_PROVIDERS[0].id)
  const [phone, setPhone] = useState('')
  const [city, setCity] = useState("")
  const [email, setEmail] = useState("")
  const [amount, setAmount] = useState('')
  const [errors, setErrors] = useState({})
  const reduxAmount = useSelector(state => state.payment.amount)

  const resetErrors = () => setErrors({})

  const validate = () => {
    const nextErrors = {}
    const amountNumber = Number(amount)

    if (!amount || Number.isNaN(amountNumber) || amountNumber <= 0) {
      nextErrors.amount = 'Enter a valid amount'
    }

    if (method === 'local') {
      if (!phone) {
        nextErrors.phone = 'Phone is required'
      } else if (!/^\d{7,12}$/.test(phone)) {
        nextErrors.phone = 'Use 7-12 digits (no spaces)'
      }

      if (!city) {
        nextErrors.city = "City is required"
      }

      if (!email) {
        nextErrors.email = "Email is required"
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        nextErrors.email = "Enter a valid email"
      }
    }

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const submit = (e) => {
    e.preventDefault()
    resetErrors()
    if (!validate()) return

    const payload = {
      method,
      amount: Number(amount),
      local: method === 'local' ? { 
        provider: localProvider, 
        phone, 
        city, 
        email 
      } : null,
    }

    console.log('Submitting payment', payload)
    alert('Payment submitted. This is a demo flow.')
  }

  useEffect(() => {
    if (typeof reduxAmount === 'number' && !Number.isNaN(reduxAmount) && reduxAmount > 0) {
      setAmount(String(reduxAmount))
    }
  }, [reduxAmount])

  return (
    <div className="min-h-screen bg-white">
      <div className="relative">
        <div className="absolute inset-0 pointer-events-none network-pattern opacity-20"></div>
        <div className="relative max-w-5xl px-6 py-12 mx-auto">
          <div className="mb-8 text-center">
            <div className="inline-block px-6 py-3 text-2xl font-extrabold text-white rounded-full bg-primary md:text-4xl">
              Payments
            </div>
            <p className="mt-3 text-gray-600">Choose your preferred method and complete your payment securely.</p>
          </div>

          <form onSubmit={submit} className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-1">
              {/* Payment Method */}
              <div className="p-4 border shadow-sm rounded-2xl border-gray-200/70">
                <h3 className="mb-3 text-lg font-semibold text-brandNavy">Payment Method</h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 p-3 border cursor-pointer rounded-xl hover:border-brandOrange/50">
                    <input
                      type="radio"
                      name="method"
                      value="cash"
                      checked={method === 'cash'}
                      onChange={() => setMethod('cash')}
                    />
                    <span>Cash (Pay at office/delivery)</span>
                  </label>
                  <label className="flex items-center gap-3 p-3 border cursor-pointer rounded-xl hover:border-brandOrange/50">
                    <input
                      type="radio"
                      name="method"
                      value="local"
                      checked={method === 'local'}
                      onChange={() => setMethod('local')}
                    />
                    <span>Local (Zaad, E-Dahab, EVC Plus)</span>
                  </label>
                </div>
              </div>

              {/* Amount */}
              <div className="p-4 mt-6 border shadow-sm rounded-2xl border-gray-200/70">
                <h3 className="mb-3 text-lg font-semibold text-brandNavy">Amount</h3>
                <div>
                  <input
                    className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-brandOrange"
                    placeholder="Enter amount"
                    inputMode="decimal"
                    value={amount}
                    disabled
                    onChange={(e) => setAmount(e.target.value)}
                  />
                  {errors.amount && (
                    <p className="mt-2 text-sm text-red-600">{errors.amount}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="md:col-span-2">
              {method === 'cash' && (
                <div className="p-6 border shadow-sm rounded-2xl border-gray-200/70">
                  <h3 className="text-xl font-semibold text-brandNavy">Cash Payment Instructions</h3>
                  <ul className="mt-4 space-y-2 text-gray-700 list-disc list-inside">
                    <li>Visit our office to pay by cash and receive a receipt.</li>
                    <li>Or pay cash on delivery if eligible in your area.</li>
                    <li>Bring your order reference or invoice number.</li>
                  </ul>
                </div>
              )}

              {method === 'local' && (
                <div className="p-6 border shadow-sm rounded-2xl border-gray-200/70">
                  <h3 className="text-xl font-semibold text-brandNavy">Local Mobile Payment</h3>
                  <div className="grid gap-4 mt-4 md:grid-cols-2">
                    {/* City */}
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-700">City</label>
                      <input
                        className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-brandOrange"
                        placeholder="Enter your city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                      />
                      {errors.city && <p className="mt-2 text-sm text-red-600">{errors.city}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-brandOrange"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
                    </div>

                    {/* Provider */}
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-700">Provider</label>
                      <select
                        className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-brandOrange"
                        value={localProvider}
                        onChange={(e) => setLocalProvider(e.target.value)}
                      >
                        {LOCAL_PROVIDERS.map((p) => (
                          <option key={p.id} value={p.id}>{p.name}</option>
                        ))}
                      </select>
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-700">Phone Number</label>
                      <input
                        className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-brandOrange"
                        placeholder="Enter mobile number"
                        inputMode="numeric"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                      />
                      {errors.phone && <p className="mt-2 text-sm text-red-600">{errors.phone}</p>}
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-gray-500">
                    We will send a payment prompt to your phone to approve.
                  </p>
                </div>
              )}

              <div className="flex justify-end mt-6">
                <button
                  type="submit"
                  className="px-6 py-3 text-white rounded-xl bg-primary hover:bg-brandNavy/90"
                >
                  Submit Payment
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Payments
