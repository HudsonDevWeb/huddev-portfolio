"use client";

import { FaNodeJs, FaReact, FaPython, FaJava, FaDocker, FaAngular, FaVuejs } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiMysql, SiMongodb, SiPostgresql } from "react-icons/si";
import { useState } from "react";

const skills = [
  { name: "Node.js", category: "Backend", icon: <FaNodeJs />, level: "Avançado" },
  { name: "Next.js", category: "Frontend", icon: <SiNextdotjs />, level: "Avançado" },
  { name: "TypeScript", category: "Language", icon: <SiTypescript />, level: "Avançado" },
  { name: "Python", category: "Language", icon: <FaPython />, level: "Intermediário" },
  { name: "Java", category: "Language", icon: <FaJava />, level: "Intermediário" },
  { name: "Vue", category: "Frontend", icon: <FaVuejs />, level: "Intermediário" },
  { name: "MongoDB", category: "Database", icon: <SiMongodb />, level: "Avançado" },
  { name: "React", category: "Frontend", icon: <FaReact />, level: "Avançado" },
  { name: "PostgreSQL", category: "Database", icon: <SiPostgresql />, level: "Avançado" },
  { name: "Docker", category: "DevOps", icon: <FaDocker />, level: "Intermediário" },
  { name: "Angular", category: "Frontend", icon: <FaAngular />, level: "Intermediário" },
  { name: "React Native", category: "Mobile", icon: <FaReact />, level: "Intermediário" },
];

export function SkillsSection() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="skills" className="py-32 bg-secondary/30">
      <div className="section-container">
        <p className="section-title">Habilidades</p>
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-16">
          Tecnologias que domino
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group relative p-6 bg-background border border-border rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 hover:scale-105"
              onMouseEnter={() => setHovered(skill.name)}
              onMouseLeave={() => setHovered(null)}
              style={{ animation: `fadeIn 0.5s ease forwards`, animationDelay: `${index * 0.05}s` }}
            >
              <div className="text-5xl mb-4 text-muted-foreground group-hover:text-foreground transition-colors">
                {skill.icon}
              </div>

              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                {skill.category}
              </p>

              <p className="font-display font-semibold text-lg group-hover:text-foreground transition-colors">
                {skill.name}
              </p>

              {hovered === skill.name && (
                <div className="absolute top-2 right-2 bg-foreground text-background text-xs px-2 py-1 rounded shadow-lg">
                  {skill.level}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
