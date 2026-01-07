'use client'

import { useState } from "react";
import {
  FiDownload,
  FiSettings,
  FiTarget,
  FiKey,
  FiPlay,
  FiChevronRight
} from "react-icons/fi";

const DocumentationSection = () => {
  const [activeSection, setActiveSection] = useState("installation");

  const sections = [
    { id: "installation", label: "Instalação", icon: FiDownload },
    { id: "configuration", label: "Configuração", icon: FiSettings },
    { id: "strategies", label: "Estratégias", icon: FiTarget },
    { id: "environment", label: "Variáveis de Ambiente", icon: FiKey },
    { id: "running", label: "Executando o Bot", icon: FiPlay },
  ];

  const content: Record<string, { title: string; description: string; code: string }> = {
    installation: {
      title: "Instalação",
      description: "Clone o repositório e instale as dependências para começar.",
      code: `git clone https://github.com/nebula-trade/bot.git
cd nebula-trade-bot
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt`,
    },
    configuration: {
      title: "Configuração",
      description: "Personalize pares, estratégias e risco.",
      code: `config = {
  "trading_pairs": ["BTCUSDT"],
  "strategy": "momentum",
  "risk_per_trade": 0.02
}`,
    },
    strategies: {
      title: "Estratégias",
      description: "Crie estratégias personalizadas.",
      code: `class MinhaEstrategia:
  def comprar(self):
    pass`,
    },
    environment: {
      title: "Variáveis de Ambiente",
      description: "Nunca versionar suas chaves.",
      code: `BINANCE_API_KEY=xxxx
BINANCE_API_SECRET=xxxx`,
    },
    running: {
      title: "Executando",
      description: "Execute o bot com segurança.",
      code: `python main.py --dry-run`,
    },
  };

  return (
    <section
      id="documentation"
      className="relative py-20 bg-gray-950 overflow-hidden flex justify-center"
    >
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 
        w-40 h-40 sm:w-64 sm:h-64 md:w-80 md:h-80 
        rounded-full blur-[120px] bg-purple-600/30"
      />

      <div className="container px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-linear-to-br from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Documentação
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Tudo que você precisa para usar o NebulaTrade Bot.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
          <nav className="rounded-2xl border border-purple-500/20 bg-purple-500/5 backdrop-blur p-4">
            <p className="text-xs uppercase tracking-wider text-gray-400 px-4 mb-4">
              Primeiros Passos
            </p>

            <ul className="space-y-1">
              {sections.map(section => (
                <li key={section.id}>
                  <button
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition
                      ${activeSection === section.id
                        ? "bg-purple-500/20 text-white border border-purple-500/30"
                        : "text-gray-300 hover:bg-white/5"
                      }`}
                  >
                    <section.icon className="w-4 h-4 text-purple-400" />
                    {section.label}
                    {activeSection === section.id && (
                      <FiChevronRight className="ml-auto w-4 h-4" />
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="rounded-2xl border border-purple-500/20 bg-purple-500/5 backdrop-blur p-6 md:p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              {content[activeSection].title}
            </h3>
            <p className="text-gray-300 mb-6">
              {content[activeSection].description}
            </p>

            <div className="rounded-xl overflow-hidden border border-purple-500/20 bg-gray-900">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-purple-500/20 bg-black/30">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-yellow-500" />
                <span className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="ml-2 text-xs text-gray-400 font-mono">
                  {activeSection === "environment" ? ".env" : "terminal"}
                </span>
              </div>

              <pre className="p-4 md:p-6 text-sm text-gray-200 font-mono overflow-x-auto max-w-87.5 md:max-w-full">
                {content[activeSection].code}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocumentationSection;
