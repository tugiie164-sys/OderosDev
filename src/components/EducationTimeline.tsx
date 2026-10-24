import React from 'react';
import { EDUCATION_DATA } from '../data/portfolioData';
import { GraduationCap, BookOpen, CheckCircle, Award } from 'lucide-react';

export const EducationTimeline: React.FC = () => {
  const getBadgeStyle = (status: string) => {
    switch (status) {
      case 'Current Study':
        return 'bg-blue-950/80 text-blue-300 border-blue-500/40';
      case 'Ongoing Coursework':
        return 'bg-purple-950/80 text-purple-300 border-purple-500/40';
      case 'Completed':
      default:
        return 'bg-emerald-950/80 text-emerald-300 border-emerald-500/40';
    }
  };

  return (
    <section id="education" className="py-24 bg-[#080d19] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-400 text-xs font-mono uppercase tracking-wider mb-3">
            <span>Academic Pathway</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & Professional Development
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Prioritizing university undergraduate studies in Information Technology at MMUST alongside structured networking academy curriculum and continuous self-study.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="max-w-4xl mx-auto relative pl-6 sm:pl-8 border-l border-white/10 space-y-10 text-left">
          {EDUCATION_DATA.map((item, index) => (
            <div key={item.institution} className="relative group">
              
              {/* Timeline Bullet Node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-[#080d19] border-2 border-blue-500 flex items-center justify-center shadow-md shadow-blue-500/30">
                <div className="w-2 h-2 rounded-full bg-blue-400" />
              </div>

              {/* Education Card */}
              <div className="p-6 sm:p-7 rounded-3xl bg-[#0b1222] border border-white/10 hover:border-blue-500/30 transition-all shadow-xl">
                
                {/* Top Row: Institution & Status */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-blue-400" />
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      {item.institution}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2">
                    <span
                      className={`px-2.5 py-0.5 text-[10px] font-mono rounded-full border ${getBadgeStyle(
                        item.status
                      )}`}
                    >
                      {item.status}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {item.period}
                    </span>
                  </div>
                </div>

                {/* Credential Name */}
                <h4 className="text-sm sm:text-base font-semibold text-blue-400/90 mb-3">
                  {item.credential}
                </h4>

                {/* Summary Details */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {item.details}
                </p>

                {/* Specific Highlights */}
                <div className="pt-3 border-t border-white/5 space-y-1.5">
                  <span className="text-[11px] font-mono text-slate-400 block mb-1">
                    Key Focus Areas:
                  </span>
                  {item.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle className="w-3.5 h-3.5 text-blue-400 mt-0.5 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Continuous Learning Tracker */}
        <div className="mt-16 max-w-4xl mx-auto p-6 rounded-3xl bg-[#090e1c] border border-white/10 text-left">
          <div className="flex items-center gap-2 mb-3 text-white font-semibold text-sm">
            <BookOpen className="w-4 h-4 text-blue-400" />
            <span>Active Self-Directed Learning Tracks</span>
          </div>
          <p className="text-xs text-slate-400 mb-4 leading-relaxed">
            In addition to university coursework, Wycliffe engages in independent laboratory experiments and technical documentation across:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-300">
              <span className="font-semibold text-white block">PostgreSQL & SQL</span>
              <span className="text-slate-400 text-[11px]">Relational indexing, transactions, and normalization</span>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-300">
              <span className="font-semibold text-white block">Linux CLI & Shell</span>
              <span className="text-slate-400 text-[11px]">System administration, permissions, diagnostic commands</span>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-300">
              <span className="font-semibold text-white block">AI-Assisted Engineering</span>
              <span className="text-slate-400 text-[11px]">Code verification loops and prompt architecture</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
