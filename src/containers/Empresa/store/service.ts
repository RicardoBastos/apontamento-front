import { api } from 'services/api';
import { IList } from 'components/Table';
import { AxiosResponse } from 'axios';
import { IFilterEmpresa, IFormulario } from './model';

const empresas = '/empresas/';

export function apiListarEmpresas(
  params: IFilterEmpresa,
): Promise<AxiosResponse<IList>> {
  return api.get<IList>(empresas, { params });
}

export function apiBuscarEmpresaPorId(
  id: string,
): Promise<AxiosResponse<IFormulario>> {
  return api.get<IFormulario>(empresas + id);
}

export function apiAtualizarEmpresa(
  id: string,
  params: IFormulario,
): Promise<AxiosResponse<any>> {
  return api.put(empresas + id, params);
}

export function apiSalvarEmpresa(
  params: IFormulario,
): Promise<AxiosResponse<any>> {
  return api.post(empresas, params);
}
