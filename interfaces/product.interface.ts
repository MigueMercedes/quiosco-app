export interface IProduct {
  id: number;
  name: string;
  price: number;
  image?: string;
  categoryId: number;
}

export interface IProducts {
  id: number;
  name: string;
  icon?: string;
  products: IProduct[];
}

export interface IOrder extends IProduct {
  count: number;
}
