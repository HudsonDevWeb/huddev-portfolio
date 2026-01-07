'use client'

import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const primaryColor = "#9E58E1";
  const primaryLight = "rgba(158, 88, 225, 0.1)";
  const primaryLighter = "rgba(158, 88, 225, 0.05)";
  const primaryMedium = "rgba(158, 88, 225, 0.2)";
  const primaryDark = "rgba(158, 88, 225, 0.8)";
  const borderColor = "rgba(158, 88, 225, 0.15)";

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b" 
          : "bg-transparent"
      }`}
      style={{
        borderColor: isScrolled ? borderColor : 'transparent'
      }}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2 group">
            <div 
              className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors"
              style={{
                backgroundColor: primaryLight
              }}
            >
              <span 
                className="font-bold text-lg"
                style={{ color: primaryColor }}
              >
                N
              </span>
            </div>
            <span className="font-bold text-lg dark:text-white">
              <span 
                className="bg-clip-text text-transparent font-bold"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${primaryColor}, #B36EF3)`
                }}
              >
                Nebula
              </span>
              <span className="text-gray-900 dark:text-gray-100">Trade</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm transition-colors relative group"
                style={{
                  color: isScrolled ? '#374151' : '#9CA3AF'
                }}
                scroll={false}
              >
                {link.label}
                <span 
                  className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                  style={{
                    backgroundColor: primaryColor
                  }}
                />
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg text-sm flex items-center gap-2 transition-all hover:scale-105"
              style={{
                backgroundColor: primaryLighter,
                color: primaryColor,
                border: `1px solid ${borderColor}`
              }}
            >
              <FaGithub className="w-4 h-4" />
              GitHub
            </a>
            <Link
              href="#get-started"
              className="px-4 py-2 rounded-lg text-sm font-medium hover:scale-105 transition-transform"
              style={{
                backgroundColor: primaryColor,
                color: 'white'
              }}
              scroll={false}
            >
              Começar
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg transition-colors"
            style={{
              color: primaryColor
            }}
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
          <div 
            className="md:hidden rounded-xl p-4 mb-4 animate-fade-in"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(10px)',
              border: `1px solid ${borderColor}`,
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
            }}
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-lg transition-colors hover:bg-gray-50"
                  style={{
                    color: '#374151'
                  }}
                  scroll={false}
                >
                  {link.label}
                </Link>
              ))}
              <div 
                className="my-2"
                style={{
                  borderTop: `1px solid ${borderColor}`
                }}
              />
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 rounded-lg flex items-center gap-2 transition-colors"
                style={{
                  backgroundColor: primaryLighter,
                  color: primaryColor,
                  border: `1px solid ${borderColor}`
                }}
              >
                <FaGithub className="w-4 h-4" />
                GitHub
              </a>
              <Link
                href="#get-started"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 rounded-lg text-center font-medium transition-colors"
                style={{
                  backgroundColor: primaryColor,
                  color: 'white'
                }}
                scroll={false}
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