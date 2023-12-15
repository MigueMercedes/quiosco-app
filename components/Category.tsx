import Image from 'next/image';
import { ICategory } from '../interfaces/category.interface';
import useQuiosco from '../hooks/useQuiosco';
const Category = ({ category }: { category: ICategory }) => {
  const { id, name, icon } = category;
  const { handleClickCategory, currentCategory } = useQuiosco();

  return (
    <div
      className={`${currentCategory?.id === id ? 'bg-amber-400' : ''}
        flex items-center gap-4 w-full border p-5 hover:bg-amber-400`}
    >
      <Image
        width={70}
        height={70}
        src={`/assets/img/icono_${icon}.svg`}
        alt={name}
      />

      <button
        type='button'
        className='text-2xl font-bold hover:cursor-pointer'
        onClick={() => handleClickCategory(id)}
      >
        {name}
      </button>
    </div>
  );
};

export default Category;
