import React, { useState } from 'react';
import { OWNER_PROFILE, SOCIAL_LINKS_DEFAULTS } from '../data/portfolioData';
import { validateContactForm, generateMailtoUrl, sanitizePhoneForTel } from '../utils/portfolioLogic';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, ExternalLink, Settings, Github, Linkedin, MessageSquare, AlertCircle } from 'lucide-react';

interface ContactProps {
  socialLinks: typeof SOCIAL_LINKS_DEFAULTS;
  onUpdateSocialLinks: (links: typeof SOCIAL_LINKS_DEFAULTS) => void;
}

export const Contact: React.FC<ContactProps> = ({ socialLinks, onUpdateSocialLinks }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [socialModalOpen, setSocialModalOpen] = useState(false);
  const [tempLinks, setTempLinks] = useState(socialLinks);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateContactForm(formData);

    if (!result.isValid) {
      setErrors(result.errors);
      return;
    }

    setErrors({});
    setSubmitted(true);

    // Construct structured mailto link
    const mailtoUrl = generateMailtoUrl(
      OWNER_PROFILE.email,
      `[Portfolio Inquiry] ${formData.subject}`,
      `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}\n\n---\nSent via Odero'sTechDev Contact Form`
    );

    // Open user's email client
    window.location.href = mailtoUrl;
  };

  const handleCopyMessage = () => {
    const text = `From: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`;
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
  };

  const handleSaveSocials = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateSocialLinks(tempLinks);
    setSocialModalOpen(false);
  };

  return (
    <section id="contact" className="py-24 bg-[#080d19] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-400 text-xs font-mono uppercase tracking-wider mb-3">
            <span>Direct Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Connect with Odero'sTechDev
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Available for student industrial attachments, internship inquiries, IT support projects, and technical collaborations in Kenya and remotely.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Verified Coordinates */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            {/* Contact Details Card */}
            <div className="p-7 rounded-3xl bg-[#0b1222] border border-white/10 shadow-xl space-y-6">
              <div>
                <span className="text-xs font-mono text-blue-400 uppercase tracking-wider block mb-1">
                  Professional Identity
                </span>
                <h3 className="text-xl font-bold text-white">
                  {OWNER_PROFILE.name}
                </h3>
                <p className="text-xs text-slate-400 font-mono mt-0.5">
                  Brand: {OWNER_PROFILE.brandName}
                </p>
              </div>

              <div className="space-y-4 pt-2 border-t border-white/5">
                {/* Location */}
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-blue-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block">Location</span>
                    <span className="text-sm font-semibold text-white">
                      {OWNER_PROFILE.location}
                    </span>
                    <span className="text-[11px] text-slate-400 block">
                      Masinde Muliro University of Science and Technology
                    </span>
                  </div>
                </div>

                {/* Email Action */}
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-blue-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[11px] font-mono text-slate-400 block">Direct Email</span>
                    <a
                      href={`mailto:${OWNER_PROFILE.email}?subject=Inquiry%20from%20Odero'sTechDev%20Portfolio`}
                      className="text-sm font-semibold text-blue-400 hover:text-blue-300 break-all transition-colors inline-flex items-center gap-1"
                    >
                      <span>{OWNER_PROFILE.email}</span>
                      <ExternalLink className="w-3 h-3 shrink-0" />
                    </a>
                  </div>
                </div>

                {/* Phone / WhatsApp */}
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-blue-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block">Direct Telephone</span>
                    <a
                      href={`tel:${sanitizePhoneForTel(OWNER_PROFILE.phoneRaw)}`}
                      className="text-sm font-semibold text-slate-200 hover:text-blue-400 transition-colors inline-flex items-center gap-1"
                    >
                      <span>{OWNER_PROFILE.phoneFormatted}</span>
                    </a>
                    <span className="text-[11px] text-slate-400 block">
                      Local mobile: 0794900546
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Profiles & Config */}
              <div className="pt-4 border-t border-white/5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    Verified Digital Profiles
                  </span>
                  <button
                    onClick={() => {
                      setTempLinks(socialLinks);
                      setSocialModalOpen(true);
                    }}
                    className="p-1 text-slate-400 hover:text-white rounded-md hover:bg-white/5 text-[11px] flex items-center gap-1 transition-colors"
                    title="Configure Social Links"
                    aria-label="Configure Social Links"
                  >
                    <Settings className="w-3 h-3" />
                    <span>Edit Links</span>
                  </button>
                </div>

                <div className="flex flex-wrap gap-2">
                  {socialLinks.whatsapp && (
                    <a
                      href={socialLinks.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-xl bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-medium flex items-center gap-1.5 hover:bg-emerald-900/60 transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>
                  )}

                  {socialLinks.github ? (
                    <a
                      href={socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-slate-200 text-xs font-medium flex items-center gap-1.5 hover:bg-white/10 transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                    </a>
                  ) : (
                    <button
                      onClick={() => setSocialModalOpen(true)}
                      className="px-3 py-1.5 rounded-xl bg-white/[0.02] border border-dashed border-white/15 text-slate-400 hover:text-slate-300 text-xs flex items-center gap-1.5 transition-colors"
                    >
                      <Github className="w-3.5 h-3.5 opacity-50" />
                      <span>+ Add GitHub</span>
                    </button>
                  )}

                  {socialLinks.linkedin ? (
                    <a
                      href={socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-xl bg-blue-950/60 border border-blue-500/30 text-blue-300 text-xs font-medium flex items-center gap-1.5 hover:bg-blue-900/60 transition-colors"
                    >
                      <Linkedin className="w-3.5 h-3.5" />
                      <span>LinkedIn</span>
                    </a>
                  ) : (
                    <button
                      onClick={() => setSocialModalOpen(true)}
                      className="px-3 py-1.5 rounded-xl bg-white/[0.02] border border-dashed border-white/15 text-slate-400 hover:text-slate-300 text-xs flex items-center gap-1.5 transition-colors"
                    >
                      <Linkedin className="w-3.5 h-3.5 opacity-50" />
                      <span>+ Add LinkedIn</span>
                    </button>
                  )}
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7 text-left">
            <div className="p-7 sm:p-8 rounded-3xl bg-[#090f1e] border border-white/10 shadow-2xl">
              <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6 leading-relaxed">
                Fill in the details below. This will validate your inquiry and launch your configured email client with a properly formatted message, ensuring direct delivery to Wycliffe's inbox.
              </p>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-blue-950/40 border border-blue-500/30 space-y-4">
                  <div className="flex items-center gap-2 text-blue-400 font-semibold text-sm">
                    <CheckCircle2 className="w-5 h-5" />
                    <span>Inquiry Prepared Successfully</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Your email client should open automatically to send this message to <strong className="text-white">{OWNER_PROFILE.email}</strong>.
                  </p>
                  <p className="text-xs text-slate-400">
                    If your email client did not open, you can copy the full message below and email it directly:
                  </p>

                  <div className="flex items-center gap-2 pt-2">
                    <button
                      onClick={handleCopyMessage}
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>{copied ? 'Copied to Clipboard!' : 'Copy Formatted Text'}</span>
                    </button>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-3 py-2 bg-white/5 hover:bg-white/10 text-slate-300 rounded-xl text-xs transition-colors"
                    >
                      Edit Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-medium text-slate-300 mb-1">
                        Your Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Dr. John Doe"
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-[#0b1222] border text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 transition-all ${
                          errors.name
                            ? 'border-red-500/80 focus:ring-red-500'
                            : 'border-white/10 focus:border-blue-500 focus:ring-blue-500'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-medium text-slate-300 mb-1">
                        Your Email Address <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. recruiter@organization.com"
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-[#0b1222] border text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 transition-all ${
                          errors.email
                            ? 'border-red-500/80 focus:ring-red-500'
                            : 'border-white/10 focus:border-blue-500 focus:ring-blue-500'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-medium text-slate-300 mb-1">
                      Subject <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. IT Internship Opportunity / Project Collaboration"
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-[#0b1222] border text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 transition-all ${
                        errors.subject
                          ? 'border-red-500/80 focus:ring-red-500'
                          : 'border-white/10 focus:border-blue-500 focus:ring-blue-500'
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.subject}</span>
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-medium text-slate-300 mb-1">
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please describe your project, timeline, or inquiry in detail..."
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-[#0b1222] border text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 transition-all resize-y ${
                        errors.message
                          ? 'border-red-500/80 focus:ring-red-500'
                          : 'border-white/10 focus:border-blue-500 focus:ring-blue-500'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Direct Message</span>
                    </button>
                    <p className="text-[11px] text-slate-500 text-center mt-2 font-mono">
                      Opens email composition window targeting oderowickliffe1@gmail.com
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>

      {/* Social Links Config Modal */}
      {socialModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in"
          role="dialog"
          aria-modal="true"
          aria-labelledby="social-modal-title"
        >
          <div className="w-full max-w-md bg-[#090f1e] border border-blue-500/30 rounded-3xl p-6 text-left shadow-2xl">
            <h4 id="social-modal-title" className="text-lg font-bold text-white mb-1">
              Configure External Profile Links
            </h4>
            <p className="text-xs text-slate-400 mb-4">
              Add your verified GitHub, LinkedIn, or social profiles. Empty fields will remain hidden to prevent dead links.
            </p>

            <form onSubmit={handleSaveSocials} className="space-y-3.5">
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">GitHub URL</label>
                <input
                  type="url"
                  value={tempLinks.github}
                  onChange={(e) => setTempLinks({ ...tempLinks, github: e.target.value })}
                  placeholder="https://github.com/yourusername"
                  className="w-full px-3 py-2 rounded-xl bg-[#0b1222] border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">LinkedIn URL</label>
                <input
                  type="url"
                  value={tempLinks.linkedin}
                  onChange={(e) => setTempLinks({ ...tempLinks, linkedin: e.target.value })}
                  placeholder="https://linkedin.com/in/yourprofile"
                  className="w-full px-3 py-2 rounded-xl bg-[#0b1222] border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">X (Twitter) URL</label>
                <input
                  type="url"
                  value={tempLinks.x}
                  onChange={(e) => setTempLinks({ ...tempLinks, x: e.target.value })}
                  placeholder="https://x.com/yourhandle"
                  className="w-full px-3 py-2 rounded-xl bg-[#0b1222] border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">WhatsApp Link</label>
                <input
                  type="url"
                  value={tempLinks.whatsapp}
                  onChange={(e) => setTempLinks({ ...tempLinks, whatsapp: e.target.value })}
                  placeholder="https://wa.me/254794900546"
                  className="w-full px-3 py-2 rounded-xl bg-[#0b1222] border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setSocialModalOpen(false)}
                  className="px-3.5 py-1.5 text-xs text-slate-300 hover:text-white rounded-xl bg-white/5"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 text-xs font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-xl"
                >
                  Save Links
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </section>
  );
};
