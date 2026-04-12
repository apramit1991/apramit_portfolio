import { motion } from "motion/react";

import { Spotlight } from "@/components/aceternity/spotlight";
import { Button } from "@/components/ui/button";

function FloatingActions({ actions }) {
  if (!actions?.length) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: "easeOut", delay: 0.2 }}
      className="fixed bottom-5 right-5 z-[120] hidden gap-2 rounded-[1.4rem] border border-white/12 bg-ink/70 p-2 shadow-ambient backdrop-blur md:flex"
    >
      {actions.map((action) => (
        <Button
          key={action.href}
          asChild
          size="sm"
          variant={action.variant ?? "secondary"}
        >
          <a href={action.href} target={action.external ? "_blank" : undefined} rel={action.external ? "noreferrer" : undefined}>
            {action.label}
          </a>
        </Button>
      ))}
    </motion.div>
  );
}

export function PageShell({ children, actions }) {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-ink">
      <Spotlight />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-10"
      >
        {children}
      </motion.div>
      <FloatingActions actions={actions} />
    </div>
  );
}
