'use client'

import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "Sobre" },
    { href: "#features", label: "Recursos" },
    { href: "#documentation", label: "Documentação" },
    { href: "#security", label: "Segurança" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled
          ? "backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-purple-500/20"
          : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16 md:h-20">
          
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-purple-500/10 transition-colors">
              <span className="font-bold text-lg text-purple-400">N</span>
            </div>

            <span className="font-bold text-lg">
              <span className="bg-linear-to-br from-purple-400 to-purple-600 bg-clip-text text-transparent">
                Nebula
              </span>
              <span className="text-gray-900 dark:text-gray-100">
                Trade
              </span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://github.com/HudsonDevWeb/NebulaBot"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg text-sm flex items-center gap-2
                         bg-purple-500 text-white
                         transition-transform hover:scale-105"
            >
              <FaGithub className="w-4 h-4" />
              GitHub
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-purple-400"
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMobileMenuOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </nav>

        {isMobileMenuOpen && (
          <div className="md:hidden mb-4 rounded-xl p-4
                          bg-white/95 dark:bg-gray-900/95
                          backdrop-blur border border-purple-500/20
                          shadow-lg animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  scroll={false}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/5"
                >
                  {link.label}
                </Link>
              ))}

              <div className="my-2 border-t border-purple-500/20" />

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 rounded-lg flex items-center gap-2
                           bg-purple-500/5 border border-purple-500/20
                           text-purple-400"
              >
                <FaGithub className="w-4 h-4" />
                GitHub
              </a>

              <Link
                href="#get-started"
                scroll={false}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 rounded-lg text-center font-medium
                           bg-purple-500 text-white"
              >
                Começar
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
