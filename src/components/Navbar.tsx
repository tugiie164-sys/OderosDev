import React, { useState, useEffect } from 'react';
import { OWNER_PROFILE } from '../data/portfolioData';
import { Menu, X, FileText, Camera, Mail, Phone } from 'lucide-react';

interface NavbarProps {
  onOpenCv: () => void;
  onOpenPhotoManager: () => void;
  currentPhoto: string | null;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCv, onOpenPhotoManager, currentPhoto }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'AI Ethics', href: '#ai-ethics' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#060911]/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center gap-2 group text-left"
            aria-label="Odero'sTechDev Home"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center font-bold text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform text-sm tracking-tight border border-blue-400/30">
              WO
            </div>
            <div className="flex flex-col">
              <span className="text-base font-extrabold tracking-tight text-white leading-tight">
                ODERO'S <span className="text-blue-500 font-black">TECHDEV</span>
              </span>
              <span className="text-[10px] text-slate-400 font-mono tracking-wider uppercase">
                MMUST · Kenya
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-full transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={onOpenPhotoManager}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800/60 hover:bg-slate-700/60 border border-slate-700/60 rounded-full transition-all"
              title="Manage Profile Photo"
              aria-label="Manage Profile Photo"
            >
              {currentPhoto ? (
                <img
                  src={currentPhoto}
                  alt="Avatar"
                  className="w-4 h-4 rounded-full object-cover"
                />
              ) : (
                <Camera className="w-3.5 h-3.5 text-blue-400" />
              )}
              <span>Photo</span>
            </button>

            <button
              onClick={onOpenCv}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 border border-blue-400/30 rounded-full shadow-sm shadow-blue-600/30 hover:shadow-blue-600/50 transition-all cursor-pointer"
              aria-label="View and Download CV"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>View CV</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenCv}
              className="flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-white bg-blue-600 rounded-lg sm:hidden"
              aria-label="View CV"
            >
              <FileText className="w-3 h-3" />
              <span>CV</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white hover:bg-white/5 rounded-xl border border-white/10 transition-colors"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-[#070b14]/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 shadow-2xl transition-all animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="flex items-center justify-between px-4 py-3 text-sm font-medium text-slate-200 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
              >
                <span>{link.name}</span>
                <span className="text-blue-500 text-xs font-mono">→</span>
              </a>
            ))}

            <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCv();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-md transition-colors"
              >
                <FileText className="w-4 h-4" />
                <span>View & Download Official CV</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPhotoManager();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800/80 border border-slate-700/60 rounded-xl transition-colors"
              >
                <Camera className="w-3.5 h-3.5 text-blue-400" />
                <span>Customize Profile Photo</span>
              </button>

              <div className="flex items-center justify-center gap-4 pt-2 text-xs text-slate-400">
                <a
                  href={`mailto:${OWNER_PROFILE.email}`}
                  className="flex items-center gap-1 hover:text-blue-400"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email</span>
                </a>
                <span>·</span>
                <a
                  href={`tel:${OWNER_PROFILE.phoneRaw}`}
                  className="flex items-center gap-1 hover:text-blue-400"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{OWNER_PROFILE.phoneFormatted}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
