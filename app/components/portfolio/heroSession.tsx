import { LuArrowDown, LuGithub, LuLinkedin, LuMail } from "react-icons/lu";
import Image from "next/image";

export function HeroSection() {
    return (
        <section
            id="about"
            className="min-h-screen flex items-center justify-center pt-20"
        >
            <div className="section-container py-20">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <div className="order-2 lg:order-1">
                        <p
                            className="text-muted-foreground mb-4 animate-fade-in"
                            style={{ animationDelay: "0.1s" }}
                        >
                            Olá, eu sou
                        </p>
                        <h1
                            className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 animate-fade-in"
                            style={{ animationDelay: "0.2s" }}
                        >
                            Hudson Moreira
                        </h1>
                        <h2
                            className="text-2xl md:text-3xl text-muted-foreground font-display mb-8 animate-fade-in"
                            style={{ animationDelay: "0.3s" }}
                        >
                            Fullstack Developer
                        </h2>
                        <p
                            className="text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed animate-fade-in"
                            style={{ animationDelay: "0.4s" }}
                        >
                            Sou um desenvolvedor apaixonado por tecnologia, com experiência em
                            diversas linguagens e frameworks modernos, sempre buscando resolver
                            problemas de forma criativa e eficiente. Transformo ideias em
                            soluções digitais elegantes e funcionais.
                        </p>

                        <div
                            className="flex flex-wrap items-center gap-4 mb-10 animate-fade-in"
                            style={{ animationDelay: "0.5s" }}
                        >
                            <button className="bg-white text-black font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none">
                                <a href="https://wa.me/5579999869055?text=Quero%20conhecer%20mais" target="_blank" className="block">Entre em Contato</a>
                            </button>

                            <button className="border-2 border-white text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:bg-white hover:text-black hover:scale-105 focus:outline-none">
                                <a href="#projects" className="block">Ver Projetos</a>
                            </button>

                        </div>

                        <div
                            className="flex items-center gap-6 animate-fade-in"
                            style={{ animationDelay: "0.6s" }}
                        >
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-foreground transition-colors hover-lift"
                                aria-label="GitHub"
                            >
                                <LuGithub size={24} />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-foreground transition-colors hover-lift"
                                aria-label="LinkedIn"
                            >
                                <LuLinkedin size={24} />
                            </a>
                            <a
                                href="mailto:contato@hudsonmoreira.dev"
                                className="text-muted-foreground hover:text-foreground transition-colors hover-lift"
                                aria-label="Email"
                            >
                                <LuMail size={24} />
                            </a>
                        </div>
                    </div>

                    <div
                        className="order-1 lg:order-2 flex justify-center lg:justify-end animate-scale-in"
                        style={{ animationDelay: "0.3s" }}
                    >
                        <div className="relative">
                            <div className="absolute -inset-4 rounded-full border border-border/50 animate-pulse" />
                            <div className="absolute -inset-8 rounded-full border border-border/30" />

                            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-border shadow-card">
                                <Image
                                    src="/developer-portrait.jpg"
                                    alt="Hudson Moreira - Fullstack Developer"
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                                    width={500}
                                    height={500}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <a
                    href="#skills"
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors animate-bounce hidden md:block"
                    aria-label="Scroll para baixo"
                >
                    <LuArrowDown size={24} />
                </a>
            </div>
        </section>
    );
}
