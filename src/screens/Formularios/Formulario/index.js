import React from 'react';
import { connect } from 'react-redux';

// Components
import Header from '~/components/header/Header';

class Formularios extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { history } = this.props;

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
      </>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Formularios);
