'use client'

import { FiArrowRight, FiBookOpen } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden
                        bg-linear-to-b from-white to-gray-50
                        dark:from-gray-900 dark:to-gray-950">

      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0
                        bg-[linear-gradient(--theme(--color-purple-500/15)_1px,transparent_1px),linear-gradient(90deg,--theme(--color-purple-500/15)_1px,transparent_1px)]
                        bg-size-[40px_40px]" />
      </div>

      <div className="absolute top-1/4 left-1/2 -translate-x-1/2
                      w-40 h-40 sm:w-64 sm:h-64 md:w-80 md:h-80
                      rounded-full blur-[120px] bg-purple-500/30" />

      <div className="absolute bottom-0 left-0
                      w-32 h-32 sm:w-48 sm:h-48
                      rounded-full blur-[100px] bg-purple-500/10" />

      <div className="absolute top-20 right-10
                      w-24 h-24 sm:w-40 sm:h-40
                      rounded-full blur-[80px] bg-purple-500/10" />

      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8
                          bg-white/90 dark:bg-gray-900/80
                          border border-purple-500/20
                          backdrop-blur shadow-md text-sm">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse shadow-[0_0_8px_var(--color-purple-500)]" />
            <span className="font-medium text-gray-600 dark:text-gray-300">
              Automação de Trading com Python
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            <span className="bg-linear-to-br from-purple-400 to-purple-600
                             bg-clip-text text-transparent
                             drop-shadow-[0_0_30px_rgba(158,88,225,0.35)]">
              NebulaTrade
            </span>
            <span className="text-gray-900 dark:text-white"> Bot</span>
          </h1>

          <p className="text-xl md:text-2xl mb-4 font-light text-gray-600 dark:text-gray-300">
            Trading Automático de Criptomoedas com Python e Binance
          </p>

          <p className="text-lg max-w-2xl mx-auto mb-10 text-gray-500 dark:text-gray-400">
            Um bot inteligente, rápido e confiável para compra e venda automática de criptomoedas.
            Desenvolvido para desenvolvedores e traders que exigem performance e segurança.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="#get-started"
              scroll={false}
              className="px-8 py-4 rounded-xl font-semibold flex items-center gap-2
                         bg-linear-to-br from-purple-500 to-purple-700
                         text-white shadow-lg shadow-purple-500/30
                         transition-all hover:scale-105"
            >
              Começar Agora
              <FiArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="#documentation"
              scroll={false}
              className="px-8 py-4 rounded-xl font-medium flex items-center gap-2
                         bg-purple-500/5 border border-purple-500/20
                         text-purple-500 shadow-md
                         transition-all hover:scale-105"
            >
              <FiBookOpen className="w-5 h-5" />
              Ver Documentação
            </Link>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 rounded-xl flex items-center gap-2
                         bg-purple-500/5 border border-purple-500/20
                         text-purple-500 shadow-md
                         transition-all hover:scale-105"
            >
              <FaGithub className="w-5 h-5" />
              GitHub
            </a>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-16 max-w-xl mx-auto">
            {[
              { value: "24/7", label: "Trading Automatizado" },
              { value: "< 50ms", label: "Execução de Ordens" },
              { value: "100%", label: "Código Aberto" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold
                                bg-linear-to-br from-purple-400 to-purple-600
                                bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm mt-1 text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full flex items-start justify-center p-2
                        border-2 border-purple-500/30">
          <div className="w-1.5 h-3 rounded-full bg-purple-500" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
