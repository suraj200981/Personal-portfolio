
import React, { useState, useEffect } from 'react';
import { Project } from '../types';

interface Props {
  project: Project;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  const isDeployed = project.status === 'Deployed';
  const isDexomania = project.title === 'Dexomania';
  const isSimpleSign = project.title === 'SimpleSignPDF';
  
  // State for the interactive UX demo on SimpleSign card
  const [showSignature, setShowSignature] = useState(false);

  useEffect(() => {
    if (isSimpleSign) {
      const interval = setInterval(() => {
        setShowSignature(prev => !prev);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isSimpleSign]);

  return (
    <div className={`glass rounded-2xl border border-white/5 transition-all duration-500 group relative overflow-hidden flex flex-col h-full ${isDexomania ? 'hover:border-cyan-500/30 ring-1 ring-white/5' : 'hover:border-blue-500/30'}`}>
      
      {/* Project Preview Image / Visual */}
      <div className="relative aspect-video overflow-hidden bg-slate-900">
        {isDexomania ? (
          <div className="absolute inset-0 bg-[#0a0a0c] p-4 flex items-center justify-center overflow-hidden">
            <div className="w-full h-full border border-cyan-500/20 rounded bg-black/40 relative flex flex-col">
              <div className="flex justify-between items-center p-2 border-b border-cyan-500/10">
                <div className="text-[8px] font-mono text-cyan-400 uppercase tracking-widest">Tactical_Dex_v4</div>
                <div className="flex gap-1">
                  <div className="w-4 h-1 bg-cyan-500/80 rounded-[1px]"></div>
                  <div className="w-4 h-1 bg-red-500/80 rounded-[1px]"></div>
                </div>
              </div>
              <div className="flex-1 p-3 flex gap-4">
                <div className="w-1/3 aspect-square bg-slate-800/30 rounded-lg border border-cyan-500/10 flex items-center justify-center relative">
                   <div className="w-10 h-10 rounded-full border border-dashed border-cyan-500/20 animate-spin-slow"></div>
                   <div className="absolute w-6 h-6 rounded-full bg-cyan-500/5 animate-pulse"></div>
                   <div className="absolute text-[6px] text-cyan-400 font-mono bottom-1">SCANNING...</div>
                </div>
                <div className="flex-1 space-y-2">
                   <div className="h-1.5 w-full bg-cyan-500/20 rounded"></div>
                   <div className="h-1.5 w-3/4 bg-cyan-500/10 rounded"></div>
                   <div className="h-4 w-1/2 bg-cyan-500/5 rounded border border-cyan-500/10 flex items-center px-1">
                      <div className="h-1 w-full bg-green-500/40 rounded-full"></div>
                   </div>
                   <div className="flex gap-1">
                      <div className="h-2 w-8 bg-purple-500/20 rounded text-[5px] text-purple-300 flex items-center justify-center">TYPE:1</div>
                      <div className="h-2 w-8 bg-cyan-500/20 rounded text-[5px] text-cyan-300 flex items-center justify-center">TYPE:2</div>
                   </div>
                </div>
              </div>
              <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] z-10 bg-[length:100%_2px,3px_100%]"></div>
            </div>
            <div className="absolute bottom-4 left-4 bg-cyan-950/80 px-2 py-1 border border-cyan-500/30 shadow-lg">
               <span className="text-[9px] font-mono text-cyan-400 uppercase tracking-widest font-bold">Battle_Simulation_Ready</span>
            </div>
          </div>
        ) : isSimpleSign ? (
          <div className="absolute inset-0 bg-slate-100 p-4 flex flex-col">
            <div className="flex-1 bg-white shadow-inner rounded-sm relative overflow-hidden border border-slate-200">
              {/* Mock PDF Content */}
              <div className="p-4 space-y-2">
                <div className="h-2 w-3/4 bg-slate-100 rounded"></div>
                <div className="h-2 w-full bg-slate-100 rounded"></div>
                <div className="h-2 w-5/6 bg-slate-100 rounded"></div>
                <div className="h-2 w-1/2 bg-slate-100 rounded pt-8"></div>
                <div className="h-8 w-32 border-b border-slate-300 mt-4"></div>
                <div className="text-[8px] text-slate-400 mt-1 uppercase font-bold">Signature Line</div>
              </div>
              
              {/* Interactive Signature Demo */}
              {showSignature && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 scale-125">
                   <div className="relative p-2 border-2 border-blue-500 bg-blue-50/50 rounded animate-in fade-in zoom-in duration-300">
                      {/* Drag Handles */}
                      <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-blue-500 border border-white rounded-full"></div>
                      <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-blue-500 border border-white rounded-full"></div>
                      <div className="font-serif italic text-blue-800 text-xl select-none">Suraj Sharma</div>
                      <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-[8px] px-2 py-0.5 rounded-full whitespace-nowrap shadow-lg">
                        New Signature Placed
                      </div>
                   </div>
                </div>
              )}
            </div>
            <div className="mt-2 text-[10px] font-bold text-slate-500 flex items-center justify-between">
              <span>UX PROTOTYPE: AUTO-FOCUS LOGIC</span>
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-ping"></div>
            </div>
          </div>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
             <span className="text-white/20 font-bold uppercase tracking-widest">{project.title}</span>
          </div>
        )}
        
        {/* Hover Overlay */}
        <div className={`absolute inset-0 transition-colors duration-500 ${isSimpleSign ? 'group-hover:bg-blue-600/5' : 'group-hover:bg-blue-600/10'}`}></div>
      </div>

      <div className="p-8 flex-1 flex flex-col">
        {/* Status Badge */}
        <div className="flex justify-between items-start mb-6">
          <h3 className={`text-2xl font-bold transition-colors ${isDexomania ? 'group-hover:text-cyan-400' : 'group-hover:text-blue-400'}`}>
            {project.title}
          </h3>
          <span className={`text-[10px] font-bold px-3 py-1 rounded-full border ${
            isDeployed 
              ? 'bg-green-500/10 text-green-400 border-green-500/20' 
              : 'bg-blue-500/10 text-blue-400 border-blue-500/20'
          }`}>
            {project.status}
          </span>
        </div>

        <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">{project.description}</p>

        <div className="space-y-3 mb-8">
          {project.features?.slice(0, 3).map((feature, i) => (
            <div key={i} className="flex items-center text-xs text-slate-300">
              <div className={`w-1 h-1 rounded-full mr-3 ${isDexomania ? 'bg-cyan-500' : isSimpleSign ? 'bg-blue-600' : 'bg-blue-500'}`}></div>
              {feature}
            </div>
          ))}
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
            className={`inline-flex items-center text-sm font-bold transition-colors ${isDexomania ? 'text-cyan-400 hover:text-cyan-300' : 'text-blue-400 hover:text-blue-300'}`}
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
      
      {/* Background Decorative Glow */}
      <div className={`absolute -bottom-10 -right-10 w-32 h-32 blur-[60px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 ${isDexomania ? 'bg-cyan-500' : 'bg-blue-500'}`}></div>
    </div>
  );
};

export default ProjectCard;
