import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface IProps {
  children: JSX.Element | JSX.Element[];
  title: string;
}

export default function AdminLayout({ children, title }: IProps) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Café - {title}</title>
        <meta name="description" content="Quiosco Cafetería" />
      </Head>

      <div className="md:flex">
        <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5 py-5">
          <Image width={300} height={100} src="/assets/img/logo.svg" alt="imagen logotipo" />

          <nav className="mt-10 ms-5">
            <div className="flex flex-col h-full space-y-10">
              <div className="flex flex-col space-y-5 border p-2 rounded-md shadow">
                <button
                  className="text-2xl font-bold block bg-amber-500 hover:bg-amber-700 text-white py-2 px-4 rounded-md w-full"
                  onClick={() => {
                    router.push("/administracion/pendientes");
                  }}
                >
                  Pendientes
                </button>

                <button
                  className="text-2xl font-bold block bg bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded-md w-full"
                  onClick={() => {
                    router.push("/administracion/completadas");
                  }}
                >
                  Completadas
                </button>
              </div>

              <button
                className="text-2xl font-bold block bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded-md w-full"
                onClick={() => {
                  router.push("/");
                }}
              >
                Salir del panel
              </button>
            </div>
          </nav>
        </aside>

        <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
          <div className="p-10">{children}</div>
        </main>
      </div>
      <ToastContainer />
    </>
  );
}
