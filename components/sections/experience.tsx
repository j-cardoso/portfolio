"use client";

import { motion, useInView } from "framer-motion";
import { useLanguage } from "../language-provider";
import { SectionBadge } from "../section-badge";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    titleKey: "experience.ceos.title",
    companyKey: "experience.ceos.company",
    descriptions: [
      "experience.ceos.desc1",
      "experience.ceos.desc2",
      "experience.ceos.desc3",
    ],
  },
  {
    titleKey: "experience.bravosul.title",
    companyKey: "experience.bravosul.company",
    descriptions: [
      "experience.bravosul.desc1",
      "experience.bravosul.desc2",
      "experience.bravosul.desc3",
    ],
  },
  {
    titleKey: "experience.reweb.title",
    companyKey: "experience.reweb.company",
    descriptions: [
      "experience.reweb.desc1",
      "experience.reweb.desc2",
      "experience.reweb.desc3",
    ],
  },
];

export function Experience() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="experience" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-12">
            <SectionBadge>{t("experience.badge")}</SectionBadge>
            <h2 className="text-4xl md:text-5xl font-bold">
              {t("experience.title")}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="tech-card bg-card border border-border rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg animate-pulse-glow">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">
                      {t(exp.titleKey)}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {t(exp.companyKey)}
                    </p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.descriptions.map((desc, i) => (
                    <li key={i} className="text-muted-foreground flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{t(desc)}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
