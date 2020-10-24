import React from 'react';
import { connect } from 'react-redux';

// Components
import Header from '~/components/header/Header';

class Alocacoes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { history } = this.props;

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
      </>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Alocacoes);
