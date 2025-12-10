import { LuBriefcase, LuCode } from "react-icons/lu";

const experiences = [
  {
    icon: LuBriefcase,
    title: "Desenvolvedor Fullstack",
    company: "Megazap",
    period: "2022 - Presente",
    description:
      "Desenvolvimento de soluções web escaláveis utilizando tecnologias modernas. Responsável pela arquitetura de sistemas, integração de APIs e otimização de performance. Colaboração direta com equipes multidisciplinares para entregar produtos de alta qualidade.",
    highlights: [
      "Arquitetura de microsserviços",
      "Otimização de performance",
      "Mentoria de desenvolvedores júnior",
    ],
  },
  {
    icon: LuCode,
    title: "Desenvolvedor Freelancer",
    company: "Autônomo",
    period: "2020 - 2022",
    description:
      "Atuação em projetos diversos, desde landing pages até sistemas complexos de gestão. Experiência com diferentes stacks tecnológicas e metodologias ágeis, desenvolvendo habilidades de comunicação com clientes e gestão de projetos.",
    highlights: [
      "E-commerces personalizados",
      "Sistemas de gestão",
      "Aplicações web responsivas",
    ],
  },
];

export function JourneySection() {
  return (
    <section id="journey" className="py-32">
      <div className="section-container">
        <p className="section-title">Jornada</p>
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-16">
          Experiência Profissional
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={exp.company}
              className="group relative pl-8 md:pl-12 animate-fade-in-left"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-border group-hover:bg-foreground/30 transition-colors" />
              
              {/* Timeline dot */}
              <div className="absolute left-0 top-2 w-2 h-2 -translate-x-1/2 rounded-full bg-foreground" />

              <div className="border border-border rounded-xl p-6 md:p-8 hover:shadow-card hover:border-foreground/20 transition-all duration-300">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <exp.icon size={20} className="text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        {exp.company}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-display font-semibold">
                      {exp.title}
                    </h3>
                  </div>
                  <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                    {exp.period}
                  </span>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="text-xs bg-accent text-accent-foreground px-3 py-1.5 rounded-md"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
