import { RiOpenSourceLine } from "react-icons/ri";
import Link from "next/link";

export function PortfolioCode() {
  return (
    <section className="py-16 ">
      <div className="section-container flex flex-col items-center text-center gap-4">
        <h2 className="text-2xl flex items-center justify-center gap-2 font-semibold text-foreground">
          Código aberto <RiOpenSourceLine size={24} />
        </h2>

        <p className="text-sm text-muted-foreground max-w-md">
          Todo o código deste portfólio está disponível no meu GitHub e pode ser
          utilizado como referência ou base para outros projetos.
        </p>

        <Link
          href="https://github.com/HudsonDevWeb/huddev-portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-foreground hover:underline"
        >
          Ver repositório no GitHub →
        </Link>
      </div>
    </section>
  );
}
