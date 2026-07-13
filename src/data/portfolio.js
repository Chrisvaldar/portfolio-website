// NEED: LinkedIn URL

export const identity = {
  name: 'Christopher Valensio Darsono',
  tagline:
    'Computer science student at Monash. I build full-stack web apps.',
  skills: [
    'Python',
    'JavaScript',
    'React',
    'SQL',
    'HTML/CSS',
    'C',
    'Java',
    'scikit-learn',
    'pandas',
    'TensorFlow',
    'PyTorch',
    'Git',
  ],
  email: 'christophervalensio1@gmail.com',
  github: 'https://github.com/Chrisvaldar',
  // NEED: LinkedIn URL
  linkedin: null,
}

export const workExperience = [
  {
    id: 'watt-the-hack',
    role: 'Software Developer & Judge',
    org: 'Watt The Hack, MLAI x Monash DeepNeuron',
    location: 'Melbourne, VIC',
    dates: 'Apr 2026 to Jun 2026',
    bullets: [
      'Designed and integrated Scenario 5 (anomaly detection) for a joint MLAI Society x DeepNeuron hackathon with 150+ participants over 11 hours. Judged the pitching track semifinal as a technical judge.',
      'Built forecast corruption mechanics in the simulation engine. Injected adversarial signal into controller forecasts while hiding ground truth, so participants had to build anomaly detection into their controllers.',
      'Wrote sandbox and judging scenario generators with shifted event calendars to stop memorisation. Measured scoring baselines through playtesting.',
      'Built an LLM agentic reference controller that parses qualitative alert prose, classifies trust windows, and resolves FCAS/compliance conflicts. Used internally to validate scenario difficulty.',
    ],
    github: null,
  },
  {
    id: 'royal-stacks',
    role: 'FOH staff',
    org: 'Royal Stacks',
    location: 'Melbourne, VIC',
    dates: 'Apr 2025 to Present',
    bullets: [
      'Worked front of house. Kept service quick and friendly.',
      'Coordinated with kitchen and floor staff. Built up communication and teamwork on busy shifts.',
    ],
    github: null,
  },
]

export const voluntaryExperience = [
  {
    id: 'deepneuron',
    role: 'Outreach Officer',
    org: 'Monash DeepNeuron',
    location: 'Melbourne, VIC',
    dates: 'Apr 2026 to Present',
    bullets: [
      'Ran interactive workshops on AI and data science for 100+ high school students.',
      'Built slides, exercises, and demos to explain technical topics to non-technical audiences.',
    ],
  },
  {
    id: 'peer-mentorship',
    role: 'Peer Mentorship Program',
    org: 'Monash College',
    location: 'Melbourne, VIC',
    dates: 'Feb 2025 to Feb 2026',
    bullets: [
      'Tutored students one-on-one in IT and maths units.',
      'Planned and delivered 8 workshops across 8+ units to help students prep for assessments.',
    ],
  },
  {
    id: 'student-leadership',
    role: 'Student Leadership Program',
    org: 'Monash College',
    location: 'Melbourne, VIC',
    dates: 'Nov 2024 to Feb 2026',
    bullets: [
      'Helped the student engagement team plan and run 20+ college events. Handled prep and on-site coordination.',
      'English Student Ambassador. Led orientation sessions and guided incoming students.',
      'Ran icebreakers during orientation to get new students involved.',
    ],
  },
]
