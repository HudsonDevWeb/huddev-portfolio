'use client'

import { FaRobot, FaBolt, FaShieldAlt, FaCogs } from "react-icons/fa";

const AboutSection = () => {
    const highlights = [
        {
            icon: FaRobot,
            title: "Python Nativo",
            description: "Desenvolvido com Python moderno para máxima flexibilidade e facilidade de customização",
        },
        {
            icon: FaBolt,
            title: "Ultra Rápido",
            description: "Otimizado para execução de ordens com baixa latência em mercados voláteis",
        },
        {
            icon: FaShieldAlt,
            title: "Seguro por Design",
            description: "Suas chaves de API são criptografadas e nunca expostas a terceiros",
        },
        {
            icon: FaCogs,
            title: "Totalmente Configurável",
            description: "Personalize estratégias, parâmetros de risco e pares de negociação",
        },
    ];

    return (
        <section
            id="about"
            className="relative py-20 flex items-center justify-center bg-gray-950 overflow-hidden"
        >
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-40 h-40 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full blur-[120px] bg-purple-600/30" />
            <div className="absolute bottom-0 left-1/4 w-32 h-32 sm:w-48 sm:h-48 rounded-full blur-[80px] bg-purple-600/10" />
            <div className="absolute top-20 right-1/4 w-24 h-24 sm:w-40 sm:h-40 rounded-full blur-[60px] bg-purple-600/10" />

            <div className="container px-4 relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                        Por que{" "}
                        <span className="bg-linear-to-br from-purple-400 to-purple-600 bg-clip-text text-transparent drop-shadow">
                            NebulaTrade
                        </span>
                        ?
                    </h2>

                    <p className="text-lg text-gray-200">
                        NebulaTrade Bot é uma solução de trading automatizado baseada em Python
                        que se conecta diretamente à API da Binance, com foco em performance,
                        confiabilidade e segurança.
                    </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {highlights.map((item, index) => (
                        <div
                            key={index}
                            className="group text-center p-6 rounded-2xl border border-purple-500/20 bg-linear-to-br from-purple-500/10 to-purple-500/5 backdrop-blur-md transition-all hover:-translate-y-1 hover:scale-105 shadow-lg"
                        >
                            <div className="w-14 h-14 mx-auto mb-4 rounded-xl flex items-center justify-center bg-purple-500/20 border border-purple-500/30 transition-all group-hover:scale-110 group-hover:rotate-3">
                                <item.icon className="w-7 h-7 text-white" />
                            </div>

                            <h3 className="text-lg font-semibold mb-2 text-white">
                                {item.title}
                            </h3>

                            <p className="text-sm text-gray-300">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 rounded-2xl p-6 md:p-12 border border-purple-500/20 bg-linear-to-brfrom-purple-500/10 to-purple-500/5 backdrop-blur-md shadow-xl">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="text-2xl font-bold mb-4 text-white">
                                Feito para Desenvolvedores e Traders
                            </h3>

                            <ul className="space-y-3">
                                {[
                                    "Integração completa com API da Binance",
                                    "Ordens automáticas com stop-loss",
                                    "Estratégias configuráveis",
                                    "Dados em tempo real",
                                    "Logging completo"
                                ].map((item, index) => (
                                    <li key={index} className="flex gap-3 items-start text-gray-200">
                                        <span className="w-1.5 h-1.5 mt-2 rounded-full bg-purple-400 animate-pulse" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="relative p-6 rounded-xl font-mono text-sm bg-linear-to-br from-gray-900 to-gray-800 border border-purple-500/20 overflow-hidden">
                            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-purple-500/30 blur-[60px]" />

                            <div className="flex gap-2 mb-4 pb-3 border-b border-purple-500/20 relative z-10">
                                <span className="w-3 h-3 rounded-full bg-red-500" />
                                <span className="w-3 h-3 rounded-full bg-yellow-500" />
                                <span className="w-3 h-3 rounded-full bg-green-500" />
                                <span className="ml-2 text-xs text-gray-400">config.py</span>
                            </div>

                            <pre className="relative z-10 text-gray-200 overflow-x-auto">
                                PAR_NEGOCIACAO = "BTCUSDT"
                                ESTRATEGIA = "momentum"
                                NIVEL_RISCO = 0.02
                                STOP_LOSS = 0.05
                                TAKE_PROFIT = 0.10
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
