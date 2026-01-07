'use client'

import { FaRobot, FaBolt, FaShieldAlt, FaCogs } from "react-icons/fa";

const AboutSection = () => {
    const primaryColor = "#9E58E1";
    const primaryLight = "rgba(158, 88, 225, 0.1)";
    const primaryLighter = "rgba(158, 88, 225, 0.05)";
    const primaryMedium = "rgba(158, 88, 225, 0.2)";
    const primaryDark = "rgba(158, 88, 225, 0.8)";
    const borderColor = "rgba(158, 88, 225, 0.15)";
    const glowColor = "rgba(158, 88, 225, 0.35)";

    const textPrimary = "#1F2937";
    const textMuted = "#6B7280";
    const textLight = "#9CA3AF"; 

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
        <section id="about" className="py-24 relative flex items-center justify-center bg-gray-950">
            <div
                className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full blur-[120px]"
                style={{
                    background: `radial-gradient(circle, ${primaryColor}30 0%, transparent 70%)`,
                    opacity: 0.6
                }}
            />


            <div
                className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full blur-[80px]"
                style={{
                    backgroundColor: primaryLight
                }}
            />

            <div
                className="absolute top-20 right-1/4 w-[300px] h-[300px] rounded-full blur-[60px]"
                style={{
                    backgroundColor: primaryLight
                }}
            />

            <div className="container px-4 relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                        Por que <span
                            style={{
                                background: `linear-gradient(135deg, ${primaryColor}, #B36EF3)`,
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                filter: `drop-shadow(0 0 20px ${primaryColor}40)`
                            }}
                        >NebulaTrade</span>?
                    </h2>
                    <p
                        className="text-lg"
                        style={{ color: '#E5E7EB' }}
                    >
                        NebulaTrade Bot é uma solução de trading automatizado baseada em Python que se conecta
                        diretamente à API da Binance. Execute ordens de compra e venda automaticamente com base em
                        estratégias configuráveis, com foco em performance, confiabilidade e segurança.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {highlights.map((item, index) => (
                        <div
                            key={index}
                            className="text-center group p-6 rounded-2xl transition-all hover:scale-105 hover:-translate-y-1"
                            style={{
                                background: `linear-gradient(145deg, ${primaryColor}15, ${primaryColor}08)`,
                                border: `1px solid ${primaryMedium}`,
                                boxShadow: `
                  0 4px 20px ${primaryColor}15,
                  0 8px 32px rgba(0, 0, 0, 0.1),
                  inset 0 1px 0 ${primaryLight}
                `,
                                backdropFilter: 'blur(10px)'
                            }}
                        >
                            <div
                                className="w-14 h-14 mx-auto mb-4 rounded-xl flex items-center justify-center transition-all group-hover:scale-110 group-hover:rotate-3"
                                style={{
                                    background: `linear-gradient(135deg, ${primaryColor}30, ${primaryColor}10)`,
                                    border: `1px solid ${primaryMedium}`
                                }}
                            >
                                <item.icon
                                    className="w-7 h-7 transition-transform group-hover:scale-110"
                                    style={{ color: '#FFFFFF' }}
                                />
                            </div>
                            <h3 className="text-lg font-semibold mb-2 text-white">{item.title}</h3>
                            <p
                                className="text-sm"
                                style={{ color: '#D1D5DB' }}
                            >
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div
                    className="mt-16 rounded-2xl p-8 md:p-12"
                    style={{
                        background: `linear-gradient(145deg, ${primaryColor}15, ${primaryColor}08)`,
                        border: `1px solid ${primaryMedium}`,
                        boxShadow: `
              0 8px 32px ${primaryColor}15,
              0 20px 60px rgba(0, 0, 0, 0.2),
              inset 0 1px 0 ${primaryLight}
            `,
                        backdropFilter: 'blur(10px)'
                    }}
                >
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="text-2xl font-bold mb-4 text-white">Feito para Desenvolvedores e Traders</h3>
                            <ul className="space-y-3">
                                {[
                                    "Integração completa com API da Binance para trading spot",
                                    "Ordens automáticas de compra e venda com suporte a stop-loss",
                                    "Múltiplas estratégias pré-definidas ou crie a sua própria",
                                    "Dados de mercado em tempo real e dashboard de analytics",
                                    "Logging completo para histórico de trades e debugging"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <span
                                            className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 animate-pulse"
                                            style={{
                                                backgroundColor: primaryColor,
                                                boxShadow: `0 0 8px ${primaryColor}`
                                            }}
                                        />
                                        <span style={{ color: '#E5E7EB' }}>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div
                            className="p-6 font-mono text-sm rounded-xl overflow-hidden relative"
                            style={{
                                background: `linear-gradient(145deg, #1a1a2e, #16213e)`,
                                border: `1px solid ${primaryMedium}`,
                                boxShadow: `
                  0 4px 20px rgba(0, 0, 0, 0.3),
                  inset 0 1px 0 ${primaryLight}20
                `
                            }}
                        >
                            <div
                                className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-[60px] opacity-30"
                                style={{ backgroundColor: primaryColor }}
                            />

                            <div className="flex items-center gap-2 mb-4 pb-3 relative z-10" style={{ borderBottom: `1px solid ${primaryMedium}` }}>
                                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#ef4444' }} />
                                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#f59e0b' }} />
                                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#10b981' }} />
                                <span
                                    className="ml-2 text-xs"
                                    style={{ color: textLight }}
                                >
                                    config.py
                                </span>
                            </div>
                            <pre className="overflow-x-auto relative z-10">
                                <code>
                                    <span style={{ color: primaryColor }}>PAR_NEGOCIACAO</span>
                                    <span style={{ color: '#d1d5db' }}> = </span>
                                    <span style={{ color: '#34d399' }}>"BTCUSDT"</span>
                                    <br />
                                    <span style={{ color: primaryColor }}>ESTRATEGIA</span>
                                    <span style={{ color: '#d1d5db' }}> = </span>
                                    <span style={{ color: '#34d399' }}>"momentum"</span>
                                    <br />
                                    <span style={{ color: primaryColor }}>NIVEL_RISCO</span>
                                    <span style={{ color: '#d1d5db' }}> = </span>
                                    <span style={{ color: '#a78bfa' }}>0.02</span>
                                    <br />
                                    <span style={{ color: primaryColor }}>STOP_LOSS</span>
                                    <span style={{ color: '#d1d5db' }}> = </span>
                                    <span style={{ color: '#a78bfa' }}>0.05</span>
                                    <br />
                                    <span style={{ color: primaryColor }}>TAKE_PROFIT</span>
                                    <span style={{ color: '#d1d5db' }}> = </span>
                                    <span style={{ color: '#a78bfa' }}>0.10</span>
                                </code>
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;