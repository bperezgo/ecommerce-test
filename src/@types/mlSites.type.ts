export namespace MlSites {
  export interface Shipping {
    free_shipping: boolean;
  }

  export interface Result {
    id: string;
    title: string;
    price: number;
    currency_id: string;
    condition: string;
    sold_quantity: number;
    // permalink is the image in the response
    permalink: string;
    shipping: Shipping;
    category_id: string;
  }

  export interface ValuesAvailableFilter {
    id: string;
    name: string;
    results: number;
  }

  export interface AvailableFilter {
    id: string;
    name: string;
    type: string;
    values: ValuesAvailableFilter[];
  }

  export interface Results {
    results: Result[];
    available_filters: AvailableFilter[];
  }
}
