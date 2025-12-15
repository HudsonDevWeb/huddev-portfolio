"use client";

import { FaNodeJs, FaReact, FaPython, FaJava, FaDocker, FaAngular  } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiMysql, SiMongodb, SiPostgresql } from "react-icons/si";

const skills = [
  { name: "Node.js", category: "Backend", icon: <FaNodeJs /> },
  { name: "Next.js", category: "Frontend", icon: <SiNextdotjs /> },
  { name: "TypeScript", category: "Language", icon: <SiTypescript /> },
  { name: "Python", category: "Language", icon: <FaPython /> },
  { name: "Java", category: "Language", icon: <FaJava /> },
  { name: "MySQL", category: "Database", icon: <SiMysql /> },
  { name: "MongoDB", category: "Database", icon: <SiMongodb /> },
  { name: "React", category: "Frontend", icon: <FaReact /> },
  { name: "PostgreSQL", category: "Database", icon: <SiPostgresql /> },
  { name: "Docker", category: "DevOps", icon: <FaDocker /> },
  { name: "Angular", category: "Frontend", icon: <FaAngular /> },
  { name: "React Native", category: "Mobile", icon: <FaReact /> },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-32 bg-secondary/30">
      <div className="section-container">
        <p className="section-title">Habilidades</p>
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-16">
          Tecnologias que domino
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group p-6 bg-background border border-border rounded-lg hover:shadow-card hover:border-foreground/20 transition-all duration-300 hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="text-4xl mb-4 text-muted-foreground group-hover:text-foreground transition-all">
                {skill.icon}
              </div>

              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                {skill.category}
              </p>

              <p className="font-display font-semibold text-lg group-hover:text-foreground transition-colors">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
