
export enum Language {
  UA = 'UA',
  EN = 'EN'
}

export enum ViewMode {
  HERO = 'HERO',
  SCHEMA = 'SCHEMA',
  REPORT = 'REPORT',
  WAR_ROOM = 'WAR_ROOM',
  DECK = 'DECK',
  DASHBOARD = 'DASHBOARD'
}

export enum DocumentId {
  CHALLENGE = 'CHALLENGE',
  IMPERATIVE = 'IMPERATIVE',
  GOVERNANCE = 'GOVERNANCE',
  INFRASTRUCTURE = 'INFRASTRUCTURE',
  FINANCE = 'FINANCE',
  OPERATIONAL = 'OPERATIONAL',
  MONITORING = 'MONITORING',
  PARTNERS = 'PARTNERS'
}

export interface SchemaNode {
  id: string;
  title: string;
  highlight: string;
  icon: any; // Using string key for Lucide icon
  targetPage: number;
  points: string[];
}

export interface ReportPage {
  id: number;
  title: string;
  subtitle: string;
  body: string;
  bullets: string[];
  chartId?: string; 
  quote?: string;
  signature?: string;
}

export interface ConsortiumRole {
  org: string;
  role: string;
  logo: string;
}

export interface DocumentContent {
  navTitle: string;
  schema: {
    title: string;
    subtitle: string;
    centerNode: { 
      title: string; 
      subtitle: string; 
      description: string; 
      targetPage?: number;
      features?: { title: string; desc: string }[]; 
      consortiumRoles?: ConsortiumRole[];
    };
    nodes: SchemaNode[];
    opportunityNodes?: SchemaNode[]; 
  };
  report: {
    pages: ReportPage[];
  };
}

export interface WarRoomItem {
  id: string;
  title: string;
  subtitle: string;
  status: 'Development' | 'Active' | 'Critical Decision';
  description: string;
  keyProjects: string[];
  deployment: {
    name: string;
    icon?: string; // Emoji or icon key
    partners?: string[];
    beneficiaries?: string;
  }[];
}

export interface LocalizedContent {
  appNav: {
    cta: string;
    schemaLabel: string;
    reportLabel: string;
    nextDoc: string;
    prevDoc: string;
    backToSchema: string;
    startTour: string;
    readMore: string;
    viewOpportunity: string;
    viewProblem: string;
    close: string;
    warRoom: string;
    enterSpace: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    footer: string;
    description4to1?: string[];
    slogans?: string[];
  };
  docs: Record<DocumentId, DocumentContent>;
  charts: {
    [key: string]: string;
  };
  warRoom: {
    title: string;
    subtitle: string;
    matrixTitle: string;
    items: WarRoomItem[];
  }
}

export type Dictionary = Record<Language, LocalizedContent>;
