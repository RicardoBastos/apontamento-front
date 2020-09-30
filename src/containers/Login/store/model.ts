import { Action, action, thunk, Thunk } from 'easy-peasy';

import { apiAutenticar } from './service';
import { login } from '../../../services/auth';

export interface IFormulario {
  email: string;
  senha: string;
}

export interface IUsuario {
  id: string;
  ativo: boolean;
  email: string;
  nome: string;
  token: string;
}

export interface ISessionModel {
  loading: boolean;
  formulario: IFormulario;
  alterarSession: Action<ISessionModel, IFormulario>;
  showLoader: Action<ISessionModel, void>;
  hideLoader: Action<ISessionModel, void>;
  autenticar: Thunk<ISessionModel, IFormulario>;
}

const session: ISessionModel = {
  loading: false,
  formulario: {
    email: '',
    senha: '',
  },
  showLoader: action((state) => {
    state.loading = true;
  }),
  hideLoader: action((state) => {
    state.loading = false;
  }),
  alterarSession: action((state, payload) => {
    state.formulario = payload;
  }),
  autenticar: thunk(async (actions, payload) => {
    actions.showLoader();
    const usuario = await apiAutenticar(payload);
    if (usuario.token) {
      login(usuario.token);
    }

    actions.hideLoader();
  }),
};

export default session;
