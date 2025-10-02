import { useEffect } from "react";
import { FaRegCreditCard } from "react-icons/fa";
import { MdCheckCircle, MdError } from "react-icons/md";

const ProcessingModal = ({
  status = "processing",     // "processing", "success", "failed"
  errorMessage = "",
  reason = "",
  batteryInfo = null,
  onClose = () => {},
}) => {

  // Auto-close logic for specific reasons
//   useEffect(() => {
//     let autoClose = false;

//     if (reason === "NO_BATTERY_AVAILABLE" || reason === "no_battery") {
//       autoClose = true;
//     }

//     if (status === "success" || (status === "failed" && autoClose)) {
//       const timer = setTimeout(() => {
//         onClose();
//       }, 3000);
//       return () => clearTimeout(timer);
//     }
//   }, [status, reason, onClose]);

  const getErrorDisplay = () => {
    const message = errorMessage || "Something went wrong. Please try again.";

    const errorConfigs = {
      PAYMENT_FAILED: {
        title: "Lacag bixinta ma dhicin",
        iconColor: "text-red-500",
        titleColor: "text-red-600",
        bgColor: "bg-red-50",
        borderColor: "border-red-200"
      },
      NO_BATTERY_AVAILABLE: {
        title: "Ma jiro baytari diyaar ah",
        iconColor: "text-yellow-500",
        titleColor: "text-yellow-600",
        bgColor: "bg-yellow-50",
        borderColor: "border-yellow-200"
      },
      network_error: {
        title: "Network Error",
        iconColor: "text-red-500",
        titleColor: "text-red-600",
        bgColor: "bg-red-50",
        borderColor: "border-red-200"
      },
    };

    const config = errorConfigs[reason] || {
      title: "Payment Failed",
      iconColor: "text-red-500",
      titleColor: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200"
    };

    return {
      ...config,
      message
    };
  };

  // === Renders ===

  const renderProcessing = () => (
    <>
      <h2 className="mb-2 text-xl font-semibold text-gray-800">
        Processing Payment
      </h2>
      <p className="mb-6 text-sm text-gray-500">
        Please wait while we process your payment...
      </p>
      <div className="flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-purple-500 rounded-full animate-spin border-t-transparent">
          <FaRegCreditCard className="mx-auto my-3 text-2xl text-purple-500" />
        </div>
      </div>
    </>
  );

  const renderSuccess = () => (
    <>
      <MdCheckCircle className="mx-auto mb-3 text-5xl text-green-500" />
      <h2 className="mb-2 text-xl font-semibold text-green-600">Payment Successful</h2>
      <p className="mb-2 text-sm text-gray-500">
        Your payment was completed successfully.
      </p>
      {batteryInfo && (
        <p className="text-sm text-gray-600">
          🔓 Battery <strong>{batteryInfo.battery_id}</strong> unlocked from slot{" "}
          <strong>{batteryInfo.slot_id}</strong>.
        </p>
      )}
    </>
  );

  const renderError = () => {
    const { title, iconColor, titleColor, bgColor, borderColor, message } = getErrorDisplay();

    return (
      <>
        <MdError className={`mx-auto mb-3 text-5xl ${iconColor}`} />
        <h2 className={`mb-2 text-xl font-semibold ${titleColor}`}>
          {title}
        </h2>
        <div className={`p-3 mb-4 text-sm text-gray-700 rounded-lg ${bgColor} border ${borderColor}`}>
          {message}
        </div>
      </>
    );
  };

  const renderContent = () => {
    switch (status) {
      case "processing":
        return renderProcessing();
      case "success":
        return renderSuccess();
      case "failed":
        return renderError();
      default:
        return null;
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white w-[90%] max-w-sm p-6 rounded-xl shadow-lg relative text-center">
        {/* Close Button */}
        <button
          className="absolute text-xl text-gray-500 transition-colors top-3 right-3 hover:text-black"
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>

        {/* Modal Content */}
        {renderContent()}
      </div>
    </div>
  );
};

export default ProcessingModal;
