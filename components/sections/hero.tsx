"use client";

import { motion } from "framer-motion";
import { Github, ArrowRight } from "lucide-react";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiGit,
} from "react-icons/si";
import { useLanguage } from "../language-provider";
import { SectionBadge } from "../section-badge";
import Image from "next/image";

const techIcons = [
  { Icon: SiHtml5, color: "#E34F26", label: "HTML5" },
  { Icon: SiCss, color: "#1572B6", label: "CSS3" },
  { Icon: SiJavascript, color: "#F7DF1E", label: "JavaScript" },
  { Icon: SiTypescript, color: "#3178C6", label: "TypeScript" },
  { Icon: SiReact, color: "#61DAFB", label: "React" },
  { Icon: SiNextdotjs, color: "currentColor", label: "Next.js" },
  { Icon: SiVuedotjs, color: "#4FC08D", label: "Vue.js" },
  { Icon: SiGit, color: "#F05032", label: "Git" },
];

export function Hero() {
  const { t } = useLanguage();

  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector("#projects");
    if (element) {
      const offset = 80;
      const top =
        element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <SectionBadge>{t("hero.badge")}</SectionBadge>
            <p className="text-primary text-lg font-medium">
              {t("hero.greeting")}
            </p>
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="gradient-text">Ju</span>liano{" "}
              <span className="gradient-text">Ca</span>rdoso.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              {t("hero.tagline")}
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#projects"
                onClick={scrollToProjects}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 40px -8px hsl(var(--primary) / 0.7)",
                }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-primary-foreground px-8 py-4 rounded-lg font-semibold shadow-glow transition-colors"
              >
                {t("hero.viewProjects")}
                <ArrowRight className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="https://github.com/j-cardoso"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, borderColor: "hsl(var(--primary))" }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 border-2 border-border px-8 py-4 rounded-lg font-semibold transition-colors hover:text-primary"
              >
                <Github className="h-5 w-5" />
                {t("hero.cta")}
              </motion.a>
            </div>

            <div className="pt-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                {t("hero.techStack")}
              </p>
              <div className="flex flex-wrap gap-3">
                {techIcons.map(({ Icon, color, label }, index) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                    whileHover={{ y: -3, scale: 1.1 }}
                    aria-label={label}
                    className="tech-card bg-card border border-border rounded-lg p-2.5"
                  >
                    <Icon className="h-6 w-6" style={{ color }} />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center"
          >
            <motion.div
              className="relative w-full h-[500px] sm:w-96 sm:h-[500px] md:w-96 md:h-[450px] lg:w-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl ring-2 ring-primary/50 shadow-glow-lg"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="/profile-photo.jpeg"
                alt="Juliano Cardoso"
                fill
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
