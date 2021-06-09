export declare namespace ProductsResponse {
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
  }

  export interface Author {
    name: string;
    lastname: string;
  }

  export interface Data {
    author: Author;
    categories: Category[];
    items: Item[];
  }
}
