export const departments = [
  "Operations",
  "Finance",
  "Customer Success",
  "People Operations",
] as const;
export type Department = (typeof departments)[number];
export type Workflow = {
  id: string;
  name: string;
  description: string;
  owner: string;
  initials: string;
  department: Department;
  runs: number;
  status: "Active" | "Draft" | "Paused";
  updated: string;
  completion: string;
  success: number;
};
export const workflows: Workflow[] = [
  {
    id: "contract",
    name: "Contract approval",
    description: "From signed request to a clean handoff.",
    owner: "Alex Morgan",
    initials: "AM",
    department: "Finance",
    runs: 248,
    status: "Active",
    updated: "2 hours ago",
    completion: "4.2 hrs",
    success: 99.6,
  },
  {
    id: "vendor",
    name: "Vendor onboarding",
    description: "Collect documents, verify details, get approved.",
    owner: "Jordan Ellis",
    initials: "JE",
    department: "Operations",
    runs: 186,
    status: "Active",
    updated: "4 hours ago",
    completion: "3.8 hrs",
    success: 98.9,
  },
  {
    id: "customer",
    name: "Customer onboarding",
    description: "Move every new account toward first value.",
    owner: "Sam Rivera",
    initials: "SR",
    department: "Customer Success",
    runs: 412,
    status: "Active",
    updated: "Yesterday",
    completion: "2.6 hrs",
    success: 99.2,
  },
  {
    id: "employee",
    name: "New employee onboarding",
    description: "Make day one feel like you planned for it.",
    owner: "Taylor Brooks",
    initials: "TB",
    department: "People Operations",
    runs: 94,
    status: "Active",
    updated: "Yesterday",
    completion: "5.1 hrs",
    success: 100,
  },
  {
    id: "escalation",
    name: "Customer escalation",
    description: "Route the right issue to the right owner.",
    owner: "Sam Rivera",
    initials: "SR",
    department: "Customer Success",
    runs: 132,
    status: "Paused",
    updated: "2 days ago",
    completion: "1.4 hrs",
    success: 97.7,
  },
  {
    id: "software",
    name: "Software purchasing",
    description: "Check budget and access before buying.",
    owner: "Alex Morgan",
    initials: "AM",
    department: "Finance",
    runs: 0,
    status: "Draft",
    updated: "3 days ago",
    completion: "—",
    success: 0,
  },
];
export type ApprovalStatus =
  "Pending" | "Approved" | "Changes requested" | "Rejected";
export type Approval = {
  id: string;
  title: string;
  requester: string;
  initials: string;
  department: Department;
  amount: number;
  submitted: string;
  detail: string;
  status: ApprovalStatus;
};
export const approvals: Approval[] = [
  {
    id: "RQ-1042",
    title: "Vendor contract",
    requester: "Jordan Ellis",
    initials: "JE",
    department: "Operations",
    amount: 12400,
    submitted: "42 min ago",
    detail:
      "Annual agreement with fictional vendor Northline Studio for design production. Budget owner has confirmed the Operations allocation. Legal review is complete.",
    status: "Pending",
  },
  {
    id: "RQ-1041",
    title: "Software purchase",
    requester: "Taylor Brooks",
    initials: "TB",
    department: "People Operations",
    amount: 2400,
    submitted: "1 hour ago",
    detail:
      "12 annual licenses for a fictional learning platform. Requested for the manager development program. Annual billing begins after approval.",
    status: "Pending",
  },
  {
    id: "RQ-1040",
    title: "Discount exception",
    requester: "Sam Rivera",
    initials: "SR",
    department: "Customer Success",
    amount: 1800,
    submitted: "2 hours ago",
    detail:
      "One-time renewal credit for fictional account Fernbridge Labs. Request is within the 15% exception threshold and requires Finance sign-off.",
    status: "Pending",
  },
  {
    id: "RQ-1039",
    title: "Travel budget",
    requester: "Alex Morgan",
    initials: "AM",
    department: "Finance",
    amount: 3200,
    submitted: "3 hours ago",
    detail:
      "Travel and accommodation for the quarterly planning workshop. Three attendees; receipts will be attached after travel.",
    status: "Pending",
  },
  {
    id: "RQ-1038",
    title: "Campaign spend",
    requester: "Jordan Ellis",
    initials: "JE",
    department: "Operations",
    amount: 6500,
    submitted: "Yesterday",
    detail:
      "Four-week concept launch campaign. Spend is allocated to creative production and a small distribution test.",
    status: "Approved",
  },
];
export type Step = {
  id: string;
  title: string;
  type: "Trigger" | "Approval" | "Action";
  owner: string;
  detail: string;
  enabled: boolean;
};
export const initialSteps: Step[] = [
  {
    id: "submitted",
    title: "Contract submitted",
    type: "Trigger",
    owner: "Requester",
    detail: "Starts when a contract request is submitted.",
    enabled: true,
  },
  {
    id: "legal",
    title: "Legal review",
    type: "Approval",
    owner: "Jordan Ellis",
    detail: "Review terms, scope, and renewal conditions.",
    enabled: true,
  },
  {
    id: "finance",
    title: "Finance approval",
    type: "Approval",
    owner: "Alex Morgan",
    detail: "Confirm budget allocation and payment terms.",
    enabled: true,
  },
  {
    id: "crm",
    title: "Create CRM record",
    type: "Action",
    owner: "Automation",
    detail: "Simulate creating a record in the concept CRM connection.",
    enabled: true,
  },
  {
    id: "notify",
    title: "Notify onboarding team",
    type: "Action",
    owner: "Automation",
    detail: "Simulate sending the approved handoff to the team.",
    enabled: true,
  },
];
export const activity = [
  {
    name: "Customer onboarding",
    text: "Completed all 6 steps",
    time: "4 min ago",
    initials: "SR",
    kind: "success",
  },
  {
    name: "Vendor contract",
    text: "Waiting for Finance approval",
    time: "12 min ago",
    initials: "JE",
    kind: "warning",
  },
  {
    name: "New employee onboarding",
    text: "Workspace access provisioned",
    time: "28 min ago",
    initials: "TB",
    kind: "success",
  },
  {
    name: "Contract approval",
    text: "Legal review completed",
    time: "42 min ago",
    initials: "AM",
    kind: "success",
  },
];
export const volume = [
  36, 49, 42, 68, 57, 30, 24, 52, 64, 58, 82, 74, 38, 32, 66, 71, 64, 92, 86,
  45, 38, 72, 84, 76, 104, 96, 56, 48,
];
export const throughput = [
  { name: "Operations", value: 186, color: "#526f5f" },
  { name: "Finance", value: 248, color: "#95bd72" },
  { name: "Customer Success", value: 544, color: "#c4f566" },
  { name: "People Operations", value: 94, color: "#dfe8d4" },
];
export const capabilities = [
  {
    icon: "workflow",
    title: "Workflow builder",
    text: "Turn the way your team works into a process everyone can follow.",
  },
  {
    icon: "check",
    title: "Approvals with context",
    text: "Give every decision a clear owner, the right details, and a deadline.",
  },
  {
    icon: "zap",
    title: "Less work about work",
    text: "Automate the routing, reminders, and handoffs that slow teams down.",
  },
  {
    icon: "chart",
    title: "Operational visibility",
    text: "See where work moves, where it waits, and what needs attention.",
  },
  {
    icon: "users",
    title: "Connected workspaces",
    text: "Keep teams accountable without creating another information silo.",
  },
  {
    icon: "plug",
    title: "A connected toolset",
    text: "Explore how your existing tools could fit into one operating layer.",
  },
] as const;
export const useCases = [
  {
    name: "Operations",
    short: "Keep the whole business moving.",
    description:
      "Standardize vendor onboarding, route requests to the right owner, and give leadership a clear view of work in motion.",
    workflow: "Vendor onboarding",
    icon: "layers",
  },
  {
    name: "Finance",
    short: "Fewer follow-ups. Clearer decisions.",
    description:
      "Bring purchase requests, contract reviews, and budget exceptions into a consistent approval process.",
    workflow: "Contract approval",
    icon: "wallet",
  },
  {
    name: "Customer Success",
    short: "Make every handoff count.",
    description:
      "Coordinate onboarding and escalations across teams, with context carried from the first request to the final resolution.",
    workflow: "Customer onboarding",
    icon: "heart",
  },
  {
    name: "People Operations",
    short: "A better day one starts here.",
    description:
      "Coordinate access, equipment, paperwork, and manager check-ins before a new hire walks through the door.",
    workflow: "New employee onboarding",
    icon: "users",
  },
] as const;
export const plans = [
  {
    name: "Starter",
    price: 49,
    annual: 39,
    description: "Build your first repeatable systems.",
    features: [
      "5 active workflows",
      "Up to 10 workspace members",
      "1,000 automation runs / month",
      "Approval queues",
      "30-day activity history",
    ],
  },
  {
    name: "Growth",
    price: 149,
    annual: 119,
    description: "Connect teams as the business grows.",
    features: [
      "25 active workflows",
      "Up to 50 workspace members",
      "10,000 automation runs / month",
      "Workflow analytics",
      "Department workspaces",
      "Conditional approval routing",
    ],
  },
  {
    name: "Scale",
    price: 349,
    annual: 279,
    description: "Run complex operations with clarity.",
    features: [
      "Unlimited active workflows",
      "Up to 200 workspace members",
      "50,000 automation runs / month",
      "Advanced operational reporting",
      "Custom workflow templates",
      "Workspace permissions",
    ],
  },
];
export const campaigns = [
  {
    id: "systems",
    eyebrow: "BETTER SYSTEMS. BETTER BUSINESS.",
    title: "Your team isn’t disorganized.",
    accent: "Your systems are.",
    sub: "Build operations that scale.",
    format: "LinkedIn · 1200 × 1200",
    theme: "dark",
    motif: "grid",
  },
  {
    id: "growth",
    eyebrow: "BUILT FOR YOUR NEXT STAGE",
    title: "50 employees: spreadsheets work.",
    accent: "250 employees: they don’t.",
    sub: "Growth shouldn’t break your operations.",
    format: "Paid social · 1200 × 1200",
    theme: "lime",
    motif: "growth",
  },
  {
    id: "handoff",
    eyebrow: "LESS CHASING. MORE MOVING.",
    title: "17 messages. 4 spreadsheets. 3 approvals.",
    accent: "1 forgotten request.",
    sub: "Or one RelayGrid workflow.",
    format: "Display · 1600 × 900",
    theme: "light",
    motif: "flow",
  },
  {
    id: "meetings",
    eyebrow: "MAKE WORK FLOW",
    title: "Growing companies don’t need more meetings.",
    accent: "They need better systems.",
    sub: "Operations that scale with you.",
    format: "LinkedIn · 1200 × 1200",
    theme: "dark",
    motif: "grid",
  },
  {
    id: "approvals",
    eyebrow: "A CLEAR PATH TO YES",
    title: "Still managing approvals manually?",
    accent: "There’s a workflow for that.",
    sub: "Right context. Right owner. Next step.",
    format: "Display · 1600 × 900",
    theme: "lime",
    motif: "flow",
  },
  {
    id: "launch",
    eyebrow: "INTRODUCING RELAYGRID",
    title: "Automation for the way",
    accent: "modern teams operate.",
    sub: "One operating layer. Every team in sync.",
    format: "Launch · 1600 × 900",
    theme: "dark",
    motif: "growth",
  },
] as const;
export const emails = [
  {
    id: "announcement",
    label: "01 / Product announcement",
    subject: "Your operations just got an upgrade.",
    preheader: "Meet the operating layer for your next stage of growth.",
    eyebrow: "MEET RELAYGRID",
    title: "Less chasing. More moving.",
    body: "Your team has grown. Now your systems can catch up. RelayGrid brings workflows, approvals, and operational visibility into one clear place.",
    cta: "Explore the product",
    href: "/product",
    points: [
      "Give every process a clear path.",
      "Keep approvals moving with context.",
      "See what needs your attention.",
    ],
  },
  {
    id: "intelligence",
    label: "02 / Feature launch",
    subject: "Introducing Workflow Intelligence",
    preheader: "Find the waiting time hiding in your workflows.",
    eyebrow: "A CLEARER VIEW OF WORK",
    title: "See where work slows down.",
    body: "A finished task tells part of the story. Workflow Intelligence shows the steps between: time in review, repeat handoffs, and where a process starts to wait.",
    cta: "Explore analytics",
    href: "/analytics",
    points: [
      "Compare completion time by workflow.",
      "Spot bottlenecks by stage.",
      "Prioritize the process worth fixing next.",
    ],
  },
  {
    id: "education",
    label: "03 / Lifecycle education",
    subject: "Three workflows slowing your team down",
    preheader: "Start with the repeatable work hiding in plain sight.",
    eyebrow: "THE OPERATIONS FIELD GUIDE",
    title: "Start with the work you repeat.",
    body: "You don’t need to rebuild every process at once. Start with the workflows that generate the most follow-ups, then give them an owner and a clear next step.",
    cta: "Find your first workflow",
    href: "/solutions",
    points: [
      "Purchases waiting for budget approval.",
      "New hires waiting for tool access.",
      "Customers waiting between team handoffs.",
    ],
  },
] as const;
export const money = (value: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
// Each workflow has its own template and editable step state.
const templateStep = (
  id: string,
  title: string,
  type: Step["type"],
  owner: string,
  detail: string,
): Step => ({ id, title, type, owner, detail, enabled: true });
export const workflowTemplates: Record<string, Step[]> = {
  contract: initialSteps,
  vendor: [
    templateStep(
      "vendor-request",
      "Vendor details submitted",
      "Trigger",
      "Requester",
      "Receive the vendor request and business purpose.",
    ),
    templateStep(
      "vendor-documents",
      "Collect vendor documents",
      "Action",
      "Jordan Ellis",
      "Collect tax details, scope, and the proposed agreement.",
    ),
    templateStep(
      "vendor-review",
      "Finance review",
      "Approval",
      "Alex Morgan",
      "Check payment terms and confirm the budget owner.",
    ),
    templateStep(
      "vendor-ready",
      "Notify purchasing owner",
      "Action",
      "Automation",
      "Simulate a ready-to-purchase handoff.",
    ),
  ],
  customer: [
    templateStep(
      "account",
      "New account created",
      "Trigger",
      "Requester",
      "Start when a new customer account is ready for onboarding.",
    ),
    templateStep(
      "owner",
      "Assign success owner",
      "Action",
      "Sam Rivera",
      "Assign an accountable owner for the first 30 days.",
    ),
    templateStep(
      "kickoff",
      "Schedule kickoff",
      "Action",
      "Sam Rivera",
      "Confirm goals, stakeholders, and the kickoff date.",
    ),
    templateStep(
      "handoff",
      "Send customer handoff",
      "Action",
      "Automation",
      "Simulate sending the account context to the delivery team.",
    ),
  ],
  employee: [
    templateStep(
      "offer",
      "Offer accepted",
      "Trigger",
      "Requester",
      "Start with a confirmed start date and manager.",
    ),
    templateStep(
      "access",
      "Request workspace access",
      "Action",
      "Taylor Brooks",
      "Identify the tools and permissions required for day one.",
    ),
    templateStep(
      "equipment",
      "Confirm equipment",
      "Approval",
      "Jordan Ellis",
      "Verify the equipment allocation and delivery details.",
    ),
    templateStep(
      "welcome",
      "Send day-one briefing",
      "Action",
      "Automation",
      "Simulate notifying the manager and new-hire coordinator.",
    ),
  ],
  escalation: [
    templateStep(
      "issue",
      "Customer issue escalated",
      "Trigger",
      "Requester",
      "Receive issue details and customer impact.",
    ),
    templateStep(
      "triage",
      "Triage severity",
      "Approval",
      "Sam Rivera",
      "Confirm priority and assign a resolution owner.",
    ),
    templateStep(
      "resolve",
      "Notify response team",
      "Action",
      "Automation",
      "Simulate routing the escalation with full context.",
    ),
  ],
  software: [
    templateStep(
      "purchase",
      "Purchase requested",
      "Trigger",
      "Requester",
      "Collect business purpose, license count, and expected cost.",
    ),
    templateStep(
      "budget",
      "Confirm software budget",
      "Approval",
      "Alex Morgan",
      "Review spend, duplication, and license ownership.",
    ),
    templateStep(
      "provision",
      "Notify access owner",
      "Action",
      "Automation",
      "Simulate a purchasing and provisioning handoff.",
    ),
  ],
};
export const totalRuns = volume.reduce((sum, value) => sum + value, 0);
