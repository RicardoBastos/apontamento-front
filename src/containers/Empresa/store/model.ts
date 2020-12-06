import { Action, action, thunk, Thunk } from 'easy-peasy';
import { debounce } from 'lodash';

import { IPagination, IList } from 'components/Table';
import {
  apiListarEmpresas,
  apiBuscarEmpresaPorId,
  apiAtualizarEmpresa,
  apiSalvarEmpresa,
} from './service';

export interface IFormulario {
  id: string;
  nome: string;
  status: boolean;
}

export interface IEmpresaFilter {
  nome: string;
  status: -1 | 0 | 1;
}

export interface IFilterEmpresa {
  filtro: IEmpresaFilter;
  pagination: IPagination;
}

export interface IEmpresaModel {
  loading: boolean;
  formulario: IFormulario;
  filtro: IEmpresaFilter;
  pagination: IPagination;
  list: IList;
  alterarListaEmpresa: Action<IEmpresaModel, IList>;
  alterarFiltro: Action<IEmpresaModel, IEmpresaFilter>;
  alterarPaginacao: Action<IEmpresaModel, IPagination>;
  alterarEmpresa: Action<IEmpresaModel, IFormulario>;
  limparFormulario: Action<IEmpresaModel, void>;
  alterarBuscaPorId: Action<IEmpresaModel, IFormulario>;
  buscarPorId: Thunk<IEmpresaModel, string>;
  atualizarEmpresa: Thunk<IEmpresaModel, IFormulario>;
  salvarEmpresa: Thunk<IEmpresaModel, IFormulario>;
  listarEmpresas: Thunk<IEmpresaModel, IFilterEmpresa>;
  showLoader: Action<IEmpresaModel, void>;
  hideLoader: Action<IEmpresaModel, void>;
}

const listarEmpresasDebounce = debounce(
  async (actions, param: IFilterEmpresa) => {
    actions.showLoader();
    const listEmpresa = await apiListarEmpresas(param);
    actions.alterarListaEmpresa(listEmpresa);
    actions.limparFormulario();
    actions.hideLoader();
  },
  300,
);

const empresa: IEmpresaModel = {
  loading: false,
  formulario: {
    id: '',
    nome: '',
    status: true,
  },
  filtro: {
    nome: '',
    status: -1,
  },
  pagination: {
    page: 0,
    size: 10,
    orderBy: 'nome',
    direction: 'asc',
  },
  list: {
    data: [],
    totalRecords: 0,
  },
  alterarListaEmpresa: action((state, payload) => {
    state.list = payload;
  }),
  alterarFiltro: action((state, payload) => {
    state.filtro = payload;
  }),
  alterarPaginacao: action((state, payload) => {
    state.pagination = payload;
  }),
  alterarEmpresa: action((state, payload) => {
    state.formulario = payload;
  }),
  limparFormulario: action((state) => {
    state.formulario = {
      id: '',
      nome: '',
      status: true,
    };
  }),
  alterarBuscaPorId: action((state, payload) => {
    state.formulario = payload;
  }),
  showLoader: action((state) => {
    state.loading = true;
  }),
  hideLoader: action((state) => {
    state.loading = false;
  }),
  buscarPorId: thunk(async (actions, payload) => {
    actions.showLoader();
    const usuario = await apiBuscarEmpresaPorId(payload);
    actions.alterarBuscaPorId(usuario);
    actions.hideLoader();
  }),
  atualizarEmpresa: thunk(async (actions, payload) => {
    actions.showLoader();
    await apiAtualizarEmpresa(payload.id, payload);
    actions.hideLoader();
  }),
  salvarEmpresa: thunk(async (actions, payload) => {
    actions.showLoader();
    await apiSalvarEmpresa(payload);
    actions.limparFormulario();
    actions.hideLoader();
  }),
  listarEmpresas: thunk((actions, payload) => {
    listarEmpresasDebounce(actions, payload);
  }),
};

export default empresa;
