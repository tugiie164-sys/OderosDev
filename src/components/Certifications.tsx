import React, { useState } from 'react';
import { CertificationItem } from '../data/portfolioData';
import { filterCertifications } from '../utils/portfolioLogic';
import { Award, ShieldCheck, Terminal, Cpu, CheckCircle2, ExternalLink, ChevronRight, BookOpen } from 'lucide-react';

interface CertificationsProps {
  certifications: CertificationItem[];
  onSelectCertificate: (cert: CertificationItem) => void;
}

export const Certifications: React.FC<CertificationsProps> = ({
  certifications,
  onSelectCertificate,
}) => {
  const [filter, setFilter] = useState<'all' | 'networking-it' | 'ai-data'>('all');

  const filteredCerts = filterCertifications(certifications, filter);

  const networkingGroup = filteredCerts.filter((c) => c.category === 'networking-it');
  const aiGroup = filteredCerts.filter((c) => c.category === 'ai-data');

  return (
    <section id="certifications" className="py-24 bg-[#080d19] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Credentials & Learning</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Certifications & Professional Development
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Completed technical certifications and specialized coursework through Cisco Networking Academy and SoloLearn Learning Academy, complementing university degree studies at MMUST.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 mt-6">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                filter === 'all'
                  ? 'bg-blue-600 text-white font-semibold shadow-sm shadow-blue-600/30'
                  : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              All Credentials ({certifications.length})
            </button>
            <button
              onClick={() => setFilter('networking-it')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                filter === 'networking-it'
                  ? 'bg-blue-600 text-white font-semibold shadow-sm shadow-blue-600/30'
                  : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              Networking & IT Support (3)
            </button>
            <button
              onClick={() => setFilter('ai-data')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                filter === 'ai-data'
                  ? 'bg-blue-600 text-white font-semibold shadow-sm shadow-blue-600/30'
                  : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              AI & Digital Literacy (6)
            </button>
          </div>
        </div>

        {/* Content Groups */}
        <div className="space-y-12">
          
          {/* Group 1: Cisco Networking, Cybersecurity & IT Support */}
          {networkingGroup.length > 0 && (
            <div className="text-left">
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-white/10">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-200 font-mono">
                  Networking, Cybersecurity & IT Support (Cisco Networking Academy)
                </h3>
              </div>

              <div className="divide-y divide-white/5 rounded-2xl bg-[#0b1222] border border-white/10 overflow-hidden shadow-xl">
                {networkingGroup.map((cert) => (
                  <div
                    key={cert.id}
                    onClick={() => onSelectCertificate(cert)}
                    className="p-5 sm:p-6 hover:bg-white/[0.02] transition-colors cursor-pointer group flex flex-col md:flex-row md:items-center justify-between gap-4"
                  >
                    <div className="space-y-1.5 max-w-3xl">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-950/80 text-blue-300 border border-blue-500/30">
                          {cert.provider}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-300 border border-emerald-500/30">
                          {cert.status}
                        </span>
                      </div>

                      <h4 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors">
                        {cert.title}
                      </h4>

                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                        {cert.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {cert.skillsAcquired.map((s) => (
                          <span
                            key={s}
                            className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-slate-300 border border-white/5"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="shrink-0 flex items-center gap-2 text-xs font-medium text-blue-400 group-hover:text-blue-300">
                      <span>View Details</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Group 2: SoloLearn Artificial Intelligence & Digital Literacy */}
          {aiGroup.length > 0 && (
            <div className="text-left">
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-white/10">
                <Cpu className="w-4 h-4 text-indigo-400" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-200 font-mono">
                  Artificial Intelligence & Digital Literacy (SoloLearn Academy)
                </h3>
              </div>

              <div className="divide-y divide-white/5 rounded-2xl bg-[#0b1222] border border-white/10 overflow-hidden shadow-xl">
                {aiGroup.map((cert) => (
                  <div
                    key={cert.id}
                    onClick={() => onSelectCertificate(cert)}
                    className="p-5 sm:p-6 hover:bg-white/[0.02] transition-colors cursor-pointer group flex flex-col md:flex-row md:items-center justify-between gap-4"
                  >
                    <div className="space-y-1.5 max-w-3xl">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-950/80 text-indigo-300 border border-indigo-500/30">
                          {cert.provider}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/10">
                          {cert.status}
                        </span>
                      </div>

                      <h4 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors">
                        {cert.title}
                      </h4>

                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                        {cert.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {cert.skillsAcquired.map((s) => (
                          <span
                            key={s}
                            className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-slate-300 border border-white/5"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="shrink-0 flex items-center gap-2 text-xs font-medium text-blue-400 group-hover:text-blue-300">
                      <span>View Details</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Evidence Notice */}
        <div className="mt-12 p-4 rounded-2xl bg-white/[0.02] border border-white/5 text-center text-xs text-slate-500">
          <p>
            * All credentials listed reflect verified completed coursework and official learning modules provided by Cisco Networking Academy and SoloLearn. Original certificate documents can be linked or viewed on demand.
          </p>
        </div>

      </div>
    </section>
  );
};
