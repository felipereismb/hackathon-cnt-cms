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

import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

// Styles
import { Container } from '../styles';

const IOSSwitch = withStyles((theme) => ({
  root: {
    width: 42,
    height: 26,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 1,
    '&$checked': {
      transform: 'translateX(16px)',
      color: theme.palette.common.white,
      '& + $track': {
        backgroundColor: '#4B78BA',
        opacity: 1,
        border: 'none',
      },
    },
    '&$focusVisible $thumb': {
      color: '#4B78BA',
      border: '6px solid #fff',
    },
  },
  thumb: {
    width: 24,
    height: 24,
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});

class Formulario extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  onCancel = () => {
    this.props.history.push('/portal/formulario/lista');
  };

  onClickButton = () => {
    let dataFormularios = JSON.parse(localStorage.getItem('dataFormularios'));
    dataFormularios.push({
      id: 1 + Math.floor((250 - 1) * Math.random()),
      nome: this.state.nome,
      ultimaAlteracao: '25 OUT 2020',
      statue: 'Ativo',
    });

    localStorage.setItem('dataFormularios', JSON.stringify(dataFormularios));

    this.setState({
      message: 'Formulário Cadastrado com Sucesso',
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
          title="Novo Formulário"
          onClickBack={() =>
            this.props.history.push('/portal/formulario/lista')
          }
        />

        <Row className="mt-2 m-0">
          <Col md={2} className="p-0" />
          <Col md={10} className="p-0">
            <Container>
              <CardBoxHeader
                className="pl-4 pr-4 ml-3 mr-3"
                title={'Dados do Formulário'}
              />
              <CardDashboard cardReduzido>
                <Separator texto="Nome do Formulário" />
                <Col md={6} className="p-0">
                  <TextField
                    className="text-uppercase"
                    fullWidth
                    style={{ marginTop: '-10px' }}
                    value={this.state.nome}
                    color="primary"
                    onChange={(e) => this.setState({ nome: e.target.value })}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Col>

                <Separator texto="Quantidade de trechos" />
                <Col md={2} className="p-0">
                  <TextField
                    className="text-uppercase"
                    fullWidth
                    type="number"
                    style={{ marginTop: '-10px' }}
                    value={this.state.quantidadeTrecho}
                    color="primary"
                    onChange={(e) =>
                      this.setState({ quantidadeTrecho: e.target.value })
                    }
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Col>

                <Separator texto="Itens para análise" />
                <Row>
                  <Col md={6}>
                    <FormControlLabel
                      control={
                        <IOSSwitch
                          checked={this.state.geometriaDaVia}
                          onChange={(e) =>
                            this.setState({
                              geometriaDaVia: e.target.checked,
                            })
                          }
                          name="checkedB"
                        />
                      }
                      label="Geometria da Via"
                    />
                  </Col>
                  <Col md={6}>
                    <FormControlLabel
                      control={
                        <IOSSwitch
                          checked={this.state.pavimentacao}
                          onChange={(e) =>
                            this.setState({
                              pavimentacao: e.target.checked,
                            })
                          }
                          name="checkedB"
                        />
                      }
                      label="Pavimentação"
                    />
                  </Col>
                  <Col md={6}>
                    <FormControlLabel
                      control={
                        <IOSSwitch
                          checked={this.state.sinalizacao}
                          onChange={(e) =>
                            this.setState({
                              sinalizacao: e.target.checked,
                            })
                          }
                          name="checkedB"
                        />
                      }
                      label="Sinalização"
                    />
                  </Col>
                  <Col md={6}>
                    <FormControlLabel
                      control={
                        <IOSSwitch
                          checked={this.state.apoio}
                          onChange={(e) =>
                            this.setState({
                              apoio: e.target.checked,
                            })
                          }
                          name="checkedB"
                        />
                      }
                      label="Apoio"
                    />
                  </Col>
                </Row>

                <Separator texto="Dados Gerais" />
                <Row>
                  <Col md={6}>
                    <FormControlLabel
                      control={
                        <IOSSwitch
                          checked={this.state.faixasAdicionais}
                          onChange={(e) =>
                            this.setState({
                              faixasAdicionais: e.target.checked,
                            })
                          }
                          name="checkedB"
                        />
                      }
                      label="Solicitar Faixas Adicionais"
                    />
                  </Col>
                  <Col md={6}>
                    <FormControlLabel
                      control={
                        <IOSSwitch
                          checked={this.state.pontesViadutos}
                          onChange={(e) =>
                            this.setState({ pontesViadutos: e.target.checked })
                          }
                          name="checkedB"
                        />
                      }
                      label="Solicitar Pontes e Viadutos"
                    />
                  </Col>
                  <Col md={6}>
                    <FormControlLabel
                      control={
                        <IOSSwitch
                          checked={this.state.fotos}
                          onChange={(e) =>
                            this.setState({ fotos: e.target.checked })
                          }
                          name="checkedB"
                        />
                      }
                      label="Solicitar Fotos"
                    />
                  </Col>
                  <Col md={6}>
                    <FormControlLabel
                      control={
                        <IOSSwitch
                          checked={this.state.comentarios}
                          onChange={(e) =>
                            this.setState({ comentarios: e.target.checked })
                          }
                          name="checkedB"
                        />
                      }
                      label="Solicitar Comentários Adicionais"
                    />
                  </Col>
                </Row>

                <Separator texto="Dados de GPS" />
                <Row>
                  <Col md={6}>
                    <FormControlLabel
                      control={
                        <IOSSwitch
                          checked={this.state.gpsFotos}
                          onChange={(e) =>
                            this.setState({
                              gpsFotos: e.target.checked,
                            })
                          }
                          name="checkedB"
                        />
                      }
                      label="Solicitar gps em cada foto"
                    />
                  </Col>
                  <Col md={6}>
                    <FormControlLabel
                      control={
                        <IOSSwitch
                          checked={this.state.gpsTrecho}
                          onChange={(e) =>
                            this.setState({
                              gpsTrecho: e.target.checked,
                            })
                          }
                          name="checkedB"
                        />
                      }
                      label="Solicitar gps em cada trecho"
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

export default connect(mapStateToProps, mapDispatchToProps)(Formulario);
