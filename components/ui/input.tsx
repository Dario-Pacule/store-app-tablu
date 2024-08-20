import { cn } from "@/lib/utils";
import * as React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  icon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, error, icon, rightIcon, required, placeholder, ...props },
    ref
  ) => {
    let placeHolder = placeholder ?? "";
    if (placeHolder && required) placeHolder = placeholder + " *";

    return (
      <div className="w-full">
        <div className="items-center relative w-full">
          {icon && (
            <span
              className={cn(
                "absolute top-2 left-2 w-6 h-6",
                error ? "text-red-500" : "text-inherit"
              )}
            >
              {icon}
            </span>
          )}
          <input
            ref={ref}
            required={required}
            placeholder={placeHolder}
            className={cn(
              error
                ? "!border-red-500 !text-red-500 placeholder:!text-red-500 focus-visible:!ring-red-500"
                : "text-foreground",
              "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
              icon && "pl-9",
              className
            )}
            {...props}
          />

          {rightIcon && (
            <span
              className={cn(
                "absolute top-2 left-2 w-6 h-6",
                error ? "text-red-500" : "text-inherit"
              )}
            >
              {rightIcon}
            </span>
          )}
        </div>

        {error && <span className="text-red-500 mt-1 text-xs">{error}</span>}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
