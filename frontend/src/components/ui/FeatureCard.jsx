import React from 'react';

export const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:transform hover:scale-105">
      <div className="text-teal-600 mb-4">
        {React.cloneElement(icon, { className: 'w-8 h-8' })}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};