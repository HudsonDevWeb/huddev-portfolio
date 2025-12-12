export interface LinkItem {
  id: string;
  title: string;
  originalUrl: string;
  shortUrl: string;
  clicks: number;
  createdAt: Date;
}

export interface QRCodeGeneratorProps {
  link: LinkItem;
  onClose: () => void;
}

export interface LinkCardProps {
  deleting: boolean;
  link: LinkItem;
  onDelete: (id: string) => void;
  onGenerateQR: (link: LinkItem) => void;
  style?: React.CSSProperties;
}