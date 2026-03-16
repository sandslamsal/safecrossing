export type ProjectStatus = "Planned" | "In Progress" | "Completed";
export type ProjectFilter = "All" | ProjectStatus;

export type NavigationLink = {
  href: string;
  label: string;
};

export type HeroHighlight = {
  title: string;
  detail: string;
};

export type ImpactStat = {
  value: string;
  label: string;
  detail: string;
};

export type ProgramCard = {
  title: string;
  description: string;
  icon: "bridge" | "school" | "community" | "resilience";
};

export type FounderJourneyStep = {
  title: string;
  description: string;
};

export type FounderStoryContent = {
  eyebrow: string;
  title: string;
  intro: string;
  paragraphs: string[];
  quote: string;
  credentials: string[];
  journey: FounderJourneyStep[];
};

export type Project = {
  name: string;
  location: string;
  status: ProjectStatus;
  summary: string;
  focus: string;
  image: string;
  imageAlt: string;
};

export type InvolvementOption = {
  title: string;
  description: string;
  points: string[];
  icon: "volunteer" | "partner" | "sponsor" | "donate";
};

export type DonationTier = {
  amount: string;
  title: string;
  description: string;
  impact: string;
  featured?: boolean;
};

export type ValueCard = {
  title: string;
  description: string;
};

export type Milestone = {
  year: string;
  title: string;
  description: string;
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export const foundationMissionStatement =
  "Safe Crossing Foundation turns bridge engineering into life-saving access for children and rural communities who still face dangerous river crossings to reach school, healthcare, and opportunity.";

export const navigationLinks: NavigationLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/contact", label: "Contact" }
];

export const heroHighlights: HeroHighlight[] = [
  {
    title: "Children's safety first",
    detail: "We focus on crossings that shape whether children can reach school with confidence or face danger before class even begins."
  },
  {
    title: "Engineering with credibility",
    detail: "The foundation is informed by professional bridge engineering expertise, practical structural knowledge, and disciplined planning."
  },
  {
    title: "Community partnership",
    detail: "Local leaders, families, and educators help define where support is needed most and how each crossing should endure."
  }
];

export const impactStats: ImpactStat[] = [
  {
    value: "11",
    label: "high-risk routes mapped",
    detail: "Placeholder baseline routes identified for future assessment, community dialogue, and pilot planning."
  },
  {
    value: "3",
    label: "districts in early focus",
    detail: "Placeholder regions in Nepal where school access, health access, and seasonal river danger intersect."
  },
  {
    value: "2,800+",
    label: "people in reach zones",
    detail: "Placeholder estimate of children, caregivers, and residents who could benefit from safer crossing access."
  }
];

export const whyWeExist = [
  "In many rural communities, rivers are not just part of the landscape. They are barriers that shape whether children get to school, whether families reach healthcare, and whether daily life feels stable or dangerous.",
  "Where there is no bridge, people often adapt around fear: waiting for water levels to fall, using improvised paths, or risking crossings that should never be considered normal.",
  "Safe Crossing Foundation exists to help turn that reality into something better through serious engineering, local partnership, and practical, resilient crossing solutions that communities can trust."
];

export const helpPrograms: ProgramCard[] = [
  {
    title: "Build Safe Bridges",
    description: "Support durable pedestrian bridge solutions designed for steep terrain, seasonal water changes, and the real patterns of daily use.",
    icon: "bridge"
  },
  {
    title: "Support School Access",
    description: "Help protect the school journey so attendance is shaped by learning and opportunity, not by fear at the riverbank.",
    icon: "school"
  },
  {
    title: "Partner with Local Communities",
    description: "Work with community leaders, teachers, families, and local builders so each project reflects lived need and shared ownership.",
    icon: "community"
  },
  {
    title: "Create Long-Term Resilience",
    description: "Plan for maintenance, route connections, stewardship, and the long-term systems that keep safe crossings functioning well after construction.",
    icon: "resilience"
  }
];

// Update founder story text here when you are ready for final approved biography copy.
export const founderStoryPreview: FounderStoryContent = {
  eyebrow: "Founder's Story",
  title: "From childhood awareness in Nepal to a bridge engineering career dedicated to safer access",
  intro:
    "Dr. Sandesh Lamsal founded Safe Crossing Foundation to connect lived awareness of rural access challenges with the technical discipline required to solve them responsibly.",
  paragraphs: [
    "Growing up in Nepal, Sandesh saw how geography could become danger. In many rural communities, rivers were not scenery; they were barriers to school, healthcare, work, and safety.",
    "That awareness stayed with him through structural engineering study, a Ph.D. in structural engineering, and a professional career in bridge engineering in the United States. Safe Crossing Foundation was created to turn that expertise into impact for communities still living without safe bridge access."
  ],
  quote: "Safe crossing is not only about infrastructure. It is about dignity, education, healthcare, and opportunity.",
  credentials: [
    "Nepal-born structural and bridge engineer",
    "Ph.D. in structural engineering",
    "Professional bridge engineering experience in the United States",
    "Focused on practical, resilient, community-centered access"
  ],
  journey: [
    {
      title: "Nepal childhood awareness",
      description: "Early understanding of how rivers can isolate rural families from school, care, and daily security."
    },
    {
      title: "Engineering education",
      description: "Advanced study centered on structural systems, bridge behavior, and the responsibility of safe design."
    },
    {
      title: "Bridge engineering career",
      description: "Professional experience in the United States shaped by structural design, infrastructure, and bridge systems."
    },
    {
      title: "Launching the foundation",
      description: "A commitment to bring technical knowledge back into humanitarian service, beginning in Nepal."
    }
  ]
};

// Update founder story text here when you are ready for the full public-facing About page biography.
export const founderStoryFull: FounderStoryContent = {
  eyebrow: "Founder's Story",
  title: "A mission shaped by Nepal, engineering, and the belief that safe passage is a basic form of dignity",
  intro:
    "Dr. Sandesh Lamsal did not start Safe Crossing Foundation to center his own story. He started it because too many children and families still live with a crossing problem that engineering can help solve.",
  paragraphs: [
    "Growing up in Nepal, Sandesh understood early that rivers could define the limits of everyday life. In many rural communities, crossing safely was not guaranteed. A route to school, a trip to a health post, or a visit to family could depend on water levels, improvised paths, or dangerous cable crossings.",
    "As he pursued structural engineering, he became convinced that infrastructure is never only technical. The presence or absence of a bridge shapes who can learn consistently, who can seek care on time, and who gets to move through daily life with confidence instead of fear.",
    "He went on to earn a Ph.D. in structural engineering and build a professional career in bridge engineering in the United States, gaining deep experience in structural design, bridge systems, and infrastructure. That path gave him technical tools, but it also sharpened a personal question: how could that knowledge serve communities still living without safe access?",
    "Safe Crossing Foundation is the answer taking form. Beginning with Nepal and designed to grow toward other underserved regions over time, the foundation exists to transform engineering expertise into real humanitarian impact through safer, resilient crossings built with community trust and long-term care."
  ],
  quote: "Safe access is not a luxury. It is a condition for education, healthcare, dignity, and opportunity.",
  credentials: [
    "Originally from Nepal",
    "Structural and bridge engineer",
    "Ph.D. in structural engineering",
    "U.S.-based bridge engineering professional",
    "Committed to community-centered humanitarian infrastructure"
  ],
  journey: founderStoryPreview.journey
};

export const featuredPilotProject = {
  name: "Nepal Pilot Bridge Initiative",
  location: "Rural Nepal | Initial flagship focus",
  status: "Planned" as const,
  summary:
    "A featured pilot concept centered on a high-risk crossing where schoolchildren and families currently face dangerous river access during parts of the year.",
  description:
    "The pilot bridge initiative is designed as a flagship starting point: combining route assessment, local consultation, engineering review, fundraising, and long-term maintenance planning for a crossing that affects daily school access and community mobility.",
  outcomes: [
    "Create a safer and more reliable route for children traveling to school.",
    "Improve year-round access to healthcare, markets, and family support networks.",
    "Build a community-led stewardship plan alongside the technical work."
  ],
  image: "/images/project-pilot.svg",
  imageAlt: "Placeholder illustration of a pilot pedestrian bridge concept in a mountain valley"
};

// Update the organization mission and high-level positioning here as the foundation evolves.
export const aboutStory = {
  title: "A nonprofit built to turn technical bridge knowledge into humanitarian access",
  description:
    "Safe Crossing Foundation was created around a simple conviction: when a river blocks safe passage, the danger should not be accepted as normal. Safe crossings protect more than movement. They protect education, health, dignity, and the confidence to participate in everyday life.",
  mission:
    "To help children and rural communities reach school, healthcare, and opportunity safely by supporting resilient, community-centered crossing solutions.",
  vision:
    "A world where no child has to risk their life to reach a classroom, and where safe rural access is treated as a foundation for equity, dignity, and resilience."
};

export const organizationStory = [
  "Safe Crossing Foundation begins in Nepal, where mountain terrain and seasonal rivers can place entire communities on the wrong side of opportunity. Over time, the model is intended to support other underserved regions facing similar access challenges.",
  "The foundation sits at the intersection of humanitarian need and engineering responsibility. We believe that safe passage should be addressed with the same seriousness as any other life-shaping barrier.",
  "Our role is not only to advocate for bridges, but to help build trustworthy processes around them: listening carefully, planning responsibly, partnering locally, and thinking beyond construction toward stewardship."
];

export const coreValues: ValueCard[] = [
  {
    title: "Human Dignity",
    description: "We treat safe movement as a human need, not as a secondary convenience."
  },
  {
    title: "Engineering Integrity",
    description: "We believe trust is built through thoughtful design, technical discipline, and honest communication."
  },
  {
    title: "Local Partnership",
    description: "Communities are collaborators and decision-makers in the work, not passive recipients of outside plans."
  },
  {
    title: "Long-Term Stewardship",
    description: "A safe crossing matters only if it remains reliable, cared for, and integrated into everyday life over time."
  }
];

export const accessPillars: ValueCard[] = [
  {
    title: "Education",
    description: "A safer route can turn irregular attendance into a dependable path to learning and future opportunity."
  },
  {
    title: "Healthcare",
    description: "When crossings are secure, families can seek medical care with less delay, uncertainty, and risk."
  },
  {
    title: "Dignity",
    description: "Reliable access means people can move through daily life without treating danger as routine."
  },
  {
    title: "Rural Access",
    description: "A bridge can reconnect communities to markets, services, social support, and wider economic possibility."
  }
];

export const whySafeCrossingMatters = [
  "Unsafe crossings rarely affect only one moment. They reshape school attendance, health decisions, work timing, caregiving, and how secure a community feels across the year.",
  "When a bridge is absent, the burden falls hardest on children, older adults, and families with the least flexibility. Safe access helps restore something fundamental: the ability to move without treating every trip as a risk calculation."
];

export const milestones: Milestone[] = [
  {
    year: "2024",
    title: "Mission defined",
    description: "Foundational listening, concept development, and early positioning around safe access in rural Nepal."
  },
  {
    year: "2025",
    title: "Organization launch",
    description: "Safe Crossing Foundation begins building its public-facing mission, partnerships, and project pipeline."
  },
  {
    year: "2026",
    title: "Pilot development",
    description: "Placeholder stage for Nepal pilot site review, community consultation, and fundraising preparation."
  },
  {
    year: "Future",
    title: "Replication and growth",
    description: "Longer-term expansion toward more crossings in Nepal and eventually other underserved regions."
  }
];

export const teamMembers: TeamMember[] = [
  {
    name: "Dr. Sandesh Lamsal",
    role: "Founder",
    bio: "Nepal-born structural and bridge engineer building the foundation's mission around credible engineering, child safety, and community-centered access."
  },
  {
    name: "Technical Advisor Role",
    role: "Team Placeholder",
    bio: "Future advisor profile for bridge review, structural guidance, and resilient infrastructure planning."
  },
  {
    name: "Nepal Program Role",
    role: "Team Placeholder",
    bio: "Future local leadership profile for community coordination, project communication, and field support."
  },
  {
    name: "Partnerships Role",
    role: "Team Placeholder",
    bio: "Future role for donor relations, institutional partnerships, and long-term supporter stewardship."
  }
];

export const projectFilters: ProjectFilter[] = ["All", "Planned", "In Progress", "Completed"];

// Update project data and replace placeholder image paths here as real field information becomes available.
export const projects: Project[] = [
  {
    name: "Nepal Pilot Bridge Initiative",
    location: "Rural Nepal",
    status: "Planned",
    summary: "Flagship pilot concept focused on a high-risk school and community crossing where safer year-round passage could transform daily life.",
    focus: "Pilot bridge development",
    image: "/images/project-pilot.svg",
    imageAlt: "Placeholder illustration of a pilot pedestrian bridge concept in Nepal"
  },
  {
    name: "Dolakha School Route Assessment",
    location: "Dolakha District, Nepal",
    status: "In Progress",
    summary: "Early route review and community listening around a crossing that affects school attendance and seasonal movement.",
    focus: "School access assessment",
    image: "/images/school-route.svg",
    imageAlt: "Placeholder illustration of children walking a mountain school route"
  },
  {
    name: "Karnali Community Access Mapping",
    location: "Karnali Province, Nepal",
    status: "Planned",
    summary: "Placeholder project mapping villages, river barriers, and community priorities for future crossing interventions.",
    focus: "Access mapping",
    image: "/images/mountain-map.svg",
    imageAlt: "Placeholder illustration of mountain terrain and access routes"
  },
  {
    name: "Seti Crossing Safety Upgrade",
    location: "Far-Western Nepal",
    status: "Completed",
    summary: "Placeholder example of route-side safety improvements and maintenance support around an existing community crossing.",
    focus: "Crossing safety improvements",
    image: "/images/bridge-community.svg",
    imageAlt: "Placeholder illustration of a bridge connecting a rural community"
  },
  {
    name: "Monsoon Resilience Access Plan",
    location: "Mid-Western Hills, Nepal",
    status: "In Progress",
    summary: "Community planning and preparedness concept focused on seasonal river risk, route signage, and safer movement during high water.",
    focus: "Resilience planning",
    image: "/images/hero-crossing.svg",
    imageAlt: "Placeholder illustration of a dangerous rural river crossing"
  },
  {
    name: "Bridge Stewardship Training Model",
    location: "Central Nepal",
    status: "Completed",
    summary: "Placeholder training concept for local stewardship groups responsible for routine checks, reporting, and long-term crossing care.",
    focus: "Community stewardship",
    image: "/images/bridge-community.svg",
    imageAlt: "Placeholder illustration of a bridge and surrounding rural landscape"
  }
];

export const involvementOptions: InvolvementOption[] = [
  {
    title: "Volunteer",
    description: "Support research, communications, fundraising, design, or technical problem-solving that helps move dangerous crossings toward action.",
    points: ["Remote and future field-based opportunities", "Technical and non-technical pathways", "Project, campaign, and advisory support"],
    icon: "volunteer"
  },
  {
    title: "Partner",
    description: "Collaborate as an NGO, school network, engineering group, local institution, or community-centered organization committed to safe access.",
    points: ["Community-first planning", "Shared learning and accountability", "Room for long-term collaboration"],
    icon: "partner"
  },
  {
    title: "Sponsor",
    description: "Fund specific project phases, pilot preparation, route assessments, or program-building needs through philanthropic or institutional support.",
    points: ["Clear mission alignment", "Donor-ready storytelling", "Expandable recognition and reporting"],
    icon: "sponsor"
  },
  {
    title: "Donate",
    description: "Give to help transform professional engineering knowledge into safer crossings for children, families, and rural communities.",
    points: ["One-time or recurring support", "Future project-specific giving paths", "Built for Stripe or PayPal integration later"],
    icon: "donate"
  }
];

export const faqItems: FAQItem[] = [
  {
    question: "What kinds of projects does Safe Crossing Foundation support?",
    answer: "The foundation focuses on safe crossing solutions that improve school access, healthcare access, and everyday mobility for rural communities facing dangerous river routes."
  },
  {
    question: "Why is Nepal the starting point?",
    answer: "The foundation begins in Nepal because the mission is rooted in Dr. Sandesh Lamsal's lived awareness of rural access challenges there, along with a strong desire to give back through engineering."
  },
  {
    question: "Are donations used only for bridge construction?",
    answer: "No. Support may also help fund route assessments, community consultation, design review, stewardship planning, and the operational work needed to deliver responsible projects."
  },
  {
    question: "Will there be ways to volunteer or partner more formally later?",
    answer: "Yes. This site is structured to support future volunteer intake, partner workflows, donor reporting, and project-specific engagement."
  }
];

// Update donation tiers and payment provider messaging here before integrating Stripe or PayPal.
export const donationTiers: DonationTier[] = [
  {
    amount: "$25",
    title: "School Journey Support",
    description: "Help fund the early outreach, documentation, and planning work that keeps children at the center of project decisions.",
    impact: "Supports the groundwork behind safer school access."
  },
  {
    amount: "$100",
    title: "Community Access Fund",
    description: "Contribute to route assessment, local coordination, and the listening process that shapes trustworthy crossing solutions.",
    impact: "Helps move a high-risk crossing from concern to active planning.",
    featured: true
  },
  {
    amount: "$500",
    title: "Bridge Planning Gift",
    description: "Support technical review, design preparation, and the practical bridge planning needed before implementation can begin.",
    impact: "Strengthens the engineering and community foundation of a future crossing."
  },
  {
    amount: "$2,500",
    title: "Pilot Project Catalyst",
    description: "Help accelerate a featured pilot through assessment, engagement, engineering coordination, and fundraising momentum.",
    impact: "Creates meaningful traction toward a launch-ready crossing project."
  }
];

export const donationUses = [
  "Field listening, route assessment, and community consultation before design decisions are made.",
  "Engineering review, concept planning, and project development for safer bridge access.",
  "School access support where children's attendance depends on the safety of a crossing.",
  "Stewardship, maintenance planning, and resilience work that protect crossings long term."
];

export const monthlyGivingReasons = [
  "Monthly support helps cover the less visible work that makes bridge projects credible: coordination, assessment, technical preparation, and reporting.",
  "Recurring giving also helps the foundation stay responsive when a promising crossing opportunity or local partnership needs timely support.",
  "As the organization grows, monthly donors can become the steady base that carries projects from early planning into lasting implementation."
];

// Update contact details and social links here before launch.
export const contactDetails = {
  email: "contact@safecrossingfoundation.org",
  phone: "+1 (000) 000-0000",
  address: "U.S. mailing address placeholder",
  regionalOffice: "Kathmandu coordination placeholder"
};

export const socialLinks: SocialLink[] = [
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "YouTube", href: "#" }
];
