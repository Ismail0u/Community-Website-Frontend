
const ACTIVITY_STATUS = {
  APPROVED: 'Approved',
  UNDER_REVIEW: 'Under Review',
};

// This array holds the data for the recent activity feed section of the dashboard.
// Each object represents a single action performed by a user on the platform.

/**
 * @typedef {object} activityItem
 * @property {number} id        Unique identifier for the activity item
 * @property {string} user      Name of the user who performed the action
 * @property {string} avatar    the avatar of the user
 * @property {string} action    the description of the events itself
 * @property {string} date      the date that the action took place
 * @property {string} status    the current status of the activity
 */
 export const activitiesData = [
  { 
    id: 1,
    user: "Alonda Kinz", 
    avatar: "https://i.pravatar.cc/150?img=17", 
    action: "Created project 'DevChat'", 
    date: "Oct 20, 2025", 
    status: ACTIVITY_STATUS.APPROVED 
  },
  { 
    id: 2,
    user: "Maya", 
    avatar: "https://i.pravatar.cc/150?img=20", 
    action: "Added event 'HackFest'", 
    date: "Oct 18, 2025", 
    status: ACTIVITY_STATUS.APPROVED 
  },
  { 
    id: 3,
    user: "Ismael Ali", 
    avatar: "https://i.pravatar.cc/150?img=8", 
    action: "Submitted project 'E-commerce App'", 
    date: "Oct 18, 2025", 
    status: ACTIVITY_STATUS.UNDER_REVIEW 
  },
  { 
    id: 4,
    user: "Alex Iwobi", 
    avatar: "https://i.pravatar.cc/150?img=15", 
    action: "Created event 'Design Workshop'", 
    date: "Oct 16, 2025", 
    status: ACTIVITY_STATUS.APPROVED 
  },
];