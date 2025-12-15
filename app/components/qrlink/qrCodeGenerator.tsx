'use client'

import { SetStateAction, useEffect, useRef, useState } from "react";
import { FiX, FiDownload } from "react-icons/fi";
import { showToast } from "@/app/lib/toast-utils";
import { QRCodeGeneratorProps } from "../../types/qrLinkType";
import QRCode from 'qrcode';

const QRCodeGenerator = ({ link, onClose }: QRCodeGeneratorProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [qrCodeUrl, setQrCodeUrl] = useState<string | null>(null);

  useEffect(() => {
    if (link?.shortUrl) {
      generateQRCode(`http://localhost:3000/projects/qrlink/${link.shortUrl}`);
    }
  }, [link]);

  const generateQRCode = (url: string) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    QRCode.toDataURL(url, { errorCorrectionLevel: 'H', width: 200 }, (err: any, url: SetStateAction<string | null>) => {
      if (err) {
        showToast("Erro ao gerar QR Code", "error");
        return;
      }
      setQrCodeUrl(url);
    });
  };

  const handleDownload = () => {
  try {
    const url = qrCodeUrl; 
    if (!url) return;

    const a = document.createElement("a");
    a.href = url;
    a.download = `qrcode-${link.shortUrl.split("/").pop()}.png`;
    a.click();
    
    showToast("QR Code baixado com sucesso!", "success");
  } catch (error) {
    showToast("Erro ao baixar QR Code", "error");
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
    const baseStyles =
      "px-4 py-2 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ";

    const variants = {
      default:
        "bg-white  border border-gray-300  text-gray-700  hover:bg-gray-50 focus:ring-blue-500",
      accent: "bg-indigo-600 text-white hover:bg-blue-700 focus:ring-blue-500",
      ghost: "bg-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:ring-gray-500",
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
            {qrCodeUrl ? (
              <img
                src={qrCodeUrl}
                alt={`QR Code para ${link.title}`}
                className="rounded-lg"
                aria-label={`QR Code para ${link.title}`}
              />
            ) : (
              <canvas
                ref={canvasRef}
                className="rounded-lg"
                aria-label={`QR Code para ${link.title}`}
              />
            )}
          </div>

          <p className="text-sm text-gray-500  mb-1 text-center">{link.title}</p>
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
