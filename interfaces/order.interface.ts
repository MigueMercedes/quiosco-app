import { IProduct } from "./product.interface";

export interface IOrder extends IProduct {
  count: number;
}

export interface IOrderPost {
  id?: number;
  name: string;
  amount: string;
  orderData: {
    count: number;
    id: number;
    name: string;
    price: number;
    image: string;
  }[];
  date: string;
}

export interface IOrderResponse {
  id?: number;
  name: string;
  date: string;
  amount: string;
  orderData: IOrderData[];
  status: boolean;
}

export interface IOrderData {
  id: number;
  name: string;
  count: number;
  image: string;
  price: number;
}
