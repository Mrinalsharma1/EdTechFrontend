export interface Instructor {
    id: number;
    title: string;
    name: string;
    display_name: string;
    job_title: string;
    image:string;
    initials: string;
    url: string;
  }
  

  
  export interface BestsellerBadge {
    _class: string;
    id: string;
    badge_text: string;
    badge_family: string;
  }
  
  export interface Course {
    id: number;
    title: string;
    url: string;
    image: {
        small: string;
        medium: string;
        large: string;
      };
    is_paid: boolean;
    visible_instructors: Instructor[];
    published_title: string;
    headline: string;
    num_subscribers: number;
    avg_rating: number;
    avg_rating_recent: number;
    rating: number;
    num_reviews: number;
    is_wishlisted: boolean;
    num_published_lectures:number
    published_time: string;
    objectives_summary: string[];
    is_recently_published: boolean;
    last_update_date: string;
    instructor_name: null;
    content_info: string;
    content_info_short: string;
    bestseller_badge_content?: BestsellerBadge;
  }
  
  
  export interface CarouselProps {
    title?: string;
    courses: Course[];
  }