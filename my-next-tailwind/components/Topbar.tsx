export default function Topbar() {
  return (
    <div className="h-16 bg-white shadow flex items-center justify-between px-6">
      <h2 className="text-xl font-bold text-blue-900">Dashboard</h2>

      <div className="flex items-center gap-3">
        <div className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
          U
        </div>

        <span className="text-blue-900">Usuário</span>
      </div>
    </div>
  );
}
