import Head from "next/head";
import { ReactNode } from "react";
import Sidebar from "../components/Sidebar";
import Modal from "react-modal";
import useQuiosco from "../hooks/useQuiosco";
import ModalProduct from "../components/ModalProduct";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import Steps from "../components/Steps";
const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    zIndex: 1000,
  },
};

Modal.setAppElement("#__next");

export default function Layout({ children, page }: { children: ReactNode; page: string }) {
  const { modal } = useQuiosco();

  return (
    <>
      <Head>
        <title>Cafe - {page}</title>
        <meta name="description" content="Quiosco Cafeteria" />
      </Head>

      {/* Lateral Menu */}
      <div className="md:flex overflow-y-hidden max-h-screen">
        <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5">
          <Sidebar />
        </aside>

        {/* Principal Content */}
        <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
          <div className="p-10">
            <Steps />
            {children}
          </div>
        </main>
      </div>

      {modal && (
          <Modal isOpen={modal} style={modalStyles}>
          <ModalProduct />
        </Modal>
      )}

      <ToastContainer />
    </>
  );
}
