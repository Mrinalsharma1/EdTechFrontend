export interface TabItem {
    title: string;
    links: TabLink[];
  }

export interface TabLink {
    href: string; 
    text: string; 
}

export type SkillState = Record<string, {
  activePillIndex: number;
}>;
