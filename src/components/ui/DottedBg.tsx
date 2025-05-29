import { cn } from "@/lib/utils";
import React from "react";

export function GridBackgroundDemo({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex h-[50rem] w-full items-center justify-center bg-background dark:bg-background">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,theme(colors.muted.DEFAULT)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.muted.DEFAULT)_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,theme(colors.muted.DEFAULT)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.muted.DEFAULT)_1px,transparent_1px)]"
        )}
      />
      {/* Radial gradient to fade grid into background */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      <p className="relative z-20 bg-gradient-to-b from-muted-foreground to-foreground bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
        {children}
      </p>
    </div>
  );
}
