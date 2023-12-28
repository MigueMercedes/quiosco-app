import Image from "next/image";
import { ICategory } from "../interfaces/category.interface";
import useQuiosco from "../hooks/useQuiosco";
const Category = ({ category, closeNavMobile }: { category: ICategory; closeNavMobile?: () => void }) => {
  const { id, name, icon } = category;
  const { handleClickCategory, currentCategory } = useQuiosco();

  return (
    <button
      type="button"
      className={`${currentCategory?.id === id ? "bg-amber-400" : ""}
      flex items-center gap-4 w-full border p-5 hover:bg-amber-400 cursor-pointer`}
      onClick={() => {
        handleClickCategory(id);
        closeNavMobile && closeNavMobile();
      }}
    >
      <Image width={70} height={70} src={`/assets/img/icono_${icon}.svg`} alt={name} />

      <span className="text-2xl font-bold">{name}</span>
    </button>
  );
};

export default Category;
