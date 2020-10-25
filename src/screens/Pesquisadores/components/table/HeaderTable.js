import React from 'react';

// Componentes Bibliotecas
import { Row, Col } from 'reactstrap';

// Components
import Toolbar from '~/components/table/Toolbar';

// Search
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';

// Styles
import { ContainerItem, Quantidade } from '../../styles';

class HeaderTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showBuscar: false,
    };
  }

  render() {
    let { totalItens, active } = this.props;
    let { showBuscar } = this.state;

    return (
      <>
        <Row className="m-0 align-items-center">
          <Col
            md={2}
            xs={12}
            className="d-flex p-0"
            style={{ border: 'solid 1px #D9E5EB', height: '70px' }}
          >
            <Col md={12} className="p-0">
              <ContainerItem active={'Original' === active} onClick={() => {}}>
                <div>
                  <Quantidade>{totalItens ? totalItens : 0}</Quantidade>
                  <div style={{ marginTop: '10px', fontSize: '11px' }}>
                    TODOS
                  </div>
                </div>
              </ContainerItem>
            </Col>
          </Col>

          <Col md={6} xs={12}>
            {showBuscar && (
              <div className="d-flex align-items-center">
                <SearchIcon />
                <TextField
                  id="input-with-icon-grid"
                  fullWidth
                  onChange={(event) => this.props.search(event.target.value)}
                />
                <Tooltip title={'Fechar'}>
                  <IconButton
                    onClick={() => {
                      this.props.search('');
                      this.setState({ showBuscar: false });
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                </Tooltip>
              </div>
            )}
          </Col>

          <Col md={4} xs={12} className="text-right p-0">
            <Toolbar
              handleSearch={() => {
                this.props.search('');
                this.setState({ showBuscar: !this.state.showBuscar });
              }}
              handleDownload={() => this.props.dowloandData()}
            />
          </Col>
        </Row>
      </>
    );
  }
}

HeaderTable.propTypes = {};

HeaderTable.defaultProps = {};

export default HeaderTable;
