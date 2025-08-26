import { useLocation } from 'react-router-dom';

const ServiceDetail = () => {
  const location = useLocation();
  const { service } = location.state || {};

  if (!service) return <p className="mt-20 text-xl text-center">Service not found!</p>;

  return (
    <div className="max-w-4xl p-8 mx-auto">
      <h1 className="mb-4 text-4xl font-bold">{service.title}</h1>
      <div className="mb-6 text-6xl text-brandOrange">{service.icon}</div>
      <p className="mb-6 text-gray-700">{service.description}</p>
      <ul className="space-y-2">
        {service.features.map((feature, i) => (
          <li key={i} className="flex items-center text-gray-600">
            <div className="w-2 h-2 mr-3 rounded-full bg-brandOrange"></div>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceDetail;
