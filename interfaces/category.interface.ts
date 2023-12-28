import { IProduct } from "./product.interface";

export interface ICategory {
  id: number;
  name: string;
  icon?: string;
}
export interface ICategoriesResponse {
  id: number;
  name: string;
  icon?: string;
  products: IProduct[];
}
