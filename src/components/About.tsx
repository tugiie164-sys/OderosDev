import React from 'react';
import { OWNER_PROFILE } from '../data/portfolioData';
import { Cpu, Terminal, BookOpen, Wrench, Globe, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#080d19] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-400 text-xs font-mono uppercase tracking-wider mb-3">
            <span>Engineering Perspective</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Wycliffe Odhiambo Odero
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Developing practical engineering competence through rigorous academic study at MMUST, hands-on infrastructure troubleshooting, and disciplined software development.
          </p>
        </div>

        {/* Narrative & Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 text-sm sm:text-base leading-relaxed">
            {OWNER_PROFILE.bioParagraphs.map((para, idx) => (
              <p key={idx} className="text-slate-300">
                {para}
              </p>
            ))}

            {/* Core Values Checklist */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-white/[0.02] border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                <div className="text-xs">
                  <span className="font-semibold text-white block">Learning by Building</span>
                  <span className="text-slate-400">Verifying concepts through running code and physical hardware testing.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-white/[0.02] border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                <div className="text-xs">
                  <span className="font-semibold text-white block">Infrastructure Awareness</span>
                  <span className="text-slate-400">Understanding how packets, switches, and databases behave under the hood.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-white/[0.02] border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                <div className="text-xs">
                  <span className="font-semibold text-white block">Honest Technical Growth</span>
                  <span className="text-slate-400">Transparent about current knowledge levels, actively closing gaps every day.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-white/[0.02] border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                <div className="text-xs">
                  <span className="font-semibold text-white block">Local Context & Solutions</span>
                  <span className="text-slate-400">Targeting real administrative and logistical challenges in Kenya and Africa.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Spoken Languages & Technical Foundations */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Spoken Languages Card */}
            <div className="p-6 rounded-2xl bg-[#0b1222] border border-white/10 shadow-xl">
              <div className="flex items-center gap-2 mb-4 text-white font-semibold text-sm">
                <Globe className="w-4 h-4 text-blue-400" />
                <span>Languages & Communication</span>
              </div>
              
              <div className="space-y-3">
                {OWNER_PROFILE.languages.map((item) => (
                  <div
                    key={item.language}
                    className="flex items-center justify-between text-xs py-1.5 border-b border-white/5 last:border-b-0"
                  >
                    <span className="font-medium text-slate-200">{item.language}</span>
                    <span className="text-slate-400 font-mono text-[11px] bg-white/5 px-2 py-0.5 rounded-md">
                      {item.proficiency}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Practical Foundations Card */}
            <div className="p-6 rounded-2xl bg-[#0b1222] border border-white/10 shadow-xl">
              <h3 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-blue-400" />
                <span>Academic & Practical Pillars</span>
              </h3>

              <ul className="space-y-3 text-xs text-slate-300">
                <li className="flex items-start gap-2.5">
                  <Cpu className="w-3.5 h-3.5 text-blue-400 mt-0.5 shrink-0" />
                  <span>
                    <strong className="text-white">Computer Science Foundations:</strong> Procedural and OOP logic in C and Java, data structures, and computer organization at MMUST.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Wrench className="w-3.5 h-3.5 text-blue-400 mt-0.5 shrink-0" />
                  <span>
                    <strong className="text-white">Networking & Systems:</strong> Cisco networking curriculum, Ethernet frame encapsulation, Layer 2 switches, MAC tables, and Linux terminal utilities.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <BookOpen className="w-3.5 h-3.5 text-blue-400 mt-0.5 shrink-0" />
                  <span>
                    <strong className="text-white">Continuous Self-Directed Learning:</strong> Relational schema design with PostgreSQL, modern web development, and cloud computing principles.
                  </span>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
