"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { showToast } from "@/app/lib/toast-utils";

import {
    LuLock as Lock,
    LuMail as Mail,
    LuEye as Eye,
    LuEyeOff as EyeOff,
    LuQrCode as QrCode,
} from "react-icons/lu";

const QrLogin = () => {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const res = await fetch("/api/qrlink/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();

            if (!res.ok) {
                showToast(data.message || "Credenciais inválidas","error");
                setIsLoading(false);
                return;
            }

            localStorage.setItem("qrlogin-auth", "true");

            showToast("Login realizado com sucesso!","success")

            setTimeout(() => {
                window.location.reload();
            }, 500);

        } catch (err) {
            showToast("Erro ao realizar login","error");
        } finally {
            setIsLoading(false);
        }
    };


    return (
        <div className="min-h-screen bg-qrbackground gradient-soft flex items-center justify-center p-4 relative">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float" />
                <div
                    className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float"
                    style={{ animationDelay: "2s" }}
                />
            </div>

            <div className="w-full max-w-md relative">
                <div className="text-center mb-8 animate-fade-in">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-linear-to-br from-[#3F70DC] to-[#585ED7] shadow-medium mb-4">
                        <QrCode className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-2xl font-semibold text-gray-800">QRLink Manager</h1>
                    <p className="text-muted-foreground mt-2">Gerencie seus links e QR Codes</p>
                </div>

                <div
                    className="bg-white rounded-2xl shadow-md p-8 animate-slide-up"
                    style={{ animationDelay: "0.1s" }}
                >
                    <form onSubmit={handleLogin} className="space-y-5">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-800">Email</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-800" />

                                <input
                                    type="email"
                                    placeholder="seu@email.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="pl-11 w-full rounded-md bg-[#F6F7F9] border border-gray-200 p-2 outline-none focus:ring-2 focus:ring-primary transition"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-800">Senha</label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-800" />

                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="pl-11 pr-11 w-full rounded-md bg-[#F6F7F9] border border-gray-200 p-2 outline-none focus:ring-2 focus:ring-primary transition"
                                    required
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-800 hover:text-gray-500 transition"
                                >
                                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="checkbox" className="rounded border-input" />
                                <span className="text-gray-800">Lembrar-me</span>
                            </label>
                            <a href="#" className="text-gray-800 hover:underline">
                                Esqueceu a senha?
                            </a>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-linear-to-br from-[#F97D21] to-[#F9A737] text-white py-3 rounded-md font-medium hover:opacity-90 transition flex items-center justify-center gap-2"
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <>
                                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                            fill="none"
                                        />
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                        />
                                    </svg>
                                    Entrando...
                                </>
                            ) : (
                                "Entrar"
                            )}
                        </button>
                    </form>

                    <div className="mt-6 text-center bg-gray-200 rounded-md p-2">
                        <p className="text-md text-gray-600">
                           <span className="font-semibold">Email:</span> hudson@admin.com <br /> <span className="font-semibold">Senha:</span> 123456
                        </p>
                    </div>
                </div>

                <p
                    className="text-center text-xs text-muted-foreground mt-8 animate-fade-in"
                    style={{ animationDelay: "0.3s" }}
                >
                    © 2025 QRLink Manager. Todos os direitos reservados.
                </p>
            </div>
        </div>
    );
};

export default QrLogin;
