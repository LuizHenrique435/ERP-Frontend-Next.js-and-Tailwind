"use client";

import { useState } from "react";
import Layout from "@/components/Layout";

export default function Users() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "João Silva",
      role: "Administrador",
      sector: "TI",
      status: "Ativo",
    },
    {
      id: 2,
      name: "Maria Souza",
      role: "Gerente",
      sector: "Financeiro",
      status: "Ativo",
    },
    {
      id: 3,
      name: "Carlos Lima",
      role: "Vendas",
      sector: "Comercial",
      status: "Ativo",
    },
    { id: 4, name: "Ana Costa", role: "RH", sector: "RH", status: "Férias" },
    {
      id: 5,
      name: "Cleiton Silva",
      role: "Vendas",
      sector: "Comercial",
      status: "Ativo",
    },
    {
      id: 6,
      name: "Gustavo Lima",
      role: "Vendas",
      sector: "Comercial",
      status: "Ativo",
    },
    {
      id: 7,
      name: "Jeff Lima",
      role: "Vendas",
      sector: "Comercial",
      status: "Ativo",
    },
    {
      id: 8,
      name: "Joao Lima",
      role: "Vendas",
      sector: "Comercial",
      status: "Ativo",
    },
    {
      id: 9,
      name: "Carlos Joares",
      role: "Vendas",
      sector: "Comercial",
      status: "Ativo",
    },
    {
      id: 10,
      name: "Cristian Lima",
      role: "Vendas",
      sector: "Comercial",
      status: "Ativo",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editUser, setEditUser] = useState(null);
  const [search, setSearch] = useState("");
  const [sectorFilter, setSectorFilter] = useState("");

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.role.toLowerCase().includes(search.toLowerCase());

    const matchesSector = sectorFilter === "" || user.sector === sectorFilter;

    return matchesSearch && matchesSector;
  });

  const [form, setForm] = useState({
    name: "",
    role: "",
    sector: "",
    status: "Ativo",
  });

  function openAddModal() {
    setForm({ name: "", role: "", sector: "", status: "Ativo" });
    setEditUser(null);
    setShowModal(true);
  }

  function openEditModal(user) {
    setEditUser(user.id);
    setForm(user);
    setShowModal(true);
  }

  function saveUser() {
    if (editUser) {
      setUsers(users.map((u) => (u.id === editUser ? { ...u, ...form } : u)));
    } else {
      const newUser = {
        id: Date.now(),
        ...form,
      };

      setUsers([...users, newUser]);
    }

    setShowModal(false);
  }

  function deleteUser(id) {
    setUsers(users.filter((u) => u.id !== id));
  }

  return (
    <Layout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-slate-800">Usuários</h1>

        <div className="flex gap-4 mb-4">
          <input
            type="text"
            placeholder="Buscar usuário..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-slate-300 rounded-lg px-3 py-2 w-64 text-slate-800"
          />

          <select
            value={sectorFilter}
            onChange={(e) => setSectorFilter(e.target.value)}
            className="border border-slate-300 rounded-lg px-3 py-2 text-slate-800"
          >
            <option value="">Todos setores</option>
            <option value="TI">TI</option>
            <option value="Financeiro">Financeiro</option>
            <option value="Comercial">Comercial</option>
            <option value="RH">RH</option>
          </select>
        </div>

        <button
          onClick={openAddModal}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          + Adicionar Usuário
        </button>
      </div>

      <div className="bg-white rounded-xl shadow border border-slate-200">
        <table className="w-full text-sm text-slate-800">
          <thead className="bg-slate-100 text-slate-900 border-b border-slate-200">
            <tr>
              <th className="text-left p-4 font-semibold">Nome</th>
              <th className="text-left p-4 font-semibold">Cargo</th>
              <th className="text-left p-4 font-semibold">Setor</th>
              <th className="text-left p-4 font-semibold">Status</th>
              <th className="text-left p-4 font-semibold">Ações</th>
            </tr>
          </thead>

          <tbody className="text-slate-800">
            {filteredUsers.map((user) => (
              <tr
                key={user.id}
                className="border-b border-slate-200 hover:bg-slate-50 transition-colors"
              >
                <td className="p-4 font-medium text-slate-900">{user.name}</td>
                <td className="p-4">{user.role}</td>
                <td className="p-4">{user.sector}</td>

                <td className="p-4">
                  {user.status === "Ativo" && (
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium">
                      Ativo
                    </span>
                  )}

                  {user.status === "Férias" && (
                    <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs font-medium">
                      Férias
                    </span>
                  )}
                </td>

                <td className="p-4 flex gap-3">
                  <button
                    onClick={() => openEditModal(user)}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Editar
                  </button>

                  <button
                    onClick={() => deleteUser(user.id)}
                    className="text-red-600 hover:text-red-800 font-medium"
                  >
                    Deletar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MODAL */}

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Overlay escuro */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setShowModal(false)}
          ></div>

          {/* Modal */}
          <div className="relative bg-white rounded-xl shadow-xl p-6 w-[420px]">
            <h2 className="text-lg font-bold mb-4 text-slate-800">
              {editUser ? "Editar Usuário" : "Adicionar Usuário"}
            </h2>

            <div className="flex flex-col gap-3">
              <input
                placeholder="Nome"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="border border-slate-300 p-2 rounded text-slate-800"
              />

              <input
                placeholder="Cargo"
                value={form.role}
                onChange={(e) => setForm({ ...form, role: e.target.value })}
                className="border border-slate-300 p-2 rounded text-slate-800"
              />

              <select
                value={form.sector}
                onChange={(e) => setForm({ ...form, sector: e.target.value })}
                className="border border-slate-300 p-2 rounded text-slate-800"
              >
                <option value="">Selecione setor</option>
                <option value="TI">TI</option>
                <option value="Financeiro">Financeiro</option>
                <option value="Comercial">Comercial</option>
                <option value="RH">RH</option>
              </select>

              <select
                value={form.status}
                onChange={(e) => setForm({ ...form, status: e.target.value })}
                className="border border-slate-300 p-2 rounded text-slate-800"
              >
                <option>Ativo</option>
                <option>Férias</option>
              </select>
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 border border-slate-300 rounded text-slate-700 hover:bg-slate-100"
              >
                Cancelar
              </button>

              <button
                onClick={saveUser}
                className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800"
              >
                Salvar
              </button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
