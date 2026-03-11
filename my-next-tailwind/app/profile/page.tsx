import Layout from "@/components/Layout";

export default function Profile() {

  return (

    <Layout>

      <h1 className="text-2xl font-bold text-slate-800 mb-6">
        Perfil do Usuário
      </h1>

      <div className="bg-white p-6 rounded-xl shadow border w-[420px]">

        <div className="mb-4">
          <p className="text-sm text-slate-500">Nome</p>
          <p className="text-lg font-semibold text-slate-800">
            Luiz Henrique
          </p>
        </div>

        <div className="mb-4">
          <p className="text-sm text-slate-500">Email</p>
          <p className="text-lg font-semibold text-slate-800">
            usuario@email.com
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-500">Permissão</p>
          <p className="text-lg font-semibold text-blue-700">
            Administrador
          </p>
        </div>

      </div>

    </Layout>

  );
}