export interface MainCarouselItem {
  heading: string;
  subtext: string;
  buttons: string[];
  image: string;
}

export const mainCarouselItems: MainCarouselItem[] = [
  {
    heading: 'Learn Anything, Anytime',
    subtext: 'Access thousands of courses tailored to your goals.',
    buttons: ['Explore Courses', 'Start Learning'],
    image: './../../../assets/images/main_carousel_2.jpg',
  },
  {
    heading: 'Upskill Your Team',
    subtext:
      'Technology and the world of work change fast — with us, you’re faster. Get the skills to achieve goals and stay competitive.',
    buttons: ['Contact Sales', 'See Plans'],
    image: './../../../assets/images/main_carousel_2.jpg',
  },
  {
    heading: 'Skills that drive you forward',
    subtext: 'Custom learning for large organizations with 24/7 support.',
    buttons: ['Get a Quote', 'Learn More'],
    image: './../../../assets/images/main_carousel_2.jpg',
  },
];
