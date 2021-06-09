import { MlSites } from '../../@types';

export const mostSearchedCategory = (
  availableFilters: MlSites.AvailableFilter[]
): string | undefined => {
  const category = availableFilters
    .find((filter) => filter.id === 'category')
    ?.values.sort((a, b) => b.results - a.results);
  if (!category) return;
  const [mostCategory] = category;
  return mostCategory.id;
};
