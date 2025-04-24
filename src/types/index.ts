
export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
  bio?: string;
  title?: string;
  isMentor: boolean;
  hourlyRate?: number;
  availableNow?: boolean;
  averageRating: number;
  sessionCount: number;
  skills?: Skill[];
}

export interface Skill {
  id: string;
  name: string;
  slug: string;
  categoryId: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
}

export interface ProfileSkill {
  id: string;
  profileId: string;
  skillId: string;
  skillLevel: number;
}

export interface Session {
  id: string;
  mentorId: string;
  menteeId: string;
  startTime: Date;
  endTime: Date;
  status: 'scheduled' | 'completed' | 'cancelled';
  title: string;
  description?: string;
  price: number;
  meetingUrl?: string;
}

export interface Review {
  id: string;
  sessionId: string;
  reviewerId: string;
  rating: number;
  comment: string;
  response?: string;
}

export interface Availability {
  id: string;
  profileId: string;
  dayOfWeek: number;
  startTime: string;
  endTime: string;
  isRecurring: boolean;
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  createdAt: Date;
  read: boolean;
}

export interface Topic {
  id: string;
  title: string;
  icon: string;
  description: string;
  mentorCount: number;
  slug: string;
}

export interface Mentor {
  id: string;
  name: string;
  avatar?: string;
  title: string;
  rating: number;
  sessionCount: number;
  hourlyRate?: number;
  skills: string[];
  availableNow?: boolean;
}
