export type ProjectStatus = "Planned" | "In Progress" | "Completed";
export type ProjectFilter = "All" | ProjectStatus;
export type PersonCategory = "Founder" | "Future Team" | "Advisors & Volunteers";

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

export type StorySection = {
  title: string;
  content: string;
};

export type TeamMember = {
  name: string;
  role: string;
  category: PersonCategory;
  photo: string;
  photoAlt: string;
  shortBio: string;
  fullStory: StorySection[];
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
  { href: "/people", label: "People" },
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

export const founderHomepageSummary =
  "Dr. Sandesh Lamsal is a Nepal-born structural and bridge engineer whose career has been shaped by both technical expertise and a deep awareness of rural access challenges. Growing up in Nepal, he saw how unsafe river crossings could stand between children and school, families and healthcare, and whole communities and opportunity. Safe Crossing Foundation was created to turn that awareness and his bridge engineering experience into practical humanitarian impact.";

export const peoplePageIntro = {
  title: "Meet the people behind the mission",
  description:
    "This page is designed to hold the deeper human stories behind Safe Crossing Foundation while keeping the rest of the website clean, focused, and mission-led."
};

// Add new people to this array as the organization grows.
export const teamMembers: TeamMember[] = [
  {
    name: "Dr. Sandesh Lamsal",
    role: "Founder",
    category: "Founder",
    photo: "/images/person-placeholder.svg",
    photoAlt: "Portrait placeholder for Dr. Sandesh Lamsal",
    shortBio:
      "Dr. Sandesh Lamsal is a Nepal-born structural and bridge engineer with a Ph.D. in structural engineering and professional bridge engineering experience in the United States.",
    fullStory: [
      {
        title: "Short Biography",
        content:
          "Growing up in Nepal, Sandesh understood early that geography could become danger. In many rural communities, rivers were not scenery alone. They were barriers to school, healthcare, work, and safety."
      },
      {
        title: "Background in Structural Engineering",
        content:
          "He pursued structural engineering with a focus on bridge systems, infrastructure, and the responsibilities that come with safe design. That path led to a Ph.D. in structural engineering and a professional bridge engineering career in the United States."
      },
      {
        title: "Motivation for Starting the Foundation",
        content:
          "As his technical experience deepened, so did the question of how engineering could serve communities still living without safe crossings. Safe Crossing Foundation was created to connect lived awareness in Nepal with practical engineering expertise that can help reduce daily risk."
      },
      {
        title: "Vision for Safe Crossing Foundation",
        content:
          "His vision is to build a credible humanitarian organization that helps communities move from dangerous improvisation to safe, resilient, community-centered access, beginning in Nepal and expanding to other underserved regions over time."
      }
    ]
  },
  {
    name: "Nepal Program Lead",
    role: "Future Team Member",
    category: "Future Team",
    photo: "/images/person-placeholder.svg",
    photoAlt: "Portrait placeholder for a future Nepal program lead",
    shortBio:
      "This future role will help coordinate local relationships, community communication, and project follow-through in Nepal.",
    fullStory: [
      {
        title: "Role in the Organization",
        content:
          "A Nepal-based program lead can help ensure the foundation's work stays responsive to local context, field realities, and community trust."
      }
    ]
  },
  {
    name: "Engineering Advisor",
    role: "Future Team Member",
    category: "Future Team",
    photo: "/images/person-placeholder.svg",
    photoAlt: "Portrait placeholder for a future engineering advisor",
    shortBio:
      "This future role will support technical review, concept development, and resilient bridge planning as projects mature.",
    fullStory: [
      {
        title: "Technical Support",
        content:
          "This role is intended for a professional who can help translate field needs into careful engineering review and practical project guidance."
      }
    ]
  },
  {
    name: "Partnerships Director",
    role: "Future Team Member",
    category: "Future Team",
    photo: "/images/person-placeholder.svg",
    photoAlt: "Portrait placeholder for a future partnerships director",
    shortBio:
      "This future role will strengthen donor stewardship, partnership development, and long-term supporter communication.",
    fullStory: [
      {
        title: "Partnership Development",
        content:
          "As the foundation grows, this role can help connect funders, institutions, and aligned collaborators to specific projects and strategic needs."
      }
    ]
  },
  {
    name: "Community Advisory Volunteer",
    role: "Advisor / Volunteer",
    category: "Advisors & Volunteers",
    photo: "/images/person-placeholder.svg",
    photoAlt: "Portrait placeholder for a future community advisory volunteer",
    shortBio:
      "Future advisory volunteers may help the foundation understand local priorities, cultural context, and the everyday realities that shape safe crossing decisions.",
    fullStory: [
      {
        title: "Why Advisors Matter",
        content:
          "Trusted advisors can help keep the work grounded in real community needs rather than assumptions made from a distance."
      }
    ]
  },
  {
    name: "Skilled Volunteer Network",
    role: "Advisors / Volunteers",
    category: "Advisors & Volunteers",
    photo: "/images/person-placeholder.svg",
    photoAlt: "Portrait placeholder for future skilled volunteers",
    shortBio:
      "Future volunteers may contribute research, communications, design, fundraising, and technical support to help the organization grow responsibly.",
    fullStory: [
      {
        title: "How Volunteers Can Help",
        content:
          "A skilled volunteer network can expand the foundation's capacity while preserving a clear focus on mission, clarity, and accountability."
      }
    ]
  }
];

export const founderProfile = teamMembers.find((member) => member.category === "Founder")!;

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
