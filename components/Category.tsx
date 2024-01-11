import Image from "next/image";
import { ICategory } from "../interfaces/category.interface";
import useQuiosco from "../hooks/useQuiosco";
import { useRouter } from "next/router";
const Category = ({ category, closeNavMobile }: { category: ICategory; closeNavMobile?: () => void }) => {
  const { id, name, icon } = category;
  const { handleClickCategory, currentCategory } = useQuiosco();
  const router = useRouter();

  return (
    <button
      type="button"
      className={`${currentCategory?.id === id ? "bg-amber-400" : ""}
      flex items-center gap-4 w-full border p-5 hover:bg-amber-400 cursor-pointer`}
      onClick={() => {
        handleClickCategory(id);
        closeNavMobile && closeNavMobile();
        router.push('/cliente')
      }}
    >
      <Image width={70} height={70} src={`/assets/img/icono_${icon}.svg`} alt={name} />

      <span className="text-2xl font-bold">{name}</span>
    </button>
  );
};

export default Category;
