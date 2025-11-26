import { Users, Briefcase, Calendar, FileText } from 'lucide-react';  // import icon components from lucide-react


/**
 * @typedef {Object} StatItem
 * @property {string} id                 Unique identifier for the quick action item
 * @property {React.ComponentType} icon  icon component to display alongside the card.
 * @property {string} title              the title to display .
 * @property {string} label              Descriptive text label 
 */

// array of quick actions data
export const quickActionsData = [
  {
    id: 'manage-member',
    icon: Users,
    title: 'Manage Members',
    description: 'View members and update roles',
  },
  { 
    id: 'add-project',
    icon: Briefcase, 
    title: 'Add Project', 
    description: 'Showcase new community projects',
  },
  { 
    id: 'add-event',
    icon: Calendar, 
    title: 'Add New Event', 
    description: 'Create and schedule community events',
  },
  { 
    id: 'create-post',
    icon: FileText, 
    title: 'Create Blog Post', 
    description: 'Write and publish new articles',
  },
];
