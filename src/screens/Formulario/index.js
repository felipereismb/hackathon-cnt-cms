import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';

class Formulario extends React.Component {
  constructor(props) {
    console.log('Formulario');
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <div>Formulário</div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Formulario);
