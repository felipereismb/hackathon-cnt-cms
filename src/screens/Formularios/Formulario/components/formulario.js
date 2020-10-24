import React from 'react';
import { connect } from 'react-redux';

// Components
import Header from '~/components/header/Header';

class Formulario extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <Header
          title="Novo Formulário"
          onClickBack={() =>
            this.props.history.push('/portal/formulario/lista')
          }
        />
      </>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Formulario);
