export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  company: string;
  link: string;
  profileImage: string;
}

export const testimonials = [
  {
    id: 1,
    quote:
      'Udemy helped me level up my career in just a few months. Learning at my own pace made all the difference.',
    name: 'Jane Doe',
    role: 'Head of Capability Development',
    company: 'at Publicis Sapient',
    link: 'View Full Story',
    profileImage: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    id: 2,
    quote:
      'Learning at my own pace made all the difference. Learning at my own pace made all the difference.',
    name: 'John Smith',
    role: 'Frontend Developer',
    company: 'Webify',
    link: 'Check out this course',
    profileImage: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
  {
    id: 3,
    quote:
      'Udemy helped me level up my career in just a few months. Learning at my own pace made all the difference.',
    name: 'Jane Doe',
    role: 'Software Engineer',
    company: 'TechCorp',
    link: 'View Full Story',
    profileImage: 'https://randomuser.me/api/portraits/women/3.jpg',
  },
  {
    id: 4,
    quote:
      'Learning at my own pace made all the difference. Learning at my own pace made all the difference.',
    name: 'John Smith',
    role: 'Frontend Developer',
    company: 'Webify',
    link: 'Check out this course',
    profileImage: 'https://randomuser.me/api/portraits/men/4.jpg',
  },
];
