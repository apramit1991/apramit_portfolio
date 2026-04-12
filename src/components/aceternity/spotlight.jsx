import { cn } from "@/lib/utils";

export function Spotlight({ className }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
    >
      <div className="absolute left-[-12rem] top-[-10rem] h-[28rem] w-[28rem] rounded-full bg-mint/18 blur-3xl" />
      <div className="absolute right-[-10rem] top-[8%] h-[22rem] w-[22rem] rounded-full bg-gold/14 blur-3xl" />
      <div className="absolute bottom-[-12rem] left-1/3 h-[24rem] w-[24rem] rounded-full bg-sky-400/10 blur-3xl" />
      <div className="absolute inset-0 bg-mesh-spotlight opacity-70" />
    </div>
  );
}
