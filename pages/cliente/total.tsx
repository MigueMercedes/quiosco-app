import { useEffect, useState } from "react";
import { formatAmount } from "../../helpers";
import useQuiosco from "../../hooks/useQuiosco";
import Layout from "../../layout/ClientLayout";

const Total = () => {
  const { order, orderName, setOrderName, processOrder, totalAmount } = useQuiosco();
  const [messageValidation, setMessageValidation] = useState("");
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (order.length === 0) {
      setMessageValidation("No hay elementos en tu pedido");
      setIsValid(false);
      return;
    }

    if (orderName.length >= 1 && orderName.length < 3 && order.length < 3) {
      const timer = setTimeout(() => {
        setMessageValidation("El nombre debe tener al menos 3 caracteres");
      }, 1000);
      setIsValid(false);
      return () => clearTimeout(timer);
    }

    if (orderName.length >= 3 && order.length > 0) {
      setMessageValidation("");
      setIsValid(true);
      return;
    }
  }, [isValid, order.length, orderName]);

  return (
    <Layout page="Total y Confirmar Pedido">
      <h1 className="text-4xl font-black">Total y Confirmar</h1>
      <p className="text-2xl my-10">Confirma tu Pedido a Continuación</p>

      <form onSubmit={processOrder} className="w-4/5 mx-auto lg:w-full">
        {messageValidation.length > 0 && (
          <p className="bg-red-500 text-white my-2 p-2 text-center w-full lg:w-2/4">{messageValidation}</p>
        )}

        <div>
          <label htmlFor="name" className="block uppercase text-slate-800 font-bold text-xl">
            Nombre
          </label>
          <input
            type="text"
            id="name"
            className="bg-gray-200 w-full lg:w-1/2 rounded-md p-2 mt-2"
            value={orderName}
            onChange={(e) => setOrderName(e.target.value)}
          />
        </div>

        <div className="mt-10">
          <p className="text-2xl">
            Total a pagar <span className="font-bold">{formatAmount(totalAmount)}</span>
          </p>
        </div>

        <div className="mt-5">
          <input
            type="submit"
            className={`w-full lg:w-1/3 px-5 py-2 rounded bg-indigo-600 text-white font-bold text-center ${
              isValid ? "hover:bg-indigo-700 cursor-pointer" : "opacity-50 cursor-not-allowed"
            }`}
            value={"Confirmar pedido"}
            disabled={isValid ? false : true}
          />
        </div>
      </form>
    </Layout>
  );
};

export default Total;
