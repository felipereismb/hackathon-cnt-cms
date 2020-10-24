import React from 'react';
import { Route } from 'react-router-dom';

// Screen components
import Dashboard from '~/screens/Dashboards';

import Formularios from '~/screens/Formularios/Formulario';
import Formulario from '~/screens/Formularios/Formulario/components/formulario';

import Alocacoes from '~/screens/Formularios/Alocacao';
import AlocacaoDeFormulario from '~/screens/Formularios/Alocacao/components/alocacao';

import Pesquisadores from '~/screens/Pesquisadores';
import Pesquisador from '~/screens/Pesquisadores/components/pesquisador';

const ScreenRouters = ({ match }) => (
  <>
    {/* Dashboards */}
    <Route exact path={`${match.url}/dashboards`} component={Dashboard} />

    {/* Formulários */}
    <Route
      exact
      path={`${match.url}/formulario/lista`}
      component={Formularios}
    />
    <Route
      exact
      path={`${match.url}/formulario/criar`}
      component={Formulario}
    />

    <Route
      exact
      path={`${match.url}/formulario/alocacoes`}
      component={Alocacoes}
    />
    <Route
      exact
      path={`${match.url}/formulario/nova-alocacao`}
      component={AlocacaoDeFormulario}
    />

    {/* Pesquisadores */}
    <Route
      exact
      path={`${match.url}/pesquisadores/lista`}
      component={Pesquisadores}
    />
    <Route
      exact
      path={`${match.url}/pesquisadores/criar`}
      component={Pesquisador}
    />
  </>
);

export default ScreenRouters;
