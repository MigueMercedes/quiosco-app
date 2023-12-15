import { serverConfig } from '../../config';
import Base from '../Base';

class CategoriesProvider extends Base {
  private static _instance: CategoriesProvider;

  constructor() {
    super(`${serverConfig.api}`);
  }

  public static get instance() {
    return (
      CategoriesProvider._instance || (CategoriesProvider._instance = new CategoriesProvider())
    );
  }

  async getCategories() {
    return this.get('/categories');
  }

  async getCategory(id: string) {
    return this.get(`/categories/${id}`);
  }
}

export default CategoriesProvider;
