import { api } from 'services/api';
import { IList } from 'components/Table';
import { AxiosResponse } from 'axios';
import { IFilterEmpresa, IFormulario } from './model';
import history from '../../../services/history';

const empresa = 'empresas';

export async function apiListarEmpresas(
  params: IFilterEmpresa,
): Promise<IList> {
  const { data, totalRecords } = (await api.get(`${empresa}/listar`, {
    params,
  })) as IList;

  return { data, totalRecords };
}

export async function apiBuscarEmpresaPorId(id: string): Promise<IFormulario> {
  const { data } = await api.get(`${empresa}/buscar/${id}`);
  return data;
}

export function apiAtualizarEmpresa(
  id: string,
  params: IFormulario,
): Promise<AxiosResponse> {
  history.push('/empresa');
  return api.put(`${empresa}/atualizar/${id}`, params);
}

export function apiSalvarEmpresa(params: IFormulario): Promise<AxiosResponse> {
  return api.post(`${empresa}/salvar`, params);
}
