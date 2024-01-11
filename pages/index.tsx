import type { NextPage } from "next";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">Quiosco App</h1>

        <div className="grid grid-cols-1 gap-4">
          <button
            type="button"
            className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-md w-full"
            onClick={() => router.push("/administracion/pendientes")}
          >
            Area de Cocina
          </button>

          <button
            type="button"
            className="bg-amber-500 hover:bg-amber-600 text-white py-2 px-4 rounded-md w-full"
            onClick={() => router.push("/cliente")}
          >
            Area de Cliente
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
