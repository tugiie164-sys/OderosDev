import React, { useEffect, useState } from 'react';
import { OWNER_PROFILE, EDUCATION_DATA, SKILL_CATEGORIES } from '../data/portfolioData';
import { generatePlainTextCV } from '../utils/portfolioLogic';
import { X, Printer, Copy, Check, Download, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopy = () => {
    const text = generatePlainTextCV();
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-modal-title"
    >
      <div
        className="relative w-full max-w-4xl bg-[#080d19] border border-blue-500/40 rounded-3xl shadow-2xl overflow-hidden my-6 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar (Hidden on print) */}
        <div className="no-print sticky top-0 z-20 flex flex-wrap items-center justify-between px-6 py-4 bg-[#060911]/95 backdrop-blur-md border-b border-white/10 gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
            <h3 id="cv-modal-title" className="text-sm font-bold text-white tracking-tight">
              Verified Curriculum Vitae · Wycliffe Odhiambo Odero
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Copy plain text CV to clipboard"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied Text' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow-md shadow-blue-600/30 transition-all cursor-pointer"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close CV preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable CV Document Content */}
        <div className="cv-document p-6 sm:p-12 max-h-[80vh] overflow-y-auto bg-[#0a0f1e] text-slate-200">
          
          {/* Header */}
          <div className="border-b border-white/10 pb-6 mb-6">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {OWNER_PROFILE.name.toUpperCase()}
                </h1>
                <p className="text-sm font-semibold text-blue-400 mt-1">
                  Information Technology Undergraduate · {OWNER_PROFILE.brandName}
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  Masinde Muliro University of Science and Technology (MMUST)
                </p>
              </div>

              <div className="space-y-1 text-xs text-slate-300 font-mono">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>{OWNER_PROFILE.location}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>{OWNER_PROFILE.email}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>{OWNER_PROFILE.phoneFormatted}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Career Objective */}
          <section className="mb-6">
            <h2 className="text-xs font-mono uppercase tracking-wider text-blue-400 font-bold mb-2">
              Career Objective
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Motivated, disciplined Information Technology student at Masinde Muliro University of Science and Technology seeking industrial attachment, internship, or entry-level technical roles. Grounded in practical problem-solving across procedural and object-oriented programming (C, Java), modern web development, Cisco networking fundamentals, and computer hardware systems maintenance. Eager to contribute directly to engineering teams while learning from senior architects.
            </p>
          </section>

          {/* Education Section */}
          <section className="mb-6">
            <h2 className="text-xs font-mono uppercase tracking-wider text-blue-400 font-bold mb-3">
              Education & Coursework
            </h2>
            <div className="space-y-4">
              {EDUCATION_DATA.map((edu) => (
                <div key={edu.institution} className="text-xs">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between font-semibold text-white">
                    <span className="text-sm">{edu.credential}</span>
                    <span className="text-slate-400 font-mono text-[11px]">{edu.period}</span>
                  </div>
                  <div className="text-blue-300/80 mb-1">{edu.institution}</div>
                  <p className="text-slate-400 text-xs mb-1.5 leading-relaxed">{edu.details}</p>
                  <ul className="list-disc list-inside space-y-0.5 text-slate-300 text-[11px] pl-1">
                    {edu.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications & Technical Training Section */}
          <section className="mb-6">
            <h2 className="text-xs font-mono uppercase tracking-wider text-blue-400 font-bold mb-3">
              Certifications & Technical Credentials
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                <span className="font-semibold text-white block text-xs border-b border-white/5 pb-1">
                  Cisco Networking Academy (Completed Certifications)
                </span>
                <ul className="space-y-1.5 text-[11px] text-slate-300">
                  <li><strong className="text-blue-300">Networking Basics:</strong> Protocol stacks, Ethernet, MAC addressing, network devices</li>
                  <li><strong className="text-blue-300">Cybersecurity:</strong> Threat actors, defense-in-depth, security hygiene & privacy</li>
                  <li><strong className="text-blue-300">Hardware & Upgrade Support:</strong> PC component upgrades, diagnostics, ESD safety</li>
                </ul>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                <span className="font-semibold text-white block text-xs border-b border-white/5 pb-1">
                  SoloLearn Academy (AI & Digital Literacy)
                </span>
                <ul className="space-y-1 text-[11px] text-slate-300">
                  <li><strong className="text-blue-300">Prompt Engineering:</strong> Contextual prompt design & schema enforcement</li>
                  <li><strong className="text-blue-300">Large Language Models (LLMs):</strong> Transformer architecture & inference</li>
                  <li><strong className="text-blue-300">Ethical AI Foundations:</strong> Human oversight & responsible deployment</li>
                  <li><strong className="text-blue-300">Bias Mitigation & Detection:</strong> Algorithmic bias & dataset fairness</li>
                  <li><strong className="text-blue-300">Data Literacy with AI:</strong> Evaluating dataset quality & statistical outputs</li>
                  <li><strong className="text-blue-300">Write with AI:</strong> Technical drafting with human editorial oversight</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Technical Skills Matrix */}
          <section className="mb-6">
            <h2 className="text-xs font-mono uppercase tracking-wider text-blue-400 font-bold mb-3">
              Technical Competence Matrix
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.title} className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="font-semibold text-white block mb-1">{cat.title}:</span>
                  <p className="text-slate-300 text-[11px] leading-relaxed">
                    {cat.skills.map((s) => s.name).join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Languages */}
          <section className="mb-6">
            <h2 className="text-xs font-mono uppercase tracking-wider text-blue-400 font-bold mb-2">
              Languages
            </h2>
            <div className="flex flex-wrap gap-4 text-xs text-slate-300">
              {OWNER_PROFILE.languages.map((l) => (
                <span key={l.language}>
                  <strong className="text-white">{l.language}:</strong> {l.proficiency}
                </span>
              ))}
            </div>
          </section>

          {/* Representative Projects */}
          <section className="mb-6">
            <h2 className="text-xs font-mono uppercase tracking-wider text-blue-400 font-bold mb-3">
              Key Projects & System Specifications
            </h2>
            <div className="space-y-3 text-xs">
              <div>
                <span className="font-semibold text-white">EduBridge Kenya</span>
                <span className="text-slate-500 font-mono text-[11px]"> · In Development</span>
                <p className="text-slate-400 text-[11px]">
                  Consolidated student services platform concept uniting KUCCPS, HELB/HEF, university portals, SHA, and accommodation.
                </p>
              </div>

              <div>
                <span className="font-semibold text-white">Rental House Management System (RHMS)</span>
                <span className="text-slate-500 font-mono text-[11px]"> · Academic Prototype</span>
                <p className="text-slate-400 text-[11px]">
                  Collaborative prototype for unit record keeping, lease tracking, payment logging, and automated reminders.
                </p>
              </div>

              <div>
                <span className="font-semibold text-white">IT Support & Systems Administration</span>
                <span className="text-slate-500 font-mono text-[11px]"> · Practical Showcase</span>
                <p className="text-slate-400 text-[11px]">
                  Practical workstation diagnostics, internal hardware cleaning, thermal care, and operating system recovery.
                </p>
              </div>
            </div>
          </section>

          {/* Disclaimer Footer */}
          <div className="pt-4 border-t border-white/10 text-[10px] text-slate-500 font-mono">
            * This Curriculum Vitae contains verified academic credentials and project specifications for Wycliffe Odhiambo Odero (Odero'sTechDev). Certified references and transcripts provided upon official employer request.
          </div>

        </div>

      </div>
    </div>
  );
};
