"use client";

import { motion, useInView } from "framer-motion";
import { useLanguage } from "../language-provider";
import { SectionBadge } from "../section-badge";
import { useRef } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const CONTACT_EMAIL = "ocardosojuliano@gmail.com";

export function Contact() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <SectionBadge>{t("contact.badge")}</SectionBadge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t("contact.title")}
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t("contact.description")}
          </p>

          <motion.a
            href={`mailto:${CONTACT_EMAIL}`}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 40px -8px hsl(var(--primary) / 0.7)",
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-primary-foreground px-8 py-4 rounded-lg font-semibold shadow-glow mb-12"
          >
            <Mail className="h-5 w-5" />
            {t("contact.cta")}
          </motion.a>

          <div className="flex justify-center gap-6 mb-12">
            <motion.a
              href="https://github.com/j-cardoso"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, boxShadow: "0 0 30px -5px hsl(var(--primary) / 0.6)" }}
              whileTap={{ scale: 0.9 }}
              className="p-4 bg-card border border-border rounded-full transition-colors"
            >
              <Github className="h-6 w-6" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/juliano-cardoso-32346818b/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, boxShadow: "0 0 30px -5px hsl(var(--primary) / 0.6)" }}
              whileTap={{ scale: 0.9 }}
              className="p-4 bg-card border border-border rounded-full transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </motion.a>
          </div>

          <p className="text-sm text-muted-foreground">
            &copy; 2025 Juliano Cardoso. {t("contact.rights")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
