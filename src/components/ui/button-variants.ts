import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 rounded-[4px]',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        ghost: 'text-[#303141] hover:text-[#5624d0] hover:bg-[#6d28d2]/5',
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        link: 'text-primary underline-offset-4 hover:underline',
        signup:
          'bg-[#6d28d2] text-white font-bold hover:bg-[#4c1fb1] hover:text-white',
        login:
          'border border-[#6d28d2] text-[#6d28d2] font-bold hover:bg-[#6d28d2]/5',
      },
      size: {
        default: 'h-10 px-4',
        sm: 'h-[40px] px-3 text-sm font-medium',
        lg: 'h-[47px] px-3 min-w-[90px]',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);
