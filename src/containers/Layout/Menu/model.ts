interface IMenu {
  to: string;
  name: string;
  icon: string;
}

export interface IMenuModel {
  itensMenu: IMenu[];
}

const menu: IMenuModel = {
  itensMenu: [
    { to: '/empresa', name: 'Empresa', icon: 'MdAccountBalance' },
    { to: '/projeto', name: 'Projeto', icon: 'MdViewModule' },
    { to: '/ponto', name: 'Ponto', icon: 'MdAccessAlarm' },
  ],
};

export default menu;
