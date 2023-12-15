import Head from "next/head";
import { ReactNode } from "react";
import Sidebar from "../components/Sidebar";

export default function Layout({children, page}: {children: ReactNode, page: string}) {
  return (
    <>
      <Head>
        <title>Cafe - {page}</title>
        <meta name="description" content="Quiosco Cafeteria" />
      </Head>

      {/* Lateral Menu */}
      <div className="md:flex">
        <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5">
          <Sidebar />
        </aside>

        {/* Principal Content */}
        <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
          {children}
        </main>
      </div>
    </>
  )
}
