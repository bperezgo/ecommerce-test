import { Router } from 'express';
import { api } from '../../core/api';
import { ML_API_URL, AUTHOR } from '../../constants';
import { amountAndDecimals, mostSearchedCategory } from '../../utils/server';
import { MlSites, MlCategories } from '../../@types';

export const itemsRouter = Router();
// ?q=​:query
itemsRouter.get('/items', async (req, res, next) => {
  try {
    const { query } = req;
    const apiInstance = api({ baseURL: ML_API_URL });
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
      author: {
        name: AUTHOR.name,
        lastname: AUTHOR.lastname,
      },
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
