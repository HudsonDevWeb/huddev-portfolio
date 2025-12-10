"use client";

import { useEffect, useState, useCallback } from "react";
import { MdOutlineFileDownload, MdMenu, MdClose } from "react-icons/md";
import Image from "next/image";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
  { href: "#about", label: "Sobre" },
  { href: "#skills", label: "Skills" },
  { href: "#journey", label: "Jornada" },
  { href: "#projects", label: "Projetos" }
];

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const renderLinks = (className: string) => (
  links.map((link) => (
    <a
      key={link.href}
      href={link.href}
      className={`${className} font-semibold font-open relative overflow-hidden group`}
    >
      {link.label}
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
    </a>
  ))
);


  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-all duration-500 ease-in-out z-50 ${
        isScrolled ? 'max-w-5xl' : 'max-w-screen-2xl'
      } mx-auto`}
    >
      <div
        className={`w-full flex justify-between bg-background items-center rounded-xl transition-all duration-300 ease-in-out ${
          isScrolled ? 'px-4 shadow-lg opacity-90' : 'px-4 shadow-none'
        }`}
      >

        <div className="text-2xl font-bold">
          <a href="/">
            <Image
              src="/logoB.webp"
              height={100}
              width={100}
              alt="Logo"
              className="mm:h-16 lg:h-24 w-auto"
            />
          </a>
        </div>

        <div className="hidden lg:flex justify-center text-sm items-center space-x-10">
          {renderLinks("text-white")}
        </div>

        <div>
          <a
            href="/HudsonDesenvolvedor.pdf"
            download
            className="font-semibold hidden lg:flex font-open text-sm text-black bg-white py-2 px-4 gap-2 items-center justify-center rounded-md"
          >
            Baixar Currículo
            <MdOutlineFileDownload size={20} />
          </a>
        </div>

        <div className="lg:hidden flex">
          <button
            aria-label="menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white"
          >
            {menuOpen ? <MdClose size={30} /> : <MdMenu size={30} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-background text-white fixed flex flex-col top-22 opacity-90 left-0 w-full h-auto z-20 px-4 pt-4 pb-4 space-y-5">
          {links.map((link) => (
            <button key={link.href} onClick={() => setMenuOpen(false)} className="self-start">
              <a href={link.href} className=" font-semibold font-open hover:border-b-2 transition">
                {link.label}
              </a>
            </button>
          ))}
          <a
            href="/docs/HudsonDesenvolvedor.pdf"
            download
            className="font-semibold font-open text-sm text-black bg-white py-2 px-4 flex gap-2 items-center justify-center"
          >
            Baixar Currículo
            <MdOutlineFileDownload size={20} />
          </a>
        </div>
      )}
    </header>
  );
};
