import { ReactNode, createContext, useEffect, useState } from "react";
import { ICategoriesResponse, ICategory } from "../interfaces/category.interface";
import CategoriesProvider from "../providers/server/Categories";
import { IOrder, IProduct } from "../interfaces/product.interface";
import { toast } from "react-toastify";

interface QuioscoContext {
  categories: ICategoriesResponse[];
  currentCategory: ICategoriesResponse;
  handleClickCategory: (id: number) => void;
  product: IProduct;
  handleSetProduct: (product: IProduct) => void;
  modal: boolean;
  handleChangeModal: () => void;
  order: IOrder[];
  handleAddCart: (product: IOrder) => void;
  handleEditCount: (id: number) => void;
  handleDeleteCount: (id: number) => void;
  orderName: string;
  setOrderName: (orderName: string) => void;
  processOrder: (e: React.FormEvent) => Promise<void>;
  totalAmount: number;
}

const QuioscoContext = createContext({} as QuioscoContext);

export const QuioscoProvider = ({ children }: { children: ReactNode }) => {
  const [categories, setCategories] = useState([] as ICategoriesResponse[]);
  const [currentCategory, setCurrentCategory] = useState({} as ICategoriesResponse);
  const [product, setProduct] = useState({} as IProduct);
  const [modal, setModal] = useState(false);
  const [order, setOrder] = useState([] as IOrder[]);
  const [orderName, setOrderName] = useState("");
  const [totalAmount, setTotalAmount] = useState(0);

  const getCategories = async () => {
    const categories: ICategoriesResponse[] = await CategoriesProvider.instance.getCategories();
    setCategories(categories);
  };

  const handleClickCategory = (id: number) => {
    setCurrentCategory(categories.find((category) => category.id === id) as ICategoriesResponse);
  };

  const handleChangeModal = () => {
    setModal(!modal);

    if (modal) {
      setProduct({} as IProduct);
    }
  };

  const handleSetProduct = (product: IProduct) => {
    setProduct(product);
  };

  const handleAddCart = ({ categoryId, ...product }: IOrder) => {
    if (order.some((p) => p.id === product.id)) {
      const orderUpdated = order.map((productState) => (productState.id === product.id ? product : productState));
      setOrder(orderUpdated as IOrder[]);
      toast.success("Carrito actualizado");
      return;
    }

    setOrder([...order, product] as IOrder[]);
    toast.success("Producto agregado al carrito");
  };

  const handleEditCount = (id: number) => {
    const updateProduct = order.find((product) => product.id === id);
    setProduct(updateProduct as IOrder);
    setModal(true);
  };

  const handleDeleteCount = (id: number) => {
    const updateOrder = order.filter((product) => product.id !== id);
    setOrder(updateOrder);
  };

  const processOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Procesando pedido...");
  };

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    if (categories.length > 0) {
      setCurrentCategory(categories[0]);
    }
  }, [categories]);

  useEffect(() => {
    const total = order.reduce((total, product) => product.price * product.count + total, 0);
    setTotalAmount(total);
  }, [order]);

  return (
    <QuioscoContext.Provider
      value={{
        categories,
        currentCategory,
        handleClickCategory,
        product,
        handleSetProduct,
        modal,
        handleChangeModal,
        order,
        handleAddCart,
        handleEditCount,
        handleDeleteCount,
        orderName,
        setOrderName,
        processOrder,
        totalAmount,
      }}
    >
      {children}
    </QuioscoContext.Provider>
  );
};

export default QuioscoContext;
