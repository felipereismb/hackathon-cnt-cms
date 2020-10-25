import React from 'react';
import { connect } from 'react-redux';

// Components
import Table from './components/table';
import Header from '~/components/header/Header';
import CardDashboard from '~/components/cards/CardDashboard';

// Styles
import { Container } from './styles';

const dataFormularios = [
  [123, 'Formulário de vias', '18 SET 2020', 'Ativo'],
  [234, 'Formulário de Acidentes', '20 AGO 2019', 'Ativo'],
  [24, 'Formulário de Ferrovias', '20 AGO 2018', 'Inativo'],
];

class Formularios extends React.Component {
  constructor(props) {
    super(props);

    this.state = { itensPorPagina: 25, pagina: 1 };
  }

  // Table Actions
  parseObjectToArray = (object) => {
    let aux = [];

    if (!object) return aux;

    object.forEach((item) => {
      aux.push([item.id, item.nome, item.ultimaAlteracao, item.statue]);
    });

    return aux;
  };

  render() {
    const { history } = this.props;
    const columns = ['Id', 'Nome', 'Data Ultima Alteracao', 'Status'];
    const dataFormularios = JSON.parse(localStorage.getItem('dataFormularios'));

    return (
      <>
        <Header
          title="Lista de Formulários Cadastrados"
          subTitle="Aqui você pode visualizar os formulários cadastrados, criar e altera-los"
          buttonName="Novo Formulário"
          onClickButton={() => {
            history.push(`/portal/formulario/criar`);
          }}
        />

        <Container>
          <CardDashboard className="p-0 mt-3">
            <Table
              columns={columns}
              dataTable={this.parseObjectToArray(dataFormularios)}
              changeItemPorPagina={(value) =>
                this.setState({ itensPorPagina: value, pagina: 1 })
              }
              onChangePage={(value) => this.setState({ pagina: value })}
              onSearch={(filter) => this.setState({ filter, pagina: 1 })}
              changeAba={(tipo) => this.setState({ tipo })}
              totalItens={dataFormularios.length}
              itensPorPagina={this.state.itensPorPagina}
              pagina={this.state.pagina}
              active={'Original'}
              hasNext={false}
              hasPrevious={false}
              id={'listaMarcacoesRelatorio'}
            />
          </CardDashboard>
        </Container>
      </>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Formularios);
