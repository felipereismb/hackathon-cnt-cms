import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

// Theme material-ui
import { theme } from '~/styles';
import { ThemeProvider } from '@material-ui/styles';

import './config/ReactotronConfig';

import Routes from './routes/index';
import history from './services/history';
import { store, persistor } from './store';

const usersData = [
  {
    id: 123,
    nome: 'Felipe Reis',
    telefone: '(12) 98115-2323',
    endereco: 'Rua das felandrias, nº15 - São José dos Campos',
  },
  {
    id: 34,
    nome: 'Paulo Atavlia',
    telefone: '(12) 91234-1234',
    endereco: 'Alguma rua de Curitiba, nº15 - Curitiba',
  },
];

const dataFormularios = [
  {
    id: 234,
    nome: 'Formulário de Acidentes',
    ultimaAlteracao: '20 AGO 2019',
    statue: 'Ativo',
  },
];

const usersAlocoes = [
  {
    id: 234,
    formulario: 'Formulário de Acidentes',
    pesquisador: 'Felipe Reis',
    trecho: 'Trecho 5',
  },
  {
    id: 34,
    formulario: 'Formulário de vias',
    pesquisador: 'Paulo Atavlia',
    trecho: 'Trecho 18',
  },
];

localStorage.setItem('usersData', JSON.stringify(usersData));
localStorage.setItem('dataFormularios', JSON.stringify(dataFormularios));
localStorage.setItem('usersAlocoes', JSON.stringify(usersAlocoes));

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Routes />
        </Router>
      </PersistGate>
    </ThemeProvider>
  </Provider>
);

export default App;
