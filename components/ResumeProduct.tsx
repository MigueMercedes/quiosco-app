import Image from "next/image";
import { formatAmount } from "../helpers";
import { IOrder } from "../interfaces/product.interface";

interface IProps {
  product: IOrder;
}
const ResumeProduct = ({ product: { name, image, price, count } }: IProps) => {
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

      <div className="w-full h-full md:w-5/6 space-y-3">
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

      <div>1</div>
    </div>
  );
};

export default ResumeProduct;
