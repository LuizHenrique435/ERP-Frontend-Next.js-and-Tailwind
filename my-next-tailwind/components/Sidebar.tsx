"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Sidebar({ collapsed }) {

  const router = useRouter();

  const sectors = [
    { name: "Financeiro", icon: "💰" },
    { name: "RH", icon: "👥" },
    { name: "TI", icon: "💻" },
    { name: "Vendas", icon: "📊" },
    { name: "Logística", icon: "🚚" }
  ];

  function handleLogout() {
    localStorage.removeItem("user");
    router.push("/login");
  }

  return (

    <aside className="h-full bg-blue-700 text-white p-6 flex flex-col">

      {!collapsed && (
        <h1 className="text-2xl font-bold mb-8">
          ERP System
        </h1>
      )}

      <nav className="flex flex-col gap-2 mb-8">

        <Link href="/" className="hover:bg-blue-600 p-2 rounded">
          🏠 {!collapsed && "Home"}
        </Link>

        <Link href="/dashboard" className="hover:bg-blue-600 p-2 rounded">
          📊 {!collapsed && "Dashboard"}
        </Link>

        <Link href="/users" className="hover:bg-blue-600 p-2 rounded">
          👥 {!collapsed && "Users"}
        </Link>

      </nav>

      {!collapsed && (
        <p className="text-sm uppercase text-blue-200 mb-2">
          Setores
        </p>
      )}

      <nav className="flex flex-col gap-1">

        {sectors.map((s, i) => (

          <Link
            key={i}
            href={`/sector/${s.name.toLowerCase()}`}
            className="flex gap-2 hover:bg-blue-600 p-2 rounded"
          >
            <span>{s.icon}</span>
            {!collapsed && s.name}
          </Link>

        ))}

      </nav>

      {/* BOTÃO SAIR */}

      <div className="mt-auto pt-6">

        <button
          onClick={handleLogout}
          className="w-full bg-red-500 hover:bg-red-600 p-2 rounded transition flex items-center justify-center gap-2"
        >
          🚪 {!collapsed && "Sair"}
        </button>

      </div>

    </aside>
  );
}