import Image from "next/image";
import { formatAmount } from "../helpers";
import { IOrder } from "../interfaces/product.interface";
import useQuiosco from "../hooks/useQuiosco";

interface IProps {
  product: IOrder;
}
const ResumeProduct = ({ product: { name, image, price, count, id } }: IProps) => {
  const { handleEditCount, handleDeleteCount } = useQuiosco();

  return (
    <div className="shadow p-5 mb-3 flex gap-10 items-center">
      <div className="w-full h-full md:w-1/6">
        <Image
          width={300}
          height={400}
          src={`/assets/img/${image}.jpg`}
          alt={`Imagen de ${name}`}
          //   className='w-full h-full object-cover object-center rounded-md'
        />
      </div>

      <div className="w-full h-full md:w-4/6 space-y-3">
        <p className="text-3xl font-bold text-ellipsis text-balance">{name}</p>
        <p className="text-xl font-semibold">
          Cantidad: <span className="font-bold text-2xl text-black">{count}</span>
        </p>
        <p className="text-xl font-semibold">
          precio: <span className="font-bold text-2xl text-black">{formatAmount(price)}</span>
        </p>
        <p className="text-xl font-semibold">
          subtotal: <span className="font-bold text-2xl text-amber-500">{formatAmount(price * count)}</span>
        </p>
      </div>

      <div className="space-y-3">
        <button
          type="button"
          className="flex items-center gap-2 bg-sky-700 hover:bg-sky-800 px-5 py-2 text-white rounded-md font-bold uppercase shadow-md w-full"
          onClick={() => handleEditCount(id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            />
          </svg>
          <span>Editar</span>
        </button>

        <button
          type="button"
          className="flex items-center gap-2 bg-red-700 hover:bg-red-800 px-5 py-2 text-white rounded-md font-bold uppercase shadow-md w-full"
          onClick={() => handleDeleteCount(id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>

          <span>Eliminar</span>
        </button>
      </div>
    </div>
  );
};

export default ResumeProduct;
