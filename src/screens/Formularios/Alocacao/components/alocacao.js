import React from 'react';
import { connect } from 'react-redux';

// Components
import Header from '~/components/header/Header';

class Alocacao extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <Header
          title="Novo Alocação"
          onClickBack={() =>
            this.props.history.push('/portal/formulario/alocacoes')
          }
        />
      </>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Alocacao);
