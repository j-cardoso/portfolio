"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Language = "pt-BR" | "en";

type LanguageContextType = {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

const translations = {
  "pt-BR": {
    // Nav
    "nav.about": "Sobre",
    "nav.experience": "Experiência",
    "nav.skills": "Habilidades",
    "nav.contact": "Contato",

    // Hero
    "hero.greeting": "Olá, meu nome é",
    "hero.tagline": "Eu construo coisas para a web.",
    "hero.cta": "Ver meu Trabalho!",

    // About
    "about.title": "Sobre Mim",
    "about.description":
      "Sou um desenvolvedor Front-end apaixonado por criar interfaces de usuário intuitivas e eficientes. Com experiência em desenvolvimento e evolução de produtos financeiros próprios, e atuação em múltiplos projetos para clientes, busco sempre aprimorar minhas habilidades e entregar soluções de alta qualidade. Minha paixão é transformar ideias complexas em experiências digitais fluidas e acessíveis.",

    // Experience
    "experience.title": "Experiência Profissional",
    "experience.ceos.title": "Desenvolvedor Front End",
    "experience.ceos.company":
      "Céos Lab | Tempo integral | out de 2022 - o momento | Porto Alegre, Rio Grande do Sul, Brasil",
    "experience.ceos.desc1":
      "Atuação no desenvolvimento e evolução de um produto financeiro próprio, com foco em performance, escalabilidade e qualidade visual.",
    "experience.ceos.desc2":
      "Colaboração ativa com equipes de design e backend para garantir a integração perfeita e a melhor experiência do usuário.",
    "experience.ceos.desc3":
      "Utilização de tecnologias como CSS, React.js e outras para construir interfaces robustas e modernas.",

    "experience.bravosul.title": "Desenvolvedor Front End",
    "experience.bravosul.company":
      "Bravosul | mar de 2021 - out de 2022 | 1 ano 8 meses | Porto Alegre e Região",
    "experience.bravosul.desc1":
      "Atuação em múltiplos projetos de clientes, desde manutenção de sistemas legados até desenvolvimento de novas funcionalidades.",
    "experience.bravosul.desc2":
      "Responsável por otimizar o desempenho e a usabilidade das aplicações web.",
    "experience.bravosul.desc3":
      "Experiência com CSS, React.js e outras 6 competências, contribuindo para soluções inovadoras.",

    "experience.reweb.title": "Desenvolvedor Web Front End",
    "experience.reweb.company":
      "Reweb - Acelere suas Vendas | mar de 2019 - nov de 2020 | 1 ano 9 meses | Porto Alegre e Região",
    "experience.reweb.desc1":
      "Desenvolvimento de interfaces web para soluções comerciais voltadas a pequenas e médias empresas.",
    "experience.reweb.desc2":
      "Implementação de telas responsivas com React, CSS3 e JavaScript, com foco em usabilidade e acessibilidade.",
    "experience.reweb.desc3":
      "Colaboração direta com clientes para entender suas necessidades e entregar produtos que superassem as expectativas.",

    // Skills
    "skills.title": "Habilidades",
    "skills.main": "Minhas Habilidades Principais",
    "skills.other": "Outras Ferramentas & Conceitos",
    "skills.responsive": "Design Responsivo",
    "skills.performance": "Otimização de Performance",

    // Contact
    "contact.title": "Entre em Contato",
    "contact.description":
      "Tenho interesse em novas oportunidades. Se você tiver alguma dúvida ou quiser apenas dizer olá, farei o possível para entrar em contato com você!",
    "contact.rights": "Todos os direitos reservados.",
  },
  en: {
    // Nav
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.skills": "Skills",
    "nav.contact": "Contact",

    // Hero
    "hero.greeting": "Hello, my name is",
    "hero.tagline": "I build things for the web.",
    "hero.cta": "View My Work!",

    // About
    "about.title": "About Me",
    "about.description":
      "I am a Front-end developer passionate about creating intuitive and efficient user interfaces. With experience in developing and evolving proprietary financial products, and working on multiple client projects, I always seek to improve my skills and deliver high-quality solutions. My passion is transforming complex ideas into fluid and accessible digital experiences.",

    // Experience
    "experience.title": "Professional Experience",
    "experience.ceos.title": "Front End Developer",
    "experience.ceos.company":
      "Céos Lab | Full-time | Oct 2022 - Present | Porto Alegre, Rio Grande do Sul, Brazil",
    "experience.ceos.desc1":
      "Working on the development and evolution of a proprietary financial product, focusing on performance, scalability and visual quality.",
    "experience.ceos.desc2":
      "Active collaboration with design and backend teams to ensure perfect integration and the best user experience.",
    "experience.ceos.desc3":
      "Using technologies such as CSS, React.js and others to build robust and modern interfaces.",

    "experience.bravosul.title": "Front End Developer",
    "experience.bravosul.company":
      "Bravosul | Mar 2021 - Oct 2022 | 1 year 8 months | Porto Alegre and Region",
    "experience.bravosul.desc1":
      "Working on multiple client projects, from legacy system maintenance to new feature development.",
    "experience.bravosul.desc2":
      "Responsible for optimizing the performance and usability of web applications.",
    "experience.bravosul.desc3":
      "Experience with CSS, React.js and 6 other competencies, contributing to innovative solutions.",

    "experience.reweb.title": "Web Front End Developer",
    "experience.reweb.company":
      "Reweb - Accelerate your Sales | Mar 2019 - Nov 2020 | 1 year 9 months | Porto Alegre and Region",
    "experience.reweb.desc1":
      "Development of web interfaces for commercial solutions aimed at small and medium-sized companies.",
    "experience.reweb.desc2":
      "Implementation of responsive screens with React, CSS3 and JavaScript, focusing on usability and accessibility.",
    "experience.reweb.desc3":
      "Direct collaboration with clients to understand their needs and deliver products that exceed expectations.",

    // Skills
    "skills.title": "Skills",
    "skills.main": "My Main Skills",
    "skills.other": "Other Tools & Concepts",
    "skills.responsive": "Responsive Design",
    "skills.performance": "Performance Optimization",

    // Contact
    "contact.title": "Get in Touch",
    "contact.description":
      "I'm interested in new opportunities. If you have any questions or just want to say hello, I'll do my best to get back to you!",
    "contact.rights": "All rights reserved.",
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt-BR");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLanguage = localStorage.getItem("language") as Language | null;
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === "pt-BR" ? "en" : "pt-BR";
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  const t = (key: string): string => {
    return (
      translations[language][key as keyof (typeof translations)["pt-BR"]] || key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
