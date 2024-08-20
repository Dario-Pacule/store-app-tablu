import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import * as React from "react";
import { Button } from "./ui/button";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const SearchInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, required, placeholder, ...props }, ref) => {
    let placeHolder = placeholder ?? "";
    if (placeHolder && required) placeHolder = placeholder + " *";

    return (
      <div className="w-full">
        <div className="items-center relative w-full">
          <input
            ref={ref}
            required={required}
            placeholder={placeHolder}
            className={cn(
              error
                ? "!border-red-500 !text-red-500 placeholder:!text-red-500 focus-visible:!ring-red-500"
                : "text-foreground",
              "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pr-9",
              className
            )}
            {...props}
          />

          <Button
            variant="ghost"
            className={cn(
              "absolute p-0 top-2.5 right-2 w-5 h-5",
              error ? "text-red-500" : "text-inherit"
            )}
          >
            <Search />
          </Button>
        </div>

        {error && <span className="text-red-500 mt-1 text-xs">{error}</span>}
      </div>
    );
  }
);
SearchInput.displayName = "SearchInput";

export { SearchInput };
