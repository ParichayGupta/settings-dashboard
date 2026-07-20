import type { LucideIcon } from "lucide-react";

export interface NavSection {
  heading: string;
  items: NavItem[];
}

export interface FilterState {
  timeline: string;
  llm: string;
  sortBy: string;
}

export interface StatCardData {
  label: string;
  value: string;
  from: string;
  to: string;
}

export interface SolutionRow {
  sno: number;
  name: string;
  owner: string;
  sharedBy: string;
  conversations: string;
  users: number;
  lastEdited: string;
  cost: string;
}

export interface LLMCostPoint {
  time: string;
  gpt: number;
  gemini: number;
}

export interface ActivityPoint {
  time: string;
  value: number;
}

export interface TokenUsageSlice {
  name: string;
  value: number;
  color: string;
}

export interface NavItem {
  label: string;
  icon: LucideIcon;
}

export type TrendDirection = "up" | "down";

export interface ProductivityRow {
  icon: LucideIcon;
  iconBg: string;
  label: string;
  value: string;
  direction: TrendDirection;
  trend: string;
}

export interface CollaborationRow {
  label: string;
  value: number;
}


