import loadable from '@loadable/component';

export const EmpresaListar = loadable(() => import('./listar'));
export const EmpresaCriar = loadable(() => import('./criar'));
export const EmpresaEditar = loadable(() => import('./editar'));
