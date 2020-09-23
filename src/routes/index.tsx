import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Projeto from 'containers/Projeto';
import Ponto from 'containers/Ponto';
import {
  EmpresaCriar,
  EmpresaListar,
  EmpresaEditar,
} from '../containers/Empresa';

const BemVindo: React.FC = () => {
  return <div>BemVindo</div>;
};

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={BemVindo} />
    <Route path="/empresa" exact component={EmpresaListar} />
    <Route path="/empresa/criar" component={EmpresaCriar} />
    <Route path="/empresa/:id/editar" component={EmpresaEditar} />
    <Route path="/projeto" component={Projeto} />
    <Route path="/ponto" component={Ponto} />
  </Switch>
);

export default Routes;
