export declare namespace ProductDetailResponse {
  export type Category = string;
  export interface Price {
    amount: number;
    currency: string;
    decimals: number;
  }
  export interface Item {
    id: string;
    condition: string;
    free_shipping: boolean;
    picture: string;
    price: Price;
    title: string;
    sold_quantity: number;
    description: string;
  }

  export interface Author {
    name: string;
    lastname: string;
  }

  export interface Data {
    author: Author;
    categories: Category[];
    // Notice item is only an object
    item: Item;
  }
}
