// Creators
import { createItemMenu, createContentItem, createMenu } from '../creators';

// constantes para endereço URL
const path = '#/portal';

export default function createAbas() {
  const aux = [];
  // Dashboards
  aux.push(createItemMenu('pe-7s-keypad', 'Dashboards', `${path}/dashboards`));

  // Formulários
  const menuFormulario = [];
  menuFormulario.push(
    createContentItem('Lista', `${path}/formulario/lista`),
    createContentItem('Alocações', `${path}/formulario/alocacoes`),
  );
  aux.push(createMenu('pe-7s-note2', 'Formulários', menuFormulario));

  // Pesquisadores
  const menuPesquisadores = [];
  menuPesquisadores.push(
    createContentItem('Lista', `${path}/pesquisadores/lista`),
  );
  aux.push(createMenu('pe-7s-user', 'Pesquisadores', menuPesquisadores));

  return aux;
}
