import Base from '../Base';

class CategoriesProvider extends Base {
  private static _instance: CategoriesProvider;

  constructor() {
    super('/api');
  }

  public static get instance() {
    return (
      CategoriesProvider._instance || (CategoriesProvider._instance = new CategoriesProvider())
    );
  }

  async getCategories() {
    return this.get('/categories');
  }

}

export default CategoriesProvider;
