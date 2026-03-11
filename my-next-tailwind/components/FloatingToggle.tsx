"use client"

export default function FloatingToggle({ sidebarOpen, setSidebarOpen }: any) {

  return (

    <button
      onClick={() => setSidebarOpen(!sidebarOpen)}
      className="fixed bottom-6 left-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition"
    >

      {sidebarOpen ? "←" : "→"}

    </button>

  )
}