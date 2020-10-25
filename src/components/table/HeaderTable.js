import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

// Componentes Bibliotecas
import { Row, Col } from 'reactstrap';

// Components
import ButtonFolhaCerta from '~/components/_layouts/forms/ButtonFolhaCerta';
import Toolbar from './Toolbar';

// Search
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';

// Styles
const ContainerItem = styled.div`
  height: 100%;
  font-family: "Circular Book";

  text-align: center;
  line-height: 15px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-image: ${({ active }) => active
    ? 'linear-gradient(to top, #3ac47d 0%, #00acde 100%)'
    : ''};

  color: ${({ active }) => active ? 'white' : '#516267'};

  &:hover{
    cursor: pointer;
    background-color: lightgray;
  }
`;

const Quantidade = styled.div`
  font-size: 30px;
`;

class HeaderTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showBuscar: false,
    }
  }

  render() {
    let {
      whitCheckbox, selecionados, itemMiddle, showOnlyTodas,
      todas, ativas, arquivadas, active, withoutSelectComponents
    } = this.props;
    let { showBuscar } = this.state;

    return (
      <Fragment>
        <Row className="m-0 align-items-center">
          {/* SEM CONTAINER */}
          {whitCheckbox &&
            <>
              <Col md={1} xs={6}>
                {selecionados > 0 &&
                  <div style={{ color: '#00ABDE', fontSize: '25px', marginLeft: '8px' }}>
                    {selecionados}
                  </div>
                }
              </Col>
              <Col md={3} xs={6} style={{ marginTop: 'auto' }}>
                {selecionados > 1 &&
                  <>
                    {/* <ButtonFolhaCerta
                      buttonName={'Ações em grupo'}
                      onClickButton={() => console.log("em Grupo")}
                      azulFolhaCerta
                    /> */}
                  </>
                }
              </Col>
              <Col md={5} xs={12}>
                {showBuscar ?
                  <Grid container spacing={1} alignItems="center">
                    <SearchIcon />
                    <TextField
                      id="input-with-icon-grid"
                      onChange={(event) => this.props.search(event.target.value)}
                    />
                    <Tooltip title={"Fechar"}>
                      <IconButton onClick={() => {
                        this.props.search("")
                        this.setState({ showBuscar: false })
                      }}>
                        <CloseIcon />
                      </IconButton>
                    </Tooltip>
                  </Grid>
                  : itemMiddle && itemMiddle
                }
              </Col>
              <Col md={3} xs={12} className="text-right">
                <Toolbar
                  handleSearch={() => {
                    this.props.search("")
                    this.setState({ showBuscar: !this.state.showBuscar })
                  }}
                  handleDownload={() => this.props.dowloandData()}
                />
              </Col>
            </>
          }

          {/* COM CONTAINER */}
          {!whitCheckbox &&
            <>

              {!withoutSelectComponents ?
                showOnlyTodas ?
                  <Col md={4} xs={12} className="d-flex p-0">
                    <Col md={4} className="p-0" style={{ border: 'solid 1px #D9E5EB', height: '70px' }}>
                      <ContainerItem active={1 === active} onClick={() => this.props.changeActive(1)}>
                        <div>
                          <Quantidade>
                            {todas ? todas : 0}
                          </Quantidade>
                          <div style={{ marginTop: '10px' }}>
                            TODAS
                      </div>
                        </div>
                      </ContainerItem>
                    </Col >
                  </Col >
                  :
                  <Col md={4} xs={12} className="d-flex p-0" style={{ border: 'solid 1px #D9E5EB', height: '70px' }}>
                    <>
                      <Col md={4} className="p-0">
                        <ContainerItem active={1 === active} onClick={() => this.props.changeActive(1)}>
                          <div>
                            <Quantidade>
                              {todas ? todas : 0}
                            </Quantidade>
                            <div style={{ marginTop: '10px' }}>
                              TODAS
                          </div>
                          </div>
                        </ContainerItem>
                      </Col >
                      <Col md={4} className="p-0">
                        <ContainerItem active={2 === active} onClick={() => this.props.changeActive(2)}>
                          <div>
                            <Quantidade>
                              {ativas ? ativas : 0}
                            </Quantidade>
                            <div style={{ marginTop: '10px' }}>
                              ATIVAS
                      </div>
                          </div>
                        </ContainerItem>
                      </Col>
                      <Col md={4} className="p-0">
                        <ContainerItem active={3 === active} onClick={() => this.props.changeActive(3)}>
                          <div>
                            <Quantidade>
                              {arquivadas ? arquivadas : 0}
                            </Quantidade>
                            <div style={{ marginTop: '10px' }}>
                              ARQUIVADAS
                      </div>
                          </div>
                        </ContainerItem>
                      </Col>
                    </>
                  </Col>
                :
                <Col md={4} xs={12}></Col>
              }
              <Col md={5} xs={12}>
                {showBuscar ?
                  <div className="d-flex align-items-center">
                    <SearchIcon />
                    <TextField
                      id="input-with-icon-grid"
                      fullWidth
                      onChange={(event) => this.props.search(event.target.value)}
                    />
                    <Tooltip title={"Fechar"}>
                      <IconButton onClick={() => {
                        this.props.search("")
                        this.setState({ showBuscar: false })
                      }}>
                        <CloseIcon />
                      </IconButton>
                    </Tooltip>
                  </div>
                  : itemMiddle && itemMiddle
                }
              </Col>
              <Col md={3} xs={12} className="text-right">
                <Toolbar
                  handleSearch={() => {
                    this.props.search("")
                    this.setState({ showBuscar: !this.state.showBuscar })
                  }}
                  handleDownload={() => this.props.dowloandData()}
                />
              </Col>
            </>
          }
        </Row>
      </Fragment>
    )
  }
}

HeaderTable.propTypes = {
  whitCheckbox: PropTypes.bool,
  selecionados: PropTypes.number,
  showOnlyTodas: PropTypes.bool,
}

HeaderTable.defaultProps = {
  whitCheckbox: false,
  showOnlyTodas: false,
}

export default HeaderTable;