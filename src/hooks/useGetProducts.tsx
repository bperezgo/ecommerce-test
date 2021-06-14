import fetchApi from '../services/fetchApi';
import { ProductsResponse } from '../@types';
import { useAsync } from './useAsync';

interface IProductsResponse {
  categories: ProductsResponse.Category[];
  products: ProductsResponse.Item[];
}

const getProducts = async (
  searcherValue: string | null
): Promise<IProductsResponse | undefined> => {
  if (searcherValue) {
    const { data } = await fetchApi.get<ProductsResponse.Data>(
      `/api/items?q=${searcherValue}`
    );
    debugger;
    return { categories: data.categories, products: data.items };
  }
  return;
};

export const useGetProducts = (funcParams: string | null) => {
  const asyncParams = {
    asyncFunc: getProducts,
    immediate: true,
    funcParams,
    initialData: { categories: [], products: [] },
  };

  const { data } = useAsync<IProductsResponse, any>(asyncParams);
  debugger;
  return { data };
};
