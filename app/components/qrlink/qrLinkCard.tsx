'use client'

import { useState } from "react";
import Link from "next/link";
import { 
  FiCopy, 
  FiTrash2, 
  FiExternalLink,
  FiCheck 
} from "react-icons/fi";
import { MdQrCode } from "react-icons/md";
import { showToast } from "@/app/lib/toast-utils";
import { LinkCardProps } from "@/app/types/qrLinkType";

const QrLinkCard = ({ link, onDelete, onGenerateQR, style, deleting }: LinkCardProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(`https://${link.shortUrl}`);
      setCopied(true);
      showToast("Link copiado para a área de transferência!", "success");
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      showToast("Erro ao copiar o link", "error");
    }
  };

  const IconButton = ({
    children,
    onClick,
    className = "",
    ariaLabel,
    disabled = false,
  }: {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    ariaLabel: string;
    disabled?: boolean;
  }) => (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center justify-center w-9 h-9 rounded-lg border border-gray-300  
        bg-white text-gray-700 hover:bg-gray-50 
        transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );

  return (
    <div
      className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 
        animate-fade-in group border border-gray-200"
      style={style}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-medium text-gray-900 truncate">
              {link.title}
            </h3>
            <span className="text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700">
              {link.clicks} cliques
            </span>
          </div>

          <div className="flex items-center gap-1 mb-1">
            <Link
              href={`http://localhost:3000/projects/qrlink/${link.shortUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-medium text-sm hover:underline flex items-center gap-1"
            >
              {link.shortUrl}
              <FiExternalLink className="w-3 h-3" />
            </Link>
          </div>

          <p className="text-gray-500 text-xs mt-1 truncate">
            {link.originalUrl}
          </p>
        </div>

        <div className="flex items-center gap-2 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-200">
          
          {/* COPY */}
          <IconButton
            onClick={handleCopy}
            ariaLabel={copied ? "Link copiado" : "Copiar link"}
            className={copied ? "border-green-500 text-green-500" : ""}
          >
            {copied ? (
              <FiCheck className="w-4 h-4" />
            ) : (
              <FiCopy className="w-4 h-4" />
            )}
          </IconButton>

          <IconButton
            onClick={() => onGenerateQR(link)}
            ariaLabel="Gerar QR Code"
          >
            <MdQrCode className="w-4 h-4" />
          </IconButton>

          <IconButton
            onClick={() => onDelete(link.id)}
            ariaLabel="Excluir link"
            disabled={deleting}
            className="hover:bg-red-50 hover:border-red-300 hover:text-red-600"
          >
            {deleting ? (
              <div className="w-4 h-4 border-2 border-red-600 border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <FiTrash2 className="w-4 h-4" />
            )}
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default QrLinkCard;
