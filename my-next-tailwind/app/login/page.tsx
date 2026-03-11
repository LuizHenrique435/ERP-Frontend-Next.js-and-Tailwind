"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Login() {
  const router = useRouter();

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    router.push("/");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-slate-900">
      <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-black dark:text-white">
          Login
        </h1>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded-md dark:bg-slate-700 dark:text-white"
          />

          <input
            type="password"
            placeholder="Senha"
            className="w-full p-2 border rounded-md dark:bg-slate-700 dark:text-white"
          />

          <button className="w-full bg-blue-600 text-white py-2 rounded-md">
            Entrar
          </button>
        </form>

        <p className="text-center mt-6 text-sm text-gray-500">
          Não tem conta?
          <Link href="/register" className="text-blue-600 ml-2">
            Criar conta
          </Link>
        </p>
      </div>
    </div>
  );
}
