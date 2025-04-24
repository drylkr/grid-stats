/**
 * @copyright 2025 Daryl Ong
 * @license Apache-2.0
 */

/**
 * Types
 */
import { MenuItem } from '@/types';

/**
 * Assets
 */
import {
  ChartArea,
  Building2,
  Component,
  Code,
  BetweenHorizonalEnd,
  BrainCircuit,
  Blocks,
  Terminal,
  Package,
  SquareMousePointer,
  ChartPie,
  GitFork,
  Twitter,
  Github,
  Linkedin,
  Instagram,
  Youtube,
  AudioLines,
  CarFront,
  Medal,
  PersonStanding,
  Car,
  ChartNoAxesColumn,
} from 'lucide-react';

import {
  feature1,
  feature2,
  blog1,
  blog2,
  blog3,
  avatar1,
  avatar2,
  avatar3,
} from '@/assets';

// Header
export const navMenu: MenuItem[] = [
  {
    href: '/insights',
    label: 'Insights',
    submenu: [
      {
        href: '#',
        icon: <ChartArea />,
        label: 'Driver Stats',
        desc: 'Analyze performance, lap times, and driver consistency across seasons',
      },
      {
        href: '#',
        icon: <Building2 />,
        label: 'Constructor Comparisons',
        desc: 'Side-by-side breakdown of team achievements, power unit reliability, and wins',
      },
      {
        href: '#',
        icon: <Component />,
        label: 'Live Telemetry',
        desc: 'Real-time telemetry visuals including speed, gear shifts, and DRS usage',
      },
      {
        href: '#',
        icon: <Code />,
        label: 'Race Strategy',
        desc: 'Understand pit windows, tyre strategy, and undercut/overcut impact',
      },
      {
        href: '#',
        icon: <BetweenHorizonalEnd />,
        label: 'Historic Laps',
        desc: 'Revisit iconic lap battles and gain insights from sector data',
      },
      {
        href: '#',
        icon: <BrainCircuit />,
        label: 'AI Predictions',
        desc: 'Machine-learning based predictions for qualifying and race outcomes',
      },
    ],
  },
  {
    href: '/features',
    label: 'Features',
  },
  {
    href: '/docs',
    label: 'Docs',
    submenu: [
      {
        href: '#',
        icon: <Terminal />,
        label: 'Getting Started',
        desc: 'How to use our platform to fuel your F1 passion or fantasy team',
      },
      {
        href: '#',
        icon: <Package />,
        label: 'Core Metrics',
        desc: 'Learn the key racing stats and how we calculate them',
      },
      {
        href: '#',
        icon: <SquareMousePointer />,
        label: 'Customization',
        desc: 'Customize views by team, season, or Grand Prix',
      },
      {
        href: '#',
        icon: <Blocks />,
        label: 'Community Plugins',
        desc: 'Enhance your insights with fan-built plugin tools and charts',
      },
    ],
  },
  {
    href: '/pricing',
    label: 'Pricing',
  },
];

// Hero
export const heroData = {
  sectionSubtitle: 'All-in-one Formula 1 fan hub',
  sectionTitle: 'Visualizing Formula 1 Like Never Before',
  decoTitle: 'F1 Analytics',
  sectionText:
    'Dive deep into the world of F1 with advanced insights, driver comparisons, strategy breakdowns, and real-time data — all in one place.',
};

// Feature
export const featureData = {
  sectionSubtitle: 'Features',
  sectionTitle: 'Unlock the Track with Powerful Insights',
  sectionText:
    'From live race data to strategic breakdowns and historical comparisons, access everything you need to understand and enjoy Formula 1.',
  features: [
    {
      icon: <ChartPie size={32} />,
      iconBoxColor: 'bg-red-600',
      title: 'Driver Performance Trends',
      desc: 'Track driver performance over time and compare results across teams and seasons',
      imgSrc: feature1,
    },
    {
      icon: <CarFront size={32} />,
      iconBoxColor: 'bg-orange-500',
      title: 'Race Recaps',
      desc: 'Get post-race summaries with data visuals on overtakes, strategies, and lap-by-lap breakdowns',
      imgSrc: feature2,
    },
    {
      icon: <Medal size={32} />,
      iconBoxColor: 'bg-yellow-500',
      title: 'Podium Consistency',
      desc: 'Review podium finishes, qualifying vs. race positions, and consistency stats',
    },
    {
      icon: <GitFork size={32} />,
      iconBoxColor: 'bg-green-500',
      title: 'Tyre Strategy Simulations',
      desc: 'Simulate potential race strategies using different tyre compounds and safety car scenarios',
    },
    {
      icon: <AudioLines size={32} />,
      iconBoxColor: 'bg-purple-500',
      title: 'Team Radio Highlights',
      desc: 'Listen to iconic and strategic team radio moments during key race phases',
    },
  ],
};

// Process
export const processData = {
  sectionSubtitle: 'How it works',
  sectionTitle: 'Get Started with F1 Insights in Minutes',
  sectionText:
    'Join thousands of fans in unlocking data-driven racing knowledge through a few simple steps.',
  list: [
    {
      icon: <PersonStanding size={32} />,
      title: 'Pick a Favorite Driver',
      text: 'Sign up and choose your favorite driver to personalize your analytics dashboard.',
    },
    {
      icon: <Car size={32} />,
      title: 'Follow Races Live',
      text: 'Watch telemetry, tyre wear, and strategy predictions in real-time during race weekends.',
    },
    {
      icon: <ChartNoAxesColumn size={32} />,
      title: 'Unlock Historic Insights',
      text: 'Access our full archive of race data, stats, and comparisons to become an F1 expert.',
    },
  ],
};

// Overview
export const overviewData = {
  sectionSubtitle: 'Overview',
  sectionTitle: 'All-In-One Formula 1 Analytics Hub',
  sectionText:
    'From practice to podium, we bring every lap, pit stop, and radio call to your fingertips.',
  listTitle: 'Thousands of F1 fans are already using our platform',
  list: [
    {
      title: '200+',
      text: 'Races Analyzed',
    },
    {
      title: '10+ Years',
      text: 'Historic Data',
    },
    {
      title: '24/7',
      text: 'Race Weekend Coverage',
    },
  ],
};

// Review
export const reviewData = {
  sectionSubtitle: 'Fan Testimonials',
  sectionTitle: 'What F1 Fans Are Saying',
  reviewCard: [
    {
      title: 'This is my new favorite Formula 1 race day tool!',
      text: 'I’ve never understood tyre strategy this clearly before. It’s like being on the pit wall!',
      reviewAuthor: 'Wade Warren',
      date: '3 months ago',
    },
    {
      title: 'Finally, real insights for fantasy leagues',
      text: 'The data here helped me win back-to-back F1 fantasy weekends. Absolutely essential.',
      reviewAuthor: 'Dianne Russell',
      date: '2 months ago',
    },
    {
      title: 'Incredible breakdowns of every Grand Prix',
      text: 'Even my non-F1 friends are hooked after seeing the strategy charts after each race.',
      reviewAuthor: 'Marvin McKinney',
      date: '1 month ago',
    },
  ],
};

// Blog
export const blogData = {
  sectionSubtitle: 'F1 Journal',
  sectionTitle: 'Latest from the Paddock',
  sectionText:
    'Read up on tactical breakdowns, tech advancements, and behind-the-scenes insights from the world of Formula 1.',
  blogs: [
    {
      imgSrc: blog1,
      badge: 'Strategy',
      title: 'How Verstappen dominated 2024 with precision strategy',
      author: {
        avatarSrc: avatar1,
        authorName: 'Lewis Hamilton',
        publishDate: 'Jan 10, 2025',
        readingTime: '8 min read',
      },
    },
    {
      imgSrc: blog2,
      badge: 'Tech',
      title: 'Why DRS zones are changing how races are won',
      author: {
        avatarSrc: avatar2,
        authorName: 'Charles Leclerc',
        publishDate: 'Apr 15, 2025',
        readingTime: '5 min read',
      },
    },
    {
      imgSrc: blog3,
      badge: 'History',
      title: 'Top 5 races where pit strategy changed everything',
      author: {
        avatarSrc: avatar3,
        authorName: 'Kimi Antonelli',
        publishDate: 'Mar 24, 2025',
        readingTime: '2 min read',
      },
    },
  ],
};

// Cta
export const ctaData = {
  text: 'Start exploring the world of Formula 1 like never before.',
};

// Footer
export const footerData = {
  links: [
    {
      title: 'Product',
      items: [
        {
          href: '#',
          label: 'Components',
        },
        {
          href: '#',
          label: 'Pricing',
        },
        {
          href: '#',
          label: 'Dashboard',
        },
        {
          href: '#',
          label: 'Feature requests',
        },
      ],
    },
    {
      title: 'Developers',
      items: [
        {
          href: '#',
          label: 'Documentation',
        },
        {
          href: '#',
          label: 'Discord server',
        },
        {
          href: '#',
          label: 'Support',
        },
        {
          href: '#',
          label: 'Glossary',
        },
        {
          href: '#',
          label: 'Changelog',
        },
      ],
    },
    {
      title: 'Company',
      items: [
        {
          href: '#',
          label: 'About',
        },
        {
          href: '#',
          label: 'Careers',
        },
        {
          href: '#',
          label: 'Blog',
        },
        {
          href: '#',
          label: 'Contact',
        },
      ],
    },
    {
      title: 'Legal',
      items: [
        {
          href: '#',
          label: 'Terms and Conditions',
        },
        {
          href: '#',
          label: 'Privacy Policy',
        },
        {
          href: '#',
          label: 'Data Processing Agreement',
        },
        {
          href: '#',
          label: 'Cookie manager',
        },
      ],
    },
  ],
  copyright: '© 2025 Daryl Ong',
  socialLinks: [
    {
      href: 'https://x.com/f1',
      icon: <Twitter size={18} />,
    },
    {
      href: 'https://github.com/drylkr',
      icon: <Github size={18} />,
    },
    {
      href: 'https://www.linkedin.com/company/formula-one-management-ltd',
      icon: <Linkedin size={18} />,
    },
    {
      href: 'https://www.instagram.com/f1',
      icon: <Instagram size={18} />,
    },
    {
      href: 'https://www.youtube.com/Formula1',
      icon: <Youtube size={18} />,
    },
  ],
};
