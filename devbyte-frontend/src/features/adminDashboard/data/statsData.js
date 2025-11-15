import { Users, Briefcase, Calendar, FileText } from 'lucide-react';  // import icon components from lucide-react



/**
 * @typedef {Object} StatItem
 * @property {string} id                 Unique identifier for the stat item
 * @property {React.ComponentType} icon  icon component to display alongside the stat.
 * @property {string} label              Descriptive text label 
 * @property {string} value              The value to display 
 * @property {string} change             The change percentage relative to a previous period.
 * @property {TREND_DIRECTION} trend     The direction of the trend (e.g., UP, DOWN), used for styling.
 */

const TREND_DIRECTION = {
  UP: 'up',
  DOWN: 'down',
} ;

// This array defines the data contract for the dashboard's Key Performance Indicators (KPIs).

export const statsData = [
  { 
    id: 'members',
    icon: Users, 
    label: 'Active Members', 
    value: '2,540', 
    change: '-7%', 
    trend: TREND_DIRECTION.DOWN 
  },
  { 
    id: 'projects',
    icon: Briefcase, 
    label: 'Active Projects', 
    value: '156', 
    change: '+12%', 
    trend: TREND_DIRECTION.UP 
  },
  { 
    id: 'events',
    icon: Calendar, 
    label: 'Upcoming Events', 
    value: '25', 
    change: '+2%', 
    trend: TREND_DIRECTION.UP 
  },
  { 
    id: 'posts',
    icon: FileText, 
    label: 'Blog Posts', 
    value: '101', 
    change: '+12%', 
    trend: TREND_DIRECTION.UP 
  },
];

