/**
 * Single source of truth for Skyboom Ghana Limited.
 *
 * The NAP (Name, Address, Phone) here is the canonical business record. Every
 * page, footer, contact block and JSON-LD payload reads from this file so the
 * citation stays byte-identical across the whole site — a direct local-SEO
 * ranking signal.
 */

export const site = {
  name: 'Skyboom Ghana Limited',
  shortName: 'Skyboom',
  legalName: 'Skyboom Ghana Limited',
  founded: '2017',
  // The canonical production origin. Keep in sync with `site` in astro.config.mjs.
  url: 'https://www.skyboomgh.com',
  logo: '/logo.svg',
  ogImage: '/og-image.png',
  email: 'info@skyboomgh.com',
  tagline: 'Telecom Infrastructure Built to Last',
  description:
    'Skyboom Ghana Limited is a 100% Ghanaian-owned telecom services provider in Accra, building network infrastructure across Ghana and West Africa with a focus on quality, safety and efficiency.',
} as const;

/** Canonical NAP — do not edit these strings casually; they must match every citation. */
export const nap = {
  name: 'Skyboom Ghana Limited',
  phoneDisplay: '+233 (0) 245 144 844',
  // E.164 for tel: links and JSON-LD
  phoneE164: '+233245144844',
  streetAddress: 'Agba We Road, Haymill Close, Tse-Addo',
  locality: 'Accra',
  region: 'Greater Accra',
  country: 'Ghana',
  countryCode: 'GH',
  postalCode: '',
  // Approximate coordinates for Tse-Addo, Accra — used for JSON-LD geo + map.
  geo: {
    latitude: 5.5714,
    longitude: -0.1353,
  },
} as const;

export const hours = {
  display: 'Mon–Sat 8:00–17:30 · Sunday closed',
  // Schema.org openingHours specification format
  spec: [
    {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '17:30',
    },
  ],
} as const;

export const social = {
  linkedin: '',
  facebook: '',
} as const;

export type Service = {
  slug: string;
  title: string;
  /** Short label for nav/cards */
  short: string;
  /** One-line summary for cards and meta */
  summary: string;
  /** ~50–60 char page <title> */
  seoTitle: string;
  /** ~150–160 char meta description */
  seoDescription: string;
  /** Lucide-style icon key rendered by the Icon component */
  icon: string;
  /** Rich body sections for the dedicated service page */
  intro: string;
  approach: string[];
  whyItMatters: string;
  /** Bullet capabilities shown on the page */
  capabilities: string[];
};

export const services: Service[] = [
  {
    slug: 'network-infrastructure-deployment',
    title: 'Network Infrastructure Deployment',
    short: 'Network Deployment',
    summary:
      'End-to-end rollout of mobile and fixed network infrastructure across Ghana — from site build to on-air.',
    seoTitle: 'Network Infrastructure Deployment in Ghana | Skyboom',
    seoDescription:
      'Skyboom deploys mobile and fixed telecom network infrastructure across Ghana and West Africa — turnkey site build, integration and on-air handover with rigorous QA.',
    icon: 'network',
    intro:
      'Network infrastructure deployment is the disciplined, end-to-end process of turning a network design into live, revenue-ready coverage. Skyboom Ghana Limited delivers turnkey deployment for mobile network operators, tower companies and enterprises — from greenfield and rooftop site builds through equipment integration, commissioning and on-air handover.',
    approach: [
      'Detailed site surveys and design validation before a single bolt is torqued, so builds match RF and transmission plans.',
      'Coordinated civil, power, and telecom workstreams under one project manager to keep multi-site rollouts on schedule.',
      'Structured commissioning, integration and drive-test acceptance so every site meets operator KPIs before handover.',
      'Full as-built documentation and asset registers that make long-term operations and audits straightforward.',
    ],
    whyItMatters:
      'For operators expanding coverage in Ghana and across West Africa, deployment speed and build quality decide how quickly a site starts earning and how little it costs to maintain. Skyboom’s single-team model reduces interface risk between civil, power and telecom crews, shortening time-to-air while protecting quality and safety.',
    capabilities: [
      'Greenfield, rooftop and street-pole site builds',
      'RAN, transmission and power integration',
      'Multi-site rollout project management',
      'Commissioning, integration and drive-test acceptance',
      'As-built documentation and asset handover',
    ],
  },
  {
    slug: 'telecom-equipment-installation',
    title: 'Telecom Equipment Installation',
    short: 'Equipment Installation',
    summary:
      'Precision installation of RAN, transmission and power equipment from leading global manufacturers.',
    seoTitle: 'Telecom Equipment Installation Ghana | Skyboom',
    seoDescription:
      'Certified telecom equipment installation across Ghana. Skyboom installs and integrates RAN, transmission and power hardware from leading manufacturers to operator standards.',
    icon: 'server',
    intro:
      'Telecom equipment installation demands precision, correct grounding, and strict adherence to manufacturer specifications. Skyboom’s crews install and integrate radio access, transmission and power equipment from the world’s leading telecom manufacturers — mounted, cabled, labelled and commissioned to operator and OEM standards.',
    approach: [
      'Installation to OEM and operator method statements, with torque, grounding and cabling done right the first time.',
      'Experience across the major manufacturers’ platforms, reducing rework and integration surprises.',
      'Rigorous testing and labelling so faults are fast to isolate and future upgrades are simple.',
      'Health-and-safety-led working at height and around live power.',
    ],
    whyItMatters:
      'Poorly installed equipment is the hidden source of chronic site faults, warranty disputes and repeat truck-rolls. By installing to manufacturer specification and documenting every connection, Skyboom protects your OEM warranties and keeps West African sites stable in demanding climate and power conditions.',
    capabilities: [
      'RAN and baseband installation',
      'Transmission and microwave hardware',
      'DC power, rectifiers and battery banks',
      'Grounding, bonding and lightning protection',
      'Structured cabling, labelling and testing',
    ],
  },
  {
    slug: 'wireless-and-fibre-optic-solutions',
    title: 'Wireless & Fibre Optic Solutions',
    short: 'Wireless & Fibre',
    summary:
      'Converged wireless and fibre connectivity engineered for capacity, reach and reliability.',
    seoTitle: 'Wireless & Fibre Optic Solutions in Ghana | Skyboom',
    seoDescription:
      'Skyboom engineers converged wireless and fibre optic connectivity across Ghana — high-capacity backhaul, access networks and last-mile links built for reliability.',
    icon: 'wifi',
    intro:
      'Modern networks blend wireless flexibility with fibre capacity. Skyboom designs and builds converged wireless and fibre optic solutions — combining microwave and radio links with high-capacity fibre backhaul and access to deliver the reach, throughput and resilience that Ghanaian operators and enterprises need.',
    approach: [
      'Solution design that picks the right mix of wireless and fibre for terrain, capacity and budget.',
      'High-capacity backhaul and access engineering with redundancy where it counts.',
      'Vendor-neutral integration across radio, microwave and optical platforms.',
      'Performance testing against throughput, latency and availability targets.',
    ],
    whyItMatters:
      'Ghana’s mix of dense urban zones and dispersed communities rarely suits a single medium. A converged wireless-plus-fibre approach lets clients extend high-capacity connectivity cost-effectively — reaching new customers faster without over-building.',
    capabilities: [
      'Converged wireless + fibre network design',
      'High-capacity microwave and fibre backhaul',
      'Access and last-mile connectivity',
      'Redundancy and resilience engineering',
      'Throughput and availability testing',
    ],
  },
  {
    slug: 'fibre-optics-installation',
    title: 'Fibre Optics Installation',
    short: 'Fibre Optics',
    summary:
      'Underground and aerial fibre optic cable installation, splicing and OTDR-tested termination.',
    seoTitle: 'Fibre Optics Installation in Ghana | Skyboom',
    seoDescription:
      'Professional fibre optics installation across Ghana — trenching, ducting, aerial and underground cabling, fusion splicing and OTDR-certified termination by Skyboom.',
    icon: 'fiber',
    intro:
      'Fibre optics installation is the physical backbone of high-speed connectivity. Skyboom installs underground and aerial fibre optic cable, builds duct routes, and delivers fusion-spliced, OTDR-certified terminations that meet the loss budgets modern networks depend on across Ghana and West Africa.',
    approach: [
      'Route survey, trenching, ducting and cable pulling done to protect fibre for the long term.',
      'Fusion splicing and connectorisation by trained technicians with calibrated tooling.',
      'OTDR and power-meter testing with certified results for every span.',
      'Accurate route records and splice documentation for fast future operations.',
    ],
    whyItMatters:
      'Fibre installed to a tight loss budget and documented properly can serve a network for decades. Cutting corners on trenching depth, bend radius or splicing shows up later as outages and expensive fault-finding — which is why Skyboom builds and certifies fibre to last.',
    capabilities: [
      'Trenching, ducting and directional boring',
      'Aerial and underground cable installation',
      'Fusion splicing and connectorisation',
      'OTDR and insertion-loss certification',
      'As-built route and splice documentation',
    ],
  },
  {
    slug: 'fibre-to-the-home',
    title: 'Fibre to the Home (FTTH)',
    short: 'FTTH',
    summary:
      'Full FTTH build-out — from feeder and distribution to the customer ONT and activation.',
    seoTitle: 'Fibre to the Home (FTTH) Deployment Ghana | Skyboom',
    seoDescription:
      'Skyboom delivers Fibre to the Home (FTTH) across Ghana — feeder, distribution and drop networks, splitters and ONT installation for reliable gigabit-ready broadband.',
    icon: 'home',
    intro:
      'Fibre to the Home brings gigabit-capable broadband directly to residences and businesses. Skyboom delivers complete FTTH build-out for Ghanaian internet service providers and property developers — feeder and distribution networks, optical splitters, customer drops and ONT installation, activated and ready for service.',
    approach: [
      'GPON/FTTH network design balancing split ratios, take-up and future capacity.',
      'Neat, resilient distribution and drop construction that scales as subscribers grow.',
      'Professional in-home ONT installation and activation for a clean customer experience.',
      'Testing and documentation that make subscriber support and expansion painless.',
    ],
    whyItMatters:
      'As demand for reliable home and business broadband grows across Ghana’s cities and new developments, FTTH is the technology that delivers it. A well-engineered FTTH network keeps per-subscriber costs down and gives providers headroom to add customers without rebuilds.',
    capabilities: [
      'GPON/FTTH network design',
      'Feeder, distribution and drop construction',
      'Optical splitter and cabinet deployment',
      'Customer ONT installation and activation',
      'Subscriber testing and documentation',
    ],
  },
  {
    slug: 'microwave-transmission',
    title: 'Microwave Transmission',
    short: 'Microwave Transmission',
    summary:
      'Licensed and unlicensed microwave links engineered, aligned and commissioned for carrier-grade backhaul.',
    seoTitle: 'Microwave Transmission Links Ghana | Skyboom',
    seoDescription:
      'Skyboom plans, installs and commissions microwave transmission links across Ghana — precise antenna alignment and carrier-grade backhaul with high availability.',
    icon: 'radio',
    intro:
      'Microwave transmission delivers high-capacity backhaul where fibre is impractical or too slow to deploy. Skyboom plans, installs, aligns and commissions licensed and unlicensed microwave links across Ghana — engineered link budgets, precise antenna alignment and carrier-grade availability.',
    approach: [
      'Path and link-budget planning that accounts for terrain, rain fade and interference.',
      'Accurate antenna installation and alignment for maximum signal and margin.',
      'Commissioning and performance validation against availability targets.',
      'Documentation and monitoring integration for proactive operations.',
    ],
    whyItMatters:
      'In West Africa, microwave links are often the fastest way to connect a new site or bridge a fibre gap. Getting link budgets and alignment right — with proper allowance for tropical rain fade — is the difference between a link that holds five-nines availability and one that drops in every storm.',
    capabilities: [
      'Microwave path and link-budget planning',
      'Licensed and unlicensed link deployment',
      'Precision antenna installation and alignment',
      'Commissioning and availability testing',
      'Monitoring and documentation handover',
    ],
  },
  {
    slug: 'civil-works',
    title: 'Civil Works',
    short: 'Civil Works',
    summary:
      'Telecom civil engineering — foundations, towers, shelters, trenching and site infrastructure built to standard.',
    seoTitle: 'Telecom Civil Works & Site Construction Ghana | Skyboom',
    seoDescription:
      'Skyboom delivers telecom civil works across Ghana — tower foundations, shelters, trenching, ducting and site infrastructure engineered for durability and safety.',
    icon: 'construction',
    intro:
      'Every telecom site rests on solid civil works. Skyboom delivers the foundations, towers, shelters, access and groundworks that carry a network — engineered and constructed to standard, on ground that ranges from coastal Tema to inland Ghana, and built to withstand the local climate for the long term.',
    approach: [
      'Geotechnical-informed foundation and tower design for stable, code-compliant structures.',
      'Quality-controlled construction of shelters, platforms, fencing and access.',
      'Trenching, ducting and cable-route civils coordinated with fibre and power teams.',
      'Environmental and safety management throughout construction.',
    ],
    whyItMatters:
      'Civil defects are the most expensive to fix once equipment is live. By engineering foundations and structures properly for local soil and weather from the start, Skyboom prevents the settlement, corrosion and drainage problems that otherwise threaten uptime years later.',
    capabilities: [
      'Tower and equipment foundations',
      'Shelters, platforms and site fencing',
      'Trenching, ducting and cable routes',
      'Access roads and hardstanding',
      'Drainage, earthing and site finishing',
    ],
  },
  {
    slug: 'server-room-and-data-center-design',
    title: 'Server Room / Data Center Design',
    short: 'Data Center Design',
    summary:
      'Design and build of resilient server rooms and data centres — power, cooling, cabling and security.',
    seoTitle: 'Server Room & Data Center Design in Ghana | Skyboom',
    seoDescription:
      'Skyboom designs and builds resilient server rooms and data centres in Ghana — structured cabling, redundant power and cooling, and physical security for uptime.',
    icon: 'database',
    intro:
      'A well-designed server room or data centre keeps critical systems online. Skyboom designs and builds resilient facilities for Ghanaian enterprises, operators and institutions — structured cabling, redundant power and cooling, fire protection and physical security, engineered for uptime in local grid and climate conditions.',
    approach: [
      'Requirements-led design covering power, cooling, space and growth.',
      'Redundant power (UPS and generator) and precision cooling for reliable uptime.',
      'Structured cabling, containment and clear labelling for manageable operations.',
      'Fire detection, access control and monitoring for a secure facility.',
    ],
    whyItMatters:
      'Ghana’s grid reliability and ambient heat make redundancy and cooling design non-negotiable for any serious server room. Getting power and cooling headroom right from day one avoids the thermal shutdowns and outages that unplanned facilities suffer — and leaves room to grow.',
    capabilities: [
      'Server room and data centre design',
      'Redundant UPS, generator and DC power',
      'Precision cooling and airflow management',
      'Structured cabling and containment',
      'Fire suppression, access control and monitoring',
    ],
  },
  {
    slug: 'maintenance-and-support',
    title: 'Maintenance & Support',
    short: 'Maintenance & Support',
    summary:
      'Preventive and corrective maintenance with SLA-backed field support that keeps networks online.',
    seoTitle: 'Telecom Maintenance & Support Services Ghana | Skyboom',
    seoDescription:
      'Skyboom provides preventive and corrective telecom maintenance across Ghana — SLA-backed field support, spares management and rapid fault response to protect uptime.',
    icon: 'wrench',
    intro:
      'Networks earn their return over years of reliable operation — and that depends on disciplined maintenance. Skyboom provides preventive and corrective maintenance and SLA-backed field support across Ghana, keeping sites, fibre and facilities online with rapid response and structured operations.',
    approach: [
      'Preventive maintenance schedules that catch problems before they cause outages.',
      'SLA-backed corrective response with clear escalation and reporting.',
      'Spares and logistics management so the right part is on site fast.',
      'Performance reporting that turns maintenance data into better decisions.',
    ],
    whyItMatters:
      'In a region where a single fault can take a site off-air and hit revenue, response time and preventive discipline matter as much as the original build. Skyboom’s maintenance keeps assets performing and extends their working life — protecting the investment made in deploying them.',
    capabilities: [
      'Preventive maintenance programmes',
      'SLA-backed corrective and emergency response',
      'Fibre and site fault management',
      'Spares and logistics management',
      'Performance and SLA reporting',
    ],
  },
];

export const differentiators = [
  {
    title: 'Manufacturer Experience',
    body: 'Hands-on experience with leading global telecom equipment manufacturers means fewer integration surprises and installations that protect your OEM warranties.',
    icon: 'award',
  },
  {
    title: 'Financial Stability',
    body: 'The financial capacity to partner-finance projects lets clients move on infrastructure now and structure payment around delivery milestones.',
    icon: 'shield',
  },
  {
    title: 'Health & Safety First',
    body: 'A strong, embedded Health & Safety culture protects our crews, your assets and the communities we build in — on every site, every day.',
    icon: 'hardhat',
  },
  {
    title: '100% Ghanaian-Owned',
    body: 'Established in 2017 and wholly Ghanaian-owned, we combine local knowledge of Ghana and West Africa with international engineering standards.',
    icon: 'flag',
  },
];

export const stats = [
  { value: 2017, suffix: '', label: 'Established', prefix: 'Est. ' },
  { value: 100, suffix: '%', label: 'Ghanaian-owned' },
  { value: 9, suffix: '', label: 'Core service lines' },
  { value: 24, suffix: '/7', label: 'SLA-backed support' },
];

export const faqs = [
  {
    q: 'What services does Skyboom Ghana Limited provide?',
    a: 'Skyboom provides end-to-end telecom infrastructure services in Ghana: network infrastructure deployment, telecom equipment installation, wireless and fibre optic solutions, fibre optics installation, Fibre to the Home (FTTH), microwave transmission, civil works, server room and data centre design, and maintenance and support.',
  },
  {
    q: 'Where is Skyboom based and what areas do you cover?',
    a: 'Skyboom Ghana Limited is based in Tse-Addo, Accra, in the Greater Accra Region. We deliver telecom infrastructure projects across Ghana and the wider West African region.',
  },
  {
    q: 'Is Skyboom a Ghanaian-owned company?',
    a: 'Yes. Skyboom Ghana Limited is 100% Ghanaian-owned and was established in 2017, combining local knowledge with international engineering, quality and safety standards.',
  },
  {
    q: 'Can Skyboom help finance a telecom infrastructure project?',
    a: 'Yes. Skyboom has the financial stability to partner-finance projects, allowing clients to proceed with critical infrastructure and structure payment around agreed delivery milestones.',
  },
  {
    q: 'Which telecom equipment manufacturers do you work with?',
    a: 'Our teams have hands-on experience installing and integrating equipment from the leading global telecom manufacturers. We install to OEM and operator specifications to protect warranties and ensure long-term reliability.',
  },
  {
    q: 'How do I request a quote or start a project?',
    a: 'Call us on +233 (0) 245 144 844 or use the contact form on our website. Share your project scope and timeline and our team will respond to arrange a site survey or scoping discussion.',
  },
];
