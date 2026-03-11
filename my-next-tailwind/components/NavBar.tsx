"use client"

import Link from "next/link"

export default function Navbar({ toggleTheme, dark, collapsed, setCollapsed }) {

  return (

    <header className="h-16 bg-white dark:bg-gray-800 shadow flex items-center justify-between px-6">

      <div className="flex items-center gap-3">

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-xl"
        >
          ☰
        </button>

        <h2 className="font-semibold text-gray-700 dark:text-gray-200">
          Dashboard
        </h2>

      </div>

      <div className="flex items-center gap-4">

        <button
          onClick={toggleTheme}
          className="bg-gray-200 dark:bg-gray-700 px-3 py-2 rounded-lg"
        >
          {dark ? "☀️" : "🌙"}
        </button>

        <Link
          href="/profile"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Perfil
        </Link>

      </div>

    </header>

  )

}