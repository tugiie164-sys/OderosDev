/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Project,
  CertificationItem,
  OWNER_PROFILE,
  SOCIAL_LINKS_DEFAULTS,
  CERTIFICATIONS_DATA
} from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Certifications } from './components/Certifications';
import { EthicalAISmartSection } from './components/EthicalAISmartSection';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Services } from './components/Services';
import { EducationTimeline } from './components/EducationTimeline';
import { TechnicalBlog } from './components/TechnicalBlog';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';
import { CertificateModal } from './components/CertificateModal';
import { CvModal } from './components/CvModal';
import { ProfilePhotoModal } from './components/ProfilePhotoModal';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [photoModalOpen, setPhotoModalOpen] = useState(false);
  
  // Profile photo state with localStorage persistence
  const [profilePhoto, setProfilePhoto] = useState<string | null>(() => {
    try {
      const saved = localStorage.getItem('oderos_techdev_profile_photo');
      return saved !== null ? saved : OWNER_PROFILE.defaultPhotoUrl;
    } catch {
      return OWNER_PROFILE.defaultPhotoUrl;
    }
  });

  // Social links state with localStorage persistence
  const [socialLinks, setSocialLinks] = useState(() => {
    try {
      const saved = localStorage.getItem('oderos_techdev_social_links');
      return saved ? JSON.parse(saved) : SOCIAL_LINKS_DEFAULTS;
    } catch {
      return SOCIAL_LINKS_DEFAULTS;
    }
  });

  // Certifications list with localStorage persistence for user updates/links
  const [certifications, setCertifications] = useState<CertificationItem[]>(() => {
    try {
      const saved = localStorage.getItem('oderos_techdev_certifications');
      return saved ? JSON.parse(saved) : CERTIFICATIONS_DATA;
    } catch {
      return CERTIFICATIONS_DATA;
    }
  });

  const handleSavePhoto = (newPhoto: string | null) => {
    setProfilePhoto(newPhoto);
    try {
      if (newPhoto === null) {
        localStorage.setItem('oderos_techdev_profile_photo', '');
      } else {
        localStorage.setItem('oderos_techdev_profile_photo', newPhoto);
      }
    } catch {
      // Ignore local storage quota limits if base64 is large
    }
  };

  const handleUpdateSocialLinks = (newLinks: typeof SOCIAL_LINKS_DEFAULTS) => {
    setSocialLinks(newLinks);
    try {
      localStorage.setItem('oderos_techdev_social_links', JSON.stringify(newLinks));
    } catch {
      // Ignore local storage error
    }
  };

  const handleUpdateCertificate = (updatedCert: CertificationItem) => {
    const nextList = certifications.map((c) =>
      c.id === updatedCert.id ? updatedCert : c
    );
    setCertifications(nextList);
    setSelectedCert(updatedCert);
    try {
      localStorage.setItem('oderos_techdev_certifications', JSON.stringify(nextList));
    } catch {
      // Ignore local storage error
    }
  };

  return (
    <div className="min-h-screen bg-[#060911] text-slate-100 flex flex-col font-sans selection:bg-blue-600/30 selection:text-blue-200">
      
      {/* Top Navigation */}
      <Navbar
        onOpenCv={() => setCvModalOpen(true)}
        onOpenPhotoManager={() => setPhotoModalOpen(true)}
        currentPhoto={profilePhoto}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section inspired by Image 1 & Image 2 */}
        <Hero
          onOpenCv={() => setCvModalOpen(true)}
          onOpenPhotoManager={() => setPhotoModalOpen(true)}
          profilePhoto={profilePhoto}
        />

        {/* About Section */}
        <About />

        {/* Certifications & Professional Development (Cisco & SoloLearn) */}
        <Certifications
          certifications={certifications}
          onSelectCertificate={(cert) => setSelectedCert(cert)}
        />

        {/* AI & Ethical Technology Principles Section */}
        <EthicalAISmartSection />

        {/* Projects Showcase & Case Studies */}
        <Projects onSelectProject={(project) => setSelectedProject(project)} />

        {/* Technical Skills Matrix */}
        <Skills />

        {/* Verified Entry-Level IT Services */}
        <Services />

        {/* Education & Continuous Learning Timeline */}
        <EducationTimeline />

        {/* Technical Articles & Lab Notes */}
        <TechnicalBlog />

        {/* Contact Coordinates & Interactive Form */}
        <Contact
          socialLinks={socialLinks}
          onUpdateSocialLinks={handleUpdateSocialLinks}
        />
      </main>

      {/* Footer */}
      <Footer onOpenCv={() => setCvModalOpen(true)} />

      {/* Certificate Viewer & Configuration Modal */}
      <CertificateModal
        certificate={selectedCert}
        onClose={() => setSelectedCert(null)}
        onUpdateCertificate={handleUpdateCertificate}
      />

      {/* Engineering Case Study Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Verified Curriculum Vitae Modal */}
      <CvModal
        isOpen={cvModalOpen}
        onClose={() => setCvModalOpen(false)}
      />

      {/* Profile Photo Manager Modal */}
      <ProfilePhotoModal
        isOpen={photoModalOpen}
        onClose={() => setPhotoModalOpen(false)}
        currentPhoto={profilePhoto}
        onSavePhoto={handleSavePhoto}
      />

    </div>
  );
}
