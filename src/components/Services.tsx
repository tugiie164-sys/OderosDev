import React from 'react';
import { SERVICES_DATA, OWNER_PROFILE } from '../data/portfolioData';
import { generateMailtoUrl } from '../utils/portfolioLogic';
import { CheckCircle2, Mail, ArrowUpRight } from 'lucide-react';

export const Services: React.FC = () => {
  const handleInquire = (serviceTitle: string, inquirySubject: string) => {
    const subject = `Service Inquiry: ${inquirySubject} - Odero'sTechDev`;
    const body = `Hello Wycliffe,\n\nI am contacting you regarding your service: "${serviceTitle}".\n\nProject / Support Details:\n[Please provide a brief description of what you need assistance with]\n\nLocation / Timeline:\n[e.g., Kakamega, MMUST, or Remote]\n\nBest regards,\n[Your Name]\n[Your Contact Information]`;
    window.location.href = generateMailtoUrl(OWNER_PROFILE.email, subject, body);
  };

  return (
    <section id="services" className="py-24 bg-[#060911] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-400 text-xs font-mono uppercase tracking-wider mb-3">
            <span>Direct Technical Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Practical IT & Technical Support Services
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Entry-level technical services grounded strictly in demonstrated practical ability. Available for students, small offices, and private clients in Kakamega and beyond.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="flex flex-col justify-between p-7 rounded-3xl bg-[#090f1e] border border-white/10 hover:border-blue-500/40 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-blue-950/30 hover:-translate-y-1 text-left"
            >
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Deliverables */}
                <div className="mb-6">
                  <span className="text-[11px] font-mono uppercase text-blue-400 tracking-wider block mb-3">
                    Deliverables & Scope:
                  </span>
                  <ul className="space-y-2">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Ideal For */}
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 mb-6 text-xs">
                  <span className="text-slate-400 block font-mono text-[10px] uppercase">
                    Ideal Client:
                  </span>
                  <span className="text-slate-200 mt-0.5 block">
                    {service.idealFor}
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-white/10">
                <button
                  onClick={() => handleInquire(service.title, service.inquirySubject)}
                  className="w-full py-2.5 px-4 rounded-xl bg-white/5 hover:bg-blue-600 text-white font-medium text-xs flex items-center justify-center gap-2 transition-all group cursor-pointer border border-white/10 hover:border-blue-500"
                  aria-label={`Discuss ${service.title}`}
                >
                  <Mail className="w-3.5 h-3.5 text-blue-400 group-hover:text-white" />
                  <span>Discuss This Project</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Professional Boundary Statement */}
        <div className="mt-12 p-5 rounded-2xl bg-[#0b1222] border border-white/10 max-w-4xl mx-auto text-left">
          <h4 className="text-xs font-mono uppercase tracking-wider text-blue-400 mb-1">
            Professional Transparency Notice
          </h4>
          <p className="text-xs text-slate-400 leading-relaxed">
            All services are provided within verified technical competence. Odero'sTechDev does not advertise enterprise cloud migrations, advanced penetration testing, or proprietary firmware engineering without verified credentials. Integrity and transparent expectations are prioritized above all else.
          </p>
        </div>

      </div>
    </section>
  );
};
