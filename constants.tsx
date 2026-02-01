
import { Experience, Project, Recommendation, SkillCategory, LearningItem } from './types';

export const EXPERIENCES: Experience[] = [
  {
    role: "Senior Quality Analyst",
    company: "Yudiz Solutions Ltd.",
    duration: "Mar 2022 — Present",
    location: "Ahmedabad, India",
    bullets: [
      "Became a trusted QA partner for Product Managers by identifying requirement gaps and edge cases early, reducing rework during development.",
      "Improved release confidence by evaluating features from user, business, and risk perspectives — not just functional correctness.",
      "Played a key role in sprint planning, backlog grooming, and release discussions, influencing prioritization decisions.",
      "Led and mentored a team of 4 QA engineers, improving delivery consistency and quality ownership.",
      "Strengthened cross-team alignment by creating user flow diagrams and functional documentation.",
      "Contributed to improved regression coverage and overall release stability across frequent deployments.",
      "Acted as a bridge between Product, Engineering, and QA, ensuring smoother end-to-end delivery.",
      "Domains: Sportsbook & Betting Platforms, Fantasy Sports, Trading Systems, Multiplayer & Casual Games"
    ],
    productFocus: [
      {
        title: "Product Requirement & Discovery",
        bullets: [
          "Reviewed and refined user stories and acceptance criteria with Product Managers",
          "Identified requirement gaps and usability risks early in the lifecycle"
        ]
      },
      {
        title: "Feature Evaluation & Improvement",
        bullets: [
          "Evaluated features from user and business perspectives beyond functional correctness",
          "Suggested improvements to user flows and edge-case handling"
        ]
      },
      {
        title: "Sprint & Delivery Involvement",
        bullets: [
          "Actively contributed to sprint planning, backlog grooming, and release discussions",
          "Helped teams make informed trade-offs based on risk and impact"
        ]
      },
      {
        title: "Product Documentation",
        bullets: [
          "Created user flow diagrams and functional documentation to align teams",
          "Ensured shared understanding across Product, Engineering, and QA"
        ]
      }
    ]
  }
];

export const SKILLS: SkillCategory[] = [
  {
    title: "Quality Assurance",
    skills: ["Automation (Playwright, Selenium)", "Mobile Testing (Appium)", "API Testing (Postman, RestAssured)", "Load Testing", "Security Basics"]
  },
  {
    title: "Product & Business",
    skills: ["Requirement Analysis", "User Story Mapping", "Market Research", "Data Analytics", "Agile/Scrum", "Product Thinking"]
  },
  {
    title: "Tools & Ecosystem",
    skills: ["Jira / Confluence", "Jenkins / GitHub Actions", "SQL / MongoDB", "Figma", "Docker", "Mixpanel"]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "E-Commerce Reliability Engine",
    description: "Built a custom regression suite that simulates 1000+ user checkout flows under various network conditions.",
    outcome: "Reduced checkout-related support tickets by 60% within 3 months of implementation.",
    category: "QA"
  },
  {
    title: "Product Gap Analysis: SaaS Dashboard",
    description: "Conducted a deep dive into user drop-off points during onboarding using behavior analytics.",
    outcome: "Proposed a simplified 3-step onboarding process, later adopted by the PM team, increasing conversion by 15%.",
    category: "Product"
  },
  {
    title: "Mobile App Performance Audit",
    description: "End-to-end performance benchmarking for a high-traffic social media app.",
    outcome: "Identified memory leaks in the feed scroll module, leading to a 20% improvement in app stability.",
    category: "QA"
  },
  {
    title: "Market Opportunity: AI Test Gen",
    description: "Analysis of the current landscape for AI-driven automated testing tools for a potential product pivot.",
    outcome: "Delivered a SWOT analysis report to executive leadership guiding the Q3 roadmap.",
    category: "Product"
  }
];

export const RECOMMENDATIONS: Recommendation[] = [
  {
    quote: "Vikas isn't just a QA; he has the mind of a Product Manager. He doesn't just ask 'is it broken?', he asks 'is this what the user needs?'.",
    name: "Sarah Chen",
    role: "Senior Product Manager",
    company: "TechFlow Systems"
  },
  {
    quote: "One of the most diligent engineers I've worked with. His ability to bridge the gap between technical constraints and business goals is rare.",
    name: "Arjun Mehta",
    role: "Engineering Lead",
    company: "Nexus Innovations"
  }
];

export const LEARNING: LearningItem[] = [
  { title: "Product Management First Steps", issuer: "LinkedIn Learning", year: "2023" },
  { title: "Advanced Test Automation with Playwright", issuer: "TestAutomation University", year: "2023" },
  { title: "Data-Driven Decision Making", issuer: "Coursera", year: "2022" },
  { title: "Certified Agile Professional", issuer: "Scrum Alliance", year: "2021" }
];
