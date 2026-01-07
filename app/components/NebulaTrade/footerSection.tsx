import { FaGithub, FaTwitter, FaDiscord } from "react-icons/fa";

const FooterSection = () => {
  return (
    <footer className="py-12 bg-gray-950">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-purple-500/10 border border-purple-500/20">
              <span className="font-bold text-lg text-purple-400">N</span>
            </div>

            <span className="font-bold text-lg">
              <span className="bg-linear-to-br from-purple-400 to-purple-600 bg-clip-text text-transparent">
                Nebula
              </span>
              <span className="text-white">Trade</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg flex items-center justify-center
                         bg-purple-500/5 border border-purple-500/20
                         text-purple-400 transition-all
                         hover:scale-110 hover:-translate-y-1
                         shadow-md"
            >
              <FaGithub className="w-5 h-5" />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg flex items-center justify-center
                         bg-purple-500/5 border border-purple-500/20
                         text-purple-400 transition-all
                         hover:scale-110 hover:-translate-y-1
                         shadow-md"
            >
              <FaTwitter className="w-5 h-5" />
            </a>

            <a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg flex items-center justify-center
                         bg-purple-500/5 border border-purple-500/20
                         text-purple-400 transition-all
                         hover:scale-110 hover:-translate-y-1
                         shadow-md"
            >
              <FaDiscord className="w-5 h-5" />
            </a>
          </div>

          <p className="text-sm text-gray-400">
            © 2026 NebulaTrade. Licença MIT.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
