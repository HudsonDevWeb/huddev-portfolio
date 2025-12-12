import { LuArrowUpRight } from "react-icons/lu";
import Link from "next/link";

const projects = [
  {
    id: "ecommerce-nextjs",
    title: "QR Link Manager",
    description:
      "Plataforma completa de e-commerce construída com Next.js e Node.js, featuring carrinho de compras, pagamentos integrados e painel administrativo.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
    image: "/placeholder.svg",
  },
  {
    id: "inventory-management",
    title: "Sistema de Gestão de Inventário",
    description:
      "Sistema robusto para controle de estoque com relatórios em tempo real, alertas automatizados e integração com múltiplos fornecedores.",
    tech: ["Python", "MySQL", "React", "Docker"],
    image: "/placeholder.svg",
  },
  {
    id: "realtime-chat",
    title: "Chat em Tempo Real",
    description:
      "Aplicação de mensagens instantâneas com suporte a salas, envio de arquivos e notificações push, utilizando WebSockets para comunicação em tempo real.",
    tech: ["Node.js", "MongoDB", "Socket.io", "React"],
    image: "/placeholder.svg",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-32 bg-secondary/30">
      <div className="section-container">
        <p className="section-title">Projetos</p>
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-16">
          Trabalhos Selecionados
        </h2>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              href={`/project/${project.id}`}
              className="group block animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <article className="relative overflow-hidden border border-border rounded-2xl bg-background hover:shadow-hover hover:border-foreground/20 transition-all duration-500">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative aspect-video md:aspect-auto overflow-hidden bg-muted">
                    <div className="absolute inset-0 bg-linear-to-br from-foreground/5 to-foreground/10" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-display text-6xl font-bold text-muted-foreground/20">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 md:p-8 flex flex-col justify-center">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl md:text-3xl font-display font-semibold group-hover:text-foreground transition-colors">
                        {project.title}
                      </h3>
                      <LuArrowUpRight
                        size={24}
                        className="text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                      />
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-medium bg-accent text-accent-foreground px-3 py-1.5 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
