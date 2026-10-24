import React from 'react';
import { OWNER_PROFILE } from '../data/portfolioData';
import { ArrowDown, Mail, Phone, FileText, Camera, ShieldCheck, MapPin, GraduationCap } from 'lucide-react';

interface HeroProps {
  onOpenCv: () => void;
  onOpenPhotoManager: () => void;
  profilePhoto: string | null;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCv, onOpenPhotoManager, profilePhoto }) => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#060911]"
    >
      {/* Background ambient lighting - Electric Blue Aura from Image 1 */}
      <div
        className="absolute top-1/4 right-0 w-[550px] h-[550px] rounded-full electric-aura pointer-events-none opacity-90 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-10 w-[300px] h-[300px] rounded-full bg-blue-900/15 pointer-events-none blur-3xl"
        aria-hidden="true"
      />

      {/* Subtle background tech grid */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bold Typography & Content */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Top Identity Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/40 border border-blue-500/30 text-blue-400 text-xs font-mono tracking-wide mb-6 w-fit backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span>Odero'sTechDev · Student Portfolio</span>
            </div>

            {/* Large Hero Title - Inspired by Image 1 "PORT / FOLIO" */}
            <div className="select-none leading-none tracking-tighter mb-4 font-black">
              <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white font-extrabold uppercase tracking-tight">
                PORT
              </span>
              <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-blue-500 font-extrabold uppercase tracking-tight -mt-2 sm:-mt-4 drop-shadow-[0_0_35px_rgba(0,112,243,0.35)]">
                FOLIO
              </span>
            </div>

            {/* Verified Headline */}
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-100 tracking-tight mt-2 mb-3">
              {OWNER_PROFILE.headline}
            </h1>

            {/* Authentic, Grounded Subtitle */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mb-6">
              {OWNER_PROFILE.subheadline}
            </p>

            {/* Quick Metadata: Location & University */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 font-mono mb-8">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                <span>{OWNER_PROFILE.location}</span>
              </div>
              <span>·</span>
              <div className="flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-blue-400" />
                <span>MMUST BSc. IT (Class of 2027)</span>
              </div>
            </div>

            {/* Main Action CTAs */}
            <div className="flex flex-wrap items-center gap-3.5">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:translate-y-[-1px] transition-all flex items-center gap-2 cursor-pointer"
                aria-label="Explore My Projects"
              >
                <span>Explore My Projects</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white border border-white/15 hover:border-white/25 font-semibold text-sm transition-all flex items-center gap-2 cursor-pointer"
                aria-label="Contact Me"
              >
                <Mail className="w-4 h-4 text-blue-400" />
                <span>Contact Me</span>
              </button>

              <button
                onClick={onOpenCv}
                className="px-5 py-3 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/60 font-medium text-sm transition-all flex items-center gap-2 cursor-pointer"
                aria-label="Download My CV"
              >
                <FileText className="w-4 h-4 text-slate-400" />
                <span>Download CV</span>
              </button>
            </div>

            {/* Quick Contact Direct Links */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-4 text-xs text-slate-400">
              <a
                href={`mailto:${OWNER_PROFILE.email}`}
                className="flex items-center gap-1.5 hover:text-blue-400 transition-colors"
                title="Send Email"
              >
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span>{OWNER_PROFILE.email}</span>
              </a>
              <span>·</span>
              <a
                href={`tel:${OWNER_PROFILE.phoneRaw}`}
                className="flex items-center gap-1.5 hover:text-blue-400 transition-colors"
                title="Call Phone"
              >
                <Phone className="w-3.5 h-3.5 text-blue-400" />
                <span>{OWNER_PROFILE.phoneFormatted}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Profile Portrait & Electric Blue Halo from Image 1 & Image 2 */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            
            {/* The Radiant Electric Aura matching Image 1 */}
            <div className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-[4/5] flex items-center justify-center">
              
              {/* Backlight Glow Disc */}
              <div
                className="absolute inset-0 bg-gradient-to-tr from-blue-600/40 via-blue-500/30 to-transparent rounded-[32px] blur-2xl transform scale-95 pointer-events-none"
                aria-hidden="true"
              />

              {/* Portrait Container - Apple macOS / iOS refined squircle */}
              <div className="relative w-full h-full rounded-[28px] overflow-hidden bg-[#0a0f1d] border border-blue-500/30 shadow-2xl shadow-blue-950/60 flex flex-col items-center justify-center group">
                
                {profilePhoto ? (
                  <div className="relative w-full h-full">
                    <img
                      src={profilePhoto}
                      alt="Wycliffe Odhiambo Odero - Odero'sTechDev"
                      className="w-full h-full object-cover object-center filter grayscale contrast-110 brightness-95 group-hover:scale-102 transition-transform duration-500"
                    />
                    
                    {/* Electric blue overlay gradient on lower half of image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#060911] via-transparent to-transparent opacity-80" />
                  </div>
                ) : (
                  /* Fallback Monogram WO */
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-[#0c1427] to-[#060911] p-8 text-center">
                    <div className="w-24 h-24 rounded-3xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-4xl font-extrabold text-blue-400 mb-4 shadow-lg shadow-blue-500/20">
                      {OWNER_PROFILE.initials}
                    </div>
                    <span className="text-lg font-semibold text-white">
                      {OWNER_PROFILE.name}
                    </span>
                    <span className="text-xs text-slate-400 mt-1">
                      {OWNER_PROFILE.brandName}
                    </span>
                  </div>
                )}

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 inset-x-4 p-3 rounded-2xl bg-[#080d1a]/85 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold text-white flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                      {OWNER_PROFILE.name}
                    </span>
                    <span className="text-[11px] text-slate-400">
                      Odero'sTechDev · MMUST
                    </span>
                  </div>

                  <button
                    onClick={onOpenPhotoManager}
                    className="p-1.5 text-xs text-slate-300 hover:text-white bg-white/10 hover:bg-blue-600 rounded-lg transition-colors flex items-center gap-1"
                    title="Change or reset profile photo"
                    aria-label="Change profile photo"
                  >
                    <Camera className="w-3.5 h-3.5" />
                    <span className="text-[10px] font-medium hidden sm:inline">Photo</span>
                  </button>
                </div>
              </div>

            </div>

            {/* Authentic Status Caption */}
            <p className="text-[11px] text-slate-400 text-center mt-3 font-mono">
              BSc. Information Technology Student · Kakamega, Kenya
            </p>

          </div>

        </div>
      </div>
    </section>
  );
};
