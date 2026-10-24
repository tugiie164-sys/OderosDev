import React from 'react';
import { OWNER_PROFILE } from '../data/portfolioData';
import { ArrowUp, Mail, Phone, MapPin, Heart } from 'lucide-react';

interface FooterProps {
  onOpenCv: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCv }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05070e] border-t border-white/10 text-slate-400 text-xs py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5 text-left">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white text-xs">
                WO
              </div>
              <span className="text-sm font-extrabold text-white tracking-tight">
                ODERO'S <span className="text-blue-500">TECHDEV</span>
              </span>
            </div>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Professional technology portfolio for Wycliffe Odhiambo Odero, an Information Technology student at Masinde Muliro University of Science and Technology (MMUST), Kenya.
            </p>

            <div className="text-[11px] text-slate-500 font-mono space-y-0.5 pt-1">
              <div>Kakamega, Western Kenya</div>
              <div>Class of 2027 · BSc. Information Technology</div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-4 space-y-2">
            <span className="text-xs font-mono uppercase text-white font-semibold block mb-3">
              Navigation
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
              <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
              <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
              <a href="#skills" className="hover:text-blue-400 transition-colors">Skills Matrix</a>
              <a href="#services" className="hover:text-blue-400 transition-colors">IT Services</a>
              <a href="#education" className="hover:text-blue-400 transition-colors">Education</a>
              <a href="#articles" className="hover:text-blue-400 transition-colors">Articles</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
            </div>
          </div>

          {/* Direct Communication */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase text-white font-semibold block mb-2">
              Direct Contact
            </span>
            <div className="space-y-1.5 text-xs">
              <a
                href={`mailto:${OWNER_PROFILE.email}`}
                className="flex items-center gap-1.5 text-slate-300 hover:text-blue-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span className="truncate">{OWNER_PROFILE.email}</span>
              </a>
              <a
                href={`tel:${OWNER_PROFILE.phoneRaw}`}
                className="flex items-center gap-1.5 text-slate-300 hover:text-blue-400 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>{OWNER_PROFILE.phoneFormatted}</span>
              </a>
              <button
                onClick={onOpenCv}
                className="mt-2 text-xs text-blue-400 hover:text-blue-300 font-medium block underline-offset-4 hover:underline text-left"
              >
                View Verified Curriculum Vitae →
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px] font-mono">
          <div>
            © {new Date().getFullYear()} Odero'sTechDev · Wycliffe Odhiambo Odero. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
