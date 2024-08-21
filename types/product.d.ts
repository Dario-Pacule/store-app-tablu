import { Category } from "./category";

export interface Product {
  readonly _id: string;
  name: string;
  price: number;
  images: ProductImage[];
  sizes?: ProductSize[];
  description?: string;
  category: Category;
}

export interface ProductSize {
  readonly _id: string;
  name: string;
  description?: string;
}

export interface ProductImage {
  readonly _id: string;
  name: string;
  url: string;
  size: number;
  description?: string;
  type: "color" | "view";
}
