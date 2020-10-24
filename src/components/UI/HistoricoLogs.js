import React from 'react';
import moment from 'moment';

// Componentes Bibliotecas
import BlockUi from 'react-block-ui';
import { Loader } from 'react-loaders';
import { Row, Col } from 'reactstrap';

// Components
import CardDashboard from '~/components/_layouts/cards/CardDashboard';
import CardBoxHeader from '~/components/_layouts/cards/CardBoxHeader';
import ButtonFolhaCerta from '~/components/_layouts/forms/ButtonFolhaCerta';
import DetalhesAlteracao from '~/components/_layouts/modals/DetalhesAlteracao';

// Operators
import { dateFormaterString } from '~/assets/utils/operators/dates';

require('moment/locale/pt-br');

class HistoricoLogs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ver: false,
      openDetalhes: false,

      data: null
    }
  }

  getItem = (data) => {
    let aux = [];

    for (let index = data.length - 1; index >= 0; index--) {
      const item = data[index];
      const eventoSplit = item.evento.split('por');

      aux.push(
        <div key={"HistoricoLog" + item.cadastradoPor + "/" + index}>
          <Row
            className="d-flex"
            style={{
              color: '#516267',
              fontSize: '17px',
              fontFamily: "Circular Book"
            }}
          >
            <Col md={5} xs={5} className="text-center">
              <div>{dateFormaterString(item.dataCadastro, true)}</div>
              <div className="d-flex justify-content-center">
                <div>{moment(item.dataCadastro).locale('pt-br').format("YYYY")}</div>
                <div className="ml-2 mr-2">|</div>
                <div>{moment(item.dataCadastro).locale('pt-br').format("HH:mm")}</div>
              </div>
            </Col>
            <Col md={2} xs={2} style={{ textAlign: '-webkit-center' }}>
              <div className="bg-white-gradient"
                style={{
                  height: '25px', width: '25px', borderRadius: '50%'
                }}
              />
              {index !== 0 && <div style={{ height: '80px', width: '1px', backgroundColor: '#D9E5EB' }} />}
            </Col>
            <Col md={5} xs={5}>
              <div style={{
                color: '#93AFB7',
                fontSize: '15px'
              }}>
                {eventoSplit.length >= 1 && eventoSplit[0] + ' por'}
              </div>
              <div>{eventoSplit.length >= 1 && eventoSplit[1]}</div>
              <div
                className="text-primary"
                onClick={() => this.setState({ openDetalhes: true, data: item })}
                style={{
                  fontSize: '12px',
                  borderBottom: 'solid 1px',
                  width: 'fit-content',
                  cursor: 'pointer',
                }}
              >
                detalhes
              </div>
            </Col>
          </Row>
        </div>
      )
    }

    return aux;
  }

  render() {
    let { data, loading } = this.props;

    return (
      <>
        <BlockUi tag="div" blocking={loading} className="block-overlay-dark"
          loader={<Loader color="#ffffff" active type={"ball-beat"} />}>
          <CardBoxHeader
            className="mt-3 ml-3 mr-3 pl-4 pr-4 h-auto"
            title={"HISTÓRICO DE ALTERAÇÕES"}
            component={
              <div className="w-100 text-right">
                <ButtonFolhaCerta
                  onClickButton={() => this.setState({ ver: !this.state.ver })}
                  buttonName={!this.state.ver ? "Ver" : "Fechar"}
                  showIcon={!this.state.ver}
                  branco={this.state.ver}
                />
              </div>
            }
          />
        </BlockUi>

        {this.state.ver &&
          <CardDashboard cardReduzido={true}>
            <Row className="m-0">
              <Col md={8} xs={12} className="p-0">
                <div
                  className="text-center text-uppercase mb-3"
                  style={{
                    color: '#516267',
                    fontSize: '12px',
                    fontFamily: "Circular Book"
                  }}
                >
                  Mais Recentes
                </div>

                {data && this.getItem(data)}

                <div
                  className="text-center text-uppercase mt-3"
                  style={{
                    color: '#516267',
                    fontSize: '12px',
                    fontFamily: "Circular Book"
                  }}
                >
                  Mais Antigos
                  </div>
              </Col>
            </Row>
          </CardDashboard>
        }

        <DetalhesAlteracao
          data={this.state.data}
          onClick={() => this.setState({ openDetalhes: !this.state.openDetalhes, data: null })}
          open={this.state.openDetalhes}
        />
      </>
    )
  }
}

export default HistoricoLogs;