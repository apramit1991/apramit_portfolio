import { useState } from "react";

import { cn } from "@/lib/utils";
import { profile } from "@/data/profile";

// Apramit's photo as the chat avatar, with a monogram fallback if the image
// ever fails to load. Sizing comes from the caller via className (h-/w-).
export function Avatar({ className = "", monogramClass = "text-xs" }) {
  const [failed, setFailed] = useState(false);

  if (failed || !profile.avatar) {
    return (
      <div
        aria-hidden="true"
        className={cn(
          "flex shrink-0 select-none items-center justify-center rounded-full bg-accent font-display font-bold text-[#0b1626]",
          monogramClass,
          className
        )}
      >
        {profile.monogram}
      </div>
    );
  }

  return (
    <img
      src={profile.avatar}
      alt=""
      aria-hidden="true"
      loading="lazy"
      onError={() => setFailed(true)}
      style={{ objectPosition: "50% 12%" }}
      className={cn("shrink-0 rounded-full bg-surface-2 object-cover", className)}
    />
  );
}
