
import React from 'react';
import { Project } from '../types';

interface Props {
  project: Project;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  const isDeployed = project.status === 'Deployed';

  return (
    <div className="glass p-8 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-all duration-500 group relative overflow-hidden">
      {/* Status Badge */}
      <div className="absolute top-4 right-4">
        <span className={`text-[10px] font-bold px-3 py-1 rounded-full border ${
          isDeployed 
            ? 'bg-green-500/10 text-green-400 border-green-500/20' 
            : 'bg-blue-500/10 text-blue-400 border-blue-500/20'
        }`}>
          {project.status}
        </span>
      </div>

      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed">{project.description}</p>
      </div>

      <div className="space-y-4 mb-8">
        <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Key Features</h4>
        <div className="flex flex-col gap-2">
          {project.features?.map((feature, i) => (
            <div key={i} className="flex items-center text-xs text-slate-300">
              <svg className="w-3 h-3 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              {feature}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {project.tags.map((tag, i) => (
          <span key={i} className="text-[10px] font-medium px-2 py-0.5 rounded bg-white/5 border border-white/5 text-slate-400">
            {tag}
          </span>
        ))}
      </div>

      {isDeployed && project.link && (
        <a 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors"
        >
          Launch Application
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      )}
      {!isDeployed && (
        <span className="text-sm font-bold text-slate-600 cursor-not-allowed">Coming Soon</span>
      )}
    </div>
  );
};

export default ProjectCard;
