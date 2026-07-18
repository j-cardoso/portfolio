"use client";

import { motion, useInView } from "framer-motion";
import { useLanguage } from "../language-provider";
import { SectionBadge } from "../section-badge";
import { useRef } from "react";
import { Layers, Github, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    name: "Dojo Master Hub",
    descriptionKey: "projects.dojo.description",
    stack: ["React", "TypeScript", "Supabase", "Mercado Pago"],
    url: "https://dojokyokai.com.br/",
    urlType: "live",
    image: "/projects/dojo-master-hub.jpg",
  },
  {
    name: "Drive Detailer",
    descriptionKey: "projects.driveDetailer.description",
    stack: ["React", "TypeScript", "Supabase"],
    url: "https://drive-detailer.vercel.app/",
    urlType: "live",
    image: "/projects/drive-detailer.jpg",
  },
  {
    name: "Auto Service Hub",
    descriptionKey: "projects.autoServiceHub.description",
    stack: ["React", "TypeScript", "Supabase"],
    url: "https://carhubpro.com.br/",
    urlType: "live",
    image: "/projects/auto-service-hub.png",
  },
  {
    name: "PDF Diff GUI",
    descriptionKey: "projects.pdfDiffGui.description",
    stack: ["Python", "Tkinter", "pdfplumber"],
    url: "https://github.com/j-cardoso/pdf-diff-gui",
    urlType: "github",
    image: null,
  },
];

export function Projects() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-12">
            <SectionBadge>{t("projects.badge")}</SectionBadge>
            <h2 className="text-4xl md:text-5xl font-bold">
              {t("projects.title")}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="tech-card group bg-card border border-border rounded-xl overflow-hidden shadow-lg flex flex-col"
              >
                <div className="relative aspect-video bg-gradient-to-br from-primary/15 via-secondary/10 to-accent/15 flex items-center justify-center overflow-hidden">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <Layers className="h-12 w-12 text-primary/40 group-hover:scale-110 transition-transform" />
                  )}
                  <span className="absolute top-3 left-3 font-mono text-xs font-bold text-primary bg-background/80 backdrop-blur px-2 py-1 rounded-md border border-border">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                  <p className="text-muted-foreground mb-4 flex-1">
                    {t(project.descriptionKey)}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                    {t("projects.viewProject")}
                    {project.urlType === "github" ? (
                      <Github className="h-4 w-4" />
                    ) : (
                      <ArrowUpRight className="h-4 w-4" />
                    )}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
