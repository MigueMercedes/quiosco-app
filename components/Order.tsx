import axios from "axios";
import Image from "next/image";
import { toast } from "react-toastify";
import { formatAmount } from "../helpers";
import { IOrderResponse } from "../interfaces/order.interface";

interface IProps {
  order: IOrderResponse;
}
const Order = ({ order }: IProps) => {
  const { name, amount, orderData, date, status, id } = order;

  const processingOrder = async () => {
    try {
      await axios.post(`/api/orders/${id}`);
      toast.success("El pedido ha sido procesado");
    } catch (error) {
      toast.error("Error al procesar el pedido");
    }
  };

  return (
    <div className="border p-10 space-y-5">
      <h1 className="text-2xl font-bold">Orden: {id}</h1>
      <p className="text-lg font-bold">Cliente: {name}</p>

      <div>
        {orderData?.map((product) => (
          <div key={product.id} className="py-3 flex border-b last-of-type:border-0 items-center">
            <div className="w-32">
              <Image
                src={`/assets/img/${product.image}.jpg`}
                alt={`Imagen de ${product.name}`}
                width={400}
                height={500}
              />
            </div>

            <div className="p-5 space-y-2">
              <h4 className="text-xl font-bold text-amber-500">{product.name}</h4>
              <p className="text-lg font-bold">Cantidad: {product.count}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="md:flex md:items-center md:justify-between my-10">
        <p className="mt-5 font-black text-3xl text-amber-500">Total a pagar: {formatAmount(Number(amount))}</p>
      </div>

      <button
        type="button"
        className="bg-indigo-600 hover:bg-indigo-800 text-white mt-5 md:mt-0 py-3 px-10 uppercase font-bold rounded-md"
        onClick={() => processingOrder()}
      >
        Completar Orden
      </button>
    </div>
  );
};

export default Order;
