import React from 'react';
import { connect } from 'react-redux';

// Components
import Header from '~/components/header/Header';

class Pesquisador extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <Header
          title="Novo Pesquisador"
          onClickBack={() =>
            this.props.history.push('/portal/pesquisadores/lista')
          }
        />
      </>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Pesquisador);
