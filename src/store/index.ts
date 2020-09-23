import { createStore } from 'easy-peasy';

import header, { IHeaderModel } from 'containers/Layout/Header/model';
import menu, { IMenuModel } from 'containers/Layout/Menu/model';
import empresa, { IEmpresaModel } from 'containers/Empresa/store/model';

export interface IStoreModel {
  header: IHeaderModel;
  menu: IMenuModel;
  empresa: IEmpresaModel;
}

export const storeModel: IStoreModel = {
  header,
  menu,
  empresa,
};

const store = createStore(storeModel);

export const getStore = () => store;

export default store;
