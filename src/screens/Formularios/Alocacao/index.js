import React from 'react';
import { connect } from 'react-redux';

// Components
import Table from './components/table';
import Header from '~/components/header/Header';
import CardDashboard from '~/components/cards/CardDashboard';

// Styles
import { Container } from './styles';

class Alocacoes extends React.Component {
  constructor(props) {
    super(props);

    this.state = { itensPorPagina: 25, pagina: 1 };
  }

  // Table Actions
  parseObjectToArray = (object) => {
    let aux = [];

    if (!object) return aux;

    object.forEach((item) => {
      aux.push([item.id, item.formulario, item.pesquisador, item.trecho]);
    });

    return aux;
  };

  render() {
    const { history } = this.props;
    const columns = ['Id', 'Formulário', 'Pesquisador', 'Trecho'];
    const usersAlocoes = JSON.parse(localStorage.getItem('usersAlocoes'));

    return (
      <>
        <Header
          title="Lista de Alocações realizadas"
          subTitle="Aqui você pode visualizar e realizar vinculações de um formulário a um pesquisador"
          buttonName="Nova Alocação"
          onClickButton={() => {
            history.push(`/portal/formulario/nova-alocacao`);
          }}
        />

        <Container>
          <CardDashboard className="p-0 mt-3">
            <Table
              columns={columns}
              dataTable={this.parseObjectToArray(usersAlocoes)}
              changeItemPorPagina={(value) =>
                this.setState({ itensPorPagina: value, pagina: 1 })
              }
              onChangePage={(value) => this.setState({ pagina: value })}
              onSearch={(filter) => this.setState({ filter, pagina: 1 })}
              changeAba={(tipo) => this.setState({ tipo })}
              totalItens={usersAlocoes.length}
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

export default connect(mapStateToProps, mapDispatchToProps)(Alocacoes);
