import {
  ArrowUpRight,
  ArrowRight,
  ArrowDown,
  Activity,
  BarChart3,
  Bell,
  Check,
  CheckCheck,
  ChevronDown,
  ChevronRight,
  Clock,
  Download,
  FileText,
  GitBranch,
  Grid2X2,
  Heart,
  Layers,
  LayoutDashboard,
  Link2,
  Menu,
  MoreHorizontal,
  Play,
  Plug,
  Plus,
  Search,
  Settings2,
  ShieldCheck,
  SlidersHorizontal,
  Users,
  Wallet,
  X,
  Zap,
  CircleHelp,
  Mail,
  Pause,
  RotateCcw,
  ExternalLink,
  LogOut,
} from "lucide-react";
const icons = {
  arrow: ArrowRight,
  up: ArrowUpRight,
  down: ArrowDown,
  activity: Activity,
  chart: BarChart3,
  bell: Bell,
  check: Check,
  checks: CheckCheck,
  chevron: ChevronDown,
  right: ChevronRight,
  clock: Clock,
  download: Download,
  file: FileText,
  workflow: GitBranch,
  grid: Grid2X2,
  heart: Heart,
  layers: Layers,
  dashboard: LayoutDashboard,
  link: Link2,
  menu: Menu,
  more: MoreHorizontal,
  play: Play,
  plug: Plug,
  plus: Plus,
  search: Search,
  settings: Settings2,
  shield: ShieldCheck,
  filter: SlidersHorizontal,
  users: Users,
  wallet: Wallet,
  x: X,
  zap: Zap,
  help: CircleHelp,
  mail: Mail,
  pause: Pause,
  reset: RotateCcw,
  external: ExternalLink,
  logout: LogOut,
};
export type IconName = keyof typeof icons;
export function Icon({
  name,
  size = 18,
  className = "",
}: {
  name: IconName;
  size?: number;
  className?: string;
}) {
  const Component = icons[name];
  return (
    <Component
      size={size}
      strokeWidth={1.7}
      aria-hidden="true"
      className={className}
    />
  );
}
