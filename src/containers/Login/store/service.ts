import { api } from '../../../services/api';
import { IFormulario, IUsuario } from './model';

const usuario = 'usuarios';

export async function apiAutenticar(params: IFormulario): Promise<IUsuario> {
  const { data } = await api.post(`${usuario}/autenticar`, params);
  return data;
}
