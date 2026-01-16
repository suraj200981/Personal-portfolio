
import React, { useState, useEffect } from 'react';
import SectionHeader from './components/SectionHeader';
import ExperienceCard from './components/ExperienceCard';
import AchievementCard from './components/AchievementCard';
import ProjectCard from './components/ProjectCard';
import { EXPERIENCES, CERTIFICATIONS, SKILLS, ACHIEVEMENTS, PROJECTS } from './constants';

const App: React.FC = () => {
  const [activeNav, setActiveNav] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'experience', 'projects', 'achievements', 'skills', 'certifications'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveNav(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0a0c]/80 backdrop-blur-lg border-b border-white/5 py-4' : 'bg-transparent py-8'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div 
            className="text-xl font-bold tracking-tighter group cursor-pointer"
            onClick={(e) => scrollToSection(e as any, 'home')}
          >
            SURAJ<span className="text-blue-500 group-hover:text-purple-500 transition-colors">SHARMA</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {['home', 'experience', 'projects', 'achievements', 'skills', 'certifications'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={(e) => scrollToSection(e, item)}
                className={`text-sm font-medium transition-colors hover:text-blue-400 capitalize ${activeNav === item ? 'text-blue-500' : 'text-slate-400'}`}
              >
                {item}
              </a>
            ))}
          </div>
          <a href="mailto:suraj.sharma1998@yahoo.com" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition-transform hover:scale-105 active:scale-95">
            Hire Me
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full"></div>
        
        <div className="container mx-auto px-6 z-10">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6 float-anim">
              Technical Consultant & Product Manager
            </div>
            <h1 className="text-5xl md:text-8xl font-bold leading-tight mb-8">
              Driving <span className="gradient-text">Transformation</span> through Data & Technology.
            </h1>
            <p className="text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed">
              5+ years bridging the gap between engineering complexity and business strategy for global firms like Netcompany and TCS.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <a 
                href="#experience" 
                onClick={(e) => scrollToSection(e, 'experience')}
                className="bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-slate-200 transition-colors"
              >
                Experience
              </a>
              <a 
                href="#projects" 
                onClick={(e) => scrollToSection(e, 'projects')}
                className="glass px-8 py-4 rounded-xl font-bold hover:bg-white/5 transition-colors border border-white/10"
              >
                View Projects
              </a>
            </div>
            
            {/* Quick Teaser - Updated to Dexomania */}
            <div className="mt-16 flex items-center space-x-4 opacity-60 hover:opacity-100 transition-opacity">
               <div className="text-xs font-bold uppercase tracking-widest text-slate-500">Latest Release:</div>
               <a href="https://dexomania.com/" target="_blank" rel="noreferrer" className="text-xs font-bold text-red-400 hover:text-red-300 hover:underline flex items-center transition-colors">
                 Dexomania.com 
                 <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
               </a>
            </div>
          </div>
        </div>
        
        <div className="absolute right-0 bottom-0 p-12 hidden lg:block">
           <div className="glass p-6 rounded-3xl w-64 float-anim border border-white/10 shadow-2xl">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <div>
                  <div className="text-sm font-bold">5+ Years</div>
                  <div className="text-xs text-slate-500">Experience</div>
                </div>
              </div>
              <div className="text-xs text-slate-400 leading-relaxed">
                Expert at bridging hardware requirements, R&D, and global business operations.
              </div>
           </div>
        </div>
      </section>

      {/* Experience Section - Priority for Authority */}
      <section id="experience" className="py-24 bg-[#0d0d0f]">
        <div className="container mx-auto px-6">
          <SectionHeader 
            title="Professional Experience" 
            subtitle="Deep expertise in technical consultation, requirement engineering, and system lifecycles across London and Calgary."
          />
          <div className="grid grid-cols-1 gap-8">
            {EXPERIENCES.map((exp, idx) => (
              <ExperienceCard key={idx} exp={exp} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section - Demonstration of Skill */}
      <section id="projects" className="py-24">
        <div className="container mx-auto px-6">
          <SectionHeader 
            title="Product Showcase" 
            subtitle="Independently developed applications and future innovations currently in the development pipeline."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, idx) => (
              <ProjectCard key={idx} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-24 bg-[#0d0d0f]">
        <div className="container mx-auto px-6">
          <SectionHeader 
            title="Key Achievements" 
            subtitle="Published research and awards recognizing excellence in technology and innovation."
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {ACHIEVEMENTS.map((ach, idx) => (
              <AchievementCard key={idx} achievement={ach} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section id="skills" className="py-24">
        <div className="container mx-auto px-6">
          <SectionHeader 
            title="Core Expertise" 
            subtitle="A versatile toolkit focused on cloud infrastructure, agile management, and systems lifecycle."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILLS.map((skillGroup, idx) => (
              <div key={idx} className="glass p-8 rounded-2xl hover:scale-105 transition-transform border border-white/5">
                <h3 className="text-lg font-bold mb-6 text-blue-400">{skillGroup.category}</h3>
                <ul className="space-y-3">
                  {skillGroup.items.map((skill, sIdx) => (
                    <li key={sIdx} className="text-slate-300 font-medium flex items-center">
                      <div className="w-1.5 h-1.5 bg-blue-500/50 rounded-full mr-3"></div>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Education */}
      <section id="certifications" className="py-24 relative overflow-hidden bg-[#0d0d0f]">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <SectionHeader title="Certifications" />
              <div className="grid grid-cols-1 gap-4">
                {CERTIFICATIONS.map((cert, idx) => (
                  <div key={idx} className="flex items-center justify-between glass p-5 rounded-xl group hover:border-purple-500/40 transition-all border border-white/5">
                    <span className="font-medium group-hover:text-purple-400 transition-colors">{cert.name}</span>
                    <span className="text-xs text-slate-500 shrink-0 ml-4">{cert.date}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SectionHeader title="Education" />
              <div className="space-y-8">
                <div className="glass p-8 rounded-2xl border-l-4 border-l-blue-500 border border-white/5">
                  <h3 className="text-xl font-bold mb-2">BSc (Honours) Computer Science</h3>
                  <p className="text-blue-400 font-medium mb-2">University of Kent, UK</p>
                  <p className="text-sm text-slate-500">Graduated with comprehensive technical grounding.</p>
                </div>
                <div className="glass p-8 rounded-2xl border-l-4 border-l-purple-500 border border-white/5">
                  <h3 className="text-xl font-bold mb-2">Software Development Level 3</h3>
                  <p className="text-purple-400 font-medium mb-2">Derby College</p>
                  <p className="text-sm text-slate-500">Grade: AAA*, GPA: 4.0</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 bg-[#0a0a0c]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Let's build something <span className="gradient-text">exceptional</span>.</h2>
          <div className="flex flex-col items-center space-y-6">
            <div className="flex space-x-6 text-slate-400">
               <a href="mailto:suraj.sharma1998@yahoo.com" className="hover:text-blue-500 transition-colors">Email</a>
               <a href="tel:+15875764213" className="hover:text-blue-500 transition-colors">+1 587-576-4213</a>
            </div>
            <p className="text-slate-600 text-sm max-w-sm">
              Suraj Sharma &copy; {new Date().getFullYear()}. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
