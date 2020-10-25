import React from 'react';
import { connect } from 'react-redux';

// Components
import CardDashboard from '~/components/cards/CardDashboard';
import Header from '~/components/header/Header';
import Table from './components/table';

// Styles
import { Container } from './styles';

class Pesquisadores extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      itensPorPagina: 25,
      pagina: 1,
    };
  }

  // Table Actions
  parseObjectToArray = (object) => {
    let aux = [];

    if (!object) return aux;

    object.forEach((item) => {
      aux.push([item.id, item.nome, item.telefone, item.endereco]);
    });

    return aux;
  };

  render() {
    const { history } = this.props;
    const columns = ['Id', 'Funcionário', 'Telefone', 'Endereço'];
    const usersData = JSON.parse(localStorage.getItem('usersData'));

    return (
      <>
        <Header
          title="Lista de Pesquisadores Cadastrados"
          subTitle="Aqui você pode visualizar os pesquisadores cadastrados, criar e alterar pesquisadores"
          buttonName="Novo Pesquisador"
          onClickButton={() => {
            history.push(`/portal/pesquisadores/criar`);
          }}
        />

        <Container>
          <CardDashboard className="p-0 mt-3">
            <Table
              columns={columns}
              dataTable={this.parseObjectToArray(usersData)}
              changeItemPorPagina={(value) =>
                this.setState({ itensPorPagina: value, pagina: 1 })
              }
              onChangePage={(value) => this.setState({ pagina: value })}
              onSearch={(filter) => this.setState({ filter, pagina: 1 })}
              changeAba={(tipo) => this.setState({ tipo })}
              totalItens={usersData.length}
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

export default connect(mapStateToProps, mapDispatchToProps)(Pesquisadores);
