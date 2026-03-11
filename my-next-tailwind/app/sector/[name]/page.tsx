"use client";

import Layout from "@/components/Layout";
import { useParams } from "next/navigation";

export default function SectorPage() {

  const params = useParams();
  const name = params?.name as string;

  const data = [
    { id: 1, item: "Relatório Mensal", responsavel: "João", status: "Concluído" },
    { id: 2, item: "Planejamento", responsavel: "Maria", status: "Em andamento" },
    { id: 3, item: "Auditoria", responsavel: "Carlos", status: "Pendente" },
  ];

  const sectorName =
    name?.charAt(0).toUpperCase() + name?.slice(1);

  return (
    <Layout>

      <h1 className="text-2xl font-bold text-slate-800 mb-6">
        Setor: {sectorName}
      </h1>

      {/* CARDS */}

      <div className="grid grid-cols-3 gap-6 mb-8">

        <div className="bg-white p-6 rounded-xl shadow border">
          <p className="text-slate-500 text-sm">Atividades</p>
          <h2 className="text-2xl font-bold text-slate-800">32</h2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow border">
          <p className="text-slate-500 text-sm">Pendentes</p>
          <h2 className="text-2xl font-bold text-yellow-600">7</h2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow border">
          <p className="text-slate-500 text-sm">Concluídas</p>
          <h2 className="text-2xl font-bold text-green-600">25</h2>
        </div>

      </div>

      {/* TABELA */}

      <div className="bg-white rounded-xl shadow border">

        <div className="flex justify-between items-center p-4 border-b">

          <h2 className="font-semibold text-slate-800">
            Atividades do setor
          </h2>

          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            + Nova atividade
          </button>

        </div>

        <table className="w-full text-sm text-slate-800">

          <thead className="bg-slate-100">
            <tr>
              <th className="text-left p-4">Item</th>
              <th className="text-left p-4">Responsável</th>
              <th className="text-left p-4">Status</th>
            </tr>
          </thead>

          <tbody>

            {data.map((row) => (

              <tr key={row.id} className="border-t hover:bg-slate-50">

                <td className="p-4">{row.item}</td>
                <td className="p-4">{row.responsavel}</td>

                <td className="p-4">

                  {row.status === "Concluído" && (
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
                      Concluído
                    </span>
                  )}

                  {row.status === "Em andamento" && (
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">
                      Em andamento
                    </span>
                  )}

                  {row.status === "Pendente" && (
                    <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs">
                      Pendente
                    </span>
                  )}

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </Layout>
  );
}