import React from 'react';
import { ETHICAL_AI_STATEMENT } from '../data/portfolioData';
import { Cpu, ShieldAlert, CheckCircle, Scale, Lock, Eye } from 'lucide-react';

export const EthicalAISmartSection: React.FC = () => {
  return (
    <section id="ai-ethics" className="py-24 bg-[#060911] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Applied Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {ETHICAL_AI_STATEMENT.title}
          </h2>
          <p className="mt-2 text-base font-semibold text-blue-400 tracking-tight">
            {ETHICAL_AI_STATEMENT.headline}
          </p>
          <p className="mt-2 text-slate-400 text-sm sm:text-base leading-relaxed">
            {ETHICAL_AI_STATEMENT.description}
          </p>
        </div>

        {/* Narrative & Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-4 text-left text-sm sm:text-base text-slate-300 leading-relaxed">
            {ETHICAL_AI_STATEMENT.paragraphs.map((p, idx) => (
              <p key={idx} className="text-slate-300">
                {p}
              </p>
            ))}
          </div>

          {/* 4 Architectural Pillars */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4 text-left">
            {ETHICAL_AI_STATEMENT.pillars.map((pillar, idx) => {
              const icons = [
                <CheckCircle className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />,
                <Scale className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" />,
                <Lock className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />,
                <Eye className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" />
              ];

              return (
                <div
                  key={pillar.title}
                  className="p-4 rounded-2xl bg-[#0b1222] border border-white/10 hover:border-blue-500/30 transition-all flex items-start gap-3 shadow-lg"
                >
                  {icons[idx % icons.length]}
                  <div>
                    <h4 className="text-xs font-bold text-white mb-1">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
