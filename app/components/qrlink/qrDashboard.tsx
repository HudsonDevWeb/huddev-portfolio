import { useState } from "react";
import {
    LuQrCode,
    LuLink2,
    LuPlus,
    LuExternalLink,
    LuLogOut,
    LuTrash2
} from "react-icons/lu";
import QrLinkCard from "./qrLinkCard";
import QRCodeGenerator from "./qrCodeGenerator";
import { showToast } from "@/app/lib/toast-utils";

interface LinkItem {
    id: string;
    title: string;
    originalUrl: string;
    shortUrl: string;
    clicks: number;
    createdAt: Date;
}

const Dashboard = () => {
    const [links, setLinks] = useState<LinkItem[]>([
        {
            id: "1",
            title: "Meu Site",
            originalUrl: "https://meusite.com.br/pagina-muito-longa",
            shortUrl: "qrl.ink/abc123",
            clicks: 142,
            createdAt: new Date("2024-01-15"),
        },
        {
            id: "2",
            title: "Portfólio",
            originalUrl: "https://portfolio.design/projetos",
            shortUrl: "qrl.ink/xyz789",
            clicks: 89,
            createdAt: new Date("2024-01-20"),
        },
        {
            id: "3",
            title: "Documentação",
            originalUrl: "https://docs.empresa.com/api/v2",
            shortUrl: "qrl.ink/doc456",
            clicks: 234,
            createdAt: new Date("2024-02-01"),
        },
    ]);

    const [newUrl, setNewUrl] = useState("");
    const [newTitle, setNewTitle] = useState("");
    const [showQRModal, setShowQRModal] = useState(false);
    const [selectedLink, setSelectedLink] = useState<LinkItem | null>(null);

    const handleCreateLink = () => {
        if (!newUrl) {
            showToast("Por favor, insira uma URL para encurtar.", "error");
            return;
        }

        const newLink: LinkItem = {
            id: Date.now().toString(),
            title: newTitle || "Novo Link",
            originalUrl: newUrl,
            shortUrl: `qrl.ink/${Math.random().toString(36).slice(2, 8)}`,
            clicks: 0,
            createdAt: new Date(),
        };

        setLinks([newLink, ...links]);
        setNewUrl("");
        setNewTitle("");
        showToast("Seu novo link encurtado está pronto.", "success");
    };

    const handleDelete = (id: string) => {
        setLinks(links.filter((link) => link.id !== id));
        showToast("O link foi removido com sucesso.", "success");
    };

    const handleGenerateQR = (link: LinkItem) => {
        setSelectedLink(link);
        setShowQRModal(true);
    };

    const logout = () => {
        localStorage.removeItem("qrlogin-auth");
        window.location.reload();
    };

    return (
        <div className="min-h-screen bg-qrbackground">
            <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center">
                                <LuQrCode className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-lg font-semibold text-gray-900">QRLink Manager</span>
                        </div>
                        <button onClick={logout} className="text-gray-500 flex justify-center items-center hover:text-gray-900">
                            <LuLogOut className="w-4 h-4 mr-2" />
                            Sair
                        </button>
                    </div>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                    <div className="bg-white rounded-xl p-5 shadow-md">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center">
                                <LuLink2 className="w-5 h-5 text-indigo-600" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Total de Links</p>
                                <p className="text-2xl font-semibold text-gray-900">{links.length}</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl p-5 shadow-md">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center">
                                <LuQrCode className="w-5 h-5 text-orange-600" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">QR Codes Gerados</p>
                                <p className="text-2xl font-semibold text-gray-900">{links.length}</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl p-5 shadow-md">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                                <LuExternalLink className="w-5 h-5 text-green-600" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Total de Cliques</p>
                                <p className="text-2xl font-semibold text-gray-900">
                                    {links.reduce((acc, link) => acc + link.clicks, 0)}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-md mb-8">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Criar novo link</h2>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <input
                            type="text"
                            placeholder="Título (opcional)"
                            value={newTitle}
                            onChange={(e) => setNewTitle(e.target.value)}
                            className="sm:w-48 p-2 border bg-qrbackground border-gray-300 rounded-lg"
                        />
                        <input
                            type="url"
                            placeholder="Cole sua URL aqui..."
                            value={newUrl}
                            onChange={(e) => setNewUrl(e.target.value)}
                            className="flex-1 p-2 border bg-qrbackground border-gray-300 rounded-lg"
                        />
                        <button
                            onClick={handleCreateLink}
                            className="bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
                        >
                            <LuPlus className="w-4 h-4" />
                            Criar Link
                        </button>
                    </div>
                </div>

                <div className="space-y-4">
                    <h2 className="text-lg font-semibold text-gray-900">Seus Links</h2>
                    {links.length === 0 ? (
                        <div className="bg-white rounded-2xl p-12 shadow-md text-center">
                            <div className="w-16 h-16 rounded-2xl bg-gray-200 flex items-center justify-center mx-auto mb-4">
                                <LuLink2 className="w-8 h-8 text-gray-400" />
                            </div>
                            <h3 className="text-gray-900 font-medium mb-2">Nenhum link ainda</h3>
                            <p className="text-gray-500 text-sm">Crie seu primeiro link encurtado acima!</p>
                        </div>
                    ) : (
                        <div className="grid gap-4">
                            {links.map((link, index) => (
                                <QrLinkCard
                                    key={link.id}
                                    link={link}
                                    onDelete={handleDelete}
                                    onGenerateQR={handleGenerateQR}
                                    style={{ animationDelay: `${0.3 + index * 0.05}s` }}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </main>

            {showQRModal && selectedLink && (
                <QRCodeGenerator
                    link={selectedLink}
                    onClose={() => setShowQRModal(false)}
                />
            )}
        </div>
    );
};

export default Dashboard;
