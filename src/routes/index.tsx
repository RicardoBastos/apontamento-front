import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from 'containers/Login';
import Projeto from 'containers/Projeto';
import Ponto from 'containers/Ponto';
import {
  EmpresaCriar,
  EmpresaListar,
  EmpresaEditar,
} from '../containers/Empresa';
import PrivateRoute from './Route';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <PrivateRoute path="/empresa" exact component={EmpresaListar} />
    <PrivateRoute path="/empresa/criar" component={EmpresaCriar} />
    <PrivateRoute path="/empresa/:id/editar" component={EmpresaEditar} />
    <PrivateRoute path="/projeto" component={Projeto} />
    <PrivateRoute path="/ponto" component={Ponto} />
  </Switch>
);

export default Routes;
