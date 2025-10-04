import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import CustomAlert from '../components/alerts/CustomAlert';
import { FaSpinner } from 'react-icons/fa'; // Make sure you have react-icons installed

function Payments() {
  const [method, setMethod] = useState('local');
  const [formData, setFormData] = useState({
    phoneNumber: '',
    amount: '',
    email: '',
    packageName: '',
    FullName: '',
    City: '',
    BussinesName: '',
    Message: '',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ message: '', type: '' });

  const reduxAmount = useSelector((state) => state.payment.amount);
  const meta = useSelector((state) => state.payment.meta);

  const firstErrorRef = useRef(null);

  useEffect(() => {
    if (typeof reduxAmount === 'number' && reduxAmount > 0) {
      setFormData((prev) => ({
        ...prev,
        amount: String(reduxAmount),
      }));
    }
  }, [reduxAmount]);

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.FullName.trim()) newErrors.FullName = 'Full Name is required';
    if (!formData.BussinesName.trim()) newErrors.BussinesName = 'Business Name is required';
    if (!formData.City.trim()) newErrors.City = 'City is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email address';
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = 'Phone number is required';
    if (!formData.amount || Number(formData.amount) <= 0) newErrors.amount = 'Invalid amount';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAlert({ message: '', type: '' });

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);

      // Focus on first error field
      const firstErrorKey = Object.keys(validationErrors)[0];
      const el = document.querySelector(`[name="${firstErrorKey}"]`);
      if (el) el.focus();

      return;
    }

    const payload = {
      phoneNumber: formData.phoneNumber,
      amount: formData.amount,
      email: formData.email,
      packageName: meta?.name || '',
      FullName: formData.FullName,
      City: formData.City,
      BussinesName: formData.BussinesName,
      Message: formData.Message,
    };

    try {
      setLoading(true);
      const response = await axios.post(
        'https://baahiyebackendapi.onrender.com/api/v1/pay',
        payload,
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      );

      setAlert({ message: 'Payment submitted successfully.', type: 'success' });
      setFormData((prev) => ({ ...prev, Message: '' }));
    } catch (error) {
      let message = 'Payment failed. Please try again.';
      if (error.response?.data?.error) {
        message = typeof error.response.data.error === 'string'
          ? error.response.data.error
          : error.response.data.error.responseMsg || message;
      } else if (error.request) {
        message = 'No response from server. Check your internet connection.';
      } else {
        message = error.message || message;
      }

      setAlert({ message, type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const handleAlertClose = () => setAlert({ message: '', type: '' });

  return (
    <div className="min-h-screen px-4 py-12 text-gray-800 bg-white dark:bg-gray-900 dark:text-white">
      <div className="relative max-w-6xl mx-auto">
        <h1 className="mb-8 text-4xl font-extrabold text-center text-primary">Payment Form</h1>

        {alert.message && (
          <div className="mb-6">
            <CustomAlert message={alert.message} type={alert.type} onClose={handleAlertClose} />
          </div>
        )}

        <form onSubmit={handleSubmit} className="grid gap-8 md:grid-cols-3">
      
      {/* RIGHT SIDE on Desktop / TOP on Mobile */}
      <div className="order-1 space-y-6 md:col-span-1 md:order-2">
        {/* Payment Method */}
        <div className="p-4 border border-gray-200 shadow-sm rounded-2xl dark:border-gray-700">
          <h3 className="mb-4 text-lg font-semibold">Payment Method</h3>
          <div className="space-y-3">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="method"
                value="local"
                checked={method === 'local'}
                onChange={() => setMethod('local')}
                className="accent-blue-600"
              />
              <span>Local Payment</span>
            </label>
            <label className="flex items-center gap-3 opacity-50 cursor-not-allowed">
              <input
                type="radio"
                name="method"
                value="card"
                checked={method === 'card'}
                onChange={() => setMethod('card')}
                disabled
                className="accent-blue-600"
              />
              <span>Card (Coming Soon)</span>
            </label>
          </div>
        </div>

        {/* Meta Info */}
        {meta && (
          <div className="p-4 border border-gray-200 shadow-sm rounded-2xl dark:border-gray-700">
            <h3 className="mb-2 text-lg font-semibold">{meta.name}</h3>
            <p>Base Price: ${meta.basePrice.toFixed(2)}</p>
            <p>Tax: 0.00</p>
            <p className="mt-2 font-bold">Total: ${formData.amount}</p>
          </div>
        )}

        {/* Local Payments Info */}
        <div className="p-4 border border-gray-200 shadow-sm rounded-2xl dark:border-gray-700">
          <h3 className="mb-2 text-lg font-semibold">Local payments</h3>
          <p>EVC Plus: 061 xxxxxxx</p>
          <p>ZAAD: 63 xxxxx</p>
          <p>SAHAL: 37 xxxxx</p>
        </div>
      </div>

      {/* LEFT SIDE on Desktop / BOTTOM on Mobile */}
      <div className="order-2 space-y-6 text-left md:col-span-2 md:order-1">
        {/* Full Name */}
        <div>
          <label className="block mb-2 font-medium">Full Name</label>
          <input
            type="text"
            value={formData.FullName}
            onChange={(e) => handleChange('FullName', e.target.value)}
            placeholder="Enter full name"
            className={`w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white ${
              errors.FullName ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
            }`}
          />
          {errors.FullName && <p className="mt-1 text-sm text-red-500">{errors.FullName}</p>}
        </div>

        {/* Business Name */}
        <div>
          <label className="block mb-2 font-medium">Business Name</label>
          <input
            type="text"
            value={formData.BussinesName}
            onChange={(e) => handleChange('BussinesName', e.target.value)}
            placeholder="Your Company"
            className={`w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white ${
              errors.BussinesName ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
            }`}
          />
          {errors.BussinesName && <p className="mt-1 text-sm text-red-500">{errors.BussinesName}</p>}
        </div>

        {/* City & Email */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label className="block mb-2 font-medium">City</label>
            <input
              type="text"
              value={formData.City}
              onChange={(e) => handleChange('City', e.target.value)}
              placeholder="Your City"
              className={`w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white ${
                errors.City ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
              }`}
            />
            {errors.City && <p className="mt-1 text-sm text-red-500">{errors.City}</p>}
          </div>

          <div>
            <label className="block mb-2 font-medium">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              placeholder="you@gmail.com"
              className={`w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white ${
                errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
              }`}
            />
            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
          </div>
        </div>

        {/* Phone & Amount */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label className="block mb-2 font-medium">Phone Number</label>
            <input
              type="tel"
              value={formData.phoneNumber}
              onChange={(e) => handleChange('phoneNumber', e.target.value)}
              placeholder="061 xxxxxx"
              className={`w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white ${
                errors.phoneNumber ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
              }`}
            />
            {errors.phoneNumber && <p className="mt-1 text-sm text-red-500">{errors.phoneNumber}</p>}
          </div>

          <div>
            <label className="block mb-2 font-medium">Amount</label>
            <input
              type="text"
              value={formData.amount}
              onChange={(e) => handleChange('amount', e.target.value)}
              disabled
              className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md cursor-not-allowed dark:bg-gray-700 dark:text-white dark:border-gray-700"
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block mb-2 font-medium">Message (Optional)</label>
          <textarea
            value={formData.Message}
            onChange={(e) => handleChange('Message', e.target.value)}
            maxLength={300}
            rows={4}
            placeholder="Your message..."
            className={`w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white ${
              errors.Message ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
            }`}
          />
          {errors.Message && (
            <p className="mt-1 text-sm text-red-500">{errors.Message}</p>
          )}
          <p className="text-xs text-right text-gray-500 dark:text-gray-400">
            {formData.Message.length}/300
          </p>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
       <button
      type="submit"
      disabled={loading}
      className="flex items-center gap-2 px-6 py-3 font-semibold text-white transition rounded-xl bg-primary hover:bg-primaryDark focus:ring-4 focus:ring-blue-300 disabled:opacity-50"
    >
      {loading && <FaSpinner className="w-5 h-5 animate-spin" />}
      {loading ? 'Processing...' : 'Submit Payment'}
    </button>
        </div>
      </div>
    </form>
      </div>
    </div>
  );
}

export default Payments;
