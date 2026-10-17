export type Project = {
  title: string
  field: string
  status: string
  summary: string
  note?: string
  stack: string[]
  href: string
  linkLabel: string
}

export type Website = {
  title: string
  kind: string
  summary: string
  href: string
  image?: string
}

export const profile = {
  email: 'titidintsako@gmail.com',
  github: 'https://github.com/titidintsako-bit',
  linkedin: 'https://www.linkedin.com/in/ntsako-titidi-7aa840375/',
}

export const projects: Project[] = [
  {
    title: 'Shaka',
    field: 'Agent tooling',
    status: 'In progress',
    summary: 'A local-first coding-agent harness in Python. I’m working on the tool loop, approvals, verification, and how a run can be inspected or resumed.',
    note: 'The linked GitHub repository is an earlier public version; my current local work has moved beyond it.',
    stack: ['Python', 'Agent harnesses', 'OpenTUI'],
    href: 'https://github.com/titidintsako-bit/shaka-agent',
    linkLabel: 'View earlier public version',
  },
  {
    title: 'NtsakoGPT',
    field: 'Machine learning',
    status: 'Source available',
    summary: 'A small GPT-style language model built from the transformer components upward, trained on Shakespeare. The project documents the model architecture and training approach.',
    stack: ['Python', 'PyTorch', 'Transformers'],
    href: 'https://github.com/titidintsako-bit/llm-from-scratch',
    linkLabel: 'View source',
  },
  {
    title: 'Fall Detection System',
    field: 'Computer vision',
    status: 'Source available',
    summary: 'A video pipeline for detecting falls across multiple people, combining pose estimation, tracking, and an LSTM-based sequence model.',
    stack: ['Python', 'YOLO11-Pose', 'LSTM'],
    href: 'https://github.com/titidintsako-bit/fall-detection-ml-project',
    linkLabel: 'View source',
  },
]

export const moreProjects = [
  {
    title: 'Axiom',
    summary: 'A TypeScript prototype that derives specifications and generates property-based tests.',
    href: 'https://github.com/titidintsako-bit/Axiom',
    linkLabel: 'View source',
  },
]

export const websites: Website[] = [
  {
    title: 'KAIRO',
    kind: 'Storefront template demo',
    summary: 'A sneaker storefront study with product choices built into the landing experience.',
    href: 'https://kairo-sneaker-template.vercel.app/',
    image: '/previews/kairo-live.webp',
  },
  {
    title: 'Astra Index',
    kind: 'Editorial template demo',
    summary: 'A space-themed editorial interface with a deliberately different visual language.',
    href: 'https://astra-index-template.vercel.app/',
    image: '/previews/astra-live.webp',
  },
  {
    title: 'Moya Architects',
    kind: 'Architecture studio template demo',
    summary: 'An architecture-studio interface study built around imagery and project-led storytelling.',
    href: 'https://moyaarchitects.vercel.app/',
    image: '/previews/moya-live.webp',
  },
  {
    title: 'Ndlovu Logistics',
    kind: 'Logistics website concept',
    summary: 'A logistics site study covering services, routes, safety, and the journey from enquiry to contact.',
    href: 'https://ndlovu-logistics.vercel.app/',
  },
  {
    title: 'Something Nutritious',
    kind: 'Uncommissioned website concept',
    summary: 'A meal-prep site concept with responsive imagery and a WhatsApp-first enquiry flow.',
    href: 'https://something-nutritious.vercel.app/',
  },
]
