import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ink disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-b from-brand-from via-brand-via to-brand-to text-on-brand shadow-[0_10px_30px_-10px_rgb(16_185_129_/_0.65)] hover:-translate-y-px hover:shadow-[0_16px_40px_-10px_rgb(16_185_129_/_0.8)] hover:brightness-110",
        secondary:
          "bg-surface-2 text-ivory border border-line-strong hover:border-brand/50 hover:bg-surface",
        outline:
          "border border-ivory/15 bg-ivory/[0.03] text-ivory backdrop-blur hover:border-brand/60 hover:bg-ivory/[0.06]",
        ghost: "text-sand hover:text-ivory hover:bg-ivory/5",
        accent:
          "bg-gradient-to-b from-brand-from via-brand-via to-brand-to text-on-brand hover:brightness-105",
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
