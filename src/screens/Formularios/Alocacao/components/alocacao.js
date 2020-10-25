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
import ComboPicker from '~/components/UI/ComboPicker';

// Styles
import { Container } from '../styles';

class Alocacao extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  onCancel = () => {
    this.props.history.push('/portal/formulario/alocacoes');
  };

  onClickButton = () => {
    let usersAlocoes = JSON.parse(localStorage.getItem('usersAlocoes'));
    usersAlocoes.push({
      id: 1 + Math.floor((250 - 1) * Math.random()),
      formulario: this.state.form.nome,
      pesquisador: this.state.pesquisador.nome,
      trecho: `Trecho ${this.state.trecho}`,
    });

    localStorage.setItem('usersAlocoes', JSON.stringify(usersAlocoes));

    this.setState({
      message: 'Alocação Cadastrada com Sucesso',
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
    const usersData = JSON.parse(localStorage.getItem('usersData'));
    const dataFormularios = JSON.parse(localStorage.getItem('dataFormularios'));

    return (
      <>
        <Header
          title="Nova Alocação"
          onClickBack={() =>
            this.props.history.push('/portal/formulario/alocacoes')
          }
        />

        <Row className="mt-2 m-0">
          <Col md={2} className="p-0" />
          <Col md={10} className="p-0">
            <Container>
              <CardBoxHeader
                className="pl-4 pr-4 ml-3 mr-3"
                title={'Dados da Alocação'}
              />
              <CardDashboard cardReduzido>
                <Separator texto="Formulário" />
                <Col md={8} className="p-0" style={{ marginTop: '-20px' }}>
                  <ComboPicker
                    data={dataFormularios}
                    value={this.state.form}
                    arrayKey="nome"
                    id="combopikcerAlocacaoRegraApuracao"
                    onClick={(value) => this.setState({ form: value })}
                  />
                </Col>

                <Separator texto="Pesquisador" />
                <Col md={8} className="p-0" style={{ marginTop: '-20px' }}>
                  <ComboPicker
                    data={usersData}
                    value={this.state.pesquisador}
                    arrayKey="nome"
                    id="combopikcerAlocacaoRegraApuracao"
                    onClick={(value) => this.setState({ pesquisador: value })}
                  />
                </Col>

                <Separator texto="Trecho" />
                <Col md={6} className="p-0">
                  <TextField
                    className="text-uppercase"
                    fullWidth
                    style={{ marginTop: '-10px' }}
                    value={this.state.trecho}
                    color="primary"
                    onChange={(e) => this.setState({ trecho: e.target.value })}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Col>

                <Separator texto="Período" />
                <Row className="m-0">
                  <Col md={4} className="d-flex p-0">
                    <TextField
                      className="text-uppercase"
                      fullWidth
                      label="Início"
                      type="date"
                      style={{ marginTop: '-10px' }}
                      value={this.state.dateInicio}
                      color="primary"
                      onChange={(e) =>
                        this.setState({ dateInicio: e.target.value })
                      }
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Col>
                  <Col md={2} />
                  <Col md={4} className="d-flex p-0">
                    <TextField
                      className="text-uppercase"
                      fullWidth
                      type="date"
                      label="Termino"
                      style={{ marginTop: '-10px' }}
                      value={this.state.dateFim}
                      color="primary"
                      onChange={(e) =>
                        this.setState({ dateFim: e.target.value })
                      }
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

export default connect(mapStateToProps, mapDispatchToProps)(Alocacao);
