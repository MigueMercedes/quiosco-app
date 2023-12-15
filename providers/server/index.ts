import CategoriesProvider from "./Categories"
import ProductsProvider from "./Products";

const serverProvider = {
  categories: CategoriesProvider,
  products: ProductsProvider
}

export default serverProvider;
