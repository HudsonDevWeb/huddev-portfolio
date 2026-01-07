import { FaGithub, FaTwitter, FaDiscord } from "react-icons/fa";

const FooterSection = () => {
  const primaryColor = "#9E58E1";
  const primaryLight = "rgba(158, 88, 225, 0.1)";
  const primaryLighter = "rgba(158, 88, 225, 0.05)";
  const primaryMedium = "rgba(158, 88, 225, 0.2)";
  const primaryDark = "rgba(158, 88, 225, 0.8)";
  const borderColor = "rgba(158, 88, 225, 0.15)";

  return (
    <footer 
      className="py-12 flex items-center justify-center bg-gray-950"

    >
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div 
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{
                backgroundColor: primaryLight,
                border: `1px solid ${primaryMedium}`
              }}
            >
              <span 
                className="font-bold text-lg"
                style={{ color: primaryColor }}
              >
                N
              </span>
            </div>
            <span className="font-bold text-gray-900 dark:text-white">
              <span 
                style={{
                  background: `linear-gradient(135deg, ${primaryColor}, #B36EF3)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Nebula
              </span>
              <span className="text-gray-900 dark:text-gray-100">Trade</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg flex items-center justify-center transition-all hover:scale-110 hover:-translate-y-1"
              style={{
                backgroundColor: primaryLighter,
                border: `1px solid ${borderColor}`,
                color: primaryColor,
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)'
              }}
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg flex items-center justify-center transition-all hover:scale-110 hover:-translate-y-1"
              style={{
                backgroundColor: primaryLighter,
                border: `1px solid ${borderColor}`,
                color: primaryColor,
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)'
              }}
            >
              <FaTwitter className="w-5 h-5" />
            </a>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg flex items-center justify-center transition-all hover:scale-110 hover:-translate-y-1"
              style={{
                backgroundColor: primaryLighter,
                border: `1px solid ${borderColor}`,
                color: primaryColor,
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)'
              }}
            >
              <FaDiscord className="w-5 h-5" />
            </a>
          </div>

          <p 
            className="text-sm"
            style={{ color: '#6B7280' }}
          >
            © 2026 NebulaTrade. Licença MIT.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;