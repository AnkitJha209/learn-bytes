import React from 'react';

export const StatsCard = ({ icon, title, description }) => {
  return (
    <div className="bg-teal-800/30 p-6 rounded-lg backdrop-blur-sm border border-teal-700/50 hover:transform hover:scale-105 transition-all">
      <div className="text-emerald-400 mb-4">
        {React.cloneElement(icon, { className: 'w-8 h-8' })}
      </div>
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-teal-200">{description}</p>
    </div>
  );
};