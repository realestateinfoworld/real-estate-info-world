import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ink disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-b from-gold-pale via-gold to-gold-deep text-ink shadow-[0_10px_30px_-10px_rgb(201_171_114_/_0.6)] hover:shadow-[0_14px_40px_-10px_rgb(201_171_114_/_0.8)] hover:brightness-105",
        secondary:
          "bg-surface-2 text-ivory border border-line-strong hover:border-gold/50 hover:bg-surface",
        outline:
          "border border-ivory/15 bg-ivory/[0.03] text-ivory backdrop-blur hover:border-gold/60 hover:bg-ivory/[0.06]",
        ghost: "text-sand hover:text-ivory hover:bg-ivory/5",
        accent:
          "bg-gradient-to-b from-gold-pale via-gold to-gold-deep text-ink hover:brightness-105",
      },
      size: {
        default: "h-11 px-6",
        sm: "h-9 px-4 text-xs",
        lg: "h-13 px-8 text-[15px]",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
