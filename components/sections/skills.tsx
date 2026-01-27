"use client";

import { motion, useInView } from "framer-motion";
import { useLanguage } from "../language-provider";
import { useRef } from "react";

const allSkills = [
  "HTML & CSS",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Vue.js",
  "Git",
  "GitHub",
  "skills.responsive",
  "RESTful APIs",
  "skills.performance",
  "UI/UX",
  "Webpack",
  "Vite",
  "NPM/Yarn",
  "Figma",
];

export function Skills() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            {t("skills.title")}
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {allSkills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-card border border-border rounded-xl p-4 text-center hover:border-primary hover:shadow-lg transition-all cursor-default"
              >
                <span className="text-sm md:text-base font-medium">
                  {skill.startsWith("skills.") ? t(skill) : skill}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
