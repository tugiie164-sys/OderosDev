import React, { useState } from 'react';
import { Project, PROJECTS_DATA } from '../data/portfolioData';
import { filterProjects } from '../utils/portfolioLogic';
import { Search, FolderGit2, BookOpen, Layers, Terminal } from 'lucide-react';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Projects & Showcases' },
    { id: 'web-software', label: 'Web & Systems' },
    { id: 'academic', label: 'Academic Prototypes' },
    { id: 'concept', label: 'Civic & Tech Concepts' },
    { id: 'practical-it', label: 'Practical IT & Hardware' },
  ];

  const filteredProjects = filterProjects(PROJECTS_DATA, activeCategory, searchQuery);

  const getStatusBadge = (status: Project['status']) => {
    switch (status) {
      case 'In Development':
        return 'bg-blue-950/80 text-blue-400 border-blue-500/40';
      case 'Academic Prototype':
        return 'bg-indigo-950/80 text-indigo-400 border-indigo-500/40';
      case 'Concept':
        return 'bg-slate-900 text-slate-300 border-slate-700';
      case 'Skills Showcase':
        return 'bg-emerald-950/80 text-emerald-400 border-emerald-500/40';
      default:
        return 'bg-slate-900 text-slate-400 border-slate-800';
    }
  };

  return (
    <section id="projects" className="py-24 bg-[#060911] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-400 text-xs font-mono uppercase tracking-wider mb-3">
              <span>Technical Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Projects & Engineering Prototypes
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
              Real problem statements, system architectures, and practical technical applications. Distinguishing concepts, prototypes, and practical showcases transparently.
            </p>
          </div>

          {/* Search Bar */}
          <div className="w-full md:w-72 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by tech or title..."
              className="w-full pl-10 pr-4 py-2.5 bg-[#0b1222] border border-white/10 rounded-2xl text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              aria-label="Search projects"
            />
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-white/5">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30 font-semibold'
                  : 'bg-white/[0.03] text-slate-400 hover:text-slate-200 hover:bg-white/[0.06] border border-white/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="p-12 text-center rounded-3xl bg-[#0b1222] border border-white/10 my-8">
            <p className="text-sm text-slate-400">
              No projects found matching "<span className="text-white">{searchQuery}</span>".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="mt-4 px-4 py-2 text-xs text-blue-400 hover:text-blue-300 font-medium"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative flex flex-col justify-between p-6 rounded-3xl bg-[#090f1e] hover:bg-[#0c1427] border border-white/10 hover:border-blue-500/40 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-blue-950/40 hover:-translate-y-1 text-left"
              >
                <div>
                  {/* Top Status & Category */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono border ${getStatusBadge(
                        project.status
                      )}`}
                    >
                      {project.status}
                    </span>
                    <span className="text-[11px] font-mono text-slate-500">
                      {project.categoryLabel}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-blue-400/90 font-medium mt-1">
                    {project.tagline}
                  </p>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-slate-400 mt-3 line-clamp-3 leading-relaxed">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Footer with Tags & Case Study Action */}
                <div className="mt-6 pt-4 border-t border-white/10 flex flex-col gap-3.5">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[10px] font-mono rounded bg-white/5 text-slate-400 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-1.5 py-0.5 text-[10px] font-mono rounded bg-white/5 text-slate-500">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <button
                      onClick={() => onSelectProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors group-hover:translate-x-1 duration-200 cursor-pointer"
                      aria-label={`View Case Study for ${project.title}`}
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>View Engineering Case Study</span>
                    </button>

                    <span className="text-[11px] text-slate-500 font-mono">
                      v1.0 Spec
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Note on Authenticity */}
        <div className="mt-12 p-4 rounded-2xl bg-white/[0.02] border border-white/5 text-center text-xs text-slate-500">
          <p>
            * Note: Projects labeled "Concept" or "In Development" reflect proposed architectures, interface specifications, and active learning explorations. No fictional deployments or statistics are claimed.
          </p>
        </div>

      </div>
    </section>
  );
};
