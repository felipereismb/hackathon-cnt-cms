import React from 'react';
import { connect } from 'react-redux';

import { Row, Col, Button } from 'reactstrap';
import TextField from '@material-ui/core/TextField';

// Components
import Header from '~/components/header/Header';

import Separator from '~/components/UI/Separator';
import CardDashboard from '~/components/cards/CardDashboard';
import CardBoxHeader from '~/components/cards/CardBoxHeader';
import MessageView from '~/components/modals/MessageView';

// Styles
import { Container } from '../styles';

class Pesquisador extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  onCancel = () => {
    this.props.history.push('/portal/pesquisadores/lista');
  };

  onClickButton = () => {
    let usersData = JSON.parse(localStorage.getItem('usersData'));
    usersData.push({
      id: 1 + Math.floor((250 - 1) * Math.random()),
      nome: this.state.nome,
      telefone: this.state.telefone,
      endereco: this.state.end,
    });

    localStorage.setItem('usersData', JSON.stringify(usersData));

    this.setState({
      message: 'Pesquisador Cadastrado com Sucesso',
      open: true,
      success: true,
    });
    setTimeout(() => {
      this.setState({
        open: false,
      });
      this.onCancel();
    }, 2000);
  };

  render() {
    return (
      <>
        <Header
          title="Novo Pesquisador"
          onClickBack={() =>
            this.props.history.push('/portal/pesquisadores/lista')
          }
        />

        <Row className="mt-2 m-0">
          <Col md={2} className="p-0" />
          <Col md={10} className="p-0">
            <Container>
              <CardBoxHeader
                className="pl-4 pr-4 ml-3 mr-3"
                title={'Dados do Pesquisador'}
              />
              <CardDashboard cardReduzido>
                <Separator texto={'Nome Completo'} />
                <TextField
                  className="text-uppercase"
                  style={{ marginTop: '-10px' }}
                  fullWidth
                  value={this.state.nome}
                  color="primary"
                  onChange={(e) => this.setState({ nome: e.target.value })}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />

                <Separator texto={'Telefone'} />
                <TextField
                  className="text-uppercase"
                  style={{ marginTop: '-10px' }}
                  value={this.state.telefone}
                  color="primary"
                  onChange={(e) => this.setState({ telefone: e.target.value })}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />

                <Separator texto={'Endereço'} />
                <Row className="m-0">
                  <Col md={8} className="p-0">
                    <TextField
                      className="text-uppercase"
                      style={{ marginTop: '-10px' }}
                      value={this.state.end}
                      color="primary"
                      onChange={(e) => this.setState({ end: e.target.value })}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Col>
                </Row>

                {/* BOTÕES */}
                <Row className="mt-5 ml-1">
                  <Button onClick={this.onCancel}>Cancelar</Button>

                  <Button onClick={this.onClickButton} className="ml-3">
                    Salvar
                  </Button>
                </Row>
              </CardDashboard>
            </Container>
          </Col>
        </Row>

        <MessageView
          message={this.state.message}
          open={this.state.open}
          onClick={() => {
            return null;
          }}
          success={this.state.success}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Pesquisador);
