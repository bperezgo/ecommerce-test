import { IContext } from '../@types';

export const initialState: IContext = {
  categories: [],
  searchValue: '',
  search: false,
  setSearchValue: function (this: IContext, value: string) {
    this.searchValue = value;
  },
  // setSearchValue: () => {}
};
