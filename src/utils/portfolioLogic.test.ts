import test from 'node:test';
import assert from 'node:assert/strict';
import {
  validateContactForm,
  generateMailtoUrl,
  sanitizePhoneForTel,
  filterProjects,
  filterCertifications,
  validateCertificateUrl,
  validateImageUpload,
  generatePlainTextCV
} from './portfolioLogic';
import { PROJECTS_DATA, CERTIFICATIONS_DATA } from '../data/portfolioData';

test('validateContactForm checks required fields and formats', () => {
  const emptyRes = validateContactForm({ name: '', email: '', subject: '', message: '' });
  assert.equal(emptyRes.isValid, false);
  assert.ok(emptyRes.errors.name);
  assert.ok(emptyRes.errors.email);
  assert.ok(emptyRes.errors.subject);
  assert.ok(emptyRes.errors.message);

  const invalidEmail = validateContactForm({
    name: 'Wycliffe',
    email: 'not-an-email',
    subject: 'Internship Opportunity',
    message: 'Short'
  });
  assert.equal(invalidEmail.isValid, false);
  assert.equal(invalidEmail.errors.email, 'Please provide a valid email address.');
  assert.equal(invalidEmail.errors.message, 'Message must be at least 10 characters.');

  const valid = validateContactForm({
    name: 'Wycliffe Odero',
    email: 'test@example.com',
    subject: 'Technical Inquiry',
    message: 'Hello, I would like to discuss a practical software project.'
  });
  assert.equal(valid.isValid, true);
  assert.deepEqual(valid.errors, {});
});

test('generateMailtoUrl constructs correctly formatted query params', () => {
  const url = generateMailtoUrl('oderowickliffe1@gmail.com', 'Subject Here', 'Body line 1\nLine 2');
  assert.ok(url.startsWith('mailto:oderowickliffe1@gmail.com?'));
  assert.ok(url.includes('subject=Subject+Here'));
  assert.ok(url.includes('body=Body+line+1'));
});

test('sanitizePhoneForTel extracts clean digits and plus sign', () => {
  const sanitized = sanitizePhoneForTel('+254 794 900 546');
  assert.equal(sanitized, '+254794900546');
});

test('filterProjects correctly filters by category and search keyword', () => {
  const all = filterProjects(PROJECTS_DATA, 'all');
  assert.equal(all.length, PROJECTS_DATA.length);

  const concepts = filterProjects(PROJECTS_DATA, 'concept');
  assert.ok(concepts.length > 0);
  assert.ok(concepts.every(p => p.category === 'concept'));

  const edubridge = filterProjects(PROJECTS_DATA, 'all', 'EduBridge');
  assert.equal(edubridge.length, 1);
  assert.equal(edubridge[0].id, 'edubridge-kenya');
});

test('filterCertifications correctly filters between Cisco and SoloLearn tracks', () => {
  const all = filterCertifications(CERTIFICATIONS_DATA, 'all');
  assert.equal(all.length, CERTIFICATIONS_DATA.length);

  const networking = filterCertifications(CERTIFICATIONS_DATA, 'networking-it');
  assert.equal(networking.length, 3);
  assert.ok(networking.every(c => c.provider.includes('Cisco')));

  const ai = filterCertifications(CERTIFICATIONS_DATA, 'ai-data');
  assert.equal(ai.length, 6);
  assert.ok(ai.every(c => c.provider.includes('SoloLearn')));
});

test('validateCertificateUrl handles http, https, and relative document links', () => {
  assert.equal(validateCertificateUrl('https://www.cisco.com/verify/123'), true);
  assert.equal(validateCertificateUrl('http://sololearn.com/certificates/456'), true);
  assert.equal(validateCertificateUrl('/assets/certificates/cisco-networking.pdf'), true);
  assert.equal(validateCertificateUrl('./certificates/sololearn-ai.png'), true);
  assert.equal(validateCertificateUrl('javascript:alert(1)'), false);
  assert.equal(validateCertificateUrl(''), false);
});

test('validateImageUpload validates mime types and size', () => {
  const validJpg = validateImageUpload({ type: 'image/jpeg', size: 1024 * 1024 });
  assert.equal(validJpg.valid, true);

  const invalidType = validateImageUpload({ type: 'application/pdf', size: 1024 });
  assert.equal(invalidType.valid, false);

  const oversized = validateImageUpload({ type: 'image/png', size: 10 * 1024 * 1024 });
  assert.equal(oversized.valid, false);
});

test('generatePlainTextCV contains verified information including certifications', () => {
  const cv = generatePlainTextCV();
  assert.ok(cv.includes('WYCLIFFE ODHIAMBO ODERO'));
  assert.ok(cv.includes("Odero'sTechDev"));
  assert.ok(cv.includes('CISCO NETWORKING ACADEMY'));
  assert.ok(cv.includes('Networking Basics'));
  assert.ok(cv.includes('Cybersecurity'));
  assert.ok(cv.includes('Hardware and Upgrade Support'));
  assert.ok(cv.includes('SOLOLEARN LEARNING ACADEMY'));
  assert.ok(cv.includes('Prompt Engineering'));
  assert.ok(cv.includes('Large Language Models (LLMs)'));
  assert.ok(cv.includes('Ethical AI Foundations'));
  assert.ok(cv.includes('Bias Mitigation and Detection in AI Systems'));
});
