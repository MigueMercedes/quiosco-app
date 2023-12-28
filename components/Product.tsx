import Image from "next/image";
import { IProduct } from "../interfaces/product.interface";
import { formatAmount } from "../helpers";
import useQuiosco from "../hooks/useQuiosco";

const Product = ({ product }: { product: IProduct }) => {
  const { handleSetProduct, handleChangeModal } = useQuiosco();
  const { name, image, price } = product;
  return (
    <div className="border p-3 h-full flex-col justify-between">
      <Image src={`/assets/img/${image}.jpg`} alt={`Imagen de ${name}`} width={400} height={500} />

      <div className="min-h-[200px] p-5 flex flex-col justify-between">
        <h3 className="text-2xl font-bold">{name}</h3>
        <p className="font-black text-4xl text-amber-500">{formatAmount(price)}</p>

        <button
          type="button"
          className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-2 p-2 uppercase font-bold"
          onClick={() => {
            handleChangeModal();
            handleSetProduct(product);
          }}
        >
          Agregar
        </button>
      </div>
    </div>
  );
};

export default Product;
