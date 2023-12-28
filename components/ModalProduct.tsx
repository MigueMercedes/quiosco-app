import Image from 'next/image';
import useQuiosco from '../hooks/useQuiosco';
import { formatAmount } from '../helpers';
import { useEffect, useState } from 'react';

const ModalProduct = () => {
  const { product, handleChangeModal, handleAddCart, order } = useQuiosco();
  const [count, setCount] = useState(1);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    if(order.some(productState => productState.id === product.id)){
      setEditing(true);
      setCount(order.find(productState => productState.id === product.id)?.count || 1);
    }


  }, [order, product]);

  return (
    <div className='md:flex gap-10'>
      <div className='text-center md:w-1/3'>
        <Image
          width={400}
          height={500}
          src={`/assets/img/${product.image}.jpg`}
          alt={`Product ${product.name}`}
          className='w-full h-full object-cover object-center'
        />
      </div>

      <div className='md:w-2/3'>
        <div className='flex justify-end'>
          <button
            type='button'
            onClick={handleChangeModal}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-7 h-7 text-red-500 hover:text-red-700'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 18 18 6M6 6l12 12'
              />
            </svg>
          </button>
        </div>

        <h1 className='text-3xl font-bold mt-5'>{product.name}</h1>

        <p className='mt-5 font-black text-5xl text-amber-500'>{formatAmount(product.price)}</p>

        <div className='flex gap-4 mt-5'>
          <button
            type='button'
            onClick={() => count > 1 && setCount(count - 1)}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className={`w-7 h-7 border rounded-full p-1 ${count === 1 && 'opacity-50'}`}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M5 12h14'
              />
            </svg>
          </button>

          <p>{count}</p>

          <button
            type='button'
            onClick={() => count < 10 && setCount(count + 1)}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='currentColor'
              data-slot='icon'
              className={`w-7 h-7 border rounded-full p-1 ${count === 10 && 'opacity-50'}`}
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M12 4.5v15m7.5-7.5h-15'
              />
            </svg>
          </button>
        </div>

        <button
          type='button'
          className='bg-indigo-600 hover:bg-indigo-800 px-5 py-2 mt-5 text-white font-bold uppercase rounded'
          onClick={() => {
            setEditing(false);
            handleAddCart({ ...product, count });
            handleChangeModal();
          }}
        >
          {editing ? 'Guardar cambios' : 'Agregar al Pedido'}
        </button>
      </div>
    </div>
  );
};

export default ModalProduct;
