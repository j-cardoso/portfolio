"use client";

import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { useLanguage } from "../language-provider";
import Image from "next/image";

export function Hero() {
  const { t } = useLanguage();

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
            <motion.a
              href="https://github.com/j-cardoso"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              <Github className="h-5 w-5" />
              {t("hero.cta")}
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center"
          >
            <motion.div
              className="relative w-full h-[500px] sm:w-96 sm:h-[500px] md:w-96 md:h-[450px] lg:w-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl"
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
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
