
// import  { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
// import axios from 'axios';
// import CustomAlert from '../components/alerts/CustomAlert'

// function Payments() {
//   const [method, setMethod] = useState('local');
//   const [formData, setFormData] = useState({
//     phoneNumber: '',
//     amount: '',
//     email: '',
//     packageName: '',
//     FullName: '',
//     City: '',
//     BussinesName: '',
//     Message: '',
//   });
//   const [errors, setErrors] = useState({});
//   const [loading, setLoading] = useState(false);
//   const [alert, setAlert] = useState({ message: '', type: '' });

//   const reduxAmount = useSelector((state) => state.payment.amount);
//   const meta = useSelector((state) => state.payment.meta);

//   useEffect(() => {
//     if (typeof reduxAmount === 'number' && reduxAmount > 0) {
//       setFormData((prev) => ({
//         ...prev,
//         amount: String(reduxAmount),
//       }));
//     }
//   }, [reduxAmount]);

//   const handleChange = (field, value) => {
//     setFormData((prev) => ({
//       ...prev,
//       [field]: value,
//     }));
//   };

//   const validate = () => {
//     const errs = {};
//     const amt = Number(formData.amount);

//     if (!formData.FullName.trim()) errs.FullName = 'Full name is required';
//     if (!formData.BussinesName.trim()) errs.BussinesName = 'Business name is required';
//     if (!formData.amount || isNaN(amt) || amt <= 0) errs.amount = 'Enter a valid amount';
//     if (formData.Message && formData.Message.length > 300)
//       errs.Message = 'Message cannot exceed 300 characters';

//     if (method === 'local') {
//       if (!formData.phoneNumber) errs.phoneNumber = 'Phone is required';
//       else if (!/^\d{7,12}$/.test(formData.phoneNumber)) errs.phoneNumber = 'Use 7–12 digits';
//       if (!formData.City) errs.City = 'City is required';
//       if (!formData.email) errs.email = 'Email is required';
//       else if (!/\S+@\S+\.\S+/.test(formData.email)) errs.email = 'Enter a valid email';
//     }

//     setErrors(errs);
//     return Object.keys(errs).length === 0;
//   };

//   const handleSubmit = async (e) => {
//   e.preventDefault();
//   setErrors({});
//   setAlert({ message: '', type: '' });

//   if (!validate()) return;

//   const payload = {
//     phoneNumber: formData.phoneNumber,
//     amount: formData.amount,
//     email: formData.email,
//     packageName: meta?.name || '',
//     FullName: formData.FullName,
//     City: formData.City,
//     BussinesName: formData.BussinesName,
//     Message: formData.Message,
//   };

//   try {
//     setLoading(true);
//     const response = await axios.post(
//       'http://localhost:3000/api/v1/pay',
//       payload,
//       {
//         headers: { 'Content-Type': 'application/json' },
//         withCredentials: true,
//       }
//     );

//     // Success
//     setAlert({ message: 'Payment submitted successfully.', type: 'success' });
//     // Optionally clear form
//     // setFormData({...});
//   } catch (error) {
//     let message = 'Payment failed. Please try again.';

//     if (error.response?.data) {
//       const errData = error.response.data;
//       if (typeof errData.error === 'string') {
//         message = errData.error;
//       } else if (errData.error?.responseMsg) {
//         message = errData.error.responseMsg;
//       }
//     } else if (error.request) {
//       message = 'No response from server. Check your internet connection.';
//     } else {
//       message = error.message || message;
//     }

//     setAlert({ message, type: 'error' });
//   } finally {
//     setLoading(false);
//   }
// };


  

//   const handleAlertClose = () => {
//     setAlert({ message: '', type: '' });
//   };

//   return (
//     <div className="min-h-screen px-4 py-12 text-gray-800 bg-white dark:bg-gray-900 dark:text-white">
//       <div className="relative max-w-6xl mx-auto">
//         <h1 className="mb-8 text-4xl font-extrabold text-center text-primary ">Payment Form</h1>

//         {/* Alert */}
//         {alert.message && (
//           <div className="mb-6">
//             <CustomAlert
//               message={alert.message}
//               type={alert.type}
//               onClose={handleAlertClose}
//             />
//           </div>
//         )}

//         <form onSubmit={handleSubmit} className="grid gap-8 md:grid-cols-3">
//           {/* Left Column */}
//           <div className="space-y-6 md:col-span-1">
//             {/* Payment Method */}
//             <div className="p-4 border border-gray-200 shadow-sm rounded-2xl dark:border-gray-700">
//               <h3 className="mb-4 text-lg font-semibold">Payment Method</h3>
//               <div className="space-y-3">
//                 <label className="flex items-center gap-3 cursor-pointer">
//                   <input
//                     type="radio"
//                     name="method"
//                     value="local"
//                     checked={method === 'local'}
//                     onChange={() => setMethod('local')}
//                     className="accent-blue-600"
//                   />
//                   <span>Local Payment</span>
//                 </label>
//                 <label className="flex items-center gap-3 opacity-50 cursor-not-allowed">
//                   <input
//                     type="radio"
//                     name="method"
//                     value="card"
//                     checked={method === 'card'}
//                     onChange={() => setMethod('card')}
//                     disabled
//                     className="accent-blue-600"
//                   />
//                   <span>Card (Coming Soon)</span>
//                 </label>
//               </div>
//             </div>

//             {/* Amount & Meta Info */}
//             {meta && (
//               <div className="p-4 border border-gray-200 shadow-sm rounded-2xl dark:border-gray-700">
//                 <h3 className="mb-2 text-lg font-semibold">{meta.name}</h3>
//                 <p>Base Price: ${meta.basePrice.toFixed(2)}</p>
//                 <p>Tax: 0.00 </p>
//                 <p className="mt-2 font-bold">Total: ${formData.amount}</p>
//               </div>
//             )}

//               <div className='p-4 border border-gray-200 shadow-sm rounded-2xl dark:border-gray-700'>
//                   <h3 className='mb-2 text-lg font-semibold'>Local payments.</h3>
//                   <p>EVC Plus:  061 xxxxxxx</p>
//                   <p>ZAAD: 63 xxxxx</p>
//                   <p>SAHAL: 37 xxxxx</p>
                 
//               </div>
//           </div>

//           {/* Right Column (Form Fields) */}
//           <div className="space-y-6 md:col-span-2">
//             <InputField
//               label="Full Name"
//               value={formData.FullName}
//               onChange={(v) => handleChange('FullName', v)}
//               error={errors.FullName}
//               placeholder="Enter full name"
//             />
//             <InputField
//               label="Business Name"
//               value={formData.BussinesName}
//               onChange={(v) => handleChange('BussinesName', v)}
//               error={errors.BussinesName}
//               placeholder="Your Company"
//             />

//             <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
//               <InputField
//                 label="City"
//                 value={formData.City}
//                 onChange={(v) => handleChange('City', v)}
//                 error={errors.City}
//                 placeholder="Your City"
//               />
//               <InputField
//                 label="Email"
//                 type="email"
//                 value={formData.email}
//                 onChange={(v) => handleChange('email', v)}
//                 error={errors.email}
//                 placeholder="you@gmail.com"
//               />
//             </div>

//             <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
//               <InputField
//                 label="Phone Number"
//                 type="tel"
//                 value={formData.phoneNumber}
//                 onChange={(v) => handleChange('phoneNumber', v)}
//                 error={errors.phoneNumber}
//                 placeholder="061 xxxxxx"
//               />
//               <InputField
//                 label="Amount"
//                 value={formData.amount}
//                 onChange={(v) => handleChange('amount', v)}
//                 error={errors.amount}
//                 disabled
//               />
//             </div>

//             {/* Message */}
//             <div>
//               <label className="block mb-2 font-medium">Message (Optional)</label>
//               <textarea
//                 value={formData.Message}
//                 onChange={(e) => handleChange('Message', e.target.value)}
//                 maxLength={300}
//                 rows={4}
//                 placeholder="Your message..."
//                 className={`w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white ${
//                   errors.Message ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
//                 }`}
//               />
//               {errors.Message && (
//                 <p className="mt-1 text-sm text-red-500">{errors.Message}</p>
//               )}
//               <p className="text-xs text-right text-gray-500 dark:text-gray-400">
//                 {formData.Message.length}/300
//               </p>
//             </div>

//             {/* Submit Button */}
//             <div className="flex justify-end">
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className={`px-6 py-3 text-white font-semibold rounded-xl transition ${
//                   loading
//                     ? 'bg-primary cursor-not-allowed'
//                     : 'bg-primary hover:bg-primaryDark focus:ring-4 focus:ring-blue-300'
//                 }`}
//               >
//                 {loading ? 'Submitting...' : 'Submit Payment'}
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// function InputField({ label, value, onChange, placeholder = '', error, type = 'text', disabled = false }) {
//   return (
//     <div>
//       <label className="block mb-2 font-medium">{label}</label>
//       <input
//         type={type}
//         value={value}
//         onChange={(e) => onChange(e.target.value)}
//         placeholder={placeholder}
//         disabled={disabled}
//         className={`w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white ${
//           error ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
//         }`}
//       />
//       {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
//     </div>
//   );
// }

// export default Payments;
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import CustomAlert from '../components/alerts/CustomAlert';

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
  };

  const validate = () => {
    const errs = {};
    const amt = Number(formData.amount);

    if (!formData.FullName.trim()) errs.FullName = 'Full name is required';
    if (!formData.BussinesName.trim()) errs.BussinesName = 'Business name is required';
    if (!formData.amount || isNaN(amt) || amt <= 0) errs.amount = 'Enter a valid amount';
    if (formData.Message && formData.Message.length > 300)
      errs.Message = 'Message cannot exceed 300 characters';

    if (method === 'local') {
      if (!formData.phoneNumber) errs.phoneNumber = 'Phone is required';
      else if (!/^\d{7,12}$/.test(formData.phoneNumber)) errs.phoneNumber = 'Use 7–12 digits';
      if (!formData.City) errs.City = 'City is required';
      if (!formData.email) errs.email = 'Email is required';
      else if (!/\S+@\S+\.\S+/.test(formData.email)) errs.email = 'Enter a valid email';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setAlert({ message: '', type: '' });

    if (!validate()) return;

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
    } catch (error) {
      let message = 'Payment failed. Please try again.';

      if (error.response?.data) {
        const errData = error.response.data;
        if (typeof errData.error === 'string') {
          message = errData.error;
        } else if (errData.error?.responseMsg) {
          message = errData.error.responseMsg;
        }
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

  const handleAlertClose = () => {
    setAlert({ message: '', type: '' });
  };

  return (
    <>
      {/* Modal Loader */}
      {/* {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="p-6 text-center bg-white shadow-lg rounded-xl dark:bg-gray-800">
            <svg className="w-10 h-10 mb-4 text-blue-600 animate-spin" viewBox="0 0 24 24" fill="none">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              />
            </svg>
            <p className="text-lg font-semibold text-gray-800 dark:text-white">Processing your payment...</p>
          </div>
        </div>
      )} */}
      {loading && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm">
    <div className="relative w-[90%] max-w-sm p-6 text-center bg-white rounded-2xl shadow-2xl dark:bg-gray-900">
      
      {/* Spinner with icon in center */}
      <div className="relative w-20 h-20 mx-auto mb-6">
        <div className="absolute inset-0 border-4 border-purple-500 rounded-full border-t-transparent animate-spin"></div>
        <div className="flex items-center justify-center w-full h-full">
          <svg
            className="w-8 h-8 text-purple-500"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              d="M4 12a8 8 0 018-8v8H4z"
              fill="currentColor"
              className="opacity-75"
            />
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              className="opacity-25"
            />
          </svg>
        </div>
      </div>

      {/* Title */}
      <h2 className="mb-2 text-xl font-semibold text-gray-800 dark:text-white">
        Processing Payment
      </h2>

      {/* Subtext */}
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Please wait while we securely process your payment...
      </p>
    </div>
  </div>
)}


      {/* Main Content */}
      <div className="min-h-screen px-4 py-12 text-gray-800 bg-white dark:bg-gray-900 dark:text-white">
        <div className="relative max-w-6xl mx-auto">
          <h1 className="mb-8 text-4xl font-extrabold text-center text-primary">Payment Form</h1>

          {/* Alert */}
          {alert.message && (
            <div className="mb-6">
              <CustomAlert
                message={alert.message}
                type={alert.type}
                onClose={handleAlertClose}
              />
            </div>
          )}

          <form onSubmit={handleSubmit} className="grid gap-8 md:grid-cols-3">
            {/* Left Column */}
            <div className="space-y-6 md:col-span-1">
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

              {/* Amount & Meta Info */}
              {meta && (
                <div className="p-4 border border-gray-200 shadow-sm rounded-2xl dark:border-gray-700">
                  <h3 className="mb-2 text-lg font-semibold">{meta.name}</h3>
                  <p>Base Price: ${meta.basePrice.toFixed(2)}</p>
                  <p>Tax: 0.00 </p>
                  <p className="mt-2 font-bold">Total: ${formData.amount}</p>
                </div>
              )}

              <div className="p-4 border border-gray-200 shadow-sm rounded-2xl dark:border-gray-700">
                <h3 className="mb-2 text-lg font-semibold">Local payments.</h3>
                <p>EVC Plus: 061 xxxxxxx</p>
                <p>ZAAD: 63 xxxxx</p>
                <p>SAHAL: 37 xxxxx</p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6 md:col-span-2">
              <InputField
                label="Full Name"
                value={formData.FullName}
                onChange={(v) => handleChange('FullName', v)}
                error={errors.FullName}
                placeholder="Enter full name"
              />
              <InputField
                label="Business Name"
                value={formData.BussinesName}
                onChange={(v) => handleChange('BussinesName', v)}
                error={errors.BussinesName}
                placeholder="Your Company"
              />

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <InputField
                  label="City"
                  value={formData.City}
                  onChange={(v) => handleChange('City', v)}
                  error={errors.City}
                  placeholder="Your City"
                />
                <InputField
                  label="Email"
                  type="email"
                  value={formData.email}
                  onChange={(v) => handleChange('email', v)}
                  error={errors.email}
                  placeholder="you@gmail.com"
                />
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <InputField
                  label="Phone Number"
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={(v) => handleChange('phoneNumber', v)}
                  error={errors.phoneNumber}
                  placeholder="061 xxxxxx"
                />
                <InputField
                  label="Amount"
                  value={formData.amount}
                  onChange={(v) => handleChange('amount', v)}
                  error={errors.amount}
                  disabled
                />
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

              {/* Submit */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-3 font-semibold text-white transition rounded-xl bg-primary hover:bg-primaryDark focus:ring-4 focus:ring-blue-300"
                >
                  Submit Payment
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

// Input Field Component
function InputField({ label, value, onChange, placeholder = '', error, type = 'text', disabled = false }) {
  return (
    <div>
      <label className="block mb-2 font-medium">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        className={`w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white ${
          error ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
        }`}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}

export default Payments;


