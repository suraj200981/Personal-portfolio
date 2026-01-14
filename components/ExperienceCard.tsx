
import React from 'react';
import { Experience } from '../types';

interface Props {
  exp: Experience;
}

const ExperienceCard: React.FC<Props> = ({ exp }) => {
  return (
    <div className="glass p-8 rounded-2xl hover:border-blue-500/50 transition-all duration-300 group">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors">{exp.role}</h3>
          <p className="text-blue-500 font-medium">{exp.company}</p>
        </div>
        <div className="text-right mt-2 md:mt-0">
          <span className="text-sm px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
            {exp.period}
          </span>
          <p className="text-xs text-slate-500 mt-1">{exp.location}</p>
        </div>
      </div>
      <ul className="space-y-3">
        {exp.description.map((item, i) => (
          <li key={i} className="flex items-start text-slate-400 text-sm">
            <span className="mr-3 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
