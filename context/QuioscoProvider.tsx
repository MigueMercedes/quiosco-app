import { Category } from '@prisma/client';
import { ReactNode, createContext, useEffect, useState } from 'react';
import CategoriesProvider from '../providers/server/Categories';
import { ICategory } from '../interfaces/category.interface';

interface QuioscoContext {
  categories: Category[];
  currentCategory: ICategory;
  handleClickCategory: (id: number) => void;
}

const QuioscoContext = createContext({} as QuioscoContext);

export const QuioscoProvider = ({ children }: { children: ReactNode }) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [currentCategory, setCurrentCategory] = useState({} as ICategory);

  const getCategories = async () => {
    const categories = await CategoriesProvider.instance.getCategories();
    setCategories(categories);
  };

  const handleClickCategory = (id: number) => {
    const category = categories.find((c => c.id === id)) as ICategory;
    setCurrentCategory(category);
  }

  useEffect(() => {
    getCategories();
  }, []);
  return (
    <QuioscoContext.Provider
      value={{
        categories,
        currentCategory,
        handleClickCategory
      }}
    >
      {children}
    </QuioscoContext.Provider>
  );
};

export default QuioscoContext;
