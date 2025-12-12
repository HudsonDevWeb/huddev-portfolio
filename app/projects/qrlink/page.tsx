"use client";

import { useState, useEffect } from "react";
import QrLogin from "@/app/components/qrlink/qrLogin";
import QrDashboard from "@/app/components/qrlink/qrDashboard";

export default function Page() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const loggedInStatus = localStorage.getItem("qrlogin-auth");
    setIsLoggedIn(!!loggedInStatus);
  }, []);

  return (
    <div>
      {isLoggedIn ? <QrDashboard /> : <QrLogin />}
    </div>
  );
}
