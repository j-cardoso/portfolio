"use client";

import { motion } from "framer-motion";

export function BackgroundFx() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-background">
      <div className="absolute inset-0 tech-grid-bg" />
      <motion.div
        className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-primary/20 blur-3xl animate-blob"
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[20%] right-[-10%] h-[450px] w-[450px] rounded-full bg-secondary/20 blur-3xl animate-blob"
        style={{ animationDelay: "2s" }}
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-15%] left-[20%] h-[500px] w-[500px] rounded-full bg-accent/20 blur-3xl animate-blob"
        style={{ animationDelay: "4s" }}
        animate={{ opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
