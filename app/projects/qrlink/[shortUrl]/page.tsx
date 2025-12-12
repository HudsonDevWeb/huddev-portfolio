"use client";

import { useEffect } from "react";
import { useRouter, useParams } from "next/navigation";

const RedirectPage = () => {
  const router = useRouter();
  const params = useParams();
  const shortUrl = params?.shortUrl;

  useEffect(() => {
    if (!shortUrl) return;

    const redirect = async () => {
      const res = await fetch("/api/qrlink/getbyshort?shortUrl=" + shortUrl);
      if (!res.ok) {
        router.push("/projects/qrlink/error");
        return;
      }
      const data = await res.json();

      await fetch("/api/qrlink/click", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ shortUrl }),
      });

      window.location.href = data.originalUrl;
    };

    redirect();
  }, [shortUrl, router]);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 border-4 border-indigo-500 border-t-transparent border-solid rounded-full animate-spin"></div>
        <p className="text-gray-700 text-lg font-medium">Redirecionando...</p>
      </div>
    </div>
  );
};

export default RedirectPage;
