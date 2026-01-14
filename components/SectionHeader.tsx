
import React from 'react';

interface Props {
  title: string;
  subtitle?: string;
}

const SectionHeader: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <div className="mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
        {title}
        <span className="text-blue-500">.</span>
      </h2>
      {subtitle && <p className="text-slate-400 max-w-2xl">{subtitle}</p>}
      <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mt-6 rounded-full"></div>
    </div>
  );
};

export default SectionHeader;
