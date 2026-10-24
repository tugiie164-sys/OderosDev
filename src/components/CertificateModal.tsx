import React, { useState, useEffect } from 'react';
import { CertificationItem } from '../data/portfolioData';
import { validateCertificateUrl } from '../utils/portfolioLogic';
import { X, Award, ExternalLink, ShieldCheck, CheckCircle2, Edit3, Save, Link as LinkIcon, FileText } from 'lucide-react';

interface CertificateModalProps {
  certificate: CertificationItem | null;
  onClose: () => void;
  onUpdateCertificate: (updatedCert: CertificationItem) => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  certificate,
  onClose,
  onUpdateCertificate,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState('');
  const [editUrl, setEditUrl] = useState('');
  const [editDate, setEditDate] = useState('');
  const [editId, setEditId] = useState('');
  const [urlError, setUrlError] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (certificate) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setEditTitle(certificate.title);
      setEditUrl(certificate.certificateUrl || '');
      setEditDate(certificate.completionDate || '');
      setEditId(certificate.credentialId || '');
      setIsEditing(false);
      setUrlError('');
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [certificate, onClose]);

  if (!certificate) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (editUrl.trim() && !validateCertificateUrl(editUrl)) {
      setUrlError('Please enter a valid URL (http:// or https://) or relative document path.');
      return;
    }
    setUrlError('');

    const updated: CertificationItem = {
      ...certificate,
      title: editTitle.trim() || certificate.title,
      certificateUrl: editUrl.trim() || undefined,
      completionDate: editDate.trim() || undefined,
      credentialId: editId.trim() || undefined,
    };

    onUpdateCertificate(updated);
    setIsEditing(false);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="cert-modal-title"
    >
      <div
        className="relative w-full max-w-xl bg-[#090f1e] border border-blue-500/30 rounded-3xl shadow-2xl overflow-hidden my-8 text-left text-slate-200 p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-blue-950/80 border border-blue-500/40 text-blue-400">
              <Award className="w-4 h-4" />
            </span>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                {certificate.provider}
              </span>
              <h3 id="cert-modal-title" className="text-base sm:text-lg font-bold text-white tracking-tight">
                {certificate.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {!isEditing && (
              <button
                onClick={() => setIsEditing(true)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors flex items-center gap-1 text-xs"
                title="Edit or link certificate document"
                aria-label="Edit Certificate Details"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span className="text-[11px] hidden sm:inline">Configure</span>
              </button>
            )}
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close Certificate Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {isEditing ? (
          /* Editable Form for updating title or linking certificate */
          <form onSubmit={handleSave} className="space-y-4">
            <div>
              <label className="block text-xs font-mono text-slate-300 mb-1">
                Official Credential Title
              </label>
              <input
                type="text"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-[#0b1222] border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-300 mb-1">
                Certificate URL or Document Link
              </label>
              <input
                type="text"
                value={editUrl}
                onChange={(e) => {
                  setEditUrl(e.target.value);
                  setUrlError('');
                }}
                placeholder="https://... or /assets/certificates/..."
                className="w-full px-3 py-2 rounded-xl bg-[#0b1222] border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
              />
              {urlError && (
                <p className="text-[11px] text-red-400 mt-1">{urlError}</p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">
                  Completion Date (Optional)
                </label>
                <input
                  type="text"
                  value={editDate}
                  onChange={(e) => setEditDate(e.target.value)}
                  placeholder="e.g. 2024"
                  className="w-full px-3 py-2 rounded-xl bg-[#0b1222] border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">
                  Credential ID (Optional)
                </label>
                <input
                  type="text"
                  value={editId}
                  onChange={(e) => setEditId(e.target.value)}
                  placeholder="e.g. CS-12345"
                  className="w-full px-3 py-2 rounded-xl bg-[#0b1222] border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-3 border-t border-white/10">
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs text-slate-300 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium flex items-center gap-1.5 transition-colors"
              >
                <Save className="w-3.5 h-3.5" />
                <span>Save Credential Details</span>
              </button>
            </div>
          </form>
        ) : (
          /* View Mode */
          <div className="space-y-5">
            {/* Status & Issuer */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-blue-950/70 text-blue-300 border border-blue-500/30">
                {certificate.status}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-white/5 text-slate-300 border border-white/10">
                {certificate.categoryLabel}
              </span>
            </div>

            {/* Description */}
            <div>
              <h4 className="text-xs font-mono uppercase text-blue-400 tracking-wider mb-1.5">
                Credential Curriculum & Overview
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {certificate.description}
              </p>
            </div>

            {/* Skills Acquired */}
            <div>
              <h4 className="text-xs font-mono uppercase text-blue-400 tracking-wider mb-2">
                Demonstrated Competencies
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {certificate.skillsAcquired.map((skill) => (
                  <span
                    key={skill}
                    className="flex items-center gap-1 px-2.5 py-1 text-xs font-mono rounded-lg bg-white/[0.03] border border-white/10 text-slate-200"
                  >
                    <CheckCircle2 className="w-3 h-3 text-blue-400 shrink-0" />
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Metadata (if available) */}
            {(certificate.completionDate || certificate.credentialId) && (
              <div className="grid grid-cols-2 gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5 text-xs font-mono">
                {certificate.completionDate && (
                  <div>
                    <span className="text-slate-400 block text-[10px]">Completion Date:</span>
                    <span className="text-white">{certificate.completionDate}</span>
                  </div>
                )}
                {certificate.credentialId && (
                  <div>
                    <span className="text-slate-400 block text-[10px]">Credential ID:</span>
                    <span className="text-white">{certificate.credentialId}</span>
                  </div>
                )}
              </div>
            )}

            {/* Certificate Document Action */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
              {certificate.certificateUrl ? (
                <a
                  href={certificate.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-md shadow-blue-600/30 transition-all"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>View Verified Certificate</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>
              ) : (
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-slate-500 shrink-0" />
                  <span>Certificate verification file can be linked via Configure.</span>
                </div>
              )}

              <button
                onClick={() => setIsEditing(true)}
                className="w-full sm:w-auto px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-medium flex items-center justify-center gap-1.5 transition-colors"
              >
                <LinkIcon className="w-3 h-3 text-blue-400" />
                <span>{certificate.certificateUrl ? 'Update Link' : '+ Add Certificate Link'}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
