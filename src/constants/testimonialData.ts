export interface FigureText {
  figure: string;
  subtext: string;
}

export interface Testimonial {
  heading: string;
  figureText: FigureText[];
}

export const testimonials: Testimonial[] = [
  {
    heading:
      'Toyota Tsusho Enhances its L&D Program to Improve Employee Outcomes',
    figureText: [
      {
        figure: '98%',
        subtext: 'Increase in user engagement after redesign',
      },
      {
        figure: '85%',
        subtext: 'Improved course completion rates',
      },
    ],
  },
  {
    heading:
      'Global Retailer Scales Customer Service Training Across 10 Countries',
    figureText: [
      {
        figure: '75%',
        subtext: 'Faster onboarding time',
      },
      {
        figure: '90%',
        subtext: 'Employee satisfaction increase',
      },
    ],
  },
  {
    heading:
      'Fintech Startup Boosts Developer Productivity With Tailored Learning Paths',
    figureText: [
      {
        figure: '3x',
        subtext: 'Faster feature delivery cycles',
      },
      {
        figure: '50%',
        subtext: 'Reduction in bugs reported',
      },
    ],
  },
  {
    heading:
      'Healthcare Leader Drives Compliance With Centralized Learning Platform',
    figureText: [
      {
        figure: '100%',
        subtext: 'Compliance training completion',
      },
      {
        figure: '2x',
        subtext: 'Audit readiness improvement',
      },
    ],
  },
];
