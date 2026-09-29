export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Courses', href: '#courses' },
  { label: 'Creators', href: '#creators' },
]

export const hero = {
  title: (
    <>
      Get Access to Hundreds
      <br />
      Courses Available
    </>
  ),
  subtitle:
    'Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.',
  searchPlaceholder: 'Course, topic, creator...',
  suggestions: [
    { icon: 'fa-pen-nib', label: 'UI/UX Design Masterclass' },
    { icon: 'fa-code', label: 'Full-Stack Web Development' },
    { icon: 'fa-chart-line', label: 'Digital Growth & Marketing' },
    { icon: 'fa-wand-magic-sparkles', label: 'AI & Prompt Engineering' },
  ],
  coursesCard: {
    icon: 'fa-layer-group',
    title: 'UI/UX Design',
    meta: '200 Courses • 1000+ Students',
  },
  progressCard: {
    label: 'Learning Progress',
    initial: 55,
  },
  studentsCard: {
    title: 'Happy Students',
    score: '4.5',
    count: '(240)',
    badge: '+2K',
  },
}

export const clientLogos = [
  { icon: 'fa-shapes' },
  { icon: 'fa-sun' },
  { icon: 'fa-bolt' },
  { icon: 'fa-clover' },
  { icon: 'fa-fingerprint' },
]

export const categories = [
  'Featured',
  'Music',
  'Drawing & Painting',
  'Marketing',
  'Animation',
  'Social Media',
  'UI/UX Design',
  'Creative Marketing',
  'Digital Illustration',
  'Film & Video',
  'Crafts',
  'Freelance & Entrepreneurship',
  'Graphic Design',
  'Photography',
  'Productivity',
  'Web Development',
  'Data Science',
  'Cooking',
]

const courseMeta = {
  badges: ['17 Lessons', '2 hours 16 mins', '59 Comments'],
  rating: '4.5',
  author: 'purepearl studio',
  level: 'Beginner',
  learners: '26+',
  price: '$25',
}

export const coursesSection = {
  title: (
    <>
      Discover Your Passion,
      <br />
      Build Your Skills
    </>
  ),
  subtitle:
    "At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.",
  courses: [
    { title: 'Learn Figma from Basic', image: 'course1' },
    { title: 'Build Digital Asset', image: 'course2' },
    { title: 'the Power of Big Data', image: 'course1' },
    { title: 'Balancing Productivity and Life', image: 'course2' },
    { title: 'Mastering Money Management', image: 'course1' },
    { title: 'From Idea to Startup Success', image: 'course2' },
  ].map((course) => ({ ...course, ...courseMeta })),
}

export const pathsSection = {
  title: 'Explore Diverse Learning Paths at Bytespace',
  subtitle:
    "At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.",
  paths: [
    { icon: 'fa-compass-drafting', name: 'Design' },
    { icon: 'fa-code', name: 'Development' },
    { icon: 'fa-laptop-code', name: 'IT & Software' },
    { icon: 'fa-building-user', name: 'Business' },
    { icon: 'fa-bullhorn', name: 'Marketing' },
    { icon: 'fa-camera', name: 'Photography' },
  ],
}

export const growthSection = {
  heading: 'Your Path to Professional Growth Starts Here!',
  description:
    'Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.',
  stats: [
    { target: 12000, divisor: 1000, suffix: 'K', label: 'Students' },
    { target: 70, divisor: 1, suffix: '+', label: 'Courses' },
    { target: 16, divisor: 1, suffix: '', label: 'Creators' },
  ],
  showcase: {
    badge: {
      title: 'Learn Figma from...',
      author: 'by purepearl studio',
      price: '$25/lifetime',
    },
    studentsCard: { badge: '2K+' },
  },
}

export const creatorSection = {
  heading: (
    <>
      Create & Manage
      <br />
      Courses Easily.
    </>
  ),
  description:
    'ByteSpace supports individuals or entities in the creation, publication, and administration of educational courses.',
  checks: [
    'Share Your Expertise',
    'Monetize Your Passion',
    'Flexibility and Autonomy',
    'Build a Community',
  ],
  revenueBadges: [
    { label: 'Total Revenue', date: 'July 1-28', amount: '$120.29', hasBar: true },
    { label: 'Year to Date', date: '2023', amount: '$1,200.38', pill: '+12%' },
  ],
  studentsCard: { title: 'Happy Students', badge: '2K+' },
}

export const creatorBanner = {
  title: (
    <>
      Unlock Your Potential as a
      <br />
      Creator with ByteSpace
    </>
  ),
  description:
    'Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.',
  cta: 'Join as Creator',
}

export const testimonialsSection = {
  title: (
    <>
      Discover What Our
      <br />
      Community Is Saying
    </>
  ),
  description:
    'At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.',
  testimonials: [
    {
      initial: 'S',
      name: 'Sarah M.',
      role: 'Enthusiastic Learner',
      quote:
        'ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.',
    },
    {
      initial: 'J',
      name: 'James L.',
      role: 'Lifelong Learner',
      quote:
        "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
    },
    {
      initial: 'A',
      name: 'Alex B.',
      role: 'Inspired Creator',
      quote:
        'As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It is fulfilling to see my courses making a positive impact on learners globally.',
    },
  ],
}

export const footer = {
  newsletter: {
    text: 'Stay Up to date with our latest features and releases by joining our newsletter.',
    placeholder: 'Enter your email',
    disclaimer:
      'By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.',
  },
  columns: [
    ['Featured Courses', 'Featured Categories', 'Business', 'IT', 'Design'],
    ['Development', 'Marketing', 'Photography', 'Finance', 'Sport'],
    ['Become a Creator', 'Affiliate Program', 'Contact', 'Help', 'About'],
  ],
  legal: ['Privacy Policy', 'Terms of Service', 'Cookies Settings'],
  copyright: '© 2023 ByteSpace. All rights reserved.',
}
