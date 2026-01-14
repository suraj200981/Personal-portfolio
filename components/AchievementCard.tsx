
import React from 'react';
import { Achievement } from '../types';

interface Props {
  achievement: Achievement;
}

const AchievementCard: React.FC<Props> = ({ achievement }) => {
  const isResearch = achievement.tags.includes("Research Publication");

  return (
    <div className={`relative group h-full transition-all duration-500 hover:-translate-y-2`}>
      {/* Glow Effect behind the card */}
      <div className={`absolute -inset-0.5 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500 ${isResearch ? 'bg-blue-500' : 'bg-amber-500'}`}></div>
      
      {/* Main Glass Card */}
      <div className={`relative h-full flex flex-col p-8 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300 overflow-hidden`}>
        
        {/* Background Decorative Icon */}
        <div className="absolute -top-6 -right-6 p-4 opacity-[0.03] group-hover:opacity-[0.08] group-hover:scale-110 transition-all duration-500">
          {isResearch ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-48 w-48 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-48 w-48 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" />
            </svg>
          )}
        </div>

        <div className="relative z-10 flex flex-col h-full">
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <div className="flex-1">
              <div className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest mb-3 border ${isResearch ? 'text-blue-400 border-blue-400/30 bg-blue-400/5' : 'text-amber-400 border-amber-400/30 bg-amber-400/5'}`}>
                {isResearch ? 'Academic Research' : 'Major Milestone'}
              </div>
              <h3 className="text-2xl font-bold text-white group-hover:gradient-text transition-all duration-300 leading-tight">
                {achievement.title}
              </h3>
              <p className="text-slate-400 font-medium text-sm mt-1">
                {achievement.organization}
              </p>
            </div>
            <span className="text-[11px] font-bold text-slate-500 bg-black/40 px-3 py-1 rounded-full border border-white/5 whitespace-nowrap ml-4">
              {achievement.date}
            </span>
          </div>

          {/* Description */}
          <p className="text-slate-300/80 mb-8 leading-relaxed text-sm flex-grow">
            {achievement.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {achievement.tags.map((tag, i) => (
              <span key={i} className="text-[10px] font-semibold px-2.5 py-1 rounded bg-white/5 text-slate-300 border border-white/10 uppercase tracking-tight">
                {tag}
              </span>
            ))}
          </div>

          {/* Link */}
          {achievement.link && (
            <a 
              href={achievement.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`inline-flex items-center text-sm font-bold transition-all duration-300 group/link ${isResearch ? 'text-blue-400 hover:text-blue-300' : 'text-amber-400 hover:text-amber-300'}`}
            >
              <span className="relative">
                {isResearch ? 'Access Publication' : 'View Details'}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover/link:w-full ${isResearch ? 'bg-blue-400' : 'bg-amber-400'}`}></span>
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transform group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default AchievementCard;
