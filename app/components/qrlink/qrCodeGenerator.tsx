'use client'

import { useEffect, useRef } from "react";
import { FiX, FiDownload } from "react-icons/fi";
import { showToast } from "@/app/lib/toast-utils";
import { QRCodeGeneratorProps } from "../../types/qrLinkType";


const QRCodeGenerator = ({ link, onClose }: QRCodeGeneratorProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    generateQRCode();
  }, [link]);

  const generateQRCode = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const size = 200;
    canvas.width = size;
    canvas.height = size;

    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, size, size);

    ctx.fillStyle = "#1a1a2e";
    const moduleSize = 8;
    const modules = size / moduleSize;

    const urlHash = link.shortUrl.split("").reduce((a, b) => {
      return a + b.charCodeAt(0);
    }, 0);

    const drawPositionPattern = (x: number, y: number) => {
      const patternSize = 7 * moduleSize;
      ctx.fillRect(x, y, patternSize, moduleSize);
      ctx.fillRect(x, y + 6 * moduleSize, patternSize, moduleSize);
      ctx.fillRect(x, y, moduleSize, patternSize);
      ctx.fillRect(x + 6 * moduleSize, y, moduleSize, patternSize);
      ctx.fillRect(x + 2 * moduleSize, y + 2 * moduleSize, 3 * moduleSize, 3 * moduleSize);
    };

    drawPositionPattern(0, 0);
    drawPositionPattern(size - 7 * moduleSize, 0);
    drawPositionPattern(0, size - 7 * moduleSize);

    for (let row = 0; row < modules; row++) {
      for (let col = 0; col < modules; col++) {
        if (
          (row < 8 && col < 8) ||
          (row < 8 && col >= modules - 8) ||
          (row >= modules - 8 && col < 8)
        ) {
          continue;
        }

        const seed = (urlHash + row * col + row + col) % 3;
        if (seed === 0 || seed === 1) {
          ctx.fillRect(col * moduleSize, row * moduleSize, moduleSize, moduleSize);
        }
      }
    }

    for (let i = 8; i < modules - 8; i++) {
      if (i % 2 === 0) {
        ctx.fillRect(6 * moduleSize, i * moduleSize, moduleSize, moduleSize);
        ctx.fillRect(i * moduleSize, 6 * moduleSize, moduleSize, moduleSize);
      }
    }
  };

  const handleDownload = () => {
    try {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const url = canvas.toDataURL("image/png");
      const a = document.createElement("a");
      a.href = url;
      a.download = `qrcode-${link.shortUrl.split("/").pop()}.png`;
      a.click();
      showToast("QR Code baixado com sucesso!","success");
    } catch (error) {
      showToast("Erro ao baixar QR Code","error");
    }
  };

  const Button = ({ 
    children, 
    onClick, 
    className = "",
    variant = "default"
  }: { 
    children: React.ReactNode; 
    onClick?: () => void;
    className?: string;
    variant?: "default" | "accent" | "ghost";
  }) => {
    const baseStyles = "px-4 py-2 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ";
    
    const variants = {
      default: "bg-white  border border-gray-300  text-gray-700  hover:bg-gray-50 focus:ring-blue-500",
      accent: "bg-indigo-600 text-white hover:bg-blue-700 focus:ring-blue-500",
      ghost: "bg-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:ring-gray-500"
    };

    return (
      <button
        onClick={onClick}
        className={`${baseStyles} ${variants[variant]} ${className}`}
      >
        {children}
      </button>
    );
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
      <div className="bg-white rounded-2xl shadow-xl max-w-sm w-full p-6 animate-scale-in border border-gray-200 ">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900 ">QR Code</h3>
          <button
            onClick={onClose}
            className="h-8 w-8 rounded-lg flex items-center justify-center text-gray-500  hover:text-gray-700  hover:bg-gray-100  transition-colors"
            aria-label="Fechar modal"
          >
            <FiX className="w-4 h-4" />
          </button>
        </div>

        <div className="flex flex-col items-center">
          <div className="bg-gray-50  border border-gray-200  rounded-xl p-4 mb-4">
            <canvas 
              ref={canvasRef} 
              className="rounded-lg"
              aria-label={`QR Code para ${link.title}`}
            />
          </div>

          <p className="text-sm text-gray-500  mb-1 text-center">
            {link.title}
          </p>
          <p className="text-blue-600  font-medium text-sm mb-6 text-center">
            {link.shortUrl}
          </p>

          <Button 
            onClick={handleDownload} 
            variant="accent" 
            className="w-full flex items-center justify-center"
          >
            <FiDownload className="w-4 h-4 mr-2" />
            Baixar QR Code
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QRCodeGenerator;