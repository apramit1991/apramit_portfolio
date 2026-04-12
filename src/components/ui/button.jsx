import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint/60 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-mint text-ink shadow-ambient hover:translate-y-[-1px] hover:bg-[#9ce9d8]",
        secondary:
          "border border-white/15 bg-white/8 text-white backdrop-blur hover:bg-white/12",
        ghost: "text-white/80 hover:bg-white/8 hover:text-white",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      ref={ref}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
});

Button.displayName = "Button";

export { Button, buttonVariants };
