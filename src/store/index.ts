import { createStore } from 'easy-peasy';

import header, { IHeaderModel } from 'containers/Layout/Header/model';
import menu, { IMenuModel } from 'containers/Layout/Menu/model';
import empresa, { IEmpresaModel } from 'containers/Empresa/store/model';
import session, { ISessionModel } from 'containers/Login/store/model';

export interface IStoreModel {
  header: IHeaderModel;
  menu: IMenuModel;
  empresa: IEmpresaModel;
  session: ISessionModel;
}

export const storeModel: IStoreModel = {
  header,
  menu,
  empresa,
  session,
};

const store = createStore(storeModel);

export const getStore = (): any => store;

export default store;
