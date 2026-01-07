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

  const primaryColor = "#9E58E1";
  const primaryLight = "rgba(158, 88, 225, 0.1)";
  const primaryLighter = "rgba(158, 88, 225, 0.05)";
  const primaryMedium = "rgba(158, 88, 225, 0.2)";
  const primaryDark = "rgba(158, 88, 225, 0.8)";
  const borderColor = "rgba(158, 88, 225, 0.15)";
  
  const textPrimary = "#1F2937";
  const textMuted = "#6B7280";
  const textLight = "#9CA3AF";

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
      description: "Comece a usar o NebulaTrade Bot em poucos passos. Clone o repositório e instale as dependências.",
      code: `# Clone o repositório
git clone https://github.com/nebula-trade/bot.git
cd nebula-trade-bot

# Crie o ambiente virtual
python -m venv venv
source venv/bin/activate  # Linux/Mac
# ou
venv\\Scripts\\activate  # Windows

# Instale as dependências
pip install -r requirements.txt`,
    },
    configuration: {
      title: "Configuração",
      description: "Configure seus parâmetros de trading no arquivo config.py. Personalize pares, estratégias e configurações de risco.",
      code: `# config.py
from nebulatrade import Strategy

config = {
    "trading_pairs": ["BTCUSDT", "ETHUSDT"],
    "strategy": Strategy.MOMENTUM,
    "risk_per_trade": 0.02,  # 2% do portfólio
    "max_positions": 3,
    "use_testnet": True,  # Comece com testnet!
}`,
    },
    strategies: {
      title: "Estratégias de Trading",
      description: "Escolha entre estratégias integradas ou crie as suas próprias. Cada estratégia pode ser testada com backtesting.",
      code: `from nebulatrade import BaseStrategy

class EstrategiaPersonalizada(BaseStrategy):
    def __init__(self):
        super().__init__()
        self.rsi_periodo = 14
        self.rsi_sobrevendido = 30
        
    def deve_comprar(self, data):
        rsi = self.calcular_rsi(data, self.rsi_periodo)
        return rsi < self.rsi_sobrevendido
        
    def deve_vender(self, data):
        rsi = self.calcular_rsi(data, self.rsi_periodo)
        return rsi > 70`,
    },
    environment: {
      title: "Variáveis de Ambiente",
      description: "Armazene suas credenciais de API de forma segura usando variáveis de ambiente. Nunca as commite no controle de versão.",
      code: `# Arquivo .env (nunca faça commit disto!)
BINANCE_API_KEY=sua_chave_api_aqui
BINANCE_API_SECRET=sua_chave_secreta_aqui
BINANCE_TESTNET=true

# Configurações opcionais
LOG_LEVEL=INFO
TELEGRAM_BOT_TOKEN=seu_token_telegram
TELEGRAM_CHAT_ID=seu_chat_id`,
    },
    running: {
      title: "Executando o Bot",
      description: "Inicie o bot com um único comando. Use o modo dry-run para testar sem trades reais.",
      code: `# Execute em modo dry-run (recomendado para testes)
python main.py --dry-run

# Execute com trading ao vivo (use com cautela!)
python main.py --live

# Execute com estratégia específica
python main.py --strategy momentum --pair BTCUSDT

# Execute backtesting
python main.py --backtest --start 2024-01-01 --end 2024-06-01`,
    },
  };

  return (
    <section id="documentation" className="py-24   flex items-center justify-center bg-gray-950">
            <div
                className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full blur-[120px]"
                style={{
                    background: `radial-gradient(circle, ${primaryColor}30 0%, transparent 70%)`,
                    opacity: 0.6
                }}
            />

      <div className="container px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            <span 
              style={{
                background: `linear-gradient(135deg, ${primaryColor}, #B36EF3)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Documentação
            </span>
          </h2>
          <p 
            className="text-lg max-w-2xl mx-auto"
            style={{ color: '#E5E7EB' }}
          >
            Tudo que você precisa para começar a usar o NebulaTrade Bot.
          </p>
        </div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-8">
          <nav 
            className="p-4 rounded-2xl"
            style={{
              background: `linear-gradient(145deg, ${primaryColor}15, ${primaryColor}08)`,
              border: `1px solid ${primaryMedium}`,
              backdropFilter: 'blur(10px)',
              boxShadow: `0 4px 20px ${primaryColor}10`
            }}
          >
            <div 
              className="text-sm font-semibold uppercase tracking-wider mb-4 px-4"
              style={{ color: '#9CA3AF' }}
            >
              Primeiros Passos
            </div>
            <ul className="space-y-1">
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full cursor-pointer flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                      activeSection === section.id 
                        ? 'scale-[1.02]' 
                        : 'hover:bg-white/5'
                    }`}
                    style={{
                      backgroundColor: activeSection === section.id 
                        ? `${primaryColor}25` 
                        : 'transparent',
                      border: activeSection === section.id 
                        ? `1px solid ${primaryMedium}`
                        : '1px solid transparent',
                      color: activeSection === section.id 
                        ? '#FFFFFF' 
                        : '#D1D5DB'
                    }}
                  >
                    <section.icon 
                      className="w-4 h-4" 
                      style={{ 
                        color: activeSection === section.id 
                          ? '#FFFFFF' 
                          : primaryColor 
                      }}
                    />
                    {section.label}
                    {activeSection === section.id && (
                      <FiChevronRight className="w-4 h-4 ml-auto" />
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div 
            className="rounded-2xl p-8"
            style={{
              background: `linear-gradient(145deg, ${primaryColor}15, ${primaryColor}08)`,
              border: `1px solid ${primaryMedium}`,
              backdropFilter: 'blur(10px)',
              boxShadow: `
                0 8px 32px ${primaryColor}15,
                0 20px 60px rgba(0, 0, 0, 0.2),
                inset 0 1px 0 ${primaryLight}
              `
            }}
          >
            <h3 className="text-2xl font-bold mb-4 text-white">{content[activeSection].title}</h3>
            <p 
              className="mb-6"
              style={{ color: '#E5E7EB' }}
            >
              {content[activeSection].description}
            </p>
            
            <div 
              className="overflow-hidden rounded-xl border"
              style={{
                borderColor: primaryMedium,
                backgroundColor: '#1a1a2e',
                boxShadow: `0 4px 20px rgba(0, 0, 0, 0.3)`
              }}
            >
              <div 
                className="flex items-center gap-2 px-4 py-3"
                style={{
                  borderBottom: `1px solid ${primaryMedium}`,
                  backgroundColor: 'rgba(0, 0, 0, 0.2)'
                }}
              >
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#ef4444' }} />
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#f59e0b' }} />
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#10b981' }} />
                <span 
                  className="ml-2 text-xs font-mono"
                  style={{ color: '#9CA3AF' }}
                >
                  {activeSection === "installation" ? "terminal" : 
                   activeSection === "environment" ? ".env" : "python"}
                </span>
              </div>
              <pre className="p-6 overflow-x-auto font-mono text-sm" style={{ color: '#D1D5DB' }}>
                <code className="whitespace-pre">
                  {content[activeSection].code.split('\n').map((line, i) => (
                    <span key={i} className="block">
                      {line.startsWith('#') ? (
                        <span style={{ color: '#6B7280' }}>{line}</span>
                      ) : line.includes('=') ? (
                        <>
                          <span style={{ color: primaryColor }}>{line.split('=')[0]}</span>
                          <span style={{ color: '#D1D5DB' }}>=</span>
                          <span style={{ color: '#34d399' }}>{line.split('=').slice(1).join('=')}</span>
                        </>
                      ) : line.includes('class ') || line.includes('def ') ? (
                        <>
                          <span style={{ color: '#a78bfa' }}>{line.split(' ')[0]} </span>
                          <span style={{ color: '#f472b6' }}>{line.split(' ').slice(1).join(' ')}</span>
                        </>
                      ) : line.includes('from ') || line.includes('import ') ? (
                        <span style={{ color: '#a78bfa' }}>{line}</span>
                      ) : (
                        <span style={{ color: '#D1D5DB' }}>{line}</span>
                      )}
                    </span>
                  ))}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocumentationSection;