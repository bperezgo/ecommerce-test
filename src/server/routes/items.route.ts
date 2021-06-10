import { Router } from 'express';
import { api } from '../../core/api';
import { ML_API_URL, AUTHOR } from '../../constants';
import { amountAndDecimals, mostSearchedCategory } from '../../utils/server';
import { MlSites, MlCategories } from '../../@types';

export const itemsRouter = Router();
const apiInstance = api({ baseURL: ML_API_URL });
// ?q=​:query
itemsRouter.get('/items', async (req, res, next) => {
  try {
    const { query } = req;
    const { data } = await apiInstance.get<MlSites.Results>(
      '/sites/MLA/search',
      {
        params: {
          q: query.q,
        },
      }
    );
    let categories: string[] = [];
    const mostSearchedCategoryId = mostSearchedCategory(data.available_filters);
    if (mostSearchedCategoryId) {
      const { data: category } = await apiInstance.get<MlCategories.Results>(
        `/categories/${mostSearchedCategoryId}`
      );
      categories = category.path_from_root.map((element) => element.name);
    }
    res.status(200).json({
      author: { ...AUTHOR },
      categories,
      items: data.results.map((result: MlSites.Result) => ({
        id: result.id,
        title: result.title,
        price: {
          currency: result.currency_id,
          amount: amountAndDecimals(`${result.price}`)[0],
          decimals: amountAndDecimals(`${result.price}`)[1],
        },
        picture: result.thumbnail,
        condition: result.condition,
        free_shipping: result.shipping.free_shipping,
      })),
    });
  } catch (err) {
    console.log('Error: ', err);
  }
});

itemsRouter.get('/items/:itemId', async (req, res, next) => {
  try {
    const { itemId } = req.params;
    const { data: item } = await apiInstance.get<MlSites.Result>(
      `/items/${itemId}`
    );
    const { data: description } = await apiInstance.get<{ plain_text: string }>(
      `/items/${itemId}/description`
    );
    res.status(200).json({
      author: { ...AUTHOR },
      item: {
        id: itemId,
        title: item.title,
        price: {
          currency: item.currency_id,
          amount: amountAndDecimals(`${item.price}`)[0],
          decimals: amountAndDecimals(`${item.price}`)[1],
        },
        picture: item.thumbnail,
        condition: item.condition,
        free_shipping: item.shipping.free_shipping,
        sold_quantity: item.sold_quantity,
        description: description.plain_text,
      },
    });
  } catch (err) {
    console.log(err);
  }
});
