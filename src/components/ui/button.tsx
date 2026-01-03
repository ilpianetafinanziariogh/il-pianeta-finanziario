import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-emerald-600 text-white hover:bg-emerald-700 focus-visible:ring-emerald-300",
        secondary:
          "bg-zinc-900 text-zinc-100 hover:bg-zinc-800 focus-visible:ring-zinc-700",
        outline:
          "border border-border bg-transparent text-foreground hover:bg-zinc-900",
        ghost: "bg-transparent hover:bg-zinc-900 text-foreground",
        link: "text-emerald-400 underline-offset-4 hover:underline",
        subtle: "bg-emerald-900/30 text-emerald-300 hover:bg-emerald-900/40",
        destructive:
          "bg-rose-600 text-white hover:bg-rose-700 focus-visible:ring-rose-300",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-6",
        icon: "h-10 w-10",
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

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { buttonVariants };
