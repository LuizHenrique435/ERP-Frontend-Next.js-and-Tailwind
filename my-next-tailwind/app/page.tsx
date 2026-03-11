"use client";

import Layout from "@/components/Layout";
import Link from "next/link";

const sectors = [
  { name: "financeiro", icon: "💰" },
  { name: "rh", icon: "👥" },
  { name: "ti", icon: "💻" },
  { name: "vendas", icon: "📊" },
  { name: "logistica", icon: "🚚" }
];

export default function Home() {

  return (

    <Layout>

      <h1 className="text-3xl font-bold text-slate-900 mb-8">
        ERP System
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {sectors.map((sector) => (

          <Link
            key={sector.name}
            href={`/sector/${sector.name}`}
            className="bg-white p-6 rounded-xl shadow border hover:shadow-lg hover:scale-[1.02] transition text-slate-800"
          >

            <div className="text-3xl mb-3">
              {sector.icon}
            </div>

            <h2 className="text-lg font-semibold capitalize text-slate-900">
              {sector.name}
            </h2>

            <p className="text-sm text-slate-500 mt-2">
              Acessar módulo
            </p>

          </Link>

        ))}

      </div>

    </Layout>
  );
}