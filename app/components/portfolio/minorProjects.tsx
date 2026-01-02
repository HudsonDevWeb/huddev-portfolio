"use client";

import { useState } from "react";
import Link from "next/link";
import { LuChevronDown, LuArrowUpRight } from "react-icons/lu";

const minorProjects = [
  {
    id: "saega",
    title: "Saega",
    description:
      "Sistema de controle de gado, produção de leite e gestão de rebanho.",
    tech: ["React", "TypeScript", "Java", "PostgreSQL"],
    link: ""
  },
  {
    id: "mz-tracking",
    title: "Mz Tracking",
    description:
      "Plataforma de rastreamento em tempo real de vendedores com monitoramento de check-ins.",
    tech: ["Angular", "TypeScript", "Java", "PostgreSQL"],
    link: ""
  },
  {
    id: "renascer-portal",
    title: "Portal da Renascer",
    description:
      "Plataforma de vendas de gado com gestão avançada de rebanho e lotes.",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    link: ""
  },
  {
    id: "megazap-institucional",
    title: "Institucional Megazap",
    description: "Landing page institucional para a empresa Megazap.",
    tech: ["Next", "TypeScript"],
    link: ""
  },
  {
    id: "megazap-institucional",
    title: "Institucional Ultrafox",
    description: "Landing page institucional para a empresa Ultrafox.",
    tech: ["React", "TypeScript"],
    link: ""
  },
];

export function MinorProjects() {
  const [open, setOpen] = useState(false);

  return (
    <div className="my-16">
      <button
        onClick={() => setOpen(!open)}
        className="
    group flex items-center gap-3
    rounded-xl border border-border
    bg-background px-6 py-3
    text-sm font-medium text-foreground
    hover:border-foreground/20 hover:bg-accent
    transition-all duration-300 justify-self-center
  "
      >
        <span className="tracking-wide">
          Clique para ver outros projetos que desenvolvi e que talvez te
          inspirem
        </span>

        <LuChevronDown
          size={18}
          className={`
      text-muted-foreground
      transition-transform duration-300
      group-hover:text-foreground
      ${open ? "rotate-180" : ""}
    `}
        />
      </button>

      <div
        className={`grid gap-4 mt-6  overflow-hidden transition-all duration-500 ${
          open ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {minorProjects.map((project) => (
          <Link
            key={project.id}
            href={project.link}
            className="group"
          >
            <article className="border border-border rounded-xl p-6 bg-background hover:border-foreground/20 hover:shadow-hover transition-all duration-300">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-semibold group-hover:text-foreground transition-colors">
                  {project.title}
                </h3>
                <LuArrowUpRight className="text-muted-foreground group-hover:text-foreground transition-colors" />
              </div>

              <p className="text-sm text-muted-foreground mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-medium bg-accent text-accent-foreground px-3 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
