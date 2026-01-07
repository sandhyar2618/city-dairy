
export interface City {
  id: string;
  name: string;
  state: string;
  country: string;
  description: string;
  culture: string;
  history: string;
  food: string;
  festivals: string;
  landmarks: string;
  image: string;
  coords: { lat: number; lng: number };
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'Tips' | 'Budget' | 'Safety' | 'Insights';
  image: string;
  author: string;
  date: string;
}

export interface UserStory {
  id: string;
  userName: string;
  city: string;
  country: string;
  story: string;
  image: string;
}
