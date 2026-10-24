import React, { useState } from 'react';
import { Article, TECHNICAL_ARTICLES } from '../data/portfolioData';
import { BookOpen, Clock, Calendar, ArrowRight, X } from 'lucide-react';

export const TechnicalBlog: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  return (
    <section id="articles" className="py-24 bg-[#060911] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-400 text-xs font-mono uppercase tracking-wider mb-3">
            <span>Knowledge Base & Notes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical Articles & Study Notes
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Documenting lessons learned from university labs, networking curriculum, and hands-on coding experiments. Formatted for easy expansion as new articles are written.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {TECHNICAL_ARTICLES.map((article) => (
            <div
              key={article.id}
              className="flex flex-col justify-between p-7 rounded-3xl bg-[#090f1e] border border-white/10 hover:border-blue-500/40 transition-all duration-300 shadow-xl hover:-translate-y-1 text-left group"
            >
              <div>
                {/* Category & Read Time */}
                <div className="flex items-center justify-between gap-2 mb-4 text-xs font-mono">
                  <span className="text-blue-400 font-medium">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1 text-slate-400">
                    <Clock className="w-3 h-3" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                {/* Article Title */}
                <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors tracking-tight mb-3">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-xs sm:text-sm text-slate-300 line-clamp-3 leading-relaxed mb-6">
                  {article.excerpt}
                </p>
              </div>

              {/* Footer */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {article.date}
                </span>

                <button
                  onClick={() => setSelectedArticle(article)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-blue-400 hover:text-blue-300 group-hover:translate-x-1 transition-all cursor-pointer"
                  aria-label={`Read article: ${article.title}`}
                >
                  <span>Read Note</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Article Reader Modal */}
        {selectedArticle && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
            onClick={() => setSelectedArticle(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="article-reader-title"
          >
            <div
              className="relative w-full max-w-2xl bg-[#090f1e] border border-blue-500/30 rounded-3xl shadow-2xl overflow-hidden my-8 text-left text-slate-200 p-6 sm:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 text-xs font-mono rounded-full bg-blue-950/80 border border-blue-500/40 text-blue-400">
                  {selectedArticle.category}
                </span>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                  aria-label="Close article view"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <h3 id="article-reader-title" className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2">
                {selectedArticle.title}
              </h3>

              <div className="flex items-center gap-3 text-xs text-slate-400 font-mono mb-6 pb-4 border-b border-white/10">
                <span>By Wycliffe Odhiambo Odero</span>
                <span>·</span>
                <span>{selectedArticle.readTime}</span>
                <span>·</span>
                <span>{selectedArticle.date}</span>
              </div>

              <div className="space-y-4 text-sm text-slate-300 leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
                {selectedArticle.content.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex justify-end">
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-xl text-xs transition-colors cursor-pointer"
                >
                  Close Note
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
