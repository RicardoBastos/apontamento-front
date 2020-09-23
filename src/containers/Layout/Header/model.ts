import { Action, action } from 'easy-peasy';

export interface IHeaderModel {
  abrirMenu: boolean;
  setAbrirMenu: Action<IHeaderModel, boolean>;
}

const header: IHeaderModel = {
  abrirMenu: false,
  setAbrirMenu: action((state, payload) => {
    state.abrirMenu = payload;
  }),
};

export default header;
