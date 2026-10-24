import React, { useState, useRef } from 'react';
import { OWNER_PROFILE } from '../data/portfolioData';
import { validateImageUpload } from '../utils/portfolioLogic';
import { X, Upload, RotateCcw, User, Check, AlertCircle, Image as ImageIcon } from 'lucide-react';

interface ProfilePhotoModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentPhoto: string | null;
  onSavePhoto: (newPhotoUrl: string | null) => void;
}

export const ProfilePhotoModal: React.FC<ProfilePhotoModalProps> = ({
  isOpen,
  onClose,
  currentPhoto,
  onSavePhoto,
}) => {
  const [preview, setPreview] = useState<string | null>(currentPhoto);
  const [error, setError] = useState<string | null>(null);
  const [savedNotice, setSavedNotice] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setError(null);
    const validation = validateImageUpload(file);
    if (!validation.valid) {
      setError(validation.error || 'Invalid image file.');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleApply = () => {
    onSavePhoto(preview);
    setSavedNotice(true);
    setTimeout(() => {
      setSavedNotice(false);
      onClose();
    }, 800);
  };

  const handleResetToDefault = () => {
    setPreview(OWNER_PROFILE.defaultPhotoUrl);
    setError(null);
  };

  const handleUseMonogram = () => {
    setPreview(null);
    setError(null);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="photo-modal-title"
    >
      <div
        className="relative w-full max-w-md bg-[#090f1e] border border-blue-500/30 rounded-3xl p-6 sm:p-7 text-left shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <ImageIcon className="w-4 h-4 text-blue-400" />
            <h3 id="photo-modal-title" className="text-base font-bold text-white tracking-tight">
              Profile Photo Manager
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close photo manager"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-xs text-slate-400 mb-6 leading-relaxed">
          Upload and preview your professional portrait. You can upload a new photo, reset to Wycliffe's authentic photo, or switch to the monogram fallback.
        </p>

        {/* Preview Frame */}
        <div className="flex flex-col items-center justify-center mb-6">
          <div className="relative w-36 h-36 rounded-2xl overflow-hidden bg-[#0c1427] border-2 border-blue-500/40 shadow-xl flex items-center justify-center">
            {preview ? (
              <img
                src={preview}
                alt="Profile Preview"
                className="w-full h-full object-cover filter grayscale contrast-105"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center bg-blue-950/40 text-blue-400 font-black text-3xl">
                {OWNER_PROFILE.initials}
              </div>
            )}
          </div>
          <span className="text-[11px] text-slate-400 mt-2 font-mono">
            {preview ? 'Active Portrait Preview' : 'Initials Monogram (WO) Active'}
          </span>
        </div>

        {/* Error message */}
        {error && (
          <div className="p-3 mb-4 rounded-xl bg-red-950/60 border border-red-500/40 text-red-300 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* Upload Trigger */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/jpeg,image/png,image/webp,image/avif"
          onChange={handleFileChange}
          className="hidden"
        />

        <div className="space-y-2 mb-6">
          <button
            onClick={() => fileInputRef.current?.click()}
            className="w-full py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-white flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <Upload className="w-3.5 h-3.5 text-blue-400" />
            <span>Upload New Photo (JPG, PNG &lt; 5MB)</span>
          </button>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={handleResetToDefault}
              className="py-2 px-3 rounded-xl bg-white/[0.02] hover:bg-white/5 border border-white/5 text-[11px] text-slate-300 flex items-center justify-center gap-1.5 transition-colors"
            >
              <RotateCcw className="w-3 h-3 text-slate-400" />
              <span>Original Portrait</span>
            </button>

            <button
              onClick={handleUseMonogram}
              className="py-2 px-3 rounded-xl bg-white/[0.02] hover:bg-white/5 border border-white/5 text-[11px] text-slate-300 flex items-center justify-center gap-1.5 transition-colors"
            >
              <User className="w-3 h-3 text-slate-400" />
              <span>Use 'WO' Monogram</span>
            </button>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between">
          <span className="text-[10px] text-slate-500 font-mono">
            {savedNotice ? 'Photo saved!' : 'Saves to local profile state'}
          </span>

          <div className="flex gap-2">
            <button
              onClick={onClose}
              className="px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs text-slate-300 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleApply}
              className="px-4 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Check className="w-3.5 h-3.5" />
              <span>Apply Changes</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
