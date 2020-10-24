import React from 'react';
import { Route } from 'react-router-dom';

// Screen components
import Formulario from '~/screens/Formulario';
import Dashboard from '~/screens/Dashboards';
import Pesquisadores from '~/screens/Pesquisadores';

const ScreenRouters = ({ match }) => (
  <>
    {/* Dashboards */}
    <Route exact path={`${match.url}/dashboards`} component={Dashboard} />

    {/* Formulários */}
    <Route
      exact
      path={`${match.url}/formulario/lista`}
      component={Formulario}
    />
    <Route
      exact
      path={`${match.url}/formulario/alocacoes`}
      component={Formulario}
    />

    {/* Pesquisadores */}
    <Route
      exact
      path={`${match.url}/pesquisadores/lista`}
      component={Pesquisadores}
    />
  </>
);

export default ScreenRouters;
