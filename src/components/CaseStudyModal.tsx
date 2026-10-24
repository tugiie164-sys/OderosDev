import React, { useEffect } from 'react';
import { Project } from '../data/portfolioData';
import { X, Layers, Shield, AlertTriangle, ArrowRight, Database, Terminal, CheckCircle } from 'lucide-react';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const { caseStudy } = project;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
    >
      <div
        className="relative w-full max-w-4xl bg-[#090f1e] border border-blue-500/30 rounded-3xl shadow-2xl overflow-hidden my-8 text-left text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#070c18]/95 backdrop-blur-md border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 text-[11px] font-mono rounded-full bg-blue-950/80 border border-blue-500/40 text-blue-400">
              {project.status}
            </span>
            <span className="text-xs text-slate-400 hidden sm:inline">
              {project.categoryLabel}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[82vh] overflow-y-auto">
          
          {/* Header */}
          <div>
            <h3 id="case-study-title" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {project.title}
            </h3>
            <p className="text-sm sm:text-base text-blue-400 font-medium mt-1">
              {project.tagline}
            </p>
            <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
              {project.shortDescription}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-xs font-mono rounded-md bg-white/5 border border-white/10 text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Problem Statement & Intended Users */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5 rounded-2xl bg-[#0d1527] border border-white/10">
            <div>
              <h4 className="text-xs font-mono uppercase text-blue-400 tracking-wider mb-2 flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5" />
                Problem Statement
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {caseStudy.problem}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase text-blue-400 tracking-wider mb-2 flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5" />
                Intended Users
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {caseStudy.intendedUsers}
              </p>
            </div>
          </div>

          {/* System Requirements */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
              <Terminal className="w-4 h-4 text-blue-400" />
              Functional & Technical Requirements
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {caseStudy.requirements.map((req, i) => (
                <li
                  key={i}
                  className="text-xs text-slate-300 flex items-start gap-2 p-2.5 rounded-xl bg-white/[0.02] border border-white/5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-blue-400 mt-0.5 shrink-0" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Architecture & Tech Stack */}
          <div className="p-5 rounded-2xl bg-[#0d1527] border border-white/10 space-y-4">
            <div>
              <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                <Layers className="w-4 h-4 text-blue-400" />
                System Architecture
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {caseStudy.architecture}
              </p>
            </div>

            {/* Tech Stack Chips */}
            <div>
              <span className="text-xs text-slate-400 block mb-2 font-mono">
                Technology Specifications:
              </span>
              <div className="flex flex-wrap gap-2">
                {caseStudy.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-medium rounded-lg bg-blue-950/60 border border-blue-500/30 text-blue-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Optional Database Design */}
            {caseStudy.databaseDesign && (
              <div className="pt-3 border-t border-white/10">
                <h5 className="text-xs font-semibold text-white mb-1.5 flex items-center gap-1.5">
                  <Database className="w-3.5 h-3.5 text-blue-400" />
                  Database Model & Schema Design
                </h5>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {caseStudy.databaseDesign}
                </p>
              </div>
            )}
          </div>

          {/* Implementation & Testing */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-2 font-mono text-slate-300">
                Implementation Details
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {caseStudy.implementationNotes}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-2 font-mono text-slate-300">
                Testing Approach
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {caseStudy.testingApproach}
              </p>
            </div>
          </div>

          {/* Security, Limitations & Roadmap */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Security */}
            <div className="p-4 rounded-2xl bg-[#0b1120] border border-white/10">
              <h4 className="text-xs font-semibold text-white mb-2 flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-emerald-400" />
                Security Considerations
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-400">
                {caseStudy.securityConsiderations.map((sec, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-emerald-400">•</span>
                    <span>{sec}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Limitations */}
            <div className="p-4 rounded-2xl bg-[#0b1120] border border-white/10">
              <h4 className="text-xs font-semibold text-white mb-2 flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                Current Limitations
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-400">
                {caseStudy.limitations.map((lim, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-amber-400">•</span>
                    <span>{lim}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Roadmap */}
            <div className="p-4 rounded-2xl bg-[#0b1120] border border-white/10">
              <h4 className="text-xs font-semibold text-white mb-2 flex items-center gap-1.5">
                <ArrowRight className="w-3.5 h-3.5 text-blue-400" />
                Future Roadmap
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-400">
                {caseStudy.futureRoadmap.map((road, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-blue-400">•</span>
                    <span>{road}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#070c18] border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
          <span>Odero'sTechDev Technical Documentation</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-xl transition-colors cursor-pointer"
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
};
