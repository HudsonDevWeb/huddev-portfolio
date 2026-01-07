'use client'

import { FiArrowRight, FiBookOpen } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const HeroSection = () => {
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

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(${borderColor} 1px, transparent 1px), linear-gradient(90deg, ${borderColor} 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }} />
      </div>
      
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full blur-[120px]"
        style={{
          background: `radial-gradient(circle, ${primaryColor}30 0%, transparent 70%)`,
          opacity: 0.6
        }}
      />
      
      <div 
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[100px]"
        style={{
          backgroundColor: primaryLighter
        }}
      />
      
      <div 
        className="absolute top-20 right-10 w-[300px] h-[300px] rounded-full blur-[80px]"
        style={{
          backgroundColor: primaryLighter
        }}
      />

      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-sm backdrop-blur-sm"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              border: `1px solid ${borderColor}`,
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)'
            }}
          >
            <span 
              className="w-2 h-2 rounded-full animate-pulse"
              style={{
                backgroundColor: primaryColor,
                boxShadow: `0 0 8px ${primaryColor}`
              }}
            />
            <span 
              className="font-medium"
              style={{ color: textMuted }}
            >
              Automação de Trading com Python
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            <span 
              className="font-bold"
              style={{
                background: `linear-gradient(135deg, ${primaryColor}, #B36EF3)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: `drop-shadow(0 0 30px ${glowColor})`
              }}
            >
              NebulaTrade
            </span>
            <span className="text-gray-900 dark:text-white"> Bot</span>
          </h1>

          <p 
            className="text-xl md:text-2xl mb-4 font-light"
            style={{ color: textMuted }}
          >
            Trading Automático de Criptomoedas com Python e Binance
          </p>
          
          <p 
            className="text-lg max-w-2xl mx-auto mb-10"
            style={{ color: textLight }}
          >
            Um bot inteligente, rápido e confiável para compra e venda automática de criptomoedas. 
            Desenvolvido para desenvolvedores e traders que exigem performance e segurança.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="#get-started"
              className="px-8 py-4 rounded-xl font-semibold flex items-center gap-2 group transition-all hover:scale-105"
              style={{
                background: `linear-gradient(135deg, ${primaryColor}, ${primaryDark})`,
                color: 'white',
                boxShadow: `0 4px 20px ${glowColor}`
              }}
              scroll={false}
            >
              Começar Agora
              <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              href="#documentation"
              className="px-8 py-4 rounded-xl font-medium flex items-center gap-2 transition-all hover:scale-105"
              style={{
                backgroundColor: primaryLighter,
                color: primaryColor,
                border: `1px solid ${borderColor}`,
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)'
              }}
              scroll={false}
            >
              <FiBookOpen className="w-5 h-5" />
              Ver Documentação
            </Link>
            
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 rounded-xl flex items-center gap-2 transition-all hover:scale-105"
              style={{
                backgroundColor: primaryLighter,
                color: primaryColor,
                border: `1px solid ${borderColor}`,
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)'
              }}
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
                <div 
                  className="text-2xl md:text-3xl font-bold"
                  style={{
                    background: `linear-gradient(135deg, ${primaryColor}, #B36EF3)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  {stat.value}
                </div>
                <div 
                  className="text-sm mt-1"
                  style={{ color: textMuted }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div 
          className="w-6 h-10 rounded-full flex items-start justify-center p-2"
          style={{
            border: `2px solid ${borderColor}`
          }}
        >
          <div 
            className="w-1.5 h-3 rounded-full"
            style={{
              backgroundColor: primaryColor
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;