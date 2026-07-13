export const identity = {
  name: 'Christopher Valensio Darsono',
  tagline: [
    'Computer Science student at Monash.',
    'I build full-stack web apps.',
  ],
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
  linkedin: 'https://www.linkedin.com/in/christopher-darsono-bb8959355/',
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
    image: '/images/watt-the-hack.png',
    secondaryImage: '/images/watt-the-hack-logos.png',
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
    image: '/images/royal-stacks.png',
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
    image: '/images/deepneuron.png',
  },
  {
    id: 'bootcamp-tutor',
    role: 'Programming Bootcamp Tutor',
    org: 'Monash University, Faculty of Information Technology',
    location: 'Melbourne, VIC',
    dates: 'O-Week Jul 2026',
    bullets: [
      'Volunteer tutor for the O-Week programming bootcamp, helping incoming students with beginner Python.',
      'Walk students through simple coding problems and how to think step by step through basic Python logic.',
      'Mentor one-on-one and in small groups so new students feel supported getting started with programming.',
    ],
    image: '/images/bootcamp-tutor.png',
  },
  {
    id: 'nike-marathon',
    role: 'Drink station volunteer',
    org: 'Nike Melbourne Marathon Festival',
    location: 'Melbourne, VIC',
    dates: 'Oct 2025',
    bullets: [
      'Helped set up the drink station and handed drinks to runners on course.',
      'Coordinated with other volunteers to keep handoffs smooth and distribution efficient during peak runner traffic.',
    ],
    image: '/images/nike-marathon.png',
  },
  {
    id: 'peer-mentorship',
    role: 'Peer Mentor',
    org: 'Monash College',
    location: 'Melbourne, VIC',
    dates: 'Feb 2025 to Feb 2026',
    bullets: [
      'Tutored students one-on-one in IT and maths units.',
      'Planned and delivered 8 workshops across 8+ units to help students prep for assessments.',
    ],
    image: '/images/peer-mentor.png',
  },
  {
    id: 'student-leadership',
    role: 'Student Leader',
    org: 'Monash College',
    location: 'Melbourne, VIC',
    dates: 'Nov 2024 to Feb 2026',
    bullets: [
      'Helped the student engagement team plan and run 20+ college events. Handled prep and on-site coordination.',
      'English Student Ambassador. Led orientation sessions and guided incoming students.',
      'Ran icebreakers during orientation to get new students involved.',
    ],
    image: '/images/student-leadership.png',
  },
]

export const projects = [
  {
    id: 'up2u',
    name: 'UP2U',
    featured: true,
    techStack: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind',
      'FastAPI',
      'WebSockets',
      'Redis',
      'Gemini',
    ],
    summary:
      'Real-time group dining app. Everyone joins a session, ranks preferences, and AI picks a restaurant. React and TypeScript frontend with WebSockets for live sync. FastAPI backend with Redis sessions. Gemini handles the reveal. 70 tests across backend and frontend. Deployed on Vercel and Railway.',
    github: 'https://github.com/Chrisvaldar/UP2U',
    liveUrl: 'https://up2u-app.vercel.app/',
    image: '/images/up2u.png',
  },
  {
    id: 'frugl',
    name: 'Frugl',
    featured: true,
    techStack: ['React', 'Vite', 'FastAPI', 'Gemini', 'Groq', 'pytest'],
    summary:
      'Grocery price comparison for Coles vs Woolworths. Scan a receipt or type a list, then see which store wins per item. Gemini does receipt OCR, Groq reranks messy matches. 44 pytest tests with GitHub Actions CI. Shipped to Vercel. Hit 100+ comparisons in the first week.',
    github: 'https://github.com/Chrisvaldar/frugl',
    liveUrl: 'https://frugl.vercel.app/',
    image: '/images/frugl.png',
  },
  {
    id: 'fit2179',
    name: 'Sharks in Australian Waters',
    featured: false,
    techStack: ['Vega-Lite', 'Vega-Embed', 'HTML', 'Python', 'GitHub Pages'],
    summary:
      'Interactive data story on Australian shark incidents from 1791 to 2022, with a NSW vs California comparison. Ten chart blocks across five sections.  ',
    github: 'https://github.com/Chrisvaldar/FIT2179-Data-Visualisation-2',
    liveUrl: 'https://chrisvaldar.github.io/FIT2179-Data-Visualisation-2/',
    image: '/images/fit2179.png',
  },
  {
    id: 'homeboy-2',
    name: 'HomeBoy 2.0',
    featured: false,
    techStack: ['Arduino', 'C++', 'Servo', 'DHT11', 'Ultrasonic sensor'],
    summary:
      'Smart home control on Arduino. Password lockout, servo door locks, intruder alarm, motorised window, room lighting, and temperature display. Wrote the full firmware solo for a team assignment.',
    github: 'https://github.com/Chrisvaldar/HomeBoy-2.0',
    liveUrl: null,
    image: '/images/homeboy-2.png',
  },
  {
    id: 'homeboy',
    name: 'HomeBoy',
    featured: false,
    techStack: ['Arduino', 'C++', 'LCD', 'RGB LED'],
    summary:
      'Temperature monitoring on Arduino. Live LCD readings, colour-coded RGB LED, buzzer alerts outside safe range, and a serial menu for unit selection and running averages. Wrote the firmware solo.',
    github: 'https://github.com/Chrisvaldar/HomeBoy',
    liveUrl: null,
    image: '/images/homeboy.png',
  },
]

export const hackathons = [
  {
    id: 'habitmon',
    name: 'HABITMON',
    hackathonName: 'UNIHACK 2026',
    featured: true,
    techStack: ['React', 'Vite', 'Flask', 'Elasticsearch', 'OpenAI'],
    summary:
      'Gamified skill-learning app built in 48 hours. I did the React frontend: game logic, gacha rewards with CSS animations, local state persistence. Flask backend with Elasticsearch and OpenAI for dynamic content. Honourable Mention for Best Design and Most Fun Idea out of 1000+ participants.',
    github: 'https://github.com/Yyjcreeper23/unihack-submission-2026',
    liveUrl: 'https://habitmon.life/',
    image: '/images/habitmon.png',
  },
  {
    id: 'formguard',
    name: 'FormGuard',
    hackathonName: 'MACATHON 2026',
    featured: true,
    techStack: [
      'Next.js',
      'React',
      'FastAPI',
      'MediaPipe',
      'Supabase',
      'Gemini',
    ],
    summary:
      'Real-time gym form tracking. MediaPipe pose estimation scores every rep as fatigue builds, then shows where form broke down and the injury risk. AI coach gives recommendations from session data. Top 5 out of 100+ participants at MACATHON 2026.',
    github: 'https://github.com/lbrh/FormGaurd',
    liveUrl: 'https://form-guard.vercel.app',
    image: '/images/formguard.png',
  },
  {
    id: 'uniqme',
    name: 'UniqMe',
    hackathonName: 'Uniqlo ImpactHack',
    featured: true,
    techStack: ['HTML', 'JavaScript'],
    summary:
      'Personalised Uniqlo outfit curation via a style quiz and outfit carousel. Single HTML file demo built in a 2-hour sprint. Winner of Best AI Challenge Idea and Overall Best Idea at Uniqlo ImpactHack.',
    github: 'https://github.com/Chrisvaldar/uniqme-impacthack-uniqlo',
    liveUrl: null,
    image: '/images/uniqme.png',
    secondaryImage: '/images/uniqme-demo.png',
  },
  {
    id: 'forge',
    name: 'Forge',
    hackathonName: 'Canva ImpactHack',
    featured: false,
    techStack: ['HTML', 'JavaScript', 'SVG'],
    summary:
      'Career path explorer for students whose paths branch and cross. Short reflective quiz surfaces three interactive SVG degree trees with student testimonials. Single-file hackathon prototype.',
    github: 'https://github.com/Chrisvaldar/forge-canva-impacthack',
    liveUrl: 'https://chrisvaldar.github.io/forge-canva-impacthack/',
    image: '/images/forge.png',
    secondaryImage: '/images/forge-demo.png',
  },
  {
    id: 'wyde',
    name: 'Wyde',
    hackathonName: 'Cursor Hardware Hack',
    featured: false,
    techStack: ['ESP32', 'PlatformIO', 'C++', 'Wi-Fi'],
    summary:
      'Low-cost robotics rover for learning autonomous systems. ESP32 tank-drive firmware with Wi-Fi teleop from a browser D-pad. Programmed and wired in a 4-hour sprint. Built as a hardware hack with room to grow into sensing and autonomy.',
    github: 'https://github.com/Chrisvaldar/wyde-the-rover',
    liveUrl: null,
    image: '/images/wyde.png',
  },
  {
    id: 'agpc',
    name: 'Yo-Chi x AGPC',
    hackathonName: 'Monash ImpactHack x AGPC',
    featured: false,
    techStack: [],
    summary:
      'Partnership pitch concept: Yo-Chi as official dessert partner of the Australian Grand Prix Corporation across F1 and MotoGP. 12-month activation cycle from countdown promos to post-race flavours. Presentation slides only, no prototype.',
    github: 'https://github.com/Chrisvaldar/AGPC-impacthack',
    liveUrl: null,
    image: '/images/agpc.png',
  },
]

