// ─────────────────────────────────────────────────────────────
// SITE CONFIG
// Replace the placeholder values below with your real details.
// Everything that is not yet available is clearly marked.
// ─────────────────────────────────────────────────────────────

export const siteConfig = {
  name: 'Deenesh A.',
  role: 'Cybersecurity & Networking Enthusiast',
  resumeUrl: '#', // TODO: replace with a real link to your resume (PDF)

  // Personal contact
  email: 'deenesh296@gmail.com',
  linkedin: 'https://www.linkedin.com/in/deenesha4n6',
  github: 'https://github.com/Deenesh4n6',

  // Groot Grid (networking startup) contact
  grootGrid: {
    name: 'Groot Grid',
    instagram: '@groot_grid',
    instagramUrl: 'https://instagram.com/groot_grid',
    // Keep the phone number here (single source of truth) so it is easy
    // to add or change later without hunting through every component.
    phone: '', // TODO: add a contact number if/when you want to publish one
  },

  // Contact form submission endpoint.
  // Wire this up later to Formspree, EmailJS, or your own backend.
  // See src/components/Contact.jsx -> handleSubmit for where this is used.
  formEndpoint: '', // e.g. 'https://formspree.io/f/your-id'
}
