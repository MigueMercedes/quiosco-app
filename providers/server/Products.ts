import { serverConfig } from '../../config';
import Base from '../Base';

class ProductsProvider extends Base {
  private static _instance: ProductsProvider;

  constructor() {
    super(`${serverConfig.api}`);
  }

  public static get instance() {
    return (
      ProductsProvider._instance || (ProductsProvider._instance = new ProductsProvider())
    );
  }

  async getProducts() {
    return this.get('/products');
  }
}

export default ProductsProvider;
