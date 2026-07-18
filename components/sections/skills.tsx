"use client";

import { motion, useInView } from "framer-motion";
import { useLanguage } from "../language-provider";
import { SectionBadge } from "../section-badge";
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
          <div className="text-center mb-12">
            <SectionBadge>{t("skills.badge")}</SectionBadge>
            <h2 className="text-4xl md:text-5xl font-bold">
              {t("skills.title")}
            </h2>
          </div>

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
                className="tech-card bg-card border border-border rounded-xl p-4 text-center cursor-default"
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
