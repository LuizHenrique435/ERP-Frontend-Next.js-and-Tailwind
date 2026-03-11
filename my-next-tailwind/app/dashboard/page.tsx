"use client";

import Layout from "@/components/Layout";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts";

const vendas = [
  { mes: "Jan", valor: 4000 },
  { mes: "Fev", valor: 3000 },
  { mes: "Mar", valor: 5000 },
  { mes: "Abr", valor: 4500 },
  { mes: "Mai", valor: 6000 }
];

const setores = [
  { name: "Financeiro", value: 10 },
  { name: "RH", value: 6 },
  { name: "TI", value: 12 },
  { name: "Vendas", value: 8 }
];

const COLORS = ["#2563eb", "#16a34a", "#f59e0b", "#dc2626"];

export default function Dashboard() {
  return (
    <Layout>

      <h1 className="text-2xl font-bold text-slate-900 mb-6">
        Dashboard
      </h1>

      {/* KPI CARDS */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">

        <div className="bg-white p-6 rounded-xl shadow border text-slate-800">
          <p className="text-sm text-slate-500">
            Faturamento do mês
          </p>
          <h2 className="text-2xl font-bold text-green-600">
            R$ 84.200
          </h2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow border text-slate-800">
          <p className="text-sm text-slate-500">
            Pedidos
          </p>
          <h2 className="text-2xl font-bold">
            132
          </h2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow border text-slate-800">
          <p className="text-sm text-slate-500">
            Usuários ativos
          </p>
          <h2 className="text-2xl font-bold">
            18
          </h2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow border text-slate-800">
          <p className="text-sm text-slate-500">
            Entregas pendentes
          </p>
          <h2 className="text-2xl font-bold text-yellow-600">
            9
          </h2>
        </div>

      </div>

      {/* ATIVIDADES RECENTES */}

      <div className="bg-white p-6 rounded-xl shadow border mb-8 text-slate-800">

        <h2 className="font-semibold text-lg mb-4">
          Atividades recentes
        </h2>

        <ul className="space-y-3 text-sm text-slate-600">

          <li>
            ✔ Pedido #4521 foi enviado para logística
          </li>

          <li>
            💰 Pagamento recebido do cliente Empresa Alpha
          </li>

          <li>
            👥 Novo usuário cadastrado no sistema
          </li>

          <li>
            📊 Relatório financeiro atualizado
          </li>

        </ul>

      </div>

      {/* GRÁFICOS */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* GRÁFICO DE VENDAS */}

        <div className="bg-white p-6 rounded-xl shadow border text-slate-800">

          <h2 className="font-semibold mb-4">
            Vendas Mensais
          </h2>

          <ResponsiveContainer width="100%" height={300}>

            <BarChart data={vendas}>

              <XAxis dataKey="mes" />
              <YAxis />
              <Tooltip />

              <Bar dataKey="valor" fill="#2563eb" />

            </BarChart>

          </ResponsiveContainer>

        </div>

        {/* GRÁFICO DE SETORES */}

        <div className="bg-white p-6 rounded-xl shadow border text-slate-800">

          <h2 className="font-semibold mb-4">
            Atividades por setor
          </h2>

          <ResponsiveContainer width="100%" height={300}>

            <PieChart>

              <Pie
                data={setores}
                dataKey="value"
                nameKey="name"
                outerRadius={100}
                label
              >

                {setores.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}

              </Pie>

              <Tooltip />

            </PieChart>

          </ResponsiveContainer>

        </div>

      </div>

    </Layout>
  );
}