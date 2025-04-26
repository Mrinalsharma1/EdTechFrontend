export interface Membership {
  plan: string;
  target: string;
  type: string;
  pricing: {
    amount: number;
    currency: string;
    period: string;
    billing_options: string[];
    cancellation: string;
  };
  features: string[];
  action: string;
}

export const memberships: Membership[] = [
  {
    plan: 'Personal Plan',
    target: 'For you',
    type: 'Individual',
    pricing: {
      amount: 850,
      currency: '₹',
      period: 'per month',
      billing_options: ['monthly', 'annually'],
      cancellation: 'anytime',
    },
    features: [
      'Access to 12,000+ top courses',
      'Certification prep',
      'Goal-focused recommendations',
      'AI-powered coding exercises',
    ],
    action: 'Start subscription',
  },
  {
    plan: 'Pro Plan',
    target: 'For teams',
    type: 'Small Business',
    pricing: {
      amount: 3200,
      currency: '₹',
      period: 'per month',
      billing_options: ['monthly', 'annually'],
      cancellation: 'anytime',
    },
    features: [
      'Team performance insights',
      'Role-based learning paths',
      'Advanced analytics',
      'Certification prep for teams',
      'Team collaboration tools',
      'Admin dashboard access',
    ],
    action: 'Contact sales',
  },
  {
    plan: 'Enterprise Plan',
    target: 'For organizations',
    type: 'Enterprise',
    pricing: {
      amount: 9999,
      currency: '₹',
      period: 'custom pricing',
      billing_options: ['custom'],
      cancellation: 'contact support',
    },
    features: [
      'Custom onboarding',
      'Dedicated account manager',
      'LMS integration',
      'Security & compliance tools',
      'Single Sign-On (SSO)',
      'Custom reporting & dashboards',
      '24/7 priority support',
    ],
    action: 'Get a quote',
  },
];
