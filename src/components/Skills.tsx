import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Check, BookOpen, Clock, Wrench } from 'lucide-react';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<number | 'all'>('all');

  const getLevelBadge = (level: string) => {
    switch (level) {
      case 'Project Experience':
        return {
          bg: 'bg-blue-950/80 text-blue-300 border-blue-500/40',
          icon: <Wrench className="w-3 h-3 text-blue-400" />
        };
      case 'Academic Knowledge':
        return {
          bg: 'bg-indigo-950/80 text-indigo-300 border-indigo-500/40',
          icon: <BookOpen className="w-3 h-3 text-indigo-400" />
        };
      case 'Currently Learning':
        return {
          bg: 'bg-amber-950/80 text-amber-300 border-amber-500/40',
          icon: <Clock className="w-3 h-3 text-amber-400" />
        };
      case 'Basic Knowledge':
      default:
        return {
          bg: 'bg-slate-900 text-slate-300 border-slate-700',
          icon: <Check className="w-3 h-3 text-slate-400" />
        };
    }
  };

  const categoriesToDisplay =
    selectedCategory === 'all'
      ? SKILL_CATEGORIES
      : [SKILL_CATEGORIES[selectedCategory as number]];

  return (
    <section id="skills" className="py-24 bg-[#080d19] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-400 text-xs font-mono uppercase tracking-wider mb-3">
            <span>Verified Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical Competence & Skills Matrix
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Organized honestly by practical experience, coursework, and ongoing study. Grounded in actual academic study at MMUST, Cisco networking curriculum, and hands-on hardware/software practice.
          </p>

          {/* Level Legend */}
          <div className="flex flex-wrap items-center gap-3 mt-6 pt-4 border-t border-white/10 text-xs text-slate-400">
            <span className="font-mono text-slate-500 text-[11px]">Level Key:</span>
            <span className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-blue-950/60 border border-blue-500/40 text-blue-300 text-[11px]">
              <Wrench className="w-3 h-3" /> Project Experience
            </span>
            <span className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-indigo-950/60 border border-indigo-500/40 text-indigo-300 text-[11px]">
              <BookOpen className="w-3 h-3" /> Academic Knowledge
            </span>
            <span className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-amber-950/60 border border-amber-500/40 text-amber-300 text-[11px]">
              <Clock className="w-3 h-3" /> Currently Learning
            </span>
            <span className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-700 text-slate-300 text-[11px]">
              <Check className="w-3 h-3" /> Basic Knowledge
            </span>
          </div>
        </div>

        {/* Category Pill Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-blue-600 text-white font-semibold shadow-sm shadow-blue-600/30'
                : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/5'
            }`}
          >
            All Categories ({SKILL_CATEGORIES.length})
          </button>
          {SKILL_CATEGORIES.map((cat, idx) => (
            <button
              key={cat.title}
              onClick={() => setSelectedCategory(idx)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                selectedCategory === idx
                  ? 'bg-blue-600 text-white font-semibold shadow-sm shadow-blue-600/30'
                  : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
          {categoriesToDisplay.map((category) => (
            <div
              key={category.title}
              className="p-6 rounded-3xl bg-[#0b1222] border border-white/10 hover:border-blue-500/30 transition-all shadow-xl flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight mb-1">
                  {category.title}
                </h3>
                <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                  {category.description}
                </p>

                {/* Skills list */}
                <div className="space-y-3">
                  {category.skills.map((skill) => {
                    const badge = getLevelBadge(skill.level);
                    return (
                      <div
                        key={skill.name}
                        className="p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors"
                      >
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="text-xs font-semibold text-slate-200">
                            {skill.name}
                          </span>
                          <span
                            className={`flex items-center gap-1 px-2 py-0.5 text-[10px] font-mono rounded-md border ${badge.bg}`}
                          >
                            {badge.icon}
                            <span>{skill.level}</span>
                          </span>
                        </div>
                        {skill.note && (
                          <p className="text-[11px] text-slate-400 leading-tight">
                            {skill.note}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Category Status */}
              <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>{category.skills.length} competencies listed</span>
                <span className="text-blue-400/80">Active Study</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
