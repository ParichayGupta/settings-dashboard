import {
  Home,
  Users,
  Link2,
  Database,
  Share2,
  Table2,
  LayoutGrid,
  Clock,
  FileText,
  Presentation,
} from "lucide-react";
import type {
  StatCardData,
  SolutionRow,
  LLMCostPoint,
  ActivityPoint,
  TokenUsageSlice,
  NavSection,
  ProductivityRow,
  CollaborationRow,
} from "@/assets/dashboard";

export const NAV_SECTIONS: NavSection[] = [
  {
    heading: "Marketplace",
    items: [
      { label: "Solutions", icon: Home },
      { label: "Agent", icon: Users },
      { label: "Tools & MCP", icon: Link2 },
    ],
  },
  {
    heading: "Knowledge Hub",
    items: [
      { label: "Dataset", icon: Database },
      { label: "Graph", icon: Share2 },
      { label: "Table", icon: Table2 },
    ],
  },
  {
    heading: "IKE.GAI Powered",
    items: [{ label: "AI Apps", icon: LayoutGrid }],
  },
];

export const STAT_CARDS: StatCardData[] = [
  { label: "Costing Till Date", value: "$50", from: "#7A6FD9", to: "#5645B5" },
  { label: "Tokens Used", value: "0.2B", from: "#4E8EF7", to: "#2E66E0" },
  { label: "Total Solutions", value: "05", from: "#B23FC7", to: "#7B2C9E" },
  { label: "Total Datasets Created", value: "03", from: "#C98AA8", to: "#A6647F" },
  { label: "Total Agents Created", value: "02", from: "#4791F0", to: "#2560D8" },
];

export const SOLUTIONS: SolutionRow[] = [
  { sno: 1, name: "Financial Agent", owner: "Prerna", sharedBy: "Prerna", conversations: "2,450", users: 12, lastEdited: "20/2/2026, 6:00PM, Fri", cost: "$60" },
  { sno: 2, name: "Procurement", owner: "Indresh", sharedBy: "Indresh", conversations: "1,980", users: 6, lastEdited: "20/2/2026, 6:00PM, Fri", cost: "$80" },
  { sno: 3, name: "Company Analysis", owner: "You", sharedBy: "--", conversations: "1,356", users: 8, lastEdited: "20/2/2026, 6:00PM, Fri", cost: "$80" },
  { sno: 4, name: "Procurement", owner: "You", sharedBy: "--", conversations: "1,102", users: 0, lastEdited: "20/2/2026, 6:00PM, Fri", cost: "$100" },
  { sno: 5, name: "Alpha Sense", owner: "Raunak", sharedBy: "Raunak", conversations: "866", users: 5, lastEdited: "20/2/2026, 6:00PM, Fri", cost: "$120" },
];

export const LLM_COST_DATA: LLMCostPoint[] = [
  { time: "8:00 AM", gpt: 55, gemini: 0 },
  { time: "9:00 AM", gpt: 40, gemini: 35 },
  { time: "10:00 AM", gpt: 35, gemini: 55 },
  { time: "11:00 AM", gpt: 30, gemini: 35 },
  { time: "12:00 PM", gpt: 28, gemini: 27 },
  { time: "1:00 PM", gpt: 28, gemini: 25 },
  { time: "2:00 PM", gpt: 20, gemini: 15 },
];

export const ACTIVITY_TREND_DATA: ActivityPoint[] = [
  { time: "8:00 AM", value: 45 },
  { time: "9:00 AM", value: 60 },
  { time: "10:00 AM", value: 78 },
  { time: "11:00 AM", value: 88 },
  { time: "12:00 PM", value: 82 },
  { time: "1:00 PM", value: 35 },
  { time: "2:00 PM", value: 40 },
  { time: "3:00 PM", value: 52 },
  { time: "4:00 PM", value: 60 },
  { time: "5:00 PM", value: 55 },
  { time: "6:00 PM", value: 48 },
  { time: "7:00 PM", value: 65 },
];

export const TOKEN_USAGE_DATA: TokenUsageSlice[] = [
  { name: "GPT 3.0", value: 90, color: "#B9A9F0" },
  { name: "Gemini", value: 10, color: "#5B4FC4" },
];



export const PRODUCTIVITY_ROWS: ProductivityRow[] = [
  {
    icon: Clock,
    iconBg: "bg-orange-50 text-orange-500 dark:bg-orange-900/20",
    label: "Time Spend",
    value: "84 hrs",
    direction: "up",
    trend: "15.2 %",
  },
  {
    icon: FileText,
    iconBg: "bg-blue-50 text-blue-500 dark:bg-blue-900/20",
    label: "Reports Analysed",
    value: "74",
    direction: "down",
    trend: "7.8 %",
  },
  {
    icon: Presentation,
    iconBg: "bg-violet-50 text-violet-500 dark:bg-violet-900/20",
    label: "PPT Generated",
    value: "12",
    direction: "up",
    trend: "15.2 %",
  },
];

export const COLLABORATION_ROWS: CollaborationRow[] = [
  { label: "Shared with you", value: 12 },
  { label: "Shared by you", value: 6 },
  { label: "Team Members", value: 8 },
];

export const TIMELINE_OPTIONS = ["Daily", "Weekly", "Monthly"];
export const LLM_OPTIONS = ["All", "GPT 3.0", "Gemini"];
export const SORT_OPTIONS = ["Cost", "Usage", "Users"];
