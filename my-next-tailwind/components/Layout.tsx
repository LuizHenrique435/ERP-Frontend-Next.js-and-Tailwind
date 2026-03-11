"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import Link from "next/link";

export default function Layout({ children }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen bg-slate-100">

      {/* SIDEBAR */}
      <div
        className={`
        bg-blue-700 text-white
        transition-all duration-300
        ${collapsed ? "w-[70px]" : "w-[240px]"}
        `}
      >
        <Sidebar collapsed={collapsed} />
      </div>

      {/* CONTEÚDO */}
      <div className="flex-1 flex flex-col">

        {/* NAVBAR SUPERIOR */}
        <div className="bg-white shadow-sm border-b px-6 py-4 flex items-center justify-between">

          {/* ESQUERDA */}
          <div className="flex items-center">

            <button
              onClick={() => setCollapsed(!collapsed)}
              className="text-xl text-slate-700 hover:text-black transition"
            >
              ☰
            </button>

            <h1 className="ml-4 font-semibold text-slate-800">
              ERP System
            </h1>

          </div>

          {/* BOTÃO PERFIL */}

          <Link
            href="/profile"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-400 px-4 py-2 rounded-lg transition"
          >
            👤 Perfil
          </Link>

        </div>

        {/* CONTEÚDO DAS PÁGINAS */}
        <main className="p-6">
          {children}
        </main>

      </div>

    </div>
  );
}